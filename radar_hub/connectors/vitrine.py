"""Vitrine ↔ Matrix loop.

IN : Vitrine POSTs portal events (HMAC-signed) keyed by portal_token.
     Every event lands in the unified log as actor="client", origin="vitrine"
     → engagement + stage re-project instantly.
OUT: each batch enqueues ONE consolidated writeback:
     • fub_note      → pushed to Follow Up Boss via API (real writeback)
     • matrix digest → generated on demand, paste-ready FR block for the
       Matrix contact history. Manual paste is deliberate: Matrix has no
       public write API and automated logins breach Centris ToS.
"""
from __future__ import annotations
import hashlib
import hmac
from datetime import timedelta
from sqlalchemy.orm import Session
from ..config import settings
from ..models import Contact, Event, WritebackItem, utcnow
from ..events import ingest_event, FAMILIES
from ..stages import STAGE_LABELS_FR

PORTAL_EVENT_TYPES = {
    "portal.session_started", "listing.viewed", "listing.favorited",
    "listing.shared", "tour3d.viewed", "message.sent", "visit.requested",
    "listing.dwell", "calculator.used", "section.viewed", "criteria.updated",
}

_EVENT_FR = {
    "portal.session_started": "session portail",
    "listing.viewed": "fiche consultée",
    "listing.favorited": "favori ajouté",
    "listing.shared": "fiche partagée",
    "tour3d.viewed": "visite 3D",
    "listing.dwell": "lecture attentive de fiche",
    "calculator.used": "calculatrice utilisée",
    "section.viewed": "section consultée",
    "criteria.updated": "critères mis à jour",
    "email.link_clicked": "clic sur alerte courriel",
    "message.sent": "message envoyé",
    "visit.requested": "visite demandée",
    "visit.scheduled": "visite planifiée",
    "visit.completed": "visite complétée",
    "offer.submitted": "offre soumise",
    "email.opened": "courriel ouvert",
    "client.converted": "ajouté à Centris",
    "lead.captured": "lead capté",
    "crm.synced": "sync CRM",
    "outreach.sent": "alerte courriel envoyée",
}


def verify_signature(body: bytes, signature: str) -> bool:
    if not settings.VITRINE_WEBHOOK_SECRET:
        return True  # dev mode
    expected = hmac.new(settings.VITRINE_WEBHOOK_SECRET.encode(),
                        body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature or "")


def handle_vitrine_payload(db: Session, tenant_id: str, payload: dict) -> dict:
    token = payload.get("client_token", "")
    contact = (db.query(Contact)
               .filter_by(tenant_id=tenant_id, portal_token=token).first())
    if not contact:
        return {"ok": False, "error": "portal_token inconnu"}
    ingested = deduped = 0
    addr_cache: dict[str, str] = {}
    for ev in payload.get("events", []):
        etype = ev.get("type", "")
        if etype not in PORTAL_EVENT_TYPES or etype not in FAMILIES:
            continue
        ev_payload = {k: v for k, v in ev.items() if k not in {"type", "event_id"}}
        ev_payload = _with_address(db, tenant_id, contact.id, ev_payload, addr_cache)
        _, created = ingest_event(
            db, tenant_id=tenant_id, contact_id=contact.id, etype=etype,
            actor="client", origin="vitrine",
            payload=ev_payload,
            idempotency_key=f"vit-{ev.get('event_id')}" if ev.get("event_id") else None,
            reproject=False)
        ingested += int(created)
        deduped += int(not created)
    if ingested:
        from ..events import project_contact
        project_contact(db, tenant_id, contact.id)
        enqueue_activity_writeback(db, tenant_id, contact)
        from ..automations import check_engagement_threshold
        check_engagement_threshold(db, tenant_id, contact)
    return {"ok": True, "ingested": ingested, "deduped": deduped,
            "engagement_score": contact.engagement_score, "stage": contact.stage}


def _with_address(db: Session, tenant_id: str, contact_id: int,
                  payload: dict, cache: dict) -> dict:
    """Resolve listing_id → address so Matrix digests read
    « fiche consultée (4530 rue Rachel) » instead of a bare Centris number."""
    lid = str(payload.get("listing_id") or "")
    if not lid or payload.get("address"):
        return payload
    if lid not in cache:
        from ..models import Listing
        row = (db.query(Listing)
               .filter_by(tenant_id=tenant_id, contact_id=contact_id,
                          centris_no=lid).first())
        cache[lid] = row.address if row and row.address else ""
    if cache[lid]:
        payload["address"] = cache[lid]
    return payload


def _summarize(contact: Contact, events: list[Event]) -> str:
    counts: dict[str, int] = {}
    for e in events:
        counts[e.type] = counts.get(e.type, 0) + 1
    bits = [f"{n}× {_EVENT_FR.get(t, t)}" for t, n in
            sorted(counts.items(), key=lambda x: -x[1])]
    return (f"🛰 Vitrine — {contact.name}: " + ", ".join(bits[:4]) +
            f". Score d'engagement {contact.engagement_score}/100 · "
            f"Étape: {STAGE_LABELS_FR.get(contact.stage, contact.stage)}.")


def enqueue_activity_writeback(db: Session, tenant_id: str, contact: Contact,
                               window_hours: int = 24) -> WritebackItem:
    since = utcnow() - timedelta(hours=window_hours)
    recent = (db.query(Event)
              .filter(Event.tenant_id == tenant_id,
                      Event.contact_id == contact.id,
                      Event.origin == "vitrine", Event.ts >= since).all())
    body = _summarize(contact, recent)
    item = WritebackItem(tenant_id=tenant_id, contact_id=contact.id,
                         target="fub_note", body=body)
    db.add(item)
    # Matrix history mirror of the same batch:
    #   marketable edition -> paste-ready list (+ digest endpoint)
    #   internal edition   -> matrix_history_writer.py (RPA) consumes it
    db.add(WritebackItem(tenant_id=tenant_id, contact_id=contact.id,
                         target="matrix_note", body=body))
    db.commit()
    return item


def build_matrix_digest(db: Session, tenant_id: str, contact: Contact,
                        days: int = 7) -> str:
    """Paste-ready FR activity block for the Matrix contact history."""
    since = utcnow() - timedelta(days=days)
    events = (db.query(Event)
              .filter(Event.tenant_id == tenant_id,
                      Event.contact_id == contact.id, Event.ts >= since)
              .order_by(Event.ts.desc()).limit(25).all())
    lines = [f"=== RADAR HUB · {contact.name} · derniers {days} jours ===",
             f"Score d'engagement: {contact.engagement_score}/100 · "
             f"Étape: {STAGE_LABELS_FR.get(contact.stage, contact.stage)}"
             + (" · ⚠ À relancer" if contact.dormant else "")]
    for e in events:
        label = _EVENT_FR.get(e.type, e.type)
        extra = e.payload.get("listing_id") or e.payload.get("address") or ""
        lines.append(f"• {e.ts:%Y-%m-%d %H:%M} — {label}"
                     + (f" ({extra})" if extra else "") + f" [{e.origin}]")
    lines.append("=== fin — coller dans l'historique Matrix ===")
    return "\n".join(lines)
