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


def test_unsubscribe_link_is_never_queued(client, db):
    """Real board template (seen live): the CoreLogic footer's unsubscribe
    link is on matrix.centris.ca too and appears FIRST in the raw source.
    The queue must pick the Portal.aspx link — and queue nothing when only
    the unsubscribe link exists."""
    c, intake = _client_with_intake(client, db, name="Unsub Trap",
                                    phone="514 555 0146")
    unsub = ("https://matrix.centris.ca/Matrix/Public/"
             "UnsubscribeDirectEmail.aspx?ID=14804704016-1&Eml=YWJj")
    raw = (f"To: {intake}\nSubject: Your Portal has new listings\n\n"
           f"Click this link if you wish to Unsubscribe. {unsub}\n"
           "Click the following link to view the listings:\n"
           f"View All Listings: {PORTAL_URL}\n")
    out = process_raw_email(db, T, raw, raw_id="lq-unsub-1")
    assert out["link_queued"] is True
    row = (db.query(MatrixLinkTask)
           .filter_by(tenant_id=T, contact_id=c["id"]).one())
    assert row.url == PORTAL_URL
    # an email carrying ONLY the unsubscribe link queues nothing at all
    c2, intake2 = _client_with_intake(client, db, name="Unsub Only",
                                      phone="514 555 0147")
    out2 = process_raw_email(db, T, f"To: {intake2}\n\n{unsub}\n",
                             raw_id="lq-unsub-2")
    assert out2["link_queued"] is False
    assert (db.query(MatrixLinkTask)
            .filter_by(tenant_id=T, contact_id=c2["id"]).count()) == 0


def test_html_only_button_href_is_seen(client, db):
    """Seen live: CoreLogic's multipart template carries the « View All
    Listings » URL ONLY as an href in the text/html part — the text/plain
    alternative spells out just the unsubscribe link. message_text() must
    surface the href so the queue gets the portal URL."""
    from email.message import EmailMessage
    from radar_hub.connectors.matrix_email import message_text
    c, intake = _client_with_intake(client, db, name="HTML Only",
                                    phone="514 555 0148")
    unsub = ("https://matrix.centris.ca/Matrix/Public/"
             "UnsubscribeDirectEmail.aspx?ID=14804704016-1&Eml=YWJj")
    msg = EmailMessage()
    msg["To"] = intake
    msg["Subject"] = "Your Portal has new listings"
    msg.set_content(  # text/plain — no portal URL, unsubscribe only
        "Click the following link to view the listings:\nView All Listings\n"
        f"Click this link if you wish to Unsubscribe. {unsub}\n")
    msg.add_alternative(  # text/html — the button carries the real URL
        '<p>Click the following link to view the listings:</p>'
        f'<a href="{PORTAL_URL.replace("&", "&amp;")}">View All Listings</a>'
        f'<p><a href="{unsub}">Click this link if you wish to Unsubscribe.'
        '</a></p>', subtype="html")
    text, pdfs = message_text(msg)
    assert PORTAL_URL.replace("&", "&amp;") in text and not pdfs
    raw = f"To: {intake}\nSubject: {msg['Subject']}\n\n{text}"
    out = process_raw_email(db, T, raw, raw_id="lq-html-1")
    assert out["link_queued"] is True
    row = (db.query(MatrixLinkTask)
           .filter_by(tenant_id=T, contact_id=c["id"]).one())
    assert row.url == PORTAL_URL      # &amp; decoded, unsubscribe ignored


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


def test_ingest_details_enriches_by_number(client, db):
    """The watcher's --details sweep: structured facts enrich every client
    holding the number; empty values never erase; stubs gain address/price."""
    ids = []
    for n in (1, 2):
        lead = client.post("/api/leads", json={
            "name": f"Détails {n}", "phone": f"514 555 016{n}",
            "source": "matrix_visit"}).json()
        c = client.post(f"/api/leads/{lead['id']}/convert").json()
        ids.append(c["id"])
        client.post("/api/connectors/matrix/ingest-numbers", json={
            "contact_id": c["id"], "numbers": ["17004507"]})
    r = client.post("/api/connectors/matrix/ingest-details", json={
        "items": [{"centris_no": "17004507",
                   "address": "143-145 Allée du 15e, Mont-Blanc",
                   "price": 449900, "beds": 3, "baths": 2,
                   "fields": {"year": 2010, "living_sqft": 2014,
                              "taxes_mun": 3311, "style": "Two or more storey",
                              "hacker_field": "dropped"}},
                  {"centris_no": "99", "fields": {}}]}).json()
    assert r["enriched"] == ["17004507"] and r["unmatched"] == ["99"]
    for cid in ids:
        row = db.query(Listing).filter_by(contact_id=cid,
                                          centris_no="17004507").one()
        assert row.address.startswith("143-145") and row.price == 449900
        assert row.beds == 3 and row.details["year"] == 2010
        assert row.details["style"] == "Two or more storey"
        assert "hacker_field" not in row.details
    # second pass with sparser data must not erase anything
    client.post("/api/connectors/matrix/ingest-details", json={
        "items": [{"centris_no": "17004507", "fields": {"year": 0}}]})
    row = db.query(Listing).filter_by(contact_id=ids[0],
                                      centris_no="17004507").one()
    assert row.details["year"] == 2010 and row.price == 449900


def test_watcher_summary_parser():
    """parse_summary_text against both live template shapes: residential
    (full facts) and commercial (collapsed empty cells, /sqft rent that must
    NOT become a sale price)."""
    import importlib.util
    from pathlib import Path
    spec = importlib.util.spec_from_file_location(
        "plw", Path(__file__).parent.parent / "internal" /
        "matrix-centris-rpa" / "portal_link_watcher.py")
    w = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(w)
    res = w.parse_summary_text(
        "3 of 21\n143-145 Allée du 15e, Mont-Blanc\n$449,900\n"
        "Style\nTwo or more storey\nYear Built\n2010\nLiving Area\n"
        "2,014 sqft\nMun. Taxes\n$3,311\nBedrooms\n3\nBathrooms\n2\n"
        "Centris No. 17004507\n")
    assert res["centris_no"] == "17004507" and res["price"] == 449900
    assert res["fields"]["year"] == 2010
    assert res["fields"]["living_sqft"] == 2014
    assert res["beds"] == 3 and res["baths"] == 2
    com = w.parse_summary_text(
        "1 of 21\n85-110 Rue Rolland, Saint-Jérôme\n"
        "$15.00/sqft/year + GST/QST\nStyle\nUnit\n"
        "Building Type\nDetached\nBuilding Size\nLot Size\n"
        "Occupancy\n2026-06-01\n")
    assert "price" not in com                       # rent ≠ sale price
    assert com["fields"]["building_type"] == "Detached"
    assert "building_sqft" not in com["fields"]     # collapsed empty cell
