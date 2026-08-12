"""Link-only emails → portal-link queue → numbers ingestion.

The hub side is edition-neutral and passive (it only REMEMBERS the URL);
the consumer is either a human (marketable) or the internal-edition watcher
(internal/matrix-centris-rpa/portal_link_watcher.py), whose extraction
logic is also covered here."""
import importlib.util
from pathlib import Path

from radar_hub.connectors.matrix_email import process_raw_email
from radar_hub.models import Contact, Listing, MatrixLinkTask

T = "danny"
PORTAL_URL = ("https://matrix.centris.ca/Matrix/Public/Portal.aspx"
              "?ID=0-3141592653-08&eml=c3JpQGV4YW1wbGUuY29t")


def _client_with_intake(client, db, name="Queue Client", phone="514 555 0142"):
    lead = client.post("/api/leads", json={
        "name": name, "phone": phone, "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    return c, db.get(Contact, c["id"]).intake_email


def test_link_only_email_queues_portal_url(client, db):
    c, intake = _client_with_intake(client, db)
    raw = (f"To: {intake}\nSubject: Your Portal has new listings\n\n"
           "Your agent has sent you new listings.\n"
           f"View All Listings: {PORTAL_URL}\n")
    out = process_raw_email(db, T, raw, raw_id="lq-1")
    assert out["routed_by_intake"] and out["link_queued"] is True
    row = (db.query(MatrixLinkTask)
           .filter_by(tenant_id=T, contact_id=c["id"]).one())
    assert row.url == PORTAL_URL and row.status == "pending"
    # same link while still pending → not duplicated
    out2 = process_raw_email(db, T, raw, raw_id="lq-2")
    assert out2["link_queued"] is False
    assert db.query(MatrixLinkTask).filter_by(contact_id=c["id"]).count() == 1
    # queue is visible over the API, with the client's name
    q = client.get("/api/connectors/matrix/link-queue").json()
    mine = [x for x in q if x["contact_id"] == c["id"]]
    assert mine and mine[0]["url"] == PORTAL_URL
    assert mine[0]["client"] == "Queue Client"
    # mark done → a FRESH email re-queues (same URL carries new listings)
    r = client.post(f"/api/connectors/matrix/link-queue/{mine[0]['id']}",
                    json={"status": "done", "note": "3 nouvelles"}).json()
    assert r["status"] == "done"
    out3 = process_raw_email(db, T, raw, raw_id="lq-3")
    assert out3["link_queued"] is True
    assert db.query(MatrixLinkTask).filter_by(contact_id=c["id"]).count() == 2


def test_email_without_portal_link_queues_nothing(client, db):
    c, intake = _client_with_intake(client, db, name="No Link",
                                    phone="514 555 0143")
    raw = (f"To: {intake}\nSubject: Vos inscriptions\n\n"
           "rien d'utile ici, aucun lien\n")
    out = process_raw_email(db, T, raw, raw_id="lq-none")
    assert out["link_queued"] is False
    assert (db.query(MatrixLinkTask)
            .filter_by(tenant_id=T, contact_id=c["id"]).count()) == 0


def test_ingest_numbers_creates_stubs_idempotently(client, db):
    c, _ = _client_with_intake(client, db, name="Numbers Client",
                               phone="514 555 0144")
    r = client.post("/api/connectors/matrix/ingest-numbers", json={
        "contact_id": c["id"],
        "numbers": ["17004507", "Centris No. 12149325", "17004507", "12"],
        "source": "portal_link_watcher"}).json()
    assert r["mode"] == "numbers"
    assert r["listings_new"] == 2 and r["listings_dup"] == 0
    nos = {x.centris_no for x in
           db.query(Listing).filter_by(contact_id=c["id"]).all()}
    assert nos == {"17004507", "12149325"}
    r2 = client.post("/api/connectors/matrix/ingest-numbers", json={
        "contact_id": c["id"], "numbers": ["17004507", "12149325"]}).json()
    assert r2["listings_new"] == 0 and r2["listings_dup"] == 2
    # nothing valid → clear 422
    bad = client.post("/api/connectors/matrix/ingest-numbers", json={
        "contact_id": c["id"], "numbers": ["abc", "123"]})
    assert bad.status_code == 422


def test_link_queue_mark_validates(client, db):
    c, intake = _client_with_intake(client, db, name="Mark Client",
                                    phone="514 555 0145")
    raw = f"To: {intake}\n\nView All Listings: {PORTAL_URL}\n"
    process_raw_email(db, T, raw, raw_id="lq-mark")
    task = client.get("/api/connectors/matrix/link-queue").json()[-1]
    bad = client.post(f"/api/connectors/matrix/link-queue/{task['id']}",
                      json={"status": "banana"})
    assert bad.status_code == 422
    r = client.post(f"/api/connectors/matrix/link-queue/{task['id']}",
                    json={"status": "failed", "note": "session expirée"}).json()
    assert r["status"] == "failed"
    assert client.get("/api/connectors/matrix/link-queue",
                      params={"status": "failed"}).json()[-1]["note"] \
        == "session expirée"


def test_watcher_number_extraction():
    """The internal watcher's page-text extraction: labeled Centris numbers
    win; bare 8-digit tokens only as fallback (so prices/phones don't leak)."""
    spec = importlib.util.spec_from_file_location(
        "portal_link_watcher",
        Path(__file__).parent.parent / "internal" / "matrix-centris-rpa"
        / "portal_link_watcher.py")
    watcher = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(watcher)
    page = """25 Total listings from search   Your new listings
$28,000/month X 3 month[s]
143-145 Allée du 15e Mont-Blanc — Two or more storey built in 2010
Centris No. : 17004507   Date Sent : 2026-08-09
$449,900 9-9A Rue Sicotte
MLS: 12149325
Tel: 5145550199
"""
    assert watcher.extract_numbers(page) == ["17004507", "12149325"]
    # unlabeled page → bare 8-digit fallback, 10-digit phone ignored
    assert watcher.extract_numbers("no labels 20001111 here 5145550199") \
        == ["20001111"]
