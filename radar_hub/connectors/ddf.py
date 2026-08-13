"""CREA DDF® enrichment — the licensed, ToS-clean way to turn an MLS/Centris
number into full listing facts and photos.

Every Centris listing is syndicated to Realtor.ca through CREA. A licensed
REALTOR® can request a free **DDF data feed** (crea.ca → DDF® → e.g. the
National Shared Pool, destination "member website/tool"); CREA issues OAuth2
client credentials for the RESO Web API. With those set (DDF_CLIENT_ID /
DDF_CLIENT_SECRET), every listing that lands from a Matrix alert or PDF grid
is enriched automatically — year, areas, taxes, remarks, photos — no PDF
export needed.

Dormant by design without credentials: everything degrades to the PDF
enrichment path. Field mapping targets RESO Data Dictionary names; adjust in
_map_property if CREA's payload drifts.
"""
from __future__ import annotations

import base64

import httpx
from sqlalchemy.orm import Session

from ..config import settings
from ..models import Listing, ListingPhoto


class DDFClient:
    def __init__(self, client_id: str = "", client_secret: str = "",
                 token_url: str = "", base: str = "",
                 transport: httpx.BaseTransport | None = None):
        self.client_id = client_id or settings.DDF_CLIENT_ID
        self.client_secret = client_secret or settings.DDF_CLIENT_SECRET
        self.token_url = token_url or settings.DDF_TOKEN_URL
        self.base = (base or settings.DDF_BASE).rstrip("/")
        self._transport = transport
        self._token: str | None = None

    @property
    def configured(self) -> bool:
        return bool(self.client_id and self.client_secret)

    def _client(self) -> httpx.Client:
        return httpx.Client(timeout=30, transport=self._transport)

    def _auth(self) -> str:
        if self._token:
            return self._token
        with self._client() as c:
            r = c.post(self.token_url, data={
                "grant_type": "client_credentials",
                "client_id": self.client_id,
                "client_secret": self.client_secret,
                "scope": "DDFApi_Read",
            })
            r.raise_for_status()
            self._token = r.json()["access_token"]
            return self._token

    def property_by_mls(self, mls: str) -> dict | None:
        """One listing, RESO shape, or None when the pool doesn't carry it."""
        with self._client() as c:
            r = c.get(f"{self.base}/Property",
                      params={"$filter": f"ListingId eq '{mls}'", "$top": 1},
                      headers={"Authorization": f"Bearer {self._auth()}"})
            r.raise_for_status()
            rows = r.json().get("value", [])
            return rows[0] if rows else None

    def search_properties(self, filters: str, top: int = 20) -> list[dict]:
        """OData $filter query against the licensed pool."""
        with self._client() as c:
            r = c.get(f"{self.base}/Property",
                      params={"$filter": filters, "$top": top},
                      headers={"Authorization": f"Bearer {self._auth()}"})
            r.raise_for_status()
            return r.json().get("value", [])

    def fetch_media(self, url: str) -> bytes | None:
        with self._client() as c:
            r = c.get(url, headers={"Authorization": f"Bearer {self._auth()}"})
            return r.content if (r.status_code == 200 and
                                 r.content[:2] == b"\xff\xd8") else None


def _num(v) -> int | None:
    try:
        return round(float(v))
    except (TypeError, ValueError):
        return None


def _map_property(p: dict) -> dict:
    """RESO Data Dictionary → our Listing.details shape (best-effort)."""
    det: dict = {"source": "ddf"}
    if y := _num(p.get("YearBuilt")):
        det["year"] = y
    if la := _num(p.get("LivingArea")):
        det["living_sqft"] = la
    if lot := _num(p.get("LotSizeArea")):
        det["lot_sqft"] = lot
    if tax := _num(p.get("TaxAnnualAmount")):
        det["taxes_mun"] = tax
    if remarks := (p.get("PublicRemarks") or "").strip():
        det["remarks"] = remarks[:1400]
    return det


def enrich_listing(db: Session, tenant_id: str, row: Listing,
                   client: DDFClient, max_photos: int = 12) -> bool:
    """Fill row.details (+ tenant-wide photos) from the licensed feed.
    Returns True when the feed knew the listing."""
    p = client.property_by_mls(row.centris_no)
    if not p:
        return False
    det = dict(row.details or {})
    det.update({k: v for k, v in _map_property(p).items() if v})
    row.details = det
    if not row.url and p.get("ListingURL"):
        row.url = str(p["ListingURL"])[:500]
    db.commit()
    if not (db.query(ListingPhoto)
            .filter_by(tenant_id=tenant_id, centris_no=row.centris_no)
            .first()):
        media = p.get("Media") or []
        added = 0
        for m in media:
            url = m.get("MediaURL") or ""
            if not url:
                continue
            blob = client.fetch_media(url)
            if blob:
                db.add(ListingPhoto(tenant_id=tenant_id,
                                    centris_no=row.centris_no,
                                    mime="image/jpeg", sort=added,
                                    content=base64.b64encode(blob).decode()))
                added += 1
            if added >= max_photos:
                break
        if added:
            db.commit()
    return True


def _criteria_filter(p: dict) -> str:
    """Vitrine saved criteria ("Mes alertes") → OData filter. Conservative:
    price + bedrooms always; areas as City contains-any when present.
    Tune the field names here if CREA's payload uses different casing."""
    parts = [f"ListPrice ge {int(p.get('pmin', 0))}",
             f"ListPrice le {int(p.get('pmax', 10_000_000))}"]
    if beds := int(p.get("beds", 0) or 0):
        parts.append(f"BedroomsTotal ge {beds}")
    areas = [a.replace("'", "''") for a in (p.get("areas") or [])][:6]
    if areas:
        parts.append("(" + " or ".join(
            f"contains(City,'{a}')" for a in areas) + ")")
    return " and ".join(parts)


def search_cards(prefs: dict, top: int = 20,
                 client: DDFClient | None = None) -> list[dict]:
    """Vitrine saved criteria → listing cards from the licensed pool."""
    client = client or DDFClient()
    found = client.search_properties(_criteria_filter(prefs), top=top)
    return [{
        "centris_no": str(p.get("ListingId", "")),
        "address": (p.get("UnparsedAddress") or "")[:290],
        "area": (p.get("City") or "")[:190],
        "price": _num(p.get("ListPrice")) or 0,
        "beds": _num(p.get("BedroomsTotal")) or 0,
        "baths": _num(p.get("BathroomsTotalInteger")) or 0,
        "prop_type": (p.get("PropertySubType") or "")[:120],
        "url": (p.get("ListingURL") or "")[:500],
    } for p in found if p.get("ListingId")]


def match_criteria(db: Session, tenant_id: str,
                   client: DDFClient | None = None, top: int = 20) -> dict:
    """DDF®-specific entry point for the criteria sweep. The provider-neutral
    orchestrator lives in connectors.criteria — this pins the provider to the
    licensed CREA pool (used by POST /api/connectors/ddf/match)."""
    from . import criteria
    prov, err = criteria.ddf_provider(client)
    if not prov:
        return {"clients": 0, "matched": 0, "new": 0, "error": err}
    return criteria.match_criteria(db, tenant_id, top=top, provider=prov)


def sweep(db: Session, tenant_id: str,
          client: DDFClient | None = None, limit: int = 50) -> dict:
    """Enrich every listing the feed hasn't touched yet. Safe on a schedule:
    rows already stamped source=ddf are skipped; unknown MLS numbers are
    counted, not retried in a loop (re-run tomorrow, pools refresh)."""
    client = client or DDFClient()
    if not client.configured:
        return {"enriched": 0, "unknown": 0,
                "error": "DDF non configuré (DDF_CLIENT_ID/SECRET) — voir le "
                         "guide: demande de flux DDF® auprès de l'ACI/CREA"}
    rows = (db.query(Listing).filter_by(tenant_id=tenant_id)
            .order_by(Listing.received_at.desc()).limit(500).all())
    todo = [r for r in rows if (r.details or {}).get("source") != "ddf"][:limit]
    enriched = unknown = 0
    for row in todo:
        try:
            if enrich_listing(db, tenant_id, row, client):
                enriched += 1
            else:
                unknown += 1
        except httpx.HTTPError as exc:
            return {"enriched": enriched, "unknown": unknown,
                    "error": f"DDF: {exc}"[:200]}
    return {"enriched": enriched, "unknown": unknown, "scanned": len(todo)}
