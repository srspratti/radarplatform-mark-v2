"""Threshold automations (ai_texts) + shared queue/notify helpers.

Import graph rule: this module imports models/features/config/connectors —
NEVER api.py — so vitrine.py, matrix_email.py and main.py can all call in
without cycles. api.py keeps one-line _notify/_queue_msg delegates.

Two automations, both gated by the ai_texts feature and configured in
features.toml [settings] (re-read per request — no restart):
  • engagement ping — a CLIENT's engagement score crosses
    engagement_text_threshold → predefined SMS, at most once per
    engagement_text_cooldown_days.
  • priority ping — a LEAD's priority score crosses priority_text_threshold →
    predefined SMS once ever + a "callback" follow-up so the realtor calls
    back within priority_callback_hours.
System pings are ingested with actor="system" and reproject=False: they can
never feed the client's own engagement score or self-trigger loops.
"""
from __future__ import annotations
import urllib.parse
from datetime import timedelta
from sqlalchemy.orm import Session
from . import features
from .config import settings
from .models import (Contact, ConsentRecord, FollowUp, NotificationItem,
                     OutboundMessage, utcnow)


def notify(db: Session, t: str, kind: str, title: str, body: str = "",
           contact_id: int | None = None) -> None:
    if features.enabled("notifications"):
        db.add(NotificationItem(tenant_id=t, kind=kind, title=title,
                                body=body, contact_id=contact_id))
        db.commit()


def queue_msg(db: Session, t: str, c: Contact, channel: str, body: str,
              purpose: str) -> OutboundMessage:
    """Queue + best-effort immediate dispatch. In dev mode (simulated) the
    realtor gets a notification with a tap-to-send sms: fallback."""
    ghl_sms = bool(settings.GHL_API_KEY and settings.GHL_LOCATION_ID)
    live = bool(settings.TWILIO_SID or (channel == "sms" and ghl_sms)
                or (channel == "email" and settings.SMTP_HOST))
    m = OutboundMessage(tenant_id=t, contact_id=c.id, channel=channel,
                        to_addr=c.phone if channel in ("sms", "whatsapp",
                                                       "voice")
                                else c.email,
                        body=body, purpose=purpose,
                        status="pending" if live else "simulated")
    db.add(m)
    db.commit()
    from .connectors import sms
    if m.status == "pending":
        try:
            sms.dispatch(db, m)
        except Exception:  # noqa: BLE001 — transport must not break callers
            pass
    if m.status == "simulated" and channel in ("sms", "whatsapp") and c.phone:
        tap = (f"sms:{sms.normalize_phone(c.phone)}?&body="
               + urllib.parse.quote(body))
        notify(db, t, "sms_sim", f"SMS simulé → {c.name}",
               body=f"{body}\n{tap}", contact_id=c.id)
    return m


def has_consent(db: Session, t: str, c: Contact) -> bool:
    """CASL guard for automated texts. consent_vault off → consent is managed
    off-platform, allow. On → the latest communications record must grant."""
    if not features.enabled("consent_vault"):
        return True
    rec = (db.query(ConsentRecord)
           .filter_by(tenant_id=t, contact_id=c.id, scope="communications")
           .order_by(ConsentRecord.recorded_at.desc()).first())
    if rec and rec.granted:
        return True
    notify(db, t, "consent_block",
           f"Texto IA bloqué — aucun consentement consigné pour {c.name}",
           contact_id=c.id)
    return False


def _recent_ping(db: Session, t: str, contact_id: int, purpose: str,
                 within_days: int | None = None) -> bool:
    q = (db.query(OutboundMessage)
         .filter(OutboundMessage.tenant_id == t,
                 OutboundMessage.contact_id == contact_id,
                 OutboundMessage.purpose == purpose,
                 OutboundMessage.status != "failed"))
    if within_days is not None:
        q = q.filter(OutboundMessage.created_at
                     >= utcnow() - timedelta(days=within_days))
    return db.query(q.exists()).scalar()


def _template(key_prefix: str, c: Contact, default_fr: str) -> str:
    tmpl = features.setting(
        f"{key_prefix}_fr" if (c.language or "fr") == "fr" else f"{key_prefix}_en",
        default_fr)
    first = c.name.split()[0] if c.name else ""
    return tmpl.format(name=first)


def check_engagement_threshold(db: Session, t: str, c: Contact) -> bool:
    """Client crossed the engagement threshold → predefined AI text."""
    if not features.enabled("ai_texts") or c.lifecycle != "client":
        return False
    threshold = int(features.setting("engagement_text_threshold", 70))
    if c.engagement_score < threshold:
        return False
    cooldown = int(features.setting("engagement_text_cooldown_days", 7))
    if _recent_ping(db, t, c.id, "engagement_ping", within_days=cooldown):
        return False
    if not has_consent(db, t, c):
        return False
    if not c.phone:
        notify(db, t, "no_phone",
               f"Seuil d'engagement franchi ({c.engagement_score}) mais aucun "
               f"téléphone pour {c.name}", contact_id=c.id)
        return False
    body = _template("engagement_text", c,
                     "Bonjour {name}, je vois que de nouvelles propriétés vous "
                     "intéressent — on planifie des visites? ")
    queue_msg(db, t, c, "sms", body, "engagement_ping")
    from .events import ingest_event
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="message.sent",
                 actor="system", origin="hub",
                 payload={"kind": "engagement_ping",
                          "score": c.engagement_score},
                 idempotency_key=f"engping-{c.id}-{utcnow():%Y%m%d}",
                 reproject=False)
    notify(db, t, "ai_text",
           f"IA a texté {c.name} (engagement {c.engagement_score} ≥ {threshold})",
           contact_id=c.id)
    return True


def check_priority_threshold(db: Session, t: str, c: Contact) -> bool:
    """Lead crossed the priority threshold → AI text once + callback task."""
    if not features.enabled("ai_texts") or c.lifecycle != "lead":
        return False
    threshold = int(features.setting("priority_text_threshold", 75))
    if c.priority_score < threshold:
        return False
    if _recent_ping(db, t, c.id, "priority_ping"):  # once per lead, ever
        return False
    if not has_consent(db, t, c):
        return False
    if not c.phone:
        notify(db, t, "no_phone",
               f"Priorité {c.priority_score} mais aucun téléphone pour {c.name}",
               contact_id=c.id)
        return False
    hours = int(features.setting("priority_callback_hours", 4))
    body = _template("priority_text", c,
                     "Bonjour {name}, merci pour votre demande — je vous "
                     "appelle d'ici quelques heures. ")
    queue_msg(db, t, c, "sms", body, "priority_ping")
    db.add(FollowUp(tenant_id=t, contact_id=c.id, kind="callback",
                    due_at=utcnow() + timedelta(hours=hours),
                    note="Rappeler — l'IA a déjà texté ce lead prioritaire"))
    db.commit()
    from .events import ingest_event
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="message.sent",
                 actor="system", origin="hub",
                 payload={"kind": "priority_ping", "score": c.priority_score},
                 idempotency_key=f"prioping-{c.id}", reproject=False)
    notify(db, t, "ai_text",
           f"IA a texté {c.name} (priorité {c.priority_score}) — "
           f"rappeler d'ici {hours} h", contact_id=c.id)
    return True


def send_listing_alert_sms(db: Session, t: str, c: Contact, n: int,
                           raw_id: str = "") -> str:
    """« 3 nouvelles inscriptions — voir mon portail » + the portal link.
    The text carries no listing facts: its whole job is to pull the client
    into the Vitrine, where the browsing is measurable. CASL-gated exactly
    like the AI texts, and idempotent per announcement batch."""
    if not features.enabled("alert_sms") or n <= 0:
        return "skipped"
    if not c.phone or not c.portal_token:
        return "skipped"
    if not has_consent(db, t, c):
        return "no_consent"
    from .events import ingest_event
    _, created = ingest_event(
        db, tenant_id=t, contact_id=c.id, etype="outreach.sent",
        actor="system", origin="hub",
        payload={"kind": "listing_alert_sms", "n": n},
        idempotency_key=f"alertsms-{c.id}-{raw_id}", reproject=False)
    if not created:
        return "duplicate"
    url = f"{settings.PUBLIC_BASE_URL.rstrip('/')}/portail/{c.portal_token}"
    fr = (c.language or "fr") == "fr"
    body = features.setting(
        "listing_sms_fr" if fr else "listing_sms_en",
        ("Bonjour {name}, {n} nouvelle(s) inscription(s) vous attendent dans "
         "votre portail : {url}") if fr else
        ("Hi {name}, {n} new listing(s) are waiting in your portal: {url}")
    ).format(name=(c.name.split()[0] if c.name else ""), n=n, url=url)
    m = queue_msg(db, t, c, "sms", body, "listing_alert_sms")
    return m.status


def announce_new_listings(db: Session, t: str, c: Contact,
                          raw_id: str = "") -> dict:
    """Tell the client about every listing of theirs not yet announced —
    email (tracked links) + SMS — then stamp the rows so no later ingest
    re-announces them.

    One entry point for all three paths that create listings: the parsed
    alert email, the realtor's PDF drop (marketable), and the internal
    watcher's identifiers/details posts. Because the work list is
    `announced_at IS NULL` rather than "what this call just created", an
    edition that ingests identifiers first and facts second can defer the
    announcement (announce=False on the first call) and the client still
    receives ONE email — carrying the facts, once they exist."""
    from .models import Listing
    rows = (db.query(Listing)
            .filter(Listing.tenant_id == t, Listing.contact_id == c.id,
                    Listing.announced_at.is_(None))
            .order_by(Listing.received_at.asc()).limit(40).all())
    if not rows:
        return {"announced": 0, "email": "skipped", "sms": "skipped"}
    cards = [{"centris_no": r.centris_no, "address": r.address,
              "price": r.price, "beds": r.beds, "baths": r.baths,
              "prop_type": r.prop_type} for r in rows]
    salt = raw_id or f"{rows[0].id}-{rows[-1].id}-{len(rows)}"
    email = send_listing_alert_email(db, t, c, cards, salt)
    sms = send_listing_alert_sms(db, t, c, len(cards), salt)
    # Stamped even when both channels are off/unconfigured: "announced" means
    # the hub has processed this batch, so turning a channel on later starts
    # from today's listings instead of replaying the archive.
    stamp = utcnow()
    for r in rows:
        r.announced_at = stamp
    db.commit()
    return {"announced": len(rows), "email": email, "sms": sms}


def announce_for_contacts(db: Session, t: str, contact_ids, raw_id: str = ""
                          ) -> dict:
    """announce_new_listings over a set of clients (the details/enrichment
    ingest routes by Centris number, so it touches several books at once)."""
    out: dict[str, dict] = {}
    for cid in dict.fromkeys(contact_ids):
        c = db.get(Contact, cid)
        if c and c.tenant_id == t and c.lifecycle == "client":
            out[str(cid)] = announce_new_listings(db, t, c, raw_id)
    return out


def send_listing_alert_email(db: Session, t: str, c: Contact,
                             cards: list[dict], raw_id: str = "") -> str:
    """Mirror a Centris alert as OUR tracked-link email (alert_mailer).
    Idempotent per intake batch via an outreach.sent event keyed on the source
    email's Message-ID (or the card set), so IMAP re-polls send nothing."""
    if not features.enabled("alert_mailer") or not cards:
        return "skipped"
    if not c.email:
        return "skipped"
    if not c.portal_token:
        if c.lifecycle != "client":
            return "skipped"
        c.issue_portal_token()
        db.commit()
    import hashlib
    salt = raw_id or hashlib.sha256(
        "|".join(sorted(str(x.get("centris_no", "")) for x in cards))
        .encode()).hexdigest()[:12]
    from .events import ingest_event
    _, created = ingest_event(
        db, tenant_id=t, contact_id=c.id, etype="outreach.sent",
        actor="system", origin="hub",
        payload={"kind": "listing_alert", "n": len(cards)},
        idempotency_key=f"alertmail-{c.id}-{salt}", reproject=False)
    if not created:
        return "duplicate"
    from .mailer import build_alert_email, send_email
    subject, html, text = build_alert_email(c, cards, c.language or "fr")
    status = send_email(c.email, subject, html, text)
    db.add(OutboundMessage(tenant_id=t, contact_id=c.id, channel="email",
                           to_addr=c.email, body=subject,
                           purpose="listing_alert", status=status,
                           sent_at=utcnow() if status == "sent" else None))
    db.commit()
    if status != "failed":
        notify(db, t, "alert_mail",
               f"Alerte courriel {status} → {c.name} ({len(cards)} inscriptions)",
               contact_id=c.id)
    return status
