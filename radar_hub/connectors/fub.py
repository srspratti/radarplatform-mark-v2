"""Follow Up Boss connector.
IN : import people → contacts with immutable source="fub_import",
     sublabel = FUB's own source field (Zillow, Realtor.ca, …). Idempotent
     on fub_person_id, so re-imports never duplicate.
OUT: writeback queue → FUB person notes via API. This is the *real* CRM
     writeback; Matrix gets a paste-ready digest instead (no public write API,
     and automated Matrix logins would breach Centris ToS).
"""
from __future__ import annotations
import httpx
from sqlalchemy.orm import Session
from ..config import settings
from ..models import Contact, WritebackItem, utcnow
from ..events import ingest_event
from ..scoring import refresh_priority


class FUBClient:
    def __init__(self, api_key: str = "", base: str = "",
                 transport: httpx.BaseTransport | None = None):
        self.api_key = api_key or settings.FUB_API_KEY
        self.base = (base or settings.FUB_BASE).rstrip("/")
        self._transport = transport

    @property
    def configured(self) -> bool:
        return bool(self.api_key)

    def _client(self) -> httpx.Client:
        return httpx.Client(auth=(self.api_key, ""), timeout=30,
                            transport=self._transport)

    def list_people(self, limit: int = 100, offset: int = 0) -> list[dict]:
        with self._client() as c:
            r = c.get(f"{self.base}/people",
                      params={"limit": limit, "offset": offset})
            r.raise_for_status()
            return r.json().get("people", [])

    def create_note(self, person_id: str, subject: str, body: str) -> dict:
        with self._client() as c:
            r = c.post(f"{self.base}/notes", json={
                "personId": int(person_id), "subject": subject, "body": body})
            r.raise_for_status()
            return r.json()


def import_from_fub(db: Session, tenant_id: str, client: FUBClient,
                    limit: int = 100) -> dict:
    if not client.configured:
        return {"imported": 0, "skipped": 0,
                "error": "FUB_API_KEY non configurée"}
    people = client.list_people(limit=limit)
    imported = skipped = 0
    for p in people:
        pid = str(p.get("id", ""))
        if not pid:
            continue
        existing = (db.query(Contact)
                    .filter_by(tenant_id=tenant_id, fub_person_id=pid).first())
        if existing:
            skipped += 1
            continue
        emails = p.get("emails") or []
        phones = p.get("phones") or []
        contact = Contact(
            tenant_id=tenant_id,
            name=p.get("name") or f"{p.get('firstName','')} {p.get('lastName','')}".strip() or "Sans nom",
            email=(emails[0].get("value") if emails else "") or "",
            phone=(phones[0].get("value") if phones else "") or "",
            source="fub_import",
            sublabel=p.get("source") or "FUB",
            notes=p.get("background") or "",
            fub_person_id=pid,
        )
        db.add(contact)
        db.commit()
        ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                     etype="lead.captured", actor="system", origin="fub",
                     payload={"fub_person_id": pid, "fub_source": contact.sublabel},
                     idempotency_key=f"fub-capture-{pid}")
        refresh_priority(db, contact)
        imported += 1
    return {"imported": imported, "skipped": skipped}


def flush_writebacks(db: Session, tenant_id: str,
                     client: FUBClient | None = None) -> dict:
    """Push pending fub_note items. Contacts without a FUB id → marked manual."""
    client = client or FUBClient()
    pending = (db.query(WritebackItem)
               .filter_by(tenant_id=tenant_id, target="fub_note",
                          status="pending").all())
    sent = manual = failed = 0
    for item in pending:
        contact = db.get(Contact, item.contact_id)
        if not contact or not contact.fub_person_id or not client.configured:
            item.status = "manual"
            manual += 1
            continue
        try:
            client.create_note(contact.fub_person_id,
                               "Radar Hub — activité Vitrine", item.body)
            item.status, item.sent_at = "sent", utcnow()
            sent += 1
            ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                         etype="crm.synced", actor="system", origin="fub",
                         payload={"writeback_id": item.id},
                         idempotency_key=f"wb-{item.id}", reproject=False)
        except Exception as e:  # noqa: BLE001
            item.status, item.error = "failed", str(e)[:290]
            failed += 1
    db.commit()
    return {"sent": sent, "manual": manual, "failed": failed}
