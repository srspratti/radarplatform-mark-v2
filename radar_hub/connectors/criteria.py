"""Criteria-driven listing matching — provider-neutral.

Each client's saved Vitrine criteria (« Mes alertes ») run against whichever
feed is available, and the matches land in their inventory through the normal
listing pipeline (deduped, alert-mailer mirrored, enrichable). This is the
self-service half of the product: the client edits their own criteria and new
matches appear, without the broker touching Matrix.

It does NOT replace Matrix auto-email ingestion, which carries the broker's
own curated search against the full Centris inventory. The two compose: same
`store_listings` sink, deduped per client by Centris number.

Providers, in order of preference:
  ddf         — CREA DDF® licensed national pool (connectors.ddf)
  demo        — fabricated listings for exercising the UX before credentials
                arrive. OFF by default and never enabled implicitly; every
                card is stamped source="demo" and carries « (démo) » in its
                address so it can't be mistaken for real inventory.
  (source_immo slots in here once their search endpoint is wired.)
"""
from __future__ import annotations

import hashlib
import json
from typing import Callable, NamedTuple

import httpx
from sqlalchemy.orm import Session

from .. import features
from ..models import Contact, PortalKV

PREFS_KEY = "vitrine2_prefs"


class Provider(NamedTuple):
    name: str
    search: Callable[[dict, int], list[dict]]


# ------------------------------------------------------------------ demo ---
_DEMO_TYPES = ["Maison unifamiliale", "Condo", "Plex", "Maison de ville"]
_DEMO_STREETS = ["rue des Érables", "avenue du Parc", "boulevard Saint-Joseph",
                 "rue Principale", "chemin du Lac", "rue Notre-Dame"]


def demo_cards(prefs: dict, top: int = 20) -> list[dict]:
    """Plausible-but-fake listings inside the client's criteria. Deterministic
    on the criteria themselves, so re-running the sweep is idempotent instead
    of filling the portal with fresh junk on every pass."""
    pmin = int(prefs.get("pmin") or 200_000)
    pmax = int(prefs.get("pmax") or 700_000)
    if pmax < pmin:
        pmin, pmax = pmax, pmin
    beds = int(prefs.get("beds") or 2)
    areas = [a for a in (prefs.get("areas") or []) if a] or ["Montréal"]
    n = max(1, min(int(top or 6), 6))
    cards = []
    for i in range(n):
        area = areas[i % len(areas)]
        step = (pmax - pmin) * (i + 1) // (n + 1)
        price = pmin + round(step / 1000) * 1000
        seed = hashlib.sha256(
            f"{area}|{price}|{beds}|{i}".encode()).hexdigest()
        cards.append({
            # 99xxxxxx: a range no real Centris listing uses
            "centris_no": "99" + f"{int(seed[:6], 16) % 1_000_000:06d}",
            "address": (f"{100 + int(seed[6:9], 16) % 9800} "
                        f"{_DEMO_STREETS[int(seed[9:11], 16) % 6]} (démo)"),
            "area": area[:190],
            "price": price,
            "beds": beds + i % 2,
            "baths": 1 + i % 2,
            "prop_type": _DEMO_TYPES[int(seed[11:13], 16) % 4],
            "url": "",
            "details": {"source": "demo", "demo": True},
        })
    return cards


# -------------------------------------------------------------- providers ---
def ddf_provider(client=None) -> tuple[Provider | None, str]:
    from .ddf import DDFClient, search_cards
    c = client or DDFClient()
    if not c.configured:
        return None, "DDF non configuré (DDF_CLIENT_ID/SECRET)"
    return Provider("ddf", lambda p, top: search_cards(p, top, c)), ""


def demo_provider() -> tuple[Provider | None, str]:
    if not features.setting("criteria_demo_provider", False):
        return None, ("fournisseur démo désactivé "
                      "(features.toml → criteria_demo_provider)")
    return Provider("demo", demo_cards), ""


def auto_provider() -> tuple[Provider | None, str]:
    """Licensed feed when configured; the demo generator only when it has
    been switched on deliberately."""
    prov, ddf_err = ddf_provider()
    if prov:
        return prov, ""
    prov, demo_err = demo_provider()
    if prov:
        return prov, ""
    return None, f"{ddf_err}; {demo_err}"


# ------------------------------------------------------------------ sweep ---
def client_prefs(db: Session, tenant_id: str, c: Contact) -> dict | None:
    """What the CLIENT saved in the Vitrine (« Mes alertes »)."""
    kv = (db.query(PortalKV)
          .filter_by(tenant_id=tenant_id, token=c.portal_token,
                     key=PREFS_KEY).first())
    if not kv:
        return None
    try:
        return json.loads(kv.value).get("p") or {}
    except (ValueError, AttributeError):
        return None


def criteria_sets(db: Session, tenant_id: str,
                  c: Contact) -> list[tuple[str, dict]]:
    """The two channels for one client, in precedence order.

    "broker" is the curated search the broker set in /ops — their judgment,
    the hub-side equivalent of a Matrix saved search. "client" is what the
    client typed into the Vitrine. Either may be absent; when both match the
    same listing it is stored once and attributed to the broker, since that
    ran first."""
    sets: list[tuple[str, dict]] = []
    if isinstance(c.broker_criteria, dict) and c.broker_criteria:
        sets.append(("broker", c.broker_criteria))
    prefs = client_prefs(db, tenant_id, c)
    if prefs is not None:
        sets.append(("client", prefs))
    return sets


def match_criteria(db: Session, tenant_id: str, top: int = 20,
                   provider: Provider | None = None,
                   contact: Contact | None = None) -> dict:
    """Run saved criteria for every portal client (or just `contact`) and file
    the matches. Returns per-client detail so /ops can show what moved."""
    from .matrix_email import store_listings

    prov, err = (provider, "") if provider else auto_provider()
    if not prov:
        return {"clients": 0, "matched": 0, "new": 0,
                "provider": "aucun", "error": err}
    out: dict = {"clients": 0, "matched": 0, "new": 0,
                 "broker_new": 0, "client_new": 0,
                 "provider": prov.name, "details": []}
    rows = [contact] if contact else (
        db.query(Contact)
        .filter(Contact.tenant_id == tenant_id,
                Contact.lifecycle == "client",
                Contact.portal_token != "").all())
    for c in rows:
        if not c or not c.portal_token:
            continue
        sets = criteria_sets(db, tenant_id, c)
        if not sets:
            continue
        out["clients"] += 1
        for channel, prefs in sets:
            try:
                cards = prov.search(prefs, top)
            except httpx.HTTPError as exc:
                out["details"].append({"client": c.name, "channel": channel,
                                       "error": str(exc)[:120]})
                continue
            # Which channel surfaced a listing is worth keeping: a broker's
            # curated pick reads differently to the client than a match on
            # their own filters.
            cards = [dict(card, details={**(card.get("details") or {}),
                                         "match_source": channel})
                     for card in cards]
            r = store_listings(db, tenant_id, c, cards,
                               raw_id=f"{prov.name}match-{channel}-{c.id}")
            out["matched"] += len(cards)
            out["new"] += r["listings_new"]
            out[f"{channel}_new"] += r["listings_new"]
            out["details"].append({"client": c.name, "channel": channel,
                                   "matched": len(cards),
                                   "new": r["listings_new"]})
    return out
