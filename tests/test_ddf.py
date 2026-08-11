"""CREA DDF® enrichment slot (mock RESO Web API)."""
import base64
import json

import httpx

from radar_hub.connectors.ddf import DDFClient, sweep
from radar_hub.models import Listing, ListingPhoto

T = "danny"
_JPEG = b"\xff\xd8\xff\xe0FAKEJPEG"

_PROPERTY = {"value": [{
    "ListingId": "17004507", "YearBuilt": 2010, "LivingArea": 2014.03,
    "LotSizeArea": 50491.33, "TaxAnnualAmount": 3311,
    "PublicRemarks": "Nestled in the heart of the golf course…",
    "ListingURL": "https://www.realtor.ca/real-estate/17004507",
    "Media": [{"MediaURL": "https://ddf.media/1.jpg"},
              {"MediaURL": "https://ddf.media/2.jpg"}],
}]}


def _transport():
    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path.endswith("/token"):
            body = request.content.decode()
            assert "client_credentials" in body and "cid-1" in body
            return httpx.Response(200, json={"access_token": "tok-1"})
        if request.url.path.endswith("/Property"):
            assert request.headers["Authorization"] == "Bearer tok-1"
            filt = request.url.params["$filter"]
            if "17004507" in filt:
                return httpx.Response(200, json=_PROPERTY)
            return httpx.Response(200, json={"value": []})
        if request.url.host == "ddf.media":
            return httpx.Response(200, content=_JPEG)
        return httpx.Response(404)
    return httpx.MockTransport(handler)


def _client():
    return DDFClient(client_id="cid-1", client_secret="sec-1",
                     token_url="https://id.test/token",
                     base="https://api.test/odata/v1",
                     transport=_transport())


def test_ddf_sweep_enriches_known_listings(client, db):
    lead = client.post("/api/leads", json={"name": "DDF Client",
                                           "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    db.add(Listing(tenant_id=T, contact_id=c["id"], centris_no="17004507",
                   address="143-145 Allée du 15e"))
    db.add(Listing(tenant_id=T, contact_id=c["id"], centris_no="99999999",
                   address="1 rue Inconnue"))
    db.commit()
    r = sweep(db, T, _client())
    assert r["enriched"] == 1 and r["unknown"] == 1
    row = db.query(Listing).filter_by(centris_no="17004507").one()
    assert row.details["year"] == 2010
    assert row.details["living_sqft"] == 2014
    assert row.details["taxes_mun"] == 3311
    assert row.details["source"] == "ddf"
    assert "realtor.ca" in row.url
    photos = (db.query(ListingPhoto)
              .filter_by(tenant_id=T, centris_no="17004507").all())
    assert len(photos) == 2
    assert base64.b64decode(photos[0].content) == _JPEG
    # second sweep: already stamped source=ddf → nothing rescanned
    r2 = sweep(db, T, _client())
    assert r2["enriched"] == 0


def test_ddf_unconfigured_is_dormant(client):
    r = client.post("/api/connectors/ddf/enrich").json()
    assert r["enriched"] == 0 and "DDF" in r["error"]
    s = client.get("/api/connectors/ddf/status").json()
    assert s["configured"] is False


def test_detailed_pdf_routes_without_contact(client, db):
    """Global drop: a detailed PDF with no contact_id enriches every client
    holding that Centris number."""
    from tests.test_pdf_ingest import DETAILED_TEXT, SAMPLE_TEXT, _mini_pdf
    ids = []
    for n in (1, 2):
        lead = client.post("/api/leads", json={
            "name": f"Client {n}", "phone": f"514 555 02{n}0",
            "source": "matrix_visit"}).json()
        c = client.post(f"/api/leads/{lead['id']}/convert").json()
        ids.append(c["id"])
        client.post("/api/connectors/matrix/ingest-pdf", json={
            "contact_id": c["id"],
            "content_b64": base64.b64encode(_mini_pdf(SAMPLE_TEXT)).decode()})
    r = client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": 0,
        "content_b64": base64.b64encode(_mini_pdf(DETAILED_TEXT)).decode()}).json()
    assert r["mode"] == "detailed" and r["enriched"] == ["17004507"]
    for cid in ids:
        row = db.query(Listing).filter_by(contact_id=cid,
                                          centris_no="17004507").one()
        assert row.details["year"] == 2010
    # grid PDF without a contact is refused with a clear message
    r = client.post("/api/connectors/matrix/ingest-pdf", json={
        "contact_id": 0,
        "content_b64": base64.b64encode(_mini_pdf(SAMPLE_TEXT)).decode()})
    assert r.status_code == 422 and "grille" in r.json()["detail"].lower()
