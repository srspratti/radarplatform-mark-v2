"""GoHighLevel connector — same contract as the FUB one: CRM stays the
system of record, the hub stays the intelligence layer.

IN : import contacts → hub leads with immutable source="ghl_import",
     sublabel = GHL's own source field (funnel, form, campaign…).
     Idempotent on ghl_contact_id, so re-imports never duplicate.
OUT: writeback queue (target="ghl_note") → contact notes via the API, the
     same Vitrine-activity digests FUB gets.

Auth: a Private Integration token (sub-account → Settings → Private
Integrations; scopes: View/Edit Contacts) + the location id. API v2 —
services.leadconnectorhq.com with the Version header.
"""
from __future__ import annotations

import httpx
from sqlalchemy.orm import Session

from ..config import settings
from ..events import ingest_event
from ..models import Contact, WritebackItem, utcnow
from ..scoring import refresh_priority

_VERSION = "2021-07-28"


class GHLClient:
    def __init__(self, api_key: str = "", location_id: str = "",
                 base: str = "", transport: httpx.BaseTransport | None = None):
        self.api_key = api_key or settings.GHL_API_KEY
        self.location_id = location_id or settings.GHL_LOCATION_ID
        self.base = (base or settings.GHL_BASE).rstrip("/")
        self._transport = transport

    @property
    def configured(self) -> bool:
        return bool(self.api_key and self.location_id)

    def _client(self) -> httpx.Client:
        return httpx.Client(
            headers={"Authorization": f"Bearer {self.api_key}",
                     "Version": _VERSION, "Accept": "application/json"},
            timeout=30, transport=self._transport)

    def list_contacts(self, limit: int = 100) -> list[dict]:
        with self._client() as c:
            r = c.get(f"{self.base}/contacts/",
                      params={"locationId": self.location_id, "limit": limit})
            r.raise_for_status()
            return r.json().get("contacts", [])

    def create_note(self, contact_id: str, body: str) -> dict:
        with self._client() as c:
            r = c.post(f"{self.base}/contacts/{contact_id}/notes",
                       json={"body": body})
            r.raise_for_status()
            return r.json()

    def upsert_contact(self, name: str = "", phone: str = "",
                       email: str = "") -> str:
        """Find-or-create by phone/email; returns the GHL contact id.
        Needs the *Edit Contacts* scope on the Private Integration token."""
        payload: dict = {"locationId": self.location_id}
        if name:
            payload["name"] = name
        if phone:
            payload["phone"] = phone
        if email:
            payload["email"] = email
        with self._client() as c:
            r = c.post(f"{self.base}/contacts/upsert", json=payload)
            r.raise_for_status()
            return str((r.json().get("contact") or {}).get("id", ""))

    def send_sms(self, contact_id: str, message: str) -> str:
        """Outbound SMS through GHL's LC Phone (Twilio resold inside the GHL
        subscription). Prerequisites, both in the GHL UI: a phone number on
        the sub-account (Settings → Phone Numbers, Canadian 514/438 available
        without a separate Twilio account) and the *conversations/message
        write* scope on the Private Integration token."""
        with self._client() as c:
            r = c.post(f"{self.base}/conversations/messages",
                       json={"type": "SMS", "contactId": contact_id,
                             "message": message})
            r.raise_for_status()
            j = r.json()
            return str(j.get("messageId") or j.get("conversationId") or "ok")


def import_from_ghl(db: Session, tenant_id: str, client: GHLClient,
                    limit: int = 100) -> dict:
    if not client.configured:
        return {"imported": 0, "skipped": 0,
                "error": "GHL non configuré (GHL_API_KEY + GHL_LOCATION_ID)"}
    imported = skipped = 0
    for p in client.list_contacts(limit=limit):
        cid = str(p.get("id", ""))
        if not cid:
            continue
        if (db.query(Contact)
                .filter_by(tenant_id=tenant_id, ghl_contact_id=cid).first()):
            skipped += 1
            continue
        name = (p.get("contactName")
                or f"{p.get('firstName', '')} {p.get('lastName', '')}".strip()
                or "Sans nom")
        tags = p.get("tags") or []
        contact = Contact(
            tenant_id=tenant_id, name=name,
            email=p.get("email") or "",
            phone=p.get("phone") or "",
            source="ghl_import",
            sublabel=(p.get("source") or (tags[0] if tags else "") or "GHL")[:120],
            notes=", ".join(tags[:6]),
            ghl_contact_id=cid,
        )
        db.add(contact)
        db.commit()
        ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                     etype="lead.captured", actor="system", origin="hub",
                     payload={"ghl_contact_id": cid,
                              "ghl_source": contact.sublabel},
                     idempotency_key=f"ghl-capture-{cid}")
        refresh_priority(db, contact)
        imported += 1
    return {"imported": imported, "skipped": skipped}


def flush_writebacks_ghl(db: Session, tenant_id: str,
                         client: GHLClient | None = None) -> dict:
    """Push pending ghl_note items. Contacts without a GHL id → manual."""
    client = client or GHLClient()
    pending = (db.query(WritebackItem)
               .filter_by(tenant_id=tenant_id, target="ghl_note",
                          status="pending").all())
    sent = manual = failed = 0
    for item in pending:
        contact = db.get(Contact, item.contact_id)
        if not contact or not contact.ghl_contact_id or not client.configured:
            item.status = "manual"
            manual += 1
            continue
        try:
            client.create_note(contact.ghl_contact_id, item.body)
            item.status, item.sent_at = "sent", utcnow()
            sent += 1
            ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                         etype="crm.synced", actor="system", origin="hub",
                         payload={"writeback_id": item.id, "crm": "ghl"},
                         idempotency_key=f"wb-ghl-{item.id}", reproject=False)
        except Exception as e:  # noqa: BLE001
            item.status, item.error = "failed", str(e)[:290]
            failed += 1
    db.commit()
    return {"sent": sent, "manual": manual, "failed": failed}
