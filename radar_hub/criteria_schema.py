"""The Centris/Matrix search vocabulary, in one place.

Mirrors what a Québec broker actually sees in Matrix — the General panel
(Location · Status · Dates · Price · Description of building/lot · Rooms ·
Parking · Features) plus the frequently-used additional fields — so that:

  • the broker's curated search (/ops) and the client's Vitrine form speak
    the SAME language, field for field;
  • one filter builder turns either into a licensed-feed query;
  • adding a field is a one-line change here, not three files.

Each field declares how it is filtered upstream. `reso` is the RESO Data
Dictionary name used to build the OData filter for DDF®/Source.immo;
`reso=None` means the criterion is captured and shown but NOT yet filterable
against a live feed — the exact field name has to be confirmed against a real
payload before it can be trusted. `/api/criteria/schema` reports that split
honestly rather than pretending everything filters.

Labels are (fr, en), French first (Loi 96).
"""
from __future__ import annotations

# --- property categories (Matrix's search tabs) -----------------------------
CATEGORIES: list[tuple[str, str, str]] = [
    ("single_family", "Unifamiliale", "Single-Family"),
    ("condo", "Copropriété / Appartement", "Condominium/Apartment"),
    ("revenue", "Immeuble à revenus", "Revenue Property"),
    ("land", "Terrain / Lot", "Land/Lot"),
    ("farm", "Fermette / Ferme", "Farm/Hobby Farm"),
    ("commercial", "Commercial ou industriel", "Commercial/Industrial"),
    ("cross", "Toutes catégories", "Cross Property"),
    ("open_house", "Visite libre et caravane", "Open House & Caravan"),
]

# --- enumerated vocabularies (read off the Matrix General panel) ------------
STATUS = [("active", "En vigueur", "Active"), ("sold", "Vendu", "Sold"),
          ("expired", "Expiré", "Expired"),
          ("off_market", "Hors marché", "Off market"),
          ("cancelled", "Annulé", "Cancelled")]

PROPERTY_TYPE = [
    ("bungalow", "Plain-pied", "Bungalow"),
    ("two_storey", "À étages", "Two or more storey"),
    ("split_level", "Paliers multiples", "Split-level"),
    ("one_half_storey", "Un étage et demi", "One-and-a-half-storey"),
    ("mobile", "Maison mobile", "Mobile home"),
]

BUILDING_TYPE = [
    ("detached", "Isolé", "Detached"),
    ("semi_detached", "Jumelé", "Semi-detached"),
    ("attached", "En rangée", "Attached"),
    ("attached_corner", "En rangée, coin", "Attached corner unit"),
    ("quadrex", "Quadrex", "Quadrex"),
]

YEAR_KIND = [("to_be_built", "À construire", "To be built"),
             ("under_construction", "En construction", "Under construction"),
             ("unknown", "Inconnue", "Unknown"),
             ("historic", "Historique", "Historic")]

BASEMENT = [
    ("6ft_plus", "6 pieds et plus", "6 feet and more"),
    ("crawl", "Vide sanitaire", "Crawl space"),
    ("finished", "Sous-sol fini", "Finished basement"),
    ("low", "Bas (moins de 6 pieds)", "Low (less than 6 feet)"),
    ("outdoor_entrance", "Entrée extérieure", "Outdoor entrance"),
    ("partially_finished", "Partiellement fini", "Partially finished"),
    ("unfinished", "Non fini", "Unfinished"),
    ("none", "Aucun", "None"),
]

AMENITY = [
    ("air_exchange", "Échangeur d'air", "Air exchange system"),
    ("alarm", "Système d'alarme", "Alarm system"),
    ("central_ac", "Air climatisé central", "Central air conditioning"),
    ("central_heat_pump", "Thermopompe centrale", "Central heat pump"),
    ("central_vacuum", "Aspirateur central", "Central vacuum cleaner system"),
    ("garage_opener", "Ouvre-porte de garage", "Electric garage door opener"),
    ("elevator", "Ascenseur", "Elevator"),
    ("fire_detector", "Détecteur d'incendie", "Fire detector"),
    ("furnished", "Meublé", "Furnished"),
    ("intercom", "Interphone", "Intercom"),
    ("leak_detection", "Détecteur de fuite", "Leak detection system"),
    ("ev_charger", "Borne de recharge (niveau 2)", "Level 2 charging station"),
    ("outdoor_storage", "Rangement extérieur", "Outdoor storage space"),
    ("partially_furnished", "Partiellement meublé", "Partially furnished"),
    ("private_balcony", "Balcon privé", "Private balcony"),
    ("private_yard", "Cour privée", "Private yard"),
    ("sauna", "Sauna", "Sauna"),
    ("wall_ac", "Climatiseur mural", "Wall-mounted air conditioning"),
    ("wall_heat_pump", "Thermopompe murale", "Wall-mounted heat pump"),
    ("water_softener", "Adoucisseur d'eau", "Water softener"),
]

FIREPLACE = [
    ("gas_fireplace", "Foyer au gaz", "Gas fireplace"),
    ("gas_stove", "Poêle au gaz", "Gas stove"),
    ("oil_fireplace", "Foyer à l'huile", "Oil fireplace"),
    ("oil_stove", "Poêle à l'huile", "Oil stove"),
    ("pellet_fireplace", "Foyer aux granules", "Pellet fireplace"),
    ("pellet_stove", "Poêle aux granules", "Pellet stove"),
    ("wood_fireplace", "Foyer au bois", "Wood fireplace"),
    ("wood_stove", "Poêle au bois", "Wood stove"),
]

POOL = [("above_ground", "Hors terre", "Above-ground"),
        ("heated", "Chauffée", "Heated"), ("indoor", "Intérieure", "Indoor"),
        ("inground", "Creusée", "Inground")]

WATER_ACCESS = [("access", "Accès à l'eau", "Access"),
                ("navigable", "Navigable", "Navigable"),
                ("non_navigable", "Non navigable", "Non navigable"),
                ("waterfront", "Bord de l'eau", "Waterfront")]

VIEW = [("panoramic", "Panoramique", "Panoramic"),
        ("city", "Vue sur la ville", "View of the city"),
        ("mountain", "Vue sur la montagne", "View of the mountain"),
        ("water", "Vue sur l'eau", "View of the water")]

# --- the fields themselves --------------------------------------------------
# kind: range (min/max pair) · int (minimum) · multi (enum list) · bool · text
# Each entry: key, kind, group, (fr, en), reso field or None, options
FIELDS: list[dict] = [
    # Location
    {"key": "areas", "kind": "multi_text", "group": "location",
     "label": ("Secteurs / municipalités", "Sectors / municipalities"),
     "reso": "City"},
    {"key": "postal", "kind": "text", "group": "location",
     "label": ("Code postal (préfixe)", "Postal code (prefix)"),
     "reso": "PostalCode"},
    # Status & dates
    {"key": "status", "kind": "multi", "group": "status",
     "label": ("Statut", "Status"), "reso": "StandardStatus",
     "options": STATUS, "client": False,
     "reso_map": {"active": "Active", "sold": "Closed", "expired": "Expired",
                  "cancelled": "Canceled", "off_market": "Withdrawn"}},
    {"key": "new_since_days", "kind": "int", "group": "status",
     "label": ("Nouvelles inscriptions (derniers N jours)",
               "New listings (last N days)"), "reso": "OnMarketDate",
     "client": False},
    # Price
    {"key": "price", "kind": "range", "group": "price",
     "label": ("Prix demandé ($)", "Asked price ($)"), "reso": "ListPrice"},
    {"key": "rent", "kind": "range", "group": "price",
     "label": ("Loyer mensuel ($)", "Monthly rent ($)"), "reso": None},
    # Building / lot
    # House style maps to RESO ArchitecturalStyle rather than PropertySubType
    # (which carries the CATEGORY). Left unfilterable until the exact value
    # spelling is confirmed on a real payload — see the module docstring.
    {"key": "property_types", "kind": "multi", "group": "building",
     "label": ("Genre de propriété", "Property type"),
     "reso": None, "options": PROPERTY_TYPE},
    {"key": "building_types", "kind": "multi", "group": "building",
     "label": ("Type de bâtiment", "Building type"),
     "reso": None, "options": BUILDING_TYPE},
    {"key": "year", "kind": "range", "group": "building",
     "label": ("Année de construction", "Year built"), "reso": "YearBuilt"},
    {"key": "year_kind", "kind": "multi", "group": "building",
     "label": ("État de construction", "Construction state"),
     "reso": None, "options": YEAR_KIND},
    {"key": "living", "kind": "range", "group": "building",
     "label": ("Superficie habitable (pi²)", "Living area (sqft)"),
     "reso": "LivingArea"},
    {"key": "lot", "kind": "range", "group": "building",
     "label": ("Superficie du terrain (pi²)", "Lot area (sqft)"),
     "reso": "LotSizeArea"},
    {"key": "intergeneration", "kind": "bool", "group": "building",
     "label": ("Intergénération", "Intergeneration"), "reso": None},
    # Rooms
    {"key": "beds", "kind": "int", "group": "rooms",
     "label": ("Chambres (total)", "Bedrooms (total)"),
     "reso": "BedroomsTotal"},
    {"key": "beds_ag", "kind": "int", "group": "rooms",
     "label": ("Chambres hors sous-sol", "Bedrooms above ground"),
     "reso": None},
    {"key": "baths", "kind": "int", "group": "rooms",
     "label": ("Salles de bain", "Bathrooms"),
     "reso": "BathroomsTotalInteger"},
    {"key": "powder", "kind": "int", "group": "rooms",
     "label": ("Salles d'eau", "Powder rooms"), "reso": None},
    # Parking
    {"key": "garage", "kind": "int", "group": "parking",
     "label": ("Garage (places)", "Garage (spaces)"), "reso": None},
    {"key": "driveway", "kind": "int", "group": "parking",
     "label": ("Stationnement (places)", "Driveway (spaces)"), "reso": None},
    # Features
    {"key": "basement", "kind": "multi", "group": "features",
     "label": ("Sous-sol", "Basement"), "reso": None, "options": BASEMENT},
    {"key": "amenities", "kind": "multi", "group": "features",
     "label": ("Commodités", "Property amenities"),
     "reso": None, "options": AMENITY},
    {"key": "fireplace", "kind": "multi", "group": "features",
     "label": ("Foyer / poêle", "Fireplace / stove"),
     "reso": None, "options": FIREPLACE},
    {"key": "pool", "kind": "multi", "group": "features",
     "label": ("Piscine", "Pool"), "reso": None, "options": POOL},
    {"key": "water", "kind": "multi", "group": "features",
     "label": ("Plan d'eau", "Water (access)"),
     "reso": None, "options": WATER_ACCESS},
    {"key": "view", "kind": "multi", "group": "features",
     "label": ("Vue", "View"), "reso": None, "options": VIEW},
]

GROUPS = [("location", "Localisation", "Location"),
          ("status", "Statut et dates", "Status & dates"),
          ("price", "Prix", "Price"),
          ("building", "Bâtiment et terrain", "Building & lot"),
          ("rooms", "Pièces", "Rooms"),
          ("parking", "Stationnement", "Parking"),
          ("features", "Caractéristiques", "Features")]

BY_KEY = {f["key"]: f for f in FIELDS}


def schema(lang: str = "fr", audience: str = "broker") -> dict:
    """Form definition for both UIs, plus an honest note on what actually
    reaches the feed today versus what is only recorded. audience="client"
    drops the fields that only make sense to a broker (listing status,
    on-market windows) — the client's portal shows what they shop by."""
    i = 1 if lang == "fr" else 2
    fields = []
    for f in FIELDS:
        if audience == "client" and f.get("client") is False:
            continue
        item = {"key": f["key"], "kind": f["kind"], "group": f["group"],
                "label": f["label"][i - 1], "filterable": bool(f["reso"])}
        if f.get("options"):
            item["options"] = [{"value": o[0], "label": o[i]}
                               for o in f["options"]]
        fields.append(item)
    return {
        "categories": [{"value": c[0], "label": c[i]} for c in CATEGORIES],
        "groups": [{"value": g[0], "label": g[i]} for g in GROUPS],
        "fields": fields,
        "note": ("Les champs « filterable: false » sont conservés et affichés, "
                 "mais pas encore appliqués au flux licencié — le nom RESO "
                 "exact doit être confirmé sur une vraie réponse."
                 if lang == "fr" else
                 "Fields with filterable:false are kept and displayed but not "
                 "yet applied to the licensed feed — the exact RESO name must "
                 "be confirmed against a real payload."),
    }


def normalize(raw: dict) -> dict:
    """Coerce whatever a form posted into the canonical shape: ranges as
    {min,max} with min<=max, ints as ints, multis as de-duped value lists."""
    out: dict = {}
    for f in FIELDS:
        k, kind = f["key"], f["kind"]
        if k not in raw or raw[k] in (None, "", [], {}):
            continue
        v = raw[k]
        if kind == "range":
            lo = int(v.get("min") or 0) if isinstance(v, dict) else 0
            hi = int(v.get("max") or 0) if isinstance(v, dict) else 0
            if lo and hi and lo > hi:
                lo, hi = hi, lo
            if lo or hi:
                out[k] = {"min": lo, "max": hi}
        elif kind == "int":
            if n := int(v or 0):
                out[k] = n
        elif kind == "bool":
            if bool(v):
                out[k] = True
        elif kind == "text":
            if s := str(v).strip()[:40]:
                out[k] = s
        elif kind == "multi_text":
            vals = [str(x).strip()[:80] for x in (v or []) if str(x).strip()]
            if vals:
                out[k] = list(dict.fromkeys(vals))[:12]
        elif kind == "multi":
            allowed = {o[0] for o in f.get("options", [])}
            vals = [str(x) for x in (v or []) if str(x) in allowed]
            if vals:
                out[k] = list(dict.fromkeys(vals))
    return out


def from_legacy(prefs: dict) -> dict:
    """The Vitrine's original flat prefs → the canonical shape. Portals saved
    before the richer form still match, and a client editing the new form
    simply overwrites with canonical keys."""
    if not prefs or any(k in prefs for k in ("price", "areas", "beds")):
        # already canonical (or empty) — 'areas'/'beds' are shared spellings
        if "pmin" not in prefs and "pmax" not in prefs:
            return normalize(prefs or {})
    out: dict = {}
    if prefs.get("pmin") or prefs.get("pmax"):
        out["price"] = {"min": int(prefs.get("pmin") or 0),
                        "max": int(prefs.get("pmax") or 0)}
    for src, dst in (("beds", "beds"), ("baths", "baths")):
        if prefs.get(src):
            out[dst] = int(prefs[src])
    if prefs.get("lot"):
        out["lot"] = {"min": int(prefs["lot"]), "max": 0}
    if prefs.get("areas"):
        out["areas"] = list(prefs["areas"])
    must = prefs.get("must") or {}
    if must.get("piscine"):
        out["pool"] = [o[0] for o in POOL]
    if must.get("foyer"):
        out["fireplace"] = [o[0] for o in FIREPLACE]
    if must.get("garage"):
        out["garage"] = 1
    return normalize(out)


def _q(s) -> str:
    return "'" + str(s).replace("'", "''") + "'"


def odata_filter(crit: dict, today=None) -> str:
    """Canonical criteria → RESO OData $filter, using only the fields whose
    upstream name is confirmed. Everything else is deliberately left out
    rather than guessed — a wrong field name fails the whole query."""
    from datetime import timedelta
    parts: list[str] = []
    for f in FIELDS:
        reso, k, kind = f["reso"], f["key"], f["kind"]
        if not reso or k not in crit:
            continue
        v = crit[k]
        if kind == "range":
            if v.get("min"):
                parts.append(f"{reso} ge {v['min']}")
            if v.get("max"):
                parts.append(f"{reso} le {v['max']}")
        elif kind == "int":
            if k == "new_since_days":
                if today is None:
                    from .models import utcnow
                    today = utcnow()
                since = (today - timedelta(days=int(v))).strftime("%Y-%m-%d")
                parts.append(f"{reso} ge {since}T00:00:00Z")
            else:
                parts.append(f"{reso} ge {v}")
        elif kind == "multi":
            rm = f.get("reso_map") or {}
            vals = [rm.get(x, x) for x in v]
            parts.append("(" + " or ".join(
                f"{reso} eq {_q(x)}" for x in vals) + ")")
        elif kind == "multi_text":
            parts.append("(" + " or ".join(
                f"contains({reso},{_q(x)})" for x in v) + ")")
        elif kind == "text":
            parts.append(f"startswith({reso},{_q(v)})")
    return " and ".join(parts)


def matches_locally(card: dict, crit: dict) -> bool:
    """Second pass for criteria the feed could not filter, applied to what
    a provider actually returned. Absent data never rejects a listing —
    a missing field means unknown, not 'no'."""
    price = crit.get("price") or {}
    if price.get("min") and card.get("price") and card["price"] < price["min"]:
        return False
    if price.get("max") and card.get("price") and card["price"] > price["max"]:
        return False
    if (n := crit.get("beds")) and card.get("beds") and card["beds"] < n:
        return False
    if (n := crit.get("baths")) and card.get("baths") and card["baths"] < n:
        return False
    if areas := crit.get("areas"):
        area = (card.get("area") or "").lower()
        if area and not any(a.lower() in area for a in areas):
            return False
    return True


def summarize(crit: dict, lang: str = "fr") -> str:
    """One-line human summary — for /ops rows and notification bodies."""
    i = 1 if lang == "fr" else 2
    bits: list[str] = []
    if p := crit.get("price"):
        bits.append(f"{p.get('min', 0):,}–{p.get('max', 0):,} $"
                    .replace(",", " "))
    if n := crit.get("beds"):
        bits.append(f"{n}+ {'cc' if lang == 'fr' else 'bd'}")
    if n := crit.get("baths"):
        bits.append(f"{n}+ {'sdb' if lang == 'fr' else 'ba'}")
    for key in ("property_types", "pool", "water", "view"):
        if vals := crit.get(key):
            opts = {o[0]: o[i] for o in BY_KEY[key].get("options", [])}
            bits.append(", ".join(opts.get(v, v) for v in vals[:2]))
    if areas := crit.get("areas"):
        bits.append(", ".join(areas[:3]))
    return " · ".join(bits) or ("aucun critère" if lang == "fr"
                                else "no criteria")
