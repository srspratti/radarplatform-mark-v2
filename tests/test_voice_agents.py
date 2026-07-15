"""AI voice agents: receptionist (missed calls), priority outreach + form,
engagement-driven client check-in. Everything runs in simulated transport."""
from radar_hub.agents.voice import qual_token
from radar_hub.models import Contact, FollowUp, OutboundMessage

T = "danny"


def _consent(client, cid):
    client.post(f"/api/contacts/{cid}/consents",
                json={"basis": "express", "source": "test"})


def _hot_lead(client, name="Luc Bergeron", phone="514 555 0101"):
    # matrix_visit base (70) + fresh (<24 h, +15) = 85 ≥ threshold 75
    return client.post("/api/leads", json={
        "name": name, "phone": phone, "source": "matrix_visit",
        "sublabel": "Demande de visite"}).json()


# ------------------------------------------------------------ receptionist --
def test_missed_call_creates_lead_with_consent_and_callback(client, db):
    r = client.post("/api/webhooks/voice-inbound",
                    json={"from": "438 555 0177",
                          "transcript": "Bonjour, je cherche un condo"}).json()
    assert r["handled"] and r["lead_created"]
    assert "fr" in r["greetings"] and "en" in r["greetings"]
    c = db.get(Contact, r["contact_id"])
    assert c.sublabel == "Appel manqué" and "condo" in c.notes
    # apology text queued (simulated — no Twilio in tests)
    msgs = db.query(OutboundMessage).filter_by(
        contact_id=c.id, purpose="missed_call_ack").all()
    assert len(msgs) == 1 and msgs[0].status == "simulated"
    # realtor callback task exists
    assert db.query(FollowUp).filter_by(
        contact_id=c.id, kind="callback").count() == 1
    # same number calls again → no duplicate contact, no second apology
    # text (1/day) and no second callback task (one pending at a time)
    r2 = client.post("/api/webhooks/voice-inbound",
                     json={"from": "+14385550177"}).json()
    assert r2["contact_id"] == c.id and not r2["lead_created"]
    assert db.query(Contact).filter_by(tenant_id=T).count() == 1
    assert db.query(OutboundMessage).filter_by(
        contact_id=c.id, purpose="missed_call_ack").count() == 1
    assert db.query(FollowUp).filter_by(
        contact_id=c.id, kind="callback").count() == 1


def test_missed_call_twiml_greeting_is_bilingual(client):
    r = client.post("/api/webhooks/voice-inbound?format=twiml",
                    json={"from": "514 555 0122"})
    assert r.status_code == 200
    assert 'language="fr-CA"' in r.text and 'language="en-CA"' in r.text
    cfg = client.get("/api/agents/voice/receptionist").json()
    assert cfg["enabled"] and cfg["greetings"]["fr"] and cfg["greetings"]["en"]


# ----------------------------------------------------------- lead outreach --
def test_priority_outreach_needs_consent_then_touches_once(client, db):
    lead = _hot_lead(client)
    # inbound leads get implied consent recorded automatically (LCAP) —
    # revoke it and the voice agent must refuse to touch the lead
    client.post(f"/api/contacts/{lead['id']}/consents",
                json={"basis": "implied", "granted": False, "source": "test"})
    r = client.post(f"/api/agents/voice/outreach/{lead['id']}").json()
    assert r["status"] == "skipped" and "consentement" in r["reason"]
    _consent(client, lead["id"])  # express re-grant
    r = client.post(f"/api/agents/voice/outreach/{lead['id']}").json()
    assert r["status"] == "sent" and r["channel"] == "voice"
    assert f"/q/{qual_token(lead['id'])}" in r["form_url"]
    # voice call + qualification-form SMS queued, callback task created
    purposes = {m.purpose for m in db.query(OutboundMessage)
                .filter_by(contact_id=lead["id"]).all()}
    assert {"voice_priority", "qualification_form"} <= purposes
    callbacks = db.query(FollowUp).filter_by(
        contact_id=lead["id"], kind="callback").all()
    assert sum("vocal" in f.note for f in callbacks) == 1
    # one touch per lead, ever
    r = client.post(f"/api/agents/voice/outreach/{lead['id']}").json()
    assert r["status"] == "skipped"


def test_outreach_sweep_skips_cold_leads(client):
    hot = _hot_lead(client)
    _consent(client, hot["id"])
    client.post("/api/leads", json={"name": "Froid Untel",
                                    "phone": "514 555 0100",
                                    "source": "prospecting_agent"})
    r = client.post("/api/agents/voice/outreach/run").json()
    assert r["sent"] == 1
    names = [d["contact"] for d in r["details"] if d["status"] == "sent"]
    assert names == [hot["name"]]


# --------------------------------------------------------- qualification ---
def test_qualification_form_boosts_priority(client, db):
    lead = _hot_lead(client, name="Ana Silva", phone="514 555 0133")
    qid = qual_token(lead["id"])
    assert client.get(f"/q/{qid}").status_code == 200
    assert client.get("/q/999-0000000000").status_code == 404
    before = lead["priority_score"]
    r = client.post(f"/api/forms/qualification/{qid}", json={
        "budget": "650 000 $", "timeline": "0–3 mois",
        "prequalified": True, "areas": "Rosemont"}).json()
    assert r["ok"] and r["priority_score"] > before
    c = db.get(Contact, lead["id"])
    assert "préapprouvé" in c.notes and "650 000" in c.notes


# --------------------------------------------------------- client check-in --
def test_client_checkin_hot_then_cooldown(client, db):
    lead = _hot_lead(client, name="Marie Roy", phone="514 555 0144")
    _consent(client, lead["id"])
    client.post(f"/api/leads/{lead['id']}/convert")
    # client activity → engagement over the hot threshold (70)
    for i, etype in enumerate(["offer.submitted", "visit.completed",
                               "visit.requested", "message.sent",
                               "listing.favorited", "tour3d.viewed"]):
        client.post("/api/events", json={
            "contact_id": lead["id"], "type": etype, "actor": "client",
            "idempotency_key": f"chk-{i}"})
    r = client.post(f"/api/agents/voice/checkin/{lead['id']}").json()
    assert r["status"] == "sent" and r["kind"] == "hot"
    assert db.query(OutboundMessage).filter_by(
        contact_id=lead["id"], purpose="voice_checkin").count() == 1
    # cooldown window → no second ping
    r = client.post(f"/api/agents/voice/checkin/{lead['id']}").json()
    assert r["status"] == "skipped" and "cooldown" in r["reason"]


def test_checkin_skips_quiet_but_active_client(client):
    lead = _hot_lead(client, name="Paul Otis", phone="514 555 0155")
    _consent(client, lead["id"])
    client.post(f"/api/leads/{lead['id']}/convert")
    r = client.post(f"/api/agents/voice/checkin/{lead['id']}").json()
    assert r["status"] == "skipped"
