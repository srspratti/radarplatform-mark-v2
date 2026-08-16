"""Matrix results-PDF ingestion — the link-only-board workaround."""
import base64

from radar_hub.connectors.matrix_pdf import parse_matrix_pdf_text
from radar_hub.models import Listing

T = "danny"

# Real-world shape (validated against a live my:Partial export): pypdf glues
# fields together — number to status to municipality to street, PT to BT —
# and the next row's date can stick to the previous row's tail.
SAMPLE_TEXT = """Partial
Emailed
 Centris No.STMun/Bor. Address PriceAsked/Sold PriceBuilding SizeYear BuiltPT BT RmsBdrmBath/PR
2026-08-09
17004507ACMont Blanc143-145 Allee du 15e$28,000/monthX 3 month(s) 79 X 39.4 ft irr 4,690.8 sqm 2010 CTDET13 3+1 3+0 Y Y N
2026-08-09
12149325ACS Anne du Lac9-9A Rue Sicotte $449,900 $449,90028 X 42 ft 9,371 sqm$216,200$50,100 1976 BUNDET8 3+2 2+0 N Y Y2026-08-09
24256061ACRiviere Rouge150 Ch. Papp $534,500 $534,50035.6 X 33.9 ft irr 7,293.3 sqm$239,200$221,6001962 BUNDET8 3+2 2+0 Y N N
"""


def _mini_pdf(text: str) -> bytes:
    """Smallest valid single-page PDF carrying `text` (one Tj per line) —
    enough for pypdf.extract_text to round-trip the parser input."""
    lines = [ln.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)")
             for ln in text.splitlines() if ln.strip()]
    stream = "BT /F1 9 Tf 20 760 Td " + " ".join(
        f"({ln}) Tj 0 -12 Td" for ln in lines) + " ET"
    body = stream.encode("latin-1")
    objs = [
        b"<</Type/Catalog/Pages 2 0 R>>",
        b"<</Type/Pages/Kids[3 0 R]/Count 1>>",
        b"<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R"
        b"/Resources<</Font<</F1 5 0 R>>>>>>",
        b"<</Length " + str(len(body)).encode() + b">>stream\n" + body
        + b"\nendstream",
        b"<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>",
    ]
    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for i, obj in enumerate(objs, start=1):
        offsets.append(len(out))
        out += f"{i} 0 obj".encode() + obj + b"endobj\n"
    xref_at = len(out)
    out += b"xref\n0 " + str(len(objs) + 1).encode() + b"\n"
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += f"{off:010d} 00000 n \n".encode()
    out += (b"trailer<</Size " + str(len(objs) + 1).encode()
            + b"/Root 1 0 R>>\nstartxref\n" + str(xref_at).encode()
            + b"\n%%EOF")
    return bytes(out)


def test_parse_matrix_grid_rows():
    cards = parse_matrix_pdf_text(SAMPLE_TEXT)
    assert [c["centris_no"] for c in cards] == ["17004507", "12149325",
                                                "24256061"]
    by_no = {c["centris_no"]: c for c in cards}
    assert by_no["12149325"]["price"] == 449900
    assert by_no["12149325"]["address"] == "9-9A Rue Sicotte"
    assert by_no["12149325"]["area"] == "S Anne du Lac"
    assert by_no["17004507"]["address"] == "143-145 Allee du 15e"
    assert by_no["17004507"]["area"] == "Mont Blanc"
    assert by_no["24256061"]["address"] == "150 Ch. Papp"
    assert by_no["24256061"]["area"] == "Riviere Rouge"
    assert by_no["12149325"]["beds"] == 3 and by_no["12149325"]["baths"] == 2
    assert by_no["12149325"]["prop_type"] == "Bungalow"
    assert by_no["17004507"]["price"] == 28000  # rental — number still lands
    assert all(c["url"] == "" for c in cards)   # grid has no per-listing links


def test_ingest_pdf_endpoint_populates_vitrine(client, db):
    lead = client.post("/api/leads", json={
        "name": "PDF Client", "phone": "514 555 0170",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    pdf_b64 = base64.b64encode(_mini_pdf(SAMPLE_TEXT)).decode()
    r = client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": c["id"], "content_b64": pdf_b64,
        "filename": "resultats.pdf"}).json()
    assert r["parsed_rows"] == 3 and r["listings_new"] == 3
    # idempotent: same PDF again → all duplicates
    r2 = client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": c["id"], "content_b64": pdf_b64,
        "filename": "resultats.pdf"}).json()
    assert r2["listings_new"] == 0 and r2["listings_dup"] == 3
    # the client's Vitrine now serves the parsed rows
    rows = client.get(f"/api/vitrine/listings/{c['portal_token']}").json()
    assert {x["centris_no"] for x in rows} == {"17004507", "12149325",
                                              "24256061"}
    assert db.query(Listing).filter_by(contact_id=c["id"]).count() == 3


# Condensed from a real "Client Detailed with Photo Album" export
DETAILED_TEXT = """LES IMMEUBLES TEST INC.
17004507 (Active)Centris No.
143-145 Allee du 15e
Property Type Two or more storey Year Built
2010
Building Type Detached
Building Size
Living Area
Lot Size
4,099.97 sqft
2,014.03 sqft
50,491.33 sqftLot Area
Taxes (annual)
$3,311 (2026)Municipal
$143 (2026)School
Level Room Size Floor Covering Additional Information
GF Living room Fireplace-Stove. Stone fireplaceWood23.1 X 18 ft irr
GF Kitchen Wood15 X 14 ft
GF Primary bedroom Wood22 X 19.6 ft irr
Remarks
LA PERLE DES MONTAGNES - Tastefully decorated cottage nestled in the heart
of the golf course, with lake views, cathedral ceilings and five bedrooms.
Centris No. 17004507 - Page 1 of 2
"""


def test_parse_detailed_export_enrichment_fields():
    from radar_hub.connectors.matrix_pdf import parse_detailed_pdf
    items = parse_detailed_pdf(_mini_pdf(DETAILED_TEXT))
    assert len(items) == 1
    d = items[0]
    assert d["centris_no"] == "17004507"
    assert d["year"] == 2010
    assert d["living_sqft"] == 2014 and d["lot_sqft"] == 50491
    assert d["taxes_mun"] == 3311 and d["taxes_school"] == 143
    assert d["address"] == "143-145 Allee du 15e"
    assert "PERLE DES MONTAGNES" in d["remarks"]
    names = [(r["name"], r["w_ft"], r["d_ft"]) for r in d["rooms"]]
    assert ("Living room", 23.1, 18.0) in names
    assert ("Primary bedroom", 22.0, 19.6) in names
    assert d["photos"] == []  # test PDF carries no album pages


def test_ingest_detailed_pdf_enriches_listing(client, db):
    lead = client.post("/api/leads", json={
        "name": "Enrich Client", "phone": "514 555 0180",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    # grid first (creates the listing), then detailed (enriches it)
    grid = base64.b64encode(_mini_pdf(SAMPLE_TEXT)).decode()
    client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": c["id"], "content_b64": grid})
    det = base64.b64encode(_mini_pdf(DETAILED_TEXT)).decode()
    r = client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": c["id"], "content_b64": det}).json()
    assert r["mode"] == "detailed" and r["enriched"] == ["17004507"]
    assert r["listings_new"] == 0  # already existed from the grid
    rows = client.get(f"/api/vitrine/listings/{c['portal_token']}").json()
    by_no = {x["centris_no"]: x for x in rows}
    d = by_no["17004507"]["details"]
    assert d["year"] == 2010 and d["taxes_mun"] == 3311
    assert len(d["rooms"]) == 3 and "PERLE" in d["remarks"]
    # grid data untouched
    assert by_no["17004507"]["price"] == 28000


def test_ingest_pdf_rejects_garbage(client):
    lead = client.post("/api/leads", json={"name": "X", "phone": "",
                                           "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    r = client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": c["id"],
        "content_b64": base64.b64encode(b"not a pdf at all").decode()})
    assert r.status_code == 422


def test_email_pdf_link_fetch_opt_in(client, db, monkeypatch):
    """Matrix 'Email PDF' sends a LINK — with the opt-in on, the hub fetches
    the linked document as the email's intended recipient."""
    from radar_hub import features
    from radar_hub.connectors import matrix_pdf
    from radar_hub.connectors.matrix_email import process_raw_email
    from radar_hub.models import Contact
    lead = client.post("/api/leads", json={
        "name": "Link Client", "phone": "514 555 0172",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    intake = db.get(Contact, c["id"]).intake_email
    raw = (f"To: {intake}\nSubject: Vos inscriptions\n\n"
           "here are the new listings\n"
           "https://matrix.centris.ca/Matrix/GetMedia/results.pdf\n")
    # off by default → nothing fetched
    out = process_raw_email(db, T, raw, raw_id="lnk-0")
    assert out["pdf_listings"] == 0
    # opt-in on + stubbed fetcher (no network in tests)
    orig = features.setting
    monkeypatch.setattr(features, "setting", lambda k, d=None:
                        True if k == "matrix_pdf_link_fetch" else orig(k, d))
    monkeypatch.setattr(matrix_pdf, "fetch_pdf_link",
                        lambda url, max_bytes=0: _mini_pdf(SAMPLE_TEXT))
    out = process_raw_email(db, T, raw, raw_id="lnk-1")
    assert out["routed_by_intake"] and out["pdf_listings"] == 3
    assert out["listings_new"] == 3


def test_email_with_pdf_attachment_routes_to_client(client, db):
    """Matrix 'Email PDF' sent to the client's intake address → Vitrine."""
    from radar_hub.connectors.matrix_email import process_raw_email
    from radar_hub.models import SessionLocal, Contact
    lead = client.post("/api/leads", json={
        "name": "Attach Client", "phone": "514 555 0171",
        "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    intake = db.get(Contact, c["id"]).intake_email
    raw = (f"To: {intake}\nSubject: Vos inscriptions\n\n"
           "here are the new listings\nClick the following link\n")
    out = process_raw_email(db, T, raw, raw_id="eml-pdf-1",
                            pdf_attachments=[_mini_pdf(SAMPLE_TEXT)])
    assert out["routed_by_intake"] is True
    assert out["pdf_listings"] == 3 and out["listings_new"] == 3


# --------------------------------------------------------------------------
# Whichever document arrives, whatever facts it carries must land on the row.
# The failure this guards: a client's cards showed « Prix à confirmer » with
# the price sitting in the grid PDF, because the rows already existed as bare
# identifiers and the grid counted them as duplicates.
# --------------------------------------------------------------------------
GRID_WITH_PRICES = """ Centris No.STMun/Bor. Address PriceAsked/Sold PriceBuilding SizeYear BuiltPT BT RmsBdrmBath/PR
2026-08-09
12149325ACS Anne du Lac9-9A Rue Sicotte $449,900 $449,90028 X 42 ft 9,371 sqm$216,200$50,100 1976 BUNDET8 3+2 2+0 N Y Y2026-08-09
24256061ACRiviere Rouge150 Ch. Papp $534,500 $534,50035.6 X 33.9 ft irr 7,293.3 sqm$239,200$221,6001962 BUNDET8 3+2 2+0 Y N N
"""


def _stub_client(client):
    lead = client.post("/api/leads", json={
        "name": "Marie Test", "email": "marie@example.com",
        "source": "matrix_visit"}).json()
    return client.post(f"/api/leads/{lead['id']}/convert").json()


def _b64(raw):
    return base64.b64encode(raw).decode()


def test_grid_pdf_backfills_rows_that_arrived_as_bare_identifiers(client, db):
    """Watcher/numbers-print first, grid PDF second — the grid completes the
    stubs instead of reporting them as duplicates and dropping the facts."""
    from radar_hub.models import Listing
    c = _stub_client(client)
    client.post("/api/connectors/matrix/ingest-numbers",
                json={"contact_id": c["id"],
                      "numbers": ["12149325", "24256061"]})
    rows = db.query(Listing).filter_by(contact_id=c["id"]).all()
    assert all(r.price == 0 and not r.address for r in rows)

    r = client.post("/api/connectors/matrix/ingest-pdf",
                    json={"contact_id": c["id"],
                          "content_b64": _b64(_mini_pdf(GRID_WITH_PRICES)),
                          "filename": "grille.pdf"}).json()
    assert r["listings_new"] == 0 and r["listings_dup"] == 2
    assert r["listings_filled"] == 2          # both stubs completed
    db.expire_all()
    by_no = {x.centris_no: x for x in
             db.query(Listing).filter_by(contact_id=c["id"]).all()}
    assert by_no["12149325"].price == 449900
    assert "Rue Sicotte" in by_no["12149325"].address
    assert by_no["12149325"].beds == 3 and by_no["12149325"].baths == 2
    assert by_no["24256061"].price == 534500


def test_a_second_grid_never_overwrites_corrected_values(client, db):
    from radar_hub.models import Listing
    c = _stub_client(client)
    client.post("/api/connectors/matrix/ingest-pdf",
                json={"contact_id": c["id"],
                      "content_b64": _b64(_mini_pdf(GRID_WITH_PRICES))})
    row = (db.query(Listing)
           .filter_by(contact_id=c["id"], centris_no="12149325").first())
    row.address = "Adresse corrigée à la main"
    db.commit()
    client.post("/api/connectors/matrix/ingest-pdf",
                json={"contact_id": c["id"],
                      "content_b64": _b64(_mini_pdf(GRID_WITH_PRICES))})
    db.expire_all()
    row = (db.query(Listing)
           .filter_by(contact_id=c["id"], centris_no="12149325").first())
    assert row.address == "Adresse corrigée à la main"


DETAILED_WITH_PRICE = DETAILED_TEXT.replace(
    "Property Type Two or more storey Year Built",
    "Asking Price $675,000\n4 Bedrooms 2 Bathrooms\n"
    "Property Type Two or more storey Year Built")


def test_detailed_pdf_promotes_its_facts_to_the_card_columns(client, db):
    """A detail sheet used to fill only `details`, so the portal card kept
    showing « Prix à confirmer » with the price present in the JSON."""
    from radar_hub.models import Listing
    c = _stub_client(client)
    client.post("/api/connectors/matrix/ingest-numbers",
                json={"contact_id": c["id"], "numbers": ["17004507"]})
    r = client.post("/api/connectors/matrix/ingest-pdf",
                    json={"contact_id": c["id"],
                          "content_b64": _b64(_mini_pdf(DETAILED_WITH_PRICE))}
                    ).json()
    assert r["mode"] == "detailed"
    assert {"price", "address", "beds"} <= set(r["fields_filled"])
    db.expire_all()
    row = (db.query(Listing)
           .filter_by(contact_id=c["id"], centris_no="17004507").first())
    assert row.price == 675000 and row.beds == 4 and row.baths == 2
    assert "Allee du 15e" in row.address
    assert row.details["year"] == 2010          # details still enriched


def test_an_unlabeled_dollar_figure_is_never_read_as_the_price(client, db):
    """Detail sheets carry tax and assessment dollars. Guessing turns an
    evaluation into an asking price — « Prix à confirmer » is the honest
    answer instead."""
    from radar_hub.connectors.matrix_pdf import parse_detailed_pdf
    items = parse_detailed_pdf(_mini_pdf(DETAILED_TEXT))   # taxes only
    assert "price" not in items[0]
    assert items[0]["taxes_mun"] == 3311


def test_import_reports_how_many_listings_still_lack_a_price(client, db):
    """The portal hides the microsite until the price is known, so every
    import says how many cards are still half-built."""
    c = _stub_client(client)
    r = client.post("/api/connectors/matrix/ingest-numbers",
                    json={"contact_id": c["id"],
                          "numbers": ["12149325", "24256061"]}).json()
    assert r["price_gap"]["without_price"] == 2
    r2 = client.post("/api/connectors/matrix/ingest-pdf",
                     json={"contact_id": c["id"],
                           "content_b64": _b64(_mini_pdf(GRID_WITH_PRICES))}).json()
    assert r2["price_gap"]["without_price"] == 0


def test_parse_preview_reads_without_writing(client, db):
    """Diagnosing a board layout must never touch the client's book."""
    from radar_hub.models import Listing
    c = _stub_client(client)
    r = client.post("/api/connectors/matrix/parse-preview",
                    json={"contact_id": c["id"],
                          "content_b64": _b64(_mini_pdf(GRID_WITH_PRICES)),
                          "filename": "grille.pdf"}).json()
    assert r["mode"] == "grid" and r["with_price"] == 2
    assert r["cards"][0]["price"] == 449900
    assert db.query(Listing).filter_by(contact_id=c["id"]).count() == 0


def test_parse_preview_flags_a_numbers_only_document(client, db):
    c = _stub_client(client)
    r = client.post("/api/connectors/matrix/parse-preview",
                    json={"contact_id": c["id"],
                          "content_b64": _b64(_mini_pdf(
                              "Centris No. : 12149325\nCentris No. : 24256061"))}
                    ).json()
    assert r["mode"] == "numbers" and len(r["numbers"]) == 2


def test_a_grid_dropped_without_a_client_says_which_control_to_use(client, db):
    r = client.post("/api/connectors/matrix/ingest-pdf",
                    json={"contact_id": 0,
                          "content_b64": _b64(_mini_pdf(GRID_WITH_PRICES))})
    assert r.status_code == 422
    assert "Grille pour" in r.json()["detail"]
