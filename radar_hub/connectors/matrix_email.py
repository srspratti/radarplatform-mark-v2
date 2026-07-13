"""Matrix/Centris email ingestion — the ToS-safe channel.
No scraping, no automated Matrix logins: we only read notification emails that
Matrix already sends (visit confirmations, alert-created welcomes, listing
matches). Deterministic regex first; Claude Haiku only below the confidence
gate AND only if a key is configured.

Conversion detection: an "alert created / bienvenue" email for an existing
LEAD's email means Danny added them to Centris → emit client.converted.
"""
from __future__ import annotations
import email
import email.policy
import imaplib
import re
from dataclasses import dataclass, field
from sqlalchemy.orm import Session
from ..config import settings
from ..models import Contact, utcnow
from ..events import ingest_event, make_idempotency_key

CONFIDENCE_GATE = 0.75


@dataclass
class ParsedMatrixEvent:
    kind: str            # visit_scheduled | new_client_alert | listing_match | unknown
    name: str = ""
    contact_email: str = ""
    address: str = ""
    confidence: float = 0.0
    excerpt: str = ""
    meta: dict = field(default_factory=dict)


_RX_VISIT = re.compile(
    r"(visite|showing|rendez[- ]vous).{0,80}(confirm[ée]e?|planifi[ée]e?|"
    r"confirmed|scheduled)", re.I | re.S)
_RX_ALERT = re.compile(
    r"(alerte d'inscriptions|listing alert|abonnement).{0,60}"
    r"(cr[ée][ée]e?|activ[ée]e?|created|activated)|bienvenue sur (le )?portail",
    re.I | re.S)
_RX_MATCH = re.compile(
    r"(nouvelle inscription|new listing).{0,60}(correspond|match)", re.I | re.S)
_RX_ADDR = re.compile(
    r"(?:au|at|:)\s+(\d{1,5}[^,\n]{4,60}(?:,\s*[A-ZÉÀ][^\n,]{2,40})?)")
_RX_EMAIL = re.compile(r"[\w.+-]+@[\w-]+\.[\w.]+")
_RX_NAME = re.compile(
    r"(?:client|pour|for|contact)\s*:?\s+([A-ZÉÀÈ][\w'’-]+(?:\s+[A-ZÉÀÈ][\w'’-]+){1,2})")


def _is_intake_address(addr: str) -> bool:
    """True for the tenant's own intake addresses (INTAKE_EMAIL_USER itself,
    its plus-tag variants, or anything on the alias catch-all domain). These
    sit in the To/Cc headers of every routed email and must never be taken
    for a contact's address."""
    addr = addr.lower()
    user = (settings.INTAKE_EMAIL_USER or "").lower()
    if user:
        local, _, domain = user.partition("@")
        if addr == user or (addr.startswith(f"{local}+")
                            and addr.endswith(f"@{domain or 'gmail.com'}")):
            return True
    domain = (settings.INTAKE_EMAIL_DOMAIN or "").lower()
    return bool(domain) and addr.endswith(f"@{domain}")


def parse_matrix_email(raw: str) -> ParsedMatrixEvent:
    body = raw[:6000]
    addr_m = _RX_ADDR.search(body)
    email_m = next((m for m in _RX_EMAIL.finditer(body)
                    if not _is_intake_address(m.group(0))), None)
    name_m = _RX_NAME.search(body)
    base = ParsedMatrixEvent(
        kind="unknown",
        name=(name_m.group(1).strip() if name_m else ""),
        contact_email=(email_m.group(0).lower() if email_m else ""),
        address=(addr_m.group(1).strip() if addr_m else ""),
        excerpt=body[:200],
    )
    if _RX_VISIT.search(body):
        base.kind = "visit_scheduled"
        base.confidence = 0.9 if base.address else 0.7
    elif _RX_ALERT.search(body):
        base.kind = "new_client_alert"
        base.confidence = 0.85 if base.contact_email else 0.65
    elif _RX_MATCH.search(body):
        base.kind = "listing_match"
        base.confidence = 0.8
    # Confidence-gated Haiku fallback — only when deterministic pass is weak.
    if base.confidence < CONFIDENCE_GATE and settings.ANTHROPIC_API_KEY:
        from ..llm import complete_json
        out = complete_json(
            f"Courriel de notification Matrix/Centris:\n---\n{body[:2500]}\n---\n"
            'Extrais: {"kind":"visit_scheduled|new_client_alert|listing_match|unknown",'
            '"name":"","email":"","address":"","confidence":0.0-1.0}',
            system="Parseur de courriels Matrix (Centris, Québec). JSON strict.")
        if out and out.get("kind") in {"visit_scheduled", "new_client_alert",
                                       "listing_match"}:
            base.kind = out["kind"]
            base.name = base.name or out.get("name", "")
            llm_email = out.get("email", "").lower()
            if not _is_intake_address(llm_email):
                base.contact_email = base.contact_email or llm_email
            base.address = base.address or out.get("address", "")
            base.confidence = float(out.get("confidence", 0.76))
            base.meta["parser"] = "haiku"
    return base


def apply_parsed(db: Session, tenant_id: str, parsed: ParsedMatrixEvent,
                 raw_id: str = "", contact: Contact | None = None) -> dict:
    """Route a parsed Matrix email into the event log. Pass ``contact`` when
    the email is already routed (per-client intake address) — that signal
    outranks the body-regex lookup below, which must then be skipped so it
    can't create a duplicate contact."""
    if parsed.kind == "unknown" or parsed.confidence < 0.5:
        return {"applied": False, "reason": "low_confidence", "kind": parsed.kind}

    if contact is None:
        if parsed.contact_email:
            contact = (db.query(Contact)
                       .filter_by(tenant_id=tenant_id,
                                  email=parsed.contact_email)
                       .first())
        if not contact and parsed.name:
            contact = (db.query(Contact)
                       .filter_by(tenant_id=tenant_id, name=parsed.name)
                       .first())

    result = {"applied": True, "kind": parsed.kind, "created_contact": False,
              "converted": False}

    if parsed.kind == "new_client_alert":
        if contact and contact.lifecycle == "lead":
            convert_contact(db, tenant_id, contact, via="matrix_email")
            result["converted"] = True
        elif not contact:
            contact = Contact(tenant_id=tenant_id,
                              name=parsed.name or "Contact Matrix",
                              email=parsed.contact_email,
                              source="matrix_visit", sublabel="Alerte Centris",
                              lifecycle="client", converted_at=utcnow())
            contact.issue_portal_token()
            db.add(contact)
            db.commit()
            result["created_contact"] = True
            ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                         etype="client.converted", actor="realtor", origin="matrix",
                         payload={"via": "matrix_email"},
                         idempotency_key=f"mx-conv-{raw_id or contact.email}")
    else:
        if not contact:
            contact = Contact(tenant_id=tenant_id,
                              name=parsed.name or "Prospect Matrix",
                              email=parsed.contact_email,
                              source="matrix_visit", sublabel="Demande de visite",
                              lifecycle="lead")
            db.add(contact)
            db.commit()
            result["created_contact"] = True
            ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                         etype="lead.captured", actor="system", origin="matrix",
                         idempotency_key=f"mx-cap-{raw_id or contact.id}")
        if parsed.kind == "visit_scheduled":
            # A confirmed showing is client intent → feeds engagement.
            # Idempotency on the email's Message-ID: replays are no-ops.
            ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                         etype="visit.scheduled", actor="client", origin="matrix",
                         payload={"address": parsed.address},
                         idempotency_key=f"mx-visit-{raw_id or f'{contact.id}-{parsed.address[:30]}'}")
        elif parsed.kind == "listing_match":
            ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                         etype="email.opened", actor="system", origin="matrix",
                         payload={"address": parsed.address, "match": True},
                         reproject=False,
                         idempotency_key=f"mx-match-{raw_id or contact.id}-{parsed.address[:20]}")
    result["contact_id"] = contact.id if contact else None
    from ..scoring import refresh_priority
    if contact and contact.lifecycle == "lead":
        refresh_priority(db, contact)
        from ..automations import check_priority_threshold
        check_priority_threshold(db, tenant_id, contact)
    return result


def make_intake_email(name: str, token: str) -> str:
    """The client-specific address Danny adds as SECOND recipient on the
    Matrix alert. Every Centris listing email then also lands in our inbox,
    pre-routed to this contact. Two modes:
      plus  -> alertes.radar+mctremblay-a1b2c3@gmail.com (any Gmail inbox)
      alias -> mctremblay-a1b2c3@inbox.domain.com (catch-all domain)
    """
    import unicodedata
    ascii_name = (unicodedata.normalize("NFD", name)
                  .encode("ascii", "ignore").decode())
    slug = re.sub(r"[^a-z0-9]", "", ascii_name.lower())[:14] or "client"
    tag = f"{slug}-{token[:6].lower()}"
    if settings.INTAKE_EMAIL_MODE == "alias":
        return f"{tag}@{settings.INTAKE_EMAIL_DOMAIN}"
    user = settings.INTAKE_EMAIL_USER
    local, _, domain = user.partition("@")
    return f"{local}+{tag}@{domain or 'gmail.com'}"


def convert_contact(db: Session, tenant_id: str, contact: Contact,
                    via: str = "manual") -> None:
    """Lead → client. Issues the Vitrine portal token AND the per-client
    Matrix intake address at the moment of conversion."""
    contact.lifecycle = "client"
    contact.converted_at = utcnow()
    contact.issue_portal_token()
    if not contact.intake_email:
        contact.intake_email = make_intake_email(contact.name,
                                                 contact.portal_token)
    db.commit()
    ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                 etype="client.converted", actor="realtor", origin="hub",
                 payload={"via": via, "intake_email": contact.intake_email},
                 idempotency_key=f"conv-{contact.id}")


_RX_CENTRIS_URL = re.compile(
    r"https?://(?:www\.)?centris\.ca/(?:fr|en)/[^\s\">\)]*?(\d{8})[^\s\">\)]*",
    re.I)
_RX_PRICE = re.compile(r"(\d{1,3}(?:[ \u00A0,]\d{3})+|\d{4,7})\s?\$")
_RX_BEDS = re.compile(r"(\d+)\s*(?:chambre|bedroom|cac)", re.I)
_RX_BATHS = re.compile(r"(\d+)\s*(?:salle[s]? de bain|bathroom|sdb)", re.I)
_RX_ADDR_LINE = re.compile(
    r"^\s*(\d{1,5}(?:-\d{1,5})?,?\s+(?:rue|av\.|avenue|boul\.|boulevard|ch\.|"
    r"chemin|place|croissant|montée|rang)[^\n]{3,70})", re.I | re.M)
_RX_TYPE = re.compile(
    r"(condo|copropriété|duplex|triplex|quadruplex|plex|maison[^\n]{0,20}|"
    r"bungalow|cottage|jumelé|townhouse|loft)", re.I)


def parse_listing_cards(raw: str) -> list[dict]:
    """Extract listing cards from a Matrix/Centris alert email. Deterministic:
    anchor on centris.ca URLs (the one thing every card has), then scan a
    window around each URL — bounded by the neighboring URLs so one card's
    price/address can never bleed into the next."""
    matches = [m for m in _RX_CENTRIS_URL.finditer(raw)]
    cards, seen = [], set()
    for i, m in enumerate(matches):
        no = m.group(1)
        if no in seen:
            continue
        seen.add(no)
        prev_end = matches[i - 1].end() if i > 0 else 0
        next_start = matches[i + 1].start() if i + 1 < len(matches) else len(raw)
        lo = max(prev_end, m.start() - 500)
        hi = min(next_start, m.end() + 500)
        win = raw[lo:hi]
        price_m = _RX_PRICE.search(win)
        addr_m = _RX_ADDR_LINE.search(win)
        beds_m = _RX_BEDS.search(win)
        baths_m = _RX_BATHS.search(win)
        type_m = _RX_TYPE.search(win)
        cards.append({
            "centris_no": no,
            "url": m.group(0),
            "price": int(re.sub(r"[ \u00A0,]", "", price_m.group(1)))
                     if price_m else 0,
            "address": addr_m.group(1).strip() if addr_m else "",
            "beds": int(beds_m.group(1)) if beds_m else 0,
            "baths": int(baths_m.group(1)) if baths_m else 0,
            "prop_type": type_m.group(1).strip().capitalize() if type_m else "",
        })
    return cards


_RX_RECIPIENTS = re.compile(r"^(?:To|Cc|Delivered-To)\s*:\s*(.+)$", re.I | re.M)


def contact_by_recipient(db: Session, tenant_id: str, raw: str) -> Contact | None:
    """Route by the per-client intake address in To/Cc — the designed-on-the-fly
    second recipient Danny adds to the Matrix alert."""
    header_zone = raw[:3000]
    addresses: set[str] = set()
    for line in _RX_RECIPIENTS.findall(header_zone):
        addresses.update(a.lower() for a in _RX_EMAIL.findall(line))
    if not addresses:
        return None
    return (db.query(Contact)
            .filter(Contact.tenant_id == tenant_id,
                    Contact.intake_email.in_(addresses)).first())


def store_listings(db: Session, tenant_id: str, contact: Contact,
                   cards: list[dict], raw_id: str = "") -> dict:
    from ..models import Listing
    new = dup = 0
    new_cards: list[dict] = []
    for card in cards:
        exists = (db.query(Listing)
                  .filter_by(tenant_id=tenant_id, contact_id=contact.id,
                             centris_no=card["centris_no"]).first())
        if exists:
            dup += 1
            continue
        db.add(Listing(tenant_id=tenant_id, contact_id=contact.id, **card))
        db.commit()
        new += 1
        new_cards.append(card)
        # Receiving a match is a system fact, not client engagement.
        ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                     etype="email.opened", actor="system", origin="matrix",
                     payload={"listing_id": card["centris_no"],
                              "address": card["address"], "match": True},
                     reproject=False,
                     idempotency_key=f"mx-listing-{contact.id}-{card['centris_no']}")
    alert_status = "skipped"
    if new_cards:
        # Mirror the alert as OUR tracked-link email — Centris' own email links
        # can't be instrumented (we don't control their HTML); this is the
        # click-capture mechanism (alert_mailer).
        from ..automations import send_listing_alert_email
        alert_status = send_listing_alert_email(db, tenant_id, contact,
                                                new_cards, raw_id)
    return {"listings_new": new, "listings_dup": dup,
            "alert_email": alert_status}


def process_raw_email(db: Session, tenant_id: str, raw: str,
                      raw_id: str = "") -> dict:
    """Full pipeline for one Matrix email:
    1. route by per-client intake address (To/Cc) — strongest signal
    2. extract listing cards → client's Vitrine inventory
    3. run the kind parser (visit / alert-created / match) for events
    """
    contact = contact_by_recipient(db, tenant_id, raw)
    cards = parse_listing_cards(raw)
    parsed = parse_matrix_email(raw)
    out: dict = {"routed_by_intake": bool(contact),
                 "parsed": {"kind": parsed.kind,
                            "confidence": parsed.confidence,
                            "name": parsed.name,
                            "email": parsed.contact_email,
                            "address": parsed.address}}
    if contact and cards:
        out.update(store_listings(db, tenant_id, contact, cards, raw_id))
    if contact and parsed.kind == "visit_scheduled":
        ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                     etype="visit.scheduled", actor="client", origin="matrix",
                     payload={"address": parsed.address},
                     idempotency_key=f"mx-visit-{raw_id or contact.id}")
        out["applied"] = True
        out["contact_id"] = contact.id
    elif parsed.kind != "unknown":
        if contact and cards and parsed.kind == "listing_match":
            # store_listings already attributed each card to the routed
            # contact — an aggregate mx-match event would double-log it.
            out.update({"applied": True, "kind": parsed.kind,
                        "created_contact": False, "converted": False,
                        "contact_id": contact.id})
        else:
            out.update(apply_parsed(db, tenant_id, parsed, raw_id=raw_id,
                                    contact=contact))
            # late-bind listings if apply_parsed just created/found the contact
            if cards and not contact and out.get("contact_id"):
                c2 = db.get(Contact, out["contact_id"])
                if c2:
                    out.update(store_listings(db, tenant_id, c2, cards, raw_id))
    elif contact:
        out["applied"] = bool(cards)
        out["contact_id"] = contact.id
    else:
        out["applied"] = False
        out.setdefault("reason", "aucun destinataire ni gabarit reconnu")
    return out


def poll_matrix_inbox(db: Session, tenant_id: str) -> dict:
    """IMAP pull of unseen Matrix notifications. Same pattern as Radar Acheteur."""
    if not (settings.MATRIX_IMAP_HOST and settings.MATRIX_IMAP_USER):
        return {"polled": 0, "error": "IMAP non configuré (MATRIX_IMAP_*)"}
    box = imaplib.IMAP4_SSL(settings.MATRIX_IMAP_HOST)
    box.login(settings.MATRIX_IMAP_USER, settings.MATRIX_IMAP_PASS)
    box.select(settings.MATRIX_IMAP_FOLDER)
    _, data = box.search(None, "UNSEEN")
    ids = data[0].split()
    results = []
    for mid in ids[:50]:
        _, msg_data = box.fetch(mid, "(RFC822)")
        msg = email.message_from_bytes(msg_data[0][1], policy=email.policy.default)
        text = ""
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == "text/plain":
                    text += part.get_content()
        else:
            text = msg.get_content()
        headers = (f"To: {msg.get('To', '')}\nCc: {msg.get('Cc', '')}\n"
                   f"Delivered-To: {msg.get('Delivered-To', '')}\n"
                   f"Subject: {msg.get('Subject', '')}\n")
        results.append(process_raw_email(db, tenant_id, headers + text,
                                         raw_id=msg.get("Message-ID", str(mid))))
    box.logout()
    return {"polled": len(ids), "results": results}
