"""Source.immo certified-distributor slot (mock Immo Distribution API)."""
import base64

import httpx

from radar_hub.connectors.source_immo import SourceImmoClient, sweep
from radar_hub.models import Listing, ListingPhoto

T = "danny"
_JPEG = b"\xff\xd8\xff\xe0FAKEJPEG"

_LISTING = {
    "ref_number": "17004507",
    "price": {"sell": {"amount": 449900}},
    "location": {"address": {"street_number": "143-145",
                             "street_name": "Allée du 15e",
                             "postal_code": "J0T 1J1"}},
    "bedroom_count": 3, "bathroom_count": 2,
    "building": {"year_built": 2010, "dimension": {"area": 2014}},
    "taxes": {"municipal": 3311},
    "description": {"fr": "Nichée au cœur du golf…", "en": "Nestled…"},
    "photos": [{"url": "https://media.source.immo/1.jpg"},
               {"url": "https://media.source.immo/2.jpg"}],
}


def _transport():
    def handler(request: httpx.Request) -> httpx.Response:
        path = request.url.path
        if path == "/api/auth/get_token/acct-1/key-1":
            return httpx.Response(200, json={"token": "si-tok"})
        if request.url.host == "media.source.immo":
            return httpx.Response(200, content=_JPEG)
        # data calls must carry the token (param or Bearer header)
        assert (request.url.params.get("token") == "si-tok"
                or request.headers.get("Authorization") == "Bearer si-tok")
        if path == "/api/listing/ref/17004507":
            return httpx.Response(200, json=_LISTING)
        if path.startswith("/api/listing/ref/"):
            return httpx.Response(404)
        return httpx.Response(404)
    return httpx.MockTransport(handler)


def _client():
    return SourceImmoClient(account_id="acct-1", api_key="key-1",
                            base="https://api.test", transport=_transport())


def test_sourceimmo_sweep_enriches_and_composes_with_ddf(client, db):
    lead = client.post("/api/leads", json={"name": "SI Client",
                                           "source": "matrix_visit"}).json()
    c = client.post(f"/api/leads/{lead['id']}/convert").json()
    db.add(Listing(tenant_id=T, contact_id=c["id"], centris_no="17004507",
                   address="143-145 Allée du 15e"))
    db.add(Listing(tenant_id=T, contact_id=c["id"], centris_no="99999999",
                   address="1 rue Inconnue"))
    # a row DDF already enriched must NOT be rescanned (slots compose)
    db.add(Listing(tenant_id=T, contact_id=c["id"], centris_no="88888888",
                   address="2 rue Déjà-Faite", details={"source": "ddf"}))
    db.commit()
    r = sweep(db, T, _client())
    assert r["enriched"] == 1 and r["unknown"] == 1 and r["scanned"] == 2
    row = db.query(Listing).filter_by(centris_no="17004507").one()
    assert row.details["source"] == "source_immo"
    assert row.details["year"] == 2010
    assert row.details["living_sqft"] == 2014
    assert row.details["taxes_mun"] == 3311
    assert row.details["remarks"].startswith("Nichée")
    photos = (db.query(ListingPhoto)
              .filter_by(tenant_id=T, centris_no="17004507").all())
    assert len(photos) == 2
    assert base64.b64decode(photos[0].content) == _JPEG
    # second sweep: nothing left to scan for this feed
    assert sweep(db, T, _client())["enriched"] == 0


def test_sourceimmo_unconfigured_is_dormant(client):
    r = client.post("/api/connectors/sourceimmo/enrich").json()
    assert r["enriched"] == 0 and "Source.immo" in r["error"]
    s = client.get("/api/connectors/sourceimmo/status").json()
    assert s["configured"] is False
