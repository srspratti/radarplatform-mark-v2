"""Event registry + ingest pipeline.
7 families, 23 types. Ingest is idempotent (decision #2) and every ingest
re-projects stage + engagement (decisions #1, #4).
"""
from __future__ import annotations
import hashlib
from datetime import datetime
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from .models import Event, Contact, utcnow

FAMILIES = {
    # intake
    "lead.captured": "intake", "lead.enriched": "intake",
    "lead.contacted": "intake", "client.converted": "intake",
    # browsing (Vitrine portal)
    "portal.session_started": "browsing", "listing.viewed": "browsing",
    "listing.favorited": "browsing", "listing.shared": "browsing",
    "tour3d.viewed": "browsing",
    # communication
    "message.sent": "communication", "email.opened": "communication",
    "call.logged": "communication",
    # visits
    "visit.requested": "visits", "visit.scheduled": "visits", "visit.completed": "visits",
    # offers
    "offer.submitted": "offers", "offer.accepted": "offers", "offer.declined": "offers",
    # transaction (QC pipeline incl. notaire)
    "inspection.completed": "transaction", "financing.confirmed": "transaction",
    "notary.scheduled": "transaction", "transaction.closed": "transaction",
    # ops
    "crm.synced": "ops", "outreach.sent": "ops", "report.generated": "ops",
}

# Engagement weights — ONLY consumed for actor == "client" (locked decision #1).
ENGAGEMENT_WEIGHTS = {
    "portal.session_started": 1, "email.opened": 1, "listing.viewed": 2,
    "tour3d.viewed": 4, "listing.shared": 5, "listing.favorited": 6,
    "message.sent": 8, "visit.requested": 12, "visit.scheduled": 10,
    "visit.completed": 15, "offer.submitted": 30, "offer.accepted": 40,
}

VALID_ACTORS = {"client", "realtor", "system"}


def make_idempotency_key(contact_id: int, etype: str, ts: datetime, salt: str = "") -> str:
    raw = f"{contact_id}|{etype}|{ts.isoformat()}|{salt}"
    return hashlib.sha256(raw.encode()).hexdigest()[:32]


def ingest_event(db: Session, *, tenant_id: str, contact_id: int, etype: str,
                 actor: str, origin: str = "hub", ts: datetime | None = None,
                 payload: dict | None = None, idempotency_key: str | None = None,
                 reproject: bool = True) -> tuple[Event | None, bool]:
    """Returns (event, created). created=False means idempotent replay — no-op."""
    if etype not in FAMILIES:
        raise ValueError(f"unknown event type: {etype}")
    if actor not in VALID_ACTORS:
        raise ValueError(f"invalid actor: {actor}")
    ts = ts or utcnow()
    key = idempotency_key or make_idempotency_key(contact_id, etype, ts,
                                                  salt=str((payload or {}).get("listing_id", "")))
    ev = Event(tenant_id=tenant_id, contact_id=contact_id, type=etype,
               family=FAMILIES[etype], actor=actor, origin=origin, ts=ts,
               payload=payload or {}, idempotency_key=key)
    db.add(ev)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        existing = (db.query(Event)
                    .filter_by(tenant_id=tenant_id, idempotency_key=key).first())
        return existing, False
    if reproject:
        project_contact(db, tenant_id, contact_id)
    return ev, True


def project_contact(db: Session, tenant_id: str, contact_id: int) -> None:
    """Recompute cached stage + engagement from the event log. Log is truth."""
    from .stages import derive_stage, is_dormant
    from .scoring import engagement_score
    contact = db.get(Contact, contact_id)
    if not contact or contact.tenant_id != tenant_id:
        return
    events = (db.query(Event)
              .filter_by(tenant_id=tenant_id, contact_id=contact_id)
              .order_by(Event.ts.asc()).all())
    contact.stage = derive_stage(events)
    contact.engagement_score = engagement_score(events)
    contact.dormant = is_dormant(contact, events)
    db.commit()
