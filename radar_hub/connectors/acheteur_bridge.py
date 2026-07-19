"""Bridge: Radar Acheteur (marketable buyer-intel package) → Radar Hub.

Radar Acheteur keeps its own sqlite (raw_emails / contacts / signals) and its
own intelligence API, mounted at /acheteur. This bridge mirrors its *signals*
into the hub's unified event log so buyer activity shows up on the same
timeline, engagement score, and stage as Vitrine and FUB activity.

Idempotency: hub event key `ach-sig-{row.id}` — re-syncs are no-ops.
Signal semantics: people in Matrix alert emails are already on Centris, so an
unknown person is created directly as a client (same rule as the hub's own
new_client_alert path).
"""
from __future__ import annotations
import logging
import os
import sqlite3
from datetime import datetime
from sqlalchemy.orm import Session
from ..models import Contact, utcnow
from ..events import ingest_event

logger = logging.getLogger(__name__)

SIGNAL_MAP = {
    "view": ("listing.viewed", "client", True),
    "favorite": ("listing.favorited", "client", True),
    "portal_login": ("portal.session_started", "client", True),
    "alert_match": ("email.opened", "system", False),
    # "discard" carries negative intent — deliberately not mapped (would
    # otherwise inflate engagement via a positive-only weight table).
}


def _acheteur_db_path() -> str:
    try:
        from radar_acheteur.config import cfg
        return cfg.db_path
    except Exception:  # noqa: BLE001 — subpackage may be absent (marketable split)
        logger.debug("radar_acheteur.config unavailable; using DB_PATH env",
                     exc_info=True)
        return os.getenv("DB_PATH", "radar_acheteur.db")


def _parse_ts(iso: str | None) -> datetime:
    if not iso:
        return utcnow()
    try:
        return datetime.fromisoformat(iso.replace("Z", "")).replace(tzinfo=None)
    except ValueError:
        return utcnow()


def _resolve_contact(db: Session, tenant_id: str, key: str,
                     directory: dict) -> Contact:
    """Match by email, phone, then name; else create as client (Centris rule)."""
    key_l = (key or "").strip().lower()
    contact = None
    if "@" in key_l:
        contact = (db.query(Contact)
                   .filter_by(tenant_id=tenant_id, email=key_l).first())
    if not contact:
        contact = (db.query(Contact)
                   .filter(Contact.tenant_id == tenant_id,
                           (Contact.phone == key) | (Contact.name == key))
                   .first())
    if contact:
        return contact
    info = directory.get(key_l) or directory.get(key) or {}
    contact = Contact(
        tenant_id=tenant_id,
        name=info.get("full_name") or key or "Contact Radar Acheteur",
        email=(info.get("email") or (key_l if "@" in key_l else "")),
        phone=info.get("phone") or "",
        source="matrix_visit", sublabel="Radar Acheteur",
        lifecycle="client", converted_at=utcnow(),
        fub_person_id=str(info.get("fub_person_id") or ""))
    contact.issue_portal_token()
    db.add(contact)
    db.commit()
    ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                 etype="client.converted", actor="realtor", origin="matrix",
                 payload={"via": "radar_acheteur"},
                 idempotency_key=f"ach-conv-{contact.id}")
    return contact


def sync_from_acheteur(db: Session, tenant_id: str,
                       db_path: str | None = None,
                       limit: int = 2000) -> dict:
    path = db_path or _acheteur_db_path()
    if not os.path.exists(path):
        return {"synced": 0, "skipped": 0, "created_contacts": 0,
                "error": f"base Radar Acheteur introuvable: {path}"}
    con = sqlite3.connect(path)
    con.row_factory = sqlite3.Row
    directory = {}
    try:
        for r in con.execute("SELECT full_name, email, phone, fub_person_id "
                             "FROM contacts"):
            for k in (r["email"], r["phone"], r["full_name"]):
                if k:
                    directory[str(k).strip().lower()] = dict(r)
    except sqlite3.OperationalError as exc:
        # No contacts table yet — sync still proceeds on signals alone, but the
        # absence must be observable rather than silently swallowed.
        logger.warning("Radar Acheteur contacts table unavailable (%s): "
                       "syncing signals without a contact directory", exc)
    rows = con.execute(
        "SELECT id, contact_key, type, listing_no, listing_addr, occurred_at "
        "FROM signals ORDER BY id ASC LIMIT ?", (limit,)).fetchall()
    con.close()

    synced = skipped = created = 0
    cache: dict[str, Contact] = {}
    for row in rows:
        mapping = SIGNAL_MAP.get(row["type"])
        if not mapping:
            skipped += 1
            continue
        etype, actor, reproject = mapping
        key = row["contact_key"] or ""
        if key not in cache:
            before = db.query(Contact).filter_by(tenant_id=tenant_id).count()
            cache[key] = _resolve_contact(db, tenant_id, key, directory)
            created += int(db.query(Contact)
                           .filter_by(tenant_id=tenant_id).count() > before)
        contact = cache[key]
        _, was_new = ingest_event(
            db, tenant_id=tenant_id, contact_id=contact.id, etype=etype,
            actor=actor, origin="matrix", ts=_parse_ts(row["occurred_at"]),
            payload={"listing_id": row["listing_no"] or "",
                     "address": row["listing_addr"] or "",
                     "via": "radar_acheteur"},
            idempotency_key=f"ach-sig-{row['id']}", reproject=reproject)
        synced += int(was_new)
        skipped += int(not was_new)
    return {"synced": synced, "skipped": skipped,
            "created_contacts": created, "db_path": path}
