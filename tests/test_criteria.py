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


def test_broker_criteria_run_alongside_client_criteria(client, db, demo_on):
    """Two channels, one client: the broker's curated search and the client's
    own both feed the portal, and each match records which one found it."""
    c = _client_with_prefs(client, db, name="Deux canaux",
                           phone="514 555 0321")
    r = client.put(f"/api/clients/{c['id']}/criteria", json={
        "pmin": 800000, "pmax": 950000, "beds": 4,
        "areas": ["Westmount"],
        "note": "elle dit 3 cc, mais un 4 cc à Westmount lui conviendrait"})
    assert r.status_code == 200
    assert r.json()["broker"]["note"].startswith("elle dit")
    # the PUT swept immediately, and that sweep runs BOTH of the client's
    # channels — so the portal already holds curated and self-service rows,
    # each stamped with the channel that found it
    rows = db.query(Listing).filter_by(contact_id=c["id"]).all()
    by_source: dict[str, list] = {}
    for x in rows:
        by_source.setdefault(x.details.get("match_source"), []).append(x)
    assert set(by_source) == {"broker", "client"}
    assert all(x.area == "Westmount" for x in by_source["broker"])
    assert all(800000 <= x.price <= 950000 for x in by_source["broker"])
    assert all(x.area in ("Rosemont", "Villeray")
               for x in by_source["client"])
    # a later cron sweep sees both channels and adds nothing new
    out = client.post("/api/connectors/criteria/match").json()
    assert {d["channel"] for d in out["details"]} == {"broker", "client"}
    assert out["clients"] == 1 and out["new"] == 0
    # both views are readable side by side
    g = client.get(f"/api/clients/{c['id']}/criteria").json()
    assert g["broker"]["areas"] == ["Westmount"]
    assert g["client"]["areas"] == ["Rosemont", "Villeray"]
    assert g["provider"] == "demo"


def test_broker_criteria_survive_without_client_criteria(client, db, demo_on):
    """A client who never opened their portal still gets curated matches."""
    lead = client.post("/api/leads", json={
        "name": "Jamais ouvert", "phone": "514 555 0322",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    client.put(f"/api/clients/{c['id']}/criteria",
               json={"pmin": 300000, "pmax": 400000, "beds": 2,
                     "areas": ["Longueuil"]})
    out = client.post("/api/connectors/criteria/match").json()
    assert out["clients"] == 1
    assert [d["channel"] for d in out["details"]] == ["broker"]
    assert db.query(Listing).filter_by(contact_id=c["id"]).count() > 0
    # a swapped range is normalised, not rejected, and stored canonically
    r = client.put(f"/api/clients/{c['id']}/criteria",
                   json={"pmin": 900000, "pmax": 500000}).json()
    assert r["broker"]["price"] == {"min": 500000, "max": 900000}
    # clearing the curated set leaves the client's own untouched
    client.delete(f"/api/clients/{c['id']}/criteria")
    assert client.get(f"/api/clients/{c['id']}/criteria").json()["broker"] is None
    out2 = client.post("/api/connectors/criteria/match").json()
    assert out2["clients"] == 0     # no criteria left for this client at all


def test_broker_criteria_are_not_reachable_from_the_portal(client, db,
                                                           demo_on):
    """The curated set is broker-only: the portal KV surface can't read or
    overwrite it."""
    c = _client_with_prefs(client, db, name="Cloison", phone="514 555 0323")
    client.put(f"/api/clients/{c['id']}/criteria",
               json={"pmin": 100, "pmax": 200, "areas": ["Secret"]})
    tok = c["portal_token"]
    assert client.get(f"/api/vitrine/storage/{tok}/broker_criteria"
                      ).status_code == 404
    # writing that key from the portal touches KV only, never the column
    client.put(f"/api/vitrine/storage/{tok}/broker_criteria",
               json={"value": '{"pmin": 999}'})
    assert db.get(Contact, c["id"]).broker_criteria["areas"] == ["Secret"]


def test_sweep_can_target_one_client(client, db, demo_on):
    c1 = _client_with_prefs(client, db, name="Un", phone="514 555 0313")
    _client_with_prefs(client, db, name="Deux", phone="514 555 0314")
    only = db.get(Contact, c1["id"])
    r = criteria.match_criteria(db, T, contact=only)
    assert r["clients"] == 1 and r["new"] == 6
    assert [d["client"] for d in r["details"]] == ["Un"]


def test_schema_endpoint_is_honest_about_what_filters(client):
    """Both forms render from this; it must not claim to filter fields whose
    upstream name hasn't been confirmed."""
    s = client.get("/api/criteria/schema").json()
    keys = {f["key"] for f in s["fields"]}
    assert {"price", "beds", "baths", "areas", "year", "living", "lot",
            "pool", "amenities", "basement", "view"} <= keys
    by = {f["key"]: f for f in s["fields"]}
    # confirmed RESO names → filterable
    assert by["price"]["filterable"] and by["areas"]["filterable"]
    assert by["beds"]["filterable"] and by["year"]["filterable"]
    # unverified ones are carried but flagged, not silently ignored
    assert by["amenities"]["filterable"] is False
    assert by["property_types"]["filterable"] is False
    assert len(by["amenities"]["options"]) >= 15
    assert {c["value"] for c in s["categories"]} >= {
        "single_family", "condo", "revenue", "land", "commercial"}
    en = client.get("/api/criteria/schema", params={"lang": "en"}).json()
    assert {f["key"]: f["label"] for f in en["fields"]}["beds"] \
        == "Bedrooms (total)"


def test_rich_criteria_round_trip_and_build_odata(client, db, demo_on):
    """The Centris-shaped set survives the round trip and produces a filter
    using only confirmed fields."""
    from radar_hub.criteria_schema import odata_filter
    c = _client_with_prefs(client, db, name="Riches", phone="514 555 0331")
    payload = {"price": {"min": 500000, "max": 800000}, "beds": 3, "baths": 2,
               "year": {"min": 1990, "max": 2020},
               "living": {"min": 1200, "max": 0},
               "areas": ["Rosemont"], "postal": "H2S",
               "status": ["active", "sold"], "new_since_days": 7,
               "pool": ["inground"], "amenities": ["central_ac", "sauna"],
               "property_types": ["bungalow"], "intergeneration": True,
               "note": "famille avec deux enfants"}
    r = client.put(f"/api/clients/{c['id']}/criteria", json=payload).json()
    b = r["broker"]
    assert b["price"] == {"min": 500000, "max": 800000}
    assert b["year"] == {"min": 1990, "max": 2020}
    assert b["living"] == {"min": 1200, "max": 0}
    assert b["pool"] == ["inground"] and b["amenities"] == ["central_ac",
                                                            "sauna"]
    assert b["intergeneration"] is True and b["note"].startswith("famille")
    f = odata_filter(b)
    assert "ListPrice ge 500000" in f and "ListPrice le 800000" in f
    assert "BedroomsTotal ge 3" in f and "BathroomsTotalInteger ge 2" in f
    assert "YearBuilt ge 1990" in f and "YearBuilt le 2020" in f
    assert "LivingArea ge 1200" in f and "LivingArea le" not in f
    assert "contains(City,'Rosemont')" in f
    assert "startswith(PostalCode,'H2S')" in f
    assert "StandardStatus eq 'Active'" in f and "eq 'Closed'" in f
    assert "OnMarketDate ge" in f
    # unconfirmed fields are absent from the query rather than guessed
    for absent in ("sauna", "central_ac", "inground", "bungalow",
                   "Intergeneration"):
        assert absent not in f


def test_legacy_vitrine_prefs_still_match(client, db, demo_on):
    """Portals saved before the richer form keep working unchanged."""
    from radar_hub.criteria_schema import from_legacy, odata_filter
    crit = from_legacy({"pmin": 300000, "pmax": 450000, "beds": 2,
                        "areas": ["Longueuil"],
                        "must": {"piscine": True, "garage": True,
                                 "foyer": False}})
    assert crit["price"] == {"min": 300000, "max": 450000}
    assert crit["beds"] == 2 and crit["garage"] == 1
    assert set(crit["pool"]) == {"above_ground", "heated", "indoor",
                                 "inground"}
    assert "fireplace" not in crit
    f = odata_filter(crit)
    assert "ListPrice ge 300000" in f and "contains(City,'Longueuil')" in f


def test_portal_gets_the_client_audience_schema(client, db):
    """The Vitrine renders « Mes alertes » from the same vocabulary, minus
    the broker-only fields, and only with a valid portal token."""
    c = _client_with_prefs(client, db, name="Portail", phone="514 555 0341")
    s = client.get(f"/api/vitrine/criteria-schema/{c['portal_token']}").json()
    keys = {f["key"] for f in s["fields"]}
    assert {"price", "beds", "areas", "pool", "amenities", "view"} <= keys
    assert "status" not in keys and "new_since_days" not in keys
    # the broker audience still sees them
    b = {f["key"] for f in client.get("/api/criteria/schema").json()["fields"]}
    assert {"status", "new_since_days"} <= b
    # same rejection as every other portal endpoint (401, and it does not
    # confirm whether the token exists)
    assert client.get("/api/vitrine/criteria-schema/pas-un-jeton"
                      ).status_code == 401


def test_portal_saves_canonical_criteria_and_sweeps(client, db, demo_on):
    """The richer form posts canonical criteria straight through the portal
    KV surface, and the immediate sweep honours them."""
    lead = client.post("/api/leads", json={
        "name": "Canonique", "phone": "514 555 0342",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    prefs = {"p": {"price": {"min": 600000, "max": 750000}, "beds": 3,
                   "areas": ["Outremont"], "pool": ["inground"],
                   "amenities": ["central_ac"]}, "status": "vitrine"}
    r = client.put(f"/api/vitrine/storage/{c['portal_token']}/vitrine2_prefs",
                   json={"value": json.dumps(prefs)})
    assert r.status_code == 200
    rows = db.query(Listing).filter_by(contact_id=c["id"]).all()
    assert rows and all(600000 <= x.price <= 750000 for x in rows)
    assert all(x.area == "Outremont" for x in rows)
