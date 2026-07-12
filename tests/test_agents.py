"""Agent tests: office manager math, CASL gate, prospecting, content, summary."""
from datetime import datetime
from radar_hub.models import Contact
from radar_hub.config import settings

T = "danny"


def test_office_report_qc_tax_math(client):
    client.post("/api/agents/office/ledger", json={
        "property_address": "4510 av. Papineau", "sale_price": 542000,
        "commission_rate": 0.02, "closed_on": "2026-07-03T12:00:00"})
    client.post("/api/agents/office/ledger", json={
        "property_address": "1287 rue Fleury E", "sale_price": 389000,
        "commission_rate": 0.025, "closed_on": "2026-07-05T12:00:00"})
    client.post("/api/agents/office/expenses", json={
        "category": "Publicité", "amount": 320.0,
        "spent_on": "2026-07-04T12:00:00"})
    r = client.get("/api/agents/office/report/2026/7").json()
    gross = round(542000 * 0.02 + 389000 * 0.025, 2)   # 20565.0
    assert r["commission_gross"] == gross
    assert r["taxes"]["tps_5"] == round(gross * settings.TPS_RATE, 2)
    assert r["taxes"]["tvq_9975"] == round(gross * settings.TVQ_RATE, 2)
    assert r["expenses_total"] == 320.0
    assert r["net_before_tax_remittance"] == round(gross - 320.0, 2)
    assert "Rapport mensuel" in r["markdown"]


def test_prospecting_run_and_casl_gate(client):
    cands = client.post("/api/agents/prospecting/run", json={
        "niche": "Propriétaires de plex", "market": "Rosemont",
        "count": 3}).json()
    assert len(cands) == 3 and all(c["is_demo"] for c in cands)
    cid = cands[0]["id"]
    # email without any consent basis → blocked
    r = client.post(f"/api/agents/prospecting/candidates/{cid}/outreach",
                    json={"channel": "email"})
    assert r.status_code == 422 and "CASL" in r.json()["detail"]
    # mail_only basis → email still blocked
    client.post(f"/api/agents/prospecting/candidates/{cid}/consent",
                json={"consent_basis": "mail_only"})
    r = client.post(f"/api/agents/prospecting/candidates/{cid}/outreach",
                    json={"channel": "email"})
    assert r.status_code == 422
    # letter is always allowed (CASL covers electronic messages, not mail)
    r = client.post(f"/api/agents/prospecting/candidates/{cid}/outreach",
                    json={"channel": "letter"})
    assert r.status_code == 200 and "Bonjour" in r.json()["draft"]
    # express consent → email draft allowed, with unsubscribe mechanism
    client.post(f"/api/agents/prospecting/candidates/{cid}/consent",
                json={"consent_basis": "express"})
    r = client.post(f"/api/agents/prospecting/candidates/{cid}/outreach",
                    json={"channel": "email"})
    assert r.status_code == 200
    assert "DÉSABONNER" in r.json()["draft"]
    # firewall: the targeting signal never leaks into the message
    assert "rôle d'évaluation" not in r.json()["draft"].lower()


def test_prospecting_promote_creates_scored_lead(client, db):
    cands = client.post("/api/agents/prospecting/run", json={
        "niche": "FSBO", "market": "Villeray", "count": 1}).json()
    lead = client.post(
        f"/api/agents/prospecting/candidates/{cands[0]['id']}/promote").json()
    assert lead["lifecycle"] == "lead"
    assert lead["source"] == "prospecting_agent"
    assert lead["priority_score"] > 0
    assert db.query(Contact).filter_by(source="prospecting_agent").count() == 1


def test_content_generate_and_schedule(client):
    items = client.post("/api/agents/content/generate", json={
        "topic": "Marché de Villeray", "platforms": ["instagram", "linkedin"],
        "language": "fr"}).json()
    assert len(items) == 2
    assert all("Villeray" in i["body"] for i in items)
    r = client.post(f"/api/agents/content/{items[0]['id']}/schedule",
                    json={"when": "2026-07-11T09:00:00"}).json()
    assert r["status"] == "scheduled"


def test_dashboard_summary_and_labels(client):
    client.post("/api/leads", json={
        "name": "Nadia Petrov", "source": "fub_import",
        "sublabel": "Realtor.ca",
        "notes": "Pré-approuvée, veut visiter samedi"})
    client.post("/api/leads", json={"name": "Prospect Froid",
                                    "source": "prospecting_agent"})
    s = client.get("/api/dashboard/summary").json()
    assert s["counts"]["leads"] == 2
    assert s["sources"]["fub_import"] == 1
    assert s["sources"]["prospecting_agent"] == 1
    assert s["counts"]["hot_leads"] >= 1
    assert any("Nadia" in a for a in s["alerts"])


def test_root_serves_realtor_dashboard_bundle(client):
    r = client.get("/")
    assert r.status_code == 200
    assert "/static/dashboard/dashboard.js" in r.text


def test_ops_console_still_embedded(client):
    r = client.get("/ops")
    assert r.status_code == 200
    assert "RADAR" in r.text and "text/babel" in r.text


def test_unknown_event_type_rejected(client):
    client.post("/api/leads", json={"name": "X"})
    r = client.post("/api/events", json={"contact_id": 1,
                                         "type": "not.a.thing",
                                         "actor": "client"})
    assert r.status_code == 422
