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
    lines = [ln.replace("(", "[").replace(")", "]")
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
