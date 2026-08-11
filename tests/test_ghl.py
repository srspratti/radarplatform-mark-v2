"""GoHighLevel connector — mirrors the FUB contract (mock transport)."""
import json

import httpx

from radar_hub.connectors.gohighlevel import (GHLClient, flush_writebacks_ghl,
                                              import_from_ghl)
from radar_hub.models import Contact, WritebackItem

T = "danny"

_PEOPLE = {"contacts": [
    {"id": "ghl-001", "firstName": "Lucie", "lastName": "Bergeron",
     "email": "lucie.b@example.com", "phone": "+15145550190",
     "source": "Facebook Funnel", "tags": ["acheteur", "rive-sud"]},
    {"id": "ghl-002", "contactName": "Omar Haddad",
     "email": "omar.h@example.com", "phone": "+15145550191",
     "source": "", "tags": []},
]}


def _transport(notes_log, sms_log=None):
    def handler(request: httpx.Request) -> httpx.Response:
        assert request.headers["Authorization"] == "Bearer pit-test"
        assert request.headers["Version"] == "2021-07-28"
        if request.url.path == "/contacts/" and request.method == "GET":
            assert request.url.params["locationId"] == "loc-1"
            return httpx.Response(200, json=_PEOPLE)
        if request.url.path.endswith("/notes") and request.method == "POST":
            notes_log.append((request.url.path.split("/")[2],
                              json.loads(request.content)["body"]))
            return httpx.Response(201, json={"id": "note-1"})
        if request.url.path == "/contacts/upsert" and request.method == "POST":
            body = json.loads(request.content)
            assert body["locationId"] == "loc-1" and body.get("phone")
            return httpx.Response(200, json={"contact": {"id": "ghl-up-1"}})
        if (request.url.path == "/conversations/messages"
                and request.method == "POST"):
            body = json.loads(request.content)
            assert body["type"] == "SMS"
            (sms_log if sms_log is not None else []).append(
                (body["contactId"], body["message"]))
            return httpx.Response(201, json={"messageId": "msg-1"})
        return httpx.Response(404)
    return httpx.MockTransport(handler)


def _client(notes_log=None, sms_log=None):
    return GHLClient(api_key="pit-test", location_id="loc-1",
                     transport=_transport(notes_log if notes_log is not None
                                          else [], sms_log))


def test_ghl_import_idempotent_with_sublabels(db):
    r1 = import_from_ghl(db, T, _client())
    r2 = import_from_ghl(db, T, _client())
    assert r1 == {"imported": 2, "skipped": 0}
    assert r2 == {"imported": 0, "skipped": 2}
    lucie = db.query(Contact).filter_by(ghl_contact_id="ghl-001").one()
    assert lucie.source == "ghl_import"
    assert lucie.sublabel == "Facebook Funnel"
    assert lucie.priority_score > 0
    omar = db.query(Contact).filter_by(ghl_contact_id="ghl-002").one()
    assert omar.name == "Omar Haddad" and omar.sublabel == "GHL"


def test_ghl_writeback_flush(db):
    import_from_ghl(db, T, _client())
    lucie = db.query(Contact).filter_by(ghl_contact_id="ghl-001").one()
    other = Contact(tenant_id=T, name="Sans GHL", source="own_generated")
    db.add(other)
    db.commit()
    db.add(WritebackItem(tenant_id=T, contact_id=lucie.id, target="ghl_note",
                         body="🛰 Vitrine — Lucie: 3× fiche consultée"))
    db.add(WritebackItem(tenant_id=T, contact_id=other.id, target="ghl_note",
                         body="orphelin"))
    db.commit()
    notes = []
    r = flush_writebacks_ghl(db, T, _client(notes))
    assert r == {"sent": 1, "manual": 1, "failed": 0}
    assert notes == [("ghl-001", "🛰 Vitrine — Lucie: 3× fiche consultée")]


def test_ghl_unconfigured_reports_cleanly(db):
    r = import_from_ghl(db, T, GHLClient(api_key="", location_id=""))
    assert r["imported"] == 0 and "GHL" in r["error"]


def test_ghl_sms_transport(db):
    """No Twilio, GHL configured → SMS rides LC Phone: contact upserted by
    phone (id remembered), message posted to the conversations API."""
    from radar_hub.connectors.sms import send_sms_ghl
    from radar_hub.models import OutboundMessage
    c = Contact(tenant_id=T, name="Sans GHL", phone="514 555 0777",
                source="own_generated")
    db.add(c)
    db.commit()
    m = OutboundMessage(tenant_id=T, contact_id=c.id, channel="sms",
                        to_addr=c.phone, body="Bonjour! Visite demain?",
                        purpose="auto_ack", status="pending")
    db.add(m)
    db.commit()
    sms_log = []
    status, detail = send_sms_ghl(db, m, _client(sms_log=sms_log))
    assert status == "sent" and detail == "ghl msg-1"
    assert sms_log == [("ghl-up-1", "Bonjour! Visite demain?")]
    db.refresh(c)
    assert c.ghl_contact_id == "ghl-up-1"  # thread now lives in GHL
    # second send reuses the stored id (no second upsert)
    sms_log2 = []
    status2, _ = send_sms_ghl(db, m, _client(sms_log=sms_log2))
    assert status2 == "sent" and sms_log2 == [("ghl-up-1", m.body)]
    # unconfigured client → falls back to simulated, never raises
    assert send_sms_ghl(db, m, GHLClient(api_key="", location_id=""))[0] \
        == "simulated"
