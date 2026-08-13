"""Criteria matching: provider selection, the demo generator, and the
immediate sweep fired when a client saves their criteria."""
import json

import pytest

from radar_hub import features
from radar_hub.connectors import criteria
from radar_hub.models import Contact, Listing, PortalKV

T = "danny"
PREFS = {"p": {"pmin": 400000, "pmax": 650000, "beds": 3,
               "areas": ["Rosemont", "Villeray"]}}


@pytest.fixture
def demo_on(monkeypatch):
    orig = features.setting
    monkeypatch.setattr(features, "setting", lambda k, d=None:
                        True if k == "criteria_demo_provider" else orig(k, d))


def _client_with_prefs(client, db, name="Critères", phone="514 555 0311",
                       prefs=None):
    lead = client.post("/api/leads", json={
        "name": name, "phone": phone, "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    db.add(PortalKV(tenant_id=T, token=c["portal_token"],
                    key="vitrine2_prefs",
                    value=json.dumps(prefs or PREFS)))
    db.commit()
    return c


def test_demo_provider_is_off_by_default(client, db):
    _client_with_prefs(client, db)
    r = client.post("/api/connectors/criteria/match").json()
    assert r["clients"] == 0 and r["provider"] == "aucun"
    assert "DDF" in r["error"] and "démo" in r["error"]
    s = client.get("/api/connectors/criteria/status").json()
    assert s["provider"] == "aucun" and s["clients_with_criteria"] == 1


def test_demo_sweep_is_marked_and_idempotent(client, db, demo_on):
    c = _client_with_prefs(client, db)
    r = client.post("/api/connectors/criteria/match").json()
    assert r["provider"] == "demo" and r["clients"] == 1
    assert r["matched"] == 6 and r["new"] == 6
    rows = db.query(Listing).filter_by(tenant_id=T,
                                       contact_id=c["id"]).all()
    assert len(rows) == 6
    for row in rows:
        # unmistakably demo: reserved number range, tagged address, stamped
        assert row.centris_no.startswith("99") and len(row.centris_no) == 8
        assert "(démo)" in row.address
        assert row.details["source"] == "demo" and row.details["demo"] is True
        assert 400000 <= row.price <= 650000
        assert row.area in ("Rosemont", "Villeray")
    # same criteria → same listings, so re-running never floods the portal
    r2 = client.post("/api/connectors/criteria/match").json()
    assert r2["matched"] == 6 and r2["new"] == 0
    assert db.query(Listing).filter_by(contact_id=c["id"]).count() == 6


def test_changed_criteria_yield_different_matches(client, db, demo_on):
    c = _client_with_prefs(client, db)
    client.post("/api/connectors/criteria/match")
    first = {x.centris_no for x in
             db.query(Listing).filter_by(contact_id=c["id"]).all()}
    kv = (db.query(PortalKV)
          .filter_by(token=c["portal_token"], key="vitrine2_prefs").one())
    kv.value = json.dumps({"p": {"pmin": 700000, "pmax": 900000, "beds": 4,
                                 "areas": ["Outremont"]}})
    db.commit()
    client.post("/api/connectors/criteria/match")
    rows = db.query(Listing).filter_by(contact_id=c["id"]).all()
    fresh = {x.centris_no for x in rows} - first
    assert fresh, "de nouveaux critères doivent produire de nouvelles fiches"
    assert all(x.area == "Outremont" for x in rows
               if x.centris_no in fresh)


def test_saving_criteria_triggers_immediate_sweep(client, db, demo_on):
    """The portal PUT returns right away; the sweep runs as a background task
    so the client sees matches without waiting for the cron."""
    lead = client.post("/api/leads", json={
        "name": "Sweep Now", "phone": "514 555 0312",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    tok = c["portal_token"]
    assert db.query(Listing).filter_by(contact_id=c["id"]).count() == 0
    r = client.put(f"/api/vitrine/storage/{tok}/vitrine2_prefs",
                   json={"value": json.dumps(PREFS)})
    assert r.status_code == 200 and r.json()["ok"] is True
    assert db.query(Listing).filter_by(contact_id=c["id"]).count() == 6
    # an unrelated key must not fire a sweep
    before = db.query(Listing).count()
    client.put(f"/api/vitrine/storage/{tok}/vitrine2_notes",
               json={"value": "{}"})
    assert db.query(Listing).count() == before


def test_sweep_can_target_one_client(client, db, demo_on):
    c1 = _client_with_prefs(client, db, name="Un", phone="514 555 0313")
    _client_with_prefs(client, db, name="Deux", phone="514 555 0314")
    only = db.get(Contact, c1["id"])
    r = criteria.match_criteria(db, T, contact=only)
    assert r["clients"] == 1 and r["new"] == 6
    assert [d["client"] for d in r["details"]] == ["Un"]
