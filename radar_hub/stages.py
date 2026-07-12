"""Québec pipeline stage machine. Stage is a PROJECTION of the event log.
CRM syncs can never corrupt it because it's recomputed, not stored as truth.
"""
from __future__ import annotations
from datetime import timedelta
from .config import settings
from .models import Contact, Event, utcnow

# Ordered highest → lowest. First match wins (monotonic pipeline).
STAGE_TRIGGERS: list[tuple[str, set[str]]] = [
    ("cloture",       {"transaction.closed"}),
    ("transaction",   {"offer.accepted", "inspection.completed",
                       "financing.confirmed", "notary.scheduled"}),
    ("offre",         {"offer.submitted"}),
    ("en_visites",    {"visit.requested", "visit.scheduled", "visit.completed"}),
    ("en_reperage",   {"portal.session_started", "listing.viewed",
                       "listing.favorited", "listing.shared", "tour3d.viewed"}),
    ("client_actif",  {"client.converted"}),
    ("contacte",      {"lead.contacted", "call.logged"}),
    ("nouveau",       {"lead.captured"}),
]

STAGE_LABELS_FR = {
    "nouveau": "Nouveau lead", "contacte": "Contacté",
    "client_actif": "Client (Centris)", "en_reperage": "En repérage",
    "en_visites": "En visites", "offre": "Offre soumise",
    "transaction": "En transaction", "cloture": "Clôturé",
}
STAGE_ORDER = [s for s, _ in reversed(STAGE_TRIGGERS)]


def derive_stage(events: list[Event]) -> str:
    types = {e.type for e in events}
    for stage, triggers in STAGE_TRIGGERS:
        if types & triggers:
            return stage
    return "nouveau"


def is_dormant(contact: Contact, events: list[Event]) -> bool:
    """Client with no client-actor activity for N days → à relancer flag.
    Dormancy is an overlay, never a demotion of the derived stage."""
    if contact.lifecycle != "client":
        return False
    stage = derive_stage(events)
    if stage == "cloture":
        return False
    client_events = [e for e in events if e.actor == "client"]
    if not client_events:
        anchor = contact.converted_at or contact.created_at
    else:
        anchor = max(e.ts for e in client_events)
    return (utcnow() - anchor) > timedelta(days=settings.DORMANT_AFTER_DAYS)
