"""Seller Intelligence module + the feature-flag batch (trend, deadlines,
post-visit feedback, Loi 25 data rights, photos, live booking, portal
features endpoint, mortgage handoff)."""
import base64
from datetime import timedelta

from radar_hub.models import (Contact, Event, FollowUp, Listing,
                              NotificationItem, OutboundMessage, utcnow)

T = "danny"
SECTOR = "Rosemont, Montréal"


def _client_with_token(client):
    lead = client.post("/api/leads", json={
        "name": "Éva Cliente", "phone": "514 555 0161",
        "source": "matrix_visit"}).json()
    return client.post(f"/api/leads/{lead['id']}/convert").json()


# ------------------------------------------------------------ seller intel --
def test_seller_discovery_scores_and_market(client):
    rows = client.post("/api/agents/seller/run",
                       json={"sector": SECTOR, "count": 4}).json()
    assert len(rows) == 4 and all(r["is_demo"] for r in rows)
    assert all(5 <= r["sell_score"] <= 95 for r in rows)
    assert rows == sorted(rows, key=lambda r: -r["sell_score"])
    m = client.get(f"/api/agents/seller/market/{SECTOR}").json()
    assert m["verdict"] in ("vendeur", "acheteur", "équilibré")
    assert m["avg_dom"] > 0 and "narrative_fr" in m


def test_seller_channel_gates_casl_and_adad(client, db):
    pid = client.post("/api/agents/seller/run",
                      json={"sector": SECTOR, "count": 1}).json()[0]["id"]
    # electronic channel without a basis → blocked
    r = client.post(f"/api/agents/seller/prospects/{pid}/outreach",
                    json={"channel": "email"})
    assert r.status_code == 422 and "CASL" in r.json()["detail"]
    # mail_only basis: email still blocked, automated voice blocked (ADAD)
    client.post(f"/api/agents/seller/prospects/{pid}/consent",
                json={"consent_basis": "mail_only"})
    assert client.post(f"/api/agents/seller/prospects/{pid}/outreach",
                       json={"channel": "email"}).status_code == 422
    r = client.post(f"/api/agents/seller/prospects/{pid}/outreach",
                    json={"channel": "voice"})
    assert r.status_code == 422 and "ADAD" in r.json()["detail"]
    # letter is always allowed, and never quotes the targeting signal
    r = client.post(f"/api/agents/seller/prospects/{pid}/outreach",
                    json={"channel": "letter"})
    assert r.status_code == 200 and "Bonjour" in r.json()["draft"]
    assert "Registre foncier" not in r.json()["draft"]
    # express consent → SMS actually sends (simulated) and creates the contact
    client.post(f"/api/agents/seller/prospects/{pid}/consent",
                json={"consent_basis": "express"})
    r = client.post(f"/api/agents/seller/prospects/{pid}/outreach",
                    json={"channel": "sms", "send": True}).json()
    assert r["status"] == "simulated" and r["contact_id"]
    c = db.get(Contact, r["contact_id"])
    assert c.source == "seller_intel"
    assert db.query(OutboundMessage).filter_by(
        contact_id=c.id, purpose="seller_outreach").count() == 1


def test_seller_promote_creates_lead(client, db):
    pid = client.post("/api/agents/seller/run",
                      json={"sector": "Villeray", "count": 1}).json()[0]["id"]
    lead = client.post(f"/api/agents/seller/prospects/{pid}/promote").json()
    assert lead["lifecycle"] == "lead" and lead["source"] == "seller_intel"
    assert db.query(Contact).filter_by(source="seller_intel").count() == 1


# ------------------------------------------------------- engagement trend ---
def test_engagement_trend_reflects_recent_activity(client):
    c = _client_with_token(client)
    client.post("/api/events", json={"contact_id": c["id"],
                                     "type": "visit.requested",
                                     "actor": "client"})
    rich = client.get(f"/api/clients/{c['id']}").json()
    # all activity is fresh → the whole score is this week's gain
    assert rich["trend"] == rich["engagement_score"] > 0


# ----------------------------------------------------------- deadlines ------
def test_deadline_sentinel_warns_once_per_day(client, db):
    c = _client_with_token(client)
    client.post(f"/api/contacts/{c['id']}/deadlines", json={
        "label": "Condition de financement",
        "due_at": (utcnow() + timedelta(days=1)).isoformat()})
    r = client.post("/api/agents/deadlines/run").json()
    assert r["warned"] == 1
    assert client.post("/api/agents/deadlines/run").json()["warned"] == 0
    assert db.query(NotificationItem).filter(
        NotificationItem.title.like("%financement%")).count() == 1


# ------------------------------------------------------- visit feedback -----
def test_visit_feedback_survey_and_submission(client, db):
    c = _client_with_token(client)
    client.post("/api/events", json={"contact_id": c["id"],
                                     "type": "visit.completed",
                                     "actor": "client"})
    r = client.post("/api/agents/feedback/run").json()
    assert r["surveys_sent"] == 1
    assert client.post("/api/agents/feedback/run").json()["surveys_sent"] == 0
    sms = (db.query(OutboundMessage)
           .filter_by(contact_id=c["id"], purpose="visit_feedback").one())
    assert f"/fb/{c['portal_token']}" in sms.body
    before = client.get(f"/api/clients/{c['id']}").json()["engagement_score"]
    ok = client.post(f"/api/feedback/{c['portal_token']}", json={
        "interest": 5, "price_opinion": "juste"}).json()
    assert ok["ok"]
    after = client.get(f"/api/clients/{c['id']}").json()
    assert after["engagement_score"] > before
    assert any(e["type"] == "feedback.submitted" for e in after["timeline"])


# --------------------------------------------------------- data rights ------
def test_privacy_export_then_erase(client, db):
    c = _client_with_token(client)
    client.post("/api/events", json={"contact_id": c["id"],
                                     "type": "listing.viewed",
                                     "actor": "client"})
    exp = client.get(f"/api/privacy/{c['id']}/export").json()
    assert exp["contact"]["name"] == c["name"] and len(exp["events"]) >= 1
    r = client.post(f"/api/privacy/{c['id']}/erase",
                    json={"confirm_name": "Mauvais Nom"})
    assert r.status_code == 422
    r = client.post(f"/api/privacy/{c['id']}/erase",
                    json={"confirm_name": c["name"]}).json()
    assert r["ok"] and r["erased"]["events"] >= 1
    row = db.get(Contact, c["id"])
    assert row.name == "[supprimé]" and row.phone == "" and row.portal_token == ""
    assert db.query(Event).filter_by(contact_id=c["id"]).count() == 0


# ------------------------------------------- photos + features endpoint -----
def test_photos_and_vitrine_features(client, db):
    c = _client_with_token(client)
    db.add(Listing(tenant_id=T, contact_id=c["id"], centris_no="12345678",
                   address="1 rue Test"))
    db.commit()
    up = client.post("/api/listings/12345678/photos", json={
        "content_b64": base64.b64encode(b"fake-jpeg-bytes").decode()}).json()
    assert up["url"].startswith("/api/listing-photos/")
    img = client.get(up["url"])
    assert img.status_code == 200 and img.content == b"fake-jpeg-bytes"
    f = client.get(f"/api/vitrine/features/{c['portal_token']}").json()
    assert f["features"]["listing_photos"] is True
    assert f["photos"]["12345678"] == [up["url"]]
    assert isinstance(f["settings"]["visit_slot_times"], list)
    # demo token = showroom mode, everything on
    demo = client.get("/api/vitrine/features/demo").json()
    assert all(demo["features"].values())


# ------------------------------------------------------------- booking ------
def test_vitrine_book_creates_confirm_task(client, db):
    c = _client_with_token(client)
    r = client.post(f"/api/vitrine/book/{c['portal_token']}", json={
        "slot": "sam. 19 juil. 10:00", "address": "1 rue Test"}).json()
    assert r["ok"]
    fu = (db.query(FollowUp)
          .filter(FollowUp.contact_id == c["id"], FollowUp.kind == "callback",
                  FollowUp.note.like("Confirmer la visite%")).one())
    assert "10:00" in fu.note
    assert db.query(NotificationItem).filter(
        NotificationItem.title.like("%réservé un créneau%")).count() == 1


# ------------------------------------------------------ mortgage handoff ----
def test_mortgage_interest_scores_and_notifies(client, db):
    c = _client_with_token(client)
    r = client.post("/api/webhooks/vitrine", json={
        "client_token": c["portal_token"],
        "events": [{"type": "mortgage.interest", "event_id": "m1"}]}).json()
    assert r["ingested"] == 1
    assert r["engagement_score"] >= 10
    assert db.query(NotificationItem).filter(
        NotificationItem.title.like("%financement%")).count() == 1
