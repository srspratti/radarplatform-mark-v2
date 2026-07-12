"""Integration tests for the four folded-in artifacts."""
import os
import pathlib
import pytest
from radar_hub.models import Contact, Event

T = "danny"
ROOT = pathlib.Path(__file__).resolve().parents[1]


# ------------------------------------------------------------- Vitrine app --
def test_portail_route_serves_bundle(client):
    r = client.get("/portail")            # no token -> landing page by design
    assert r.status_code == 200 and "jeton" in r.text
    r = client.get("/portail/some-token")
    assert r.status_code == 200
    assert "/static/vitrine/vitrine.js" in r.text


def test_vitrine_bundle_carries_bridge_contract():
    js = (ROOT / "apps/vitrine/dist/vitrine.js").read_text(errors="ignore")
    assert "/api/webhooks/vitrine" in js
    assert "/api/vitrine/ai" in js
    assert "vitrine2_events" in js  # storage-key hook survived minification


def test_kv_requires_valid_token(client, db):
    r = client.put("/api/vitrine/storage/bogus/prefs", json={"value": "x"})
    assert r.status_code == 401
    c = Contact(tenant_id=T, name="MC", source="danny_channel",
                lifecycle="client")
    c.issue_portal_token()
    db.add(c)
    db.commit()
    tok = c.portal_token
    assert client.put(f"/api/vitrine/storage/{tok}/prefs",
                      json={"value": '{"lang":"fr"}'}).status_code == 200
    got = client.get(f"/api/vitrine/storage/{tok}/prefs").json()
    assert got["value"] == '{"lang":"fr"}'
    assert client.delete(f"/api/vitrine/storage/{tok}/prefs").status_code == 200
    assert client.get(f"/api/vitrine/storage/{tok}/prefs").status_code == 404


def test_ai_proxy_token_gate_and_offline_fallback(client, db):
    r = client.post("/api/vitrine/ai", json={"token": "bogus", "payload": {}})
    assert r.status_code == 401
    c = Contact(tenant_id=T, name="MC", source="danny_channel",
                lifecycle="client")
    c.issue_portal_token()
    db.add(c)
    db.commit()
    r = client.post("/api/vitrine/ai",
                    json={"token": c.portal_token,
                          "payload": {"model": "claude-sonnet-4-6",
                                      "messages": [{"role": "user",
                                                    "content": "hi"}]}})
    assert r.status_code == 200
    body = r.json()  # Anthropic-shaped fallback (no key in tests)
    assert body["content"][0]["type"] == "text"
    assert "escalate" in body["content"][0]["text"]


# --------------------------------------------------------- Realtor console --
def test_dashboard_bundle_carries_adapter_contract():
    js = (ROOT / "apps/dashboard/dist/dashboard.js").read_text(errors="ignore")
    assert "/api/dashboard/clients-rich" in js
    assert "__RADAR_CLIENTS__" in js


def test_clients_rich_shape(client, db):
    client.post("/api/leads", json={"name": "Test", "email": "t@x.com"})
    lead_id = client.get("/api/leads").json()[0]["id"]
    client.post(f"/api/leads/{lead_id}/convert")
    rows = client.get("/api/dashboard/clients-rich").json()
    assert len(rows) == 1
    row = rows[0]
    for key in ("timeline", "score_breakdown", "writebacks", "stage",
                "engagement_score", "portal_token"):
        assert key in row


# ----------------------------------------------- Radar Acheteur (mounted) --
def test_acheteur_module_mounted(client):
    pytest.importorskip("radar_acheteur")
    from radar_hub.main import ACHETEUR_MOUNTED
    assert ACHETEUR_MOUNTED is True
    r = client.get("/acheteur/api/intelligence")
    assert r.status_code == 200
    assert isinstance(r.json(), dict)


def test_acheteur_bridge_sync_idempotent(client, db):
    seed_demo = pytest.importorskip("radar_acheteur.seed_demo")
    if os.path.exists("./test_acheteur.db"):
        os.remove("./test_acheteur.db")
    seed_demo.run()
    r1 = client.post("/api/connectors/acheteur/sync").json()
    assert r1["synced"] > 0
    assert r1["created_contacts"] > 0
    n_events = db.query(Event).filter(Event.idempotency_key
                                      .like("ach-sig-%")).count()
    assert n_events == r1["synced"]
    # every synced person is a client with Matrix attribution + portal access
    c = (db.query(Contact)
         .filter_by(tenant_id=T, sublabel="Radar Acheteur").first())
    assert c and c.lifecycle == "client" and c.portal_token
    assert c.source == "matrix_visit"
    # replay: everything deduped, nothing new
    r2 = client.post("/api/connectors/acheteur/sync").json()
    assert r2["synced"] == 0 and r2["skipped"] >= r1["synced"]


def test_bridge_events_feed_engagement(client, db):
    seed_demo = pytest.importorskip("radar_acheteur.seed_demo")
    if os.path.exists("./test_acheteur.db"):
        os.remove("./test_acheteur.db")
    seed_demo.run()
    client.post("/api/connectors/acheteur/sync")
    hot = (db.query(Contact)
           .filter(Contact.tenant_id == T,
                   Contact.sublabel == "Radar Acheteur",
                   Contact.engagement_score > 0).count())
    assert hot > 0  # buyer views/favorites moved the same score Vitrine moves


# ------------------------------------------------------------ RPA fencing --
def test_internal_rpa_not_in_docker_context():
    ignore = (ROOT / ".dockerignore").read_text()
    assert "internal/" in ignore
    # and the hub never imports it
    hub_src = "".join(p.read_text() for p in
                      (ROOT / "radar_hub").rglob("*.py"))
    assert "matrix_centris_rpa" not in hub_src
    assert "rpa_common" not in hub_src
