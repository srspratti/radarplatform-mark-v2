"""Source.immo (Immo Distribution API, ID-3 Technologies) — certified
Centris data distributor. The LICENSED Québec-native alternative/complement
to the CREA DDF® pool: the broker signs a Centris data-distribution
authorization through Source.immo and receives an account id + API key.

Auth (public docs, api-v1.source.immo):
  GET /api/auth/get_token/{account_id}/{api_key}  →  session token,
  then the token rides along on data calls. Their docs don't publish the
  exact transport for the token, so we send it BOTH as a Bearer header and
  as a ?token= query param — adjust in _headers/_params once onboarding
  docs land.

Field mapping targets the names their public sample templates expose
(ref_number, price.sell.amount, location.address.*, bedroom_count,
bathroom_count, photos[].url, building.dimension.area) — best-effort until
real payloads are available; adjust in _map_listing.

Dormant by design without credentials, exactly like the DDF® slot.
"""
from __future__ import annotations

import base64

import httpx
from sqlalchemy.orm import Session

from ..config import settings
from ..models import Listing, ListingPhoto


class SourceImmoClient:
    def __init__(self, account_id: str = "", api_key: str = "",
                 base: str = "", transport: httpx.BaseTransport | None = None):
        self.account_id = account_id or settings.SOURCEIMMO_ACCOUNT_ID
        self.api_key = api_key or settings.SOURCEIMMO_API_KEY
        self.base = (base or settings.SOURCEIMMO_BASE).rstrip("/")
        self._transport = transport
        self._token: str | None = None

    @property
    def configured(self) -> bool:
        return bool(self.account_id and self.api_key)

    def _client(self) -> httpx.Client:
        return httpx.Client(timeout=30, transport=self._transport)

    def _auth(self) -> str:
        if self._token:
            return self._token
        with self._client() as c:
            r = c.get(f"{self.base}/api/auth/get_token/"
                      f"{self.account_id}/{self.api_key}")
            r.raise_for_status()
            body = r.json()
            # token may come back bare or wrapped — accept both
            self._token = (body if isinstance(body, str)
                           else body.get("token") or body.get("access_token")
                           or body.get("key") or "")
            if not self._token:
                raise httpx.HTTPError("source.immo: jeton introuvable dans "
                                      "la réponse get_token")
            return self._token

    def _get(self, path: str, params: dict | None = None) -> httpx.Response:
        tok = self._auth()
        with self._client() as c:
            return c.get(f"{self.base}{path}",
                         params={**(params or {}), "token": tok},
                         headers={"Authorization": f"Bearer {tok}"})

    def listing_by_ref(self, ref: str) -> dict | None:
        """One listing by its reference (Centris) number, or None."""
        r = self._get(f"/api/listing/ref/{ref}")
        if r.status_code == 404:
            return None
        r.raise_for_status()
        body = r.json()
        # payload may arrive bare or wrapped in a "data" envelope
        row = (body.get("data") or body) if isinstance(body, dict) else body
        return row or None

    def fetch_photo(self, url: str) -> bytes | None:
        with self._client() as c:
            r = c.get(url)
            return r.content if (r.status_code == 200 and
                                 r.content[:2] == b"\xff\xd8") else None


def _num(v) -> int | None:
    try:
        return round(float(v))
    except (TypeError, ValueError):
        return None


def _dig(d: dict, *path):
    for k in path:
        d = d.get(k) if isinstance(d, dict) else None
        if d is None:
            return None
    return d


def _map_listing(p: dict) -> dict:
    """Immo Distribution payload → our Listing.details shape (best-effort)."""
    det: dict = {"source": "source_immo"}
    if y := _num(_dig(p, "building", "year_built") or p.get("year_built")):
        det["year"] = y
    if la := _num(_dig(p, "building", "dimension", "area")
                  or p.get("available_area")):
        det["living_sqft"] = la
    if tax := _num(_dig(p, "taxes", "municipal") or p.get("municipal_tax")):
        det["taxes_mun"] = tax
    remarks = (p.get("description") or p.get("remarks") or "")
    if isinstance(remarks, dict):  # bilingual {fr, en} shapes
        remarks = remarks.get("fr") or remarks.get("en") or ""
    if remarks := str(remarks).strip():
        det["remarks"] = remarks[:1400]
    return det


def enrich_listing(db: Session, tenant_id: str, row: Listing,
                   client: SourceImmoClient, max_photos: int = 12) -> bool:
    """Fill row.details (+ tenant-wide photos) from the certified feed.
    Returns True when the feed knew the listing."""
    p = client.listing_by_ref(row.centris_no)
    if not p:
        return False
    det = dict(row.details or {})
    det.update({k: v for k, v in _map_listing(p).items() if v})
    row.details = det
    db.commit()
    if not (db.query(ListingPhoto)
            .filter_by(tenant_id=tenant_id, centris_no=row.centris_no)
            .first()):
        photos = p.get("photos") or []
        added = 0
        for ph in photos:
            url = (ph.get("url") if isinstance(ph, dict) else str(ph)) or ""
            if not url:
                continue
            blob = client.fetch_photo(url)
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


def sweep(db: Session, tenant_id: str,
          client: SourceImmoClient | None = None, limit: int = 50) -> dict:
    """Enrich listings the certified feed hasn't touched yet. Rows already
    enriched by any licensed feed (ddf / source_immo) are skipped, so the
    two slots compose instead of fighting."""
    client = client or SourceImmoClient()
    if not client.configured:
        return {"enriched": 0, "unknown": 0,
                "error": "Source.immo non configuré (SOURCEIMMO_ACCOUNT_ID/"
                         "API_KEY) — distributeur certifié Centris, voir "
                         "source.immo"}
    rows = (db.query(Listing).filter_by(tenant_id=tenant_id)
            .order_by(Listing.received_at.desc()).limit(500).all())
    todo = [r for r in rows
            if (r.details or {}).get("source") not in ("ddf", "source_immo")
            ][:limit]
    enriched = unknown = 0
    for row in todo:
        try:
            if enrich_listing(db, tenant_id, row, client):
                enriched += 1
            else:
                unknown += 1
        except httpx.HTTPError as exc:
            return {"enriched": enriched, "unknown": unknown,
                    "error": f"source.immo: {exc}"[:200]}
    return {"enriched": enriched, "unknown": unknown, "scanned": len(todo)}
