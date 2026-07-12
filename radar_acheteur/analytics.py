"""Compute the intelligence dashboard from real pipeline data (signals + scores).

Honest scope:
  - "Votre activité" panels (readouts, sector demand, price-band heat, signals feed)
    are computed live from THIS broker's own signals in SQLite. Real today.
  - "Réseau" panels (migration, benchmark) need many brokers. `network_ready` stays
    False in single-tenant; flip it on once you aggregate across tenants.

Sector demand comes from mapping each viewed listing's address to a Montréal borough.
Price-band heat and deltas compare the last N days to the prior N days.
"""
from datetime import datetime, timezone, timedelta
from . import db
from .score import WEIGHTS

# Montréal borough / sector keyword map (extend freely).
BOROUGHS = {
    "Villeray": ["villeray"],
    "Rosemont–P.-P.": ["rosemont", "petite-patrie", "petite patrie"],
    "Le Plateau": ["plateau"],
    "Le Sud-Ouest": ["sud-ouest", "sud ouest", "saint-henri", "st-henri", "pointe-saint-charles", "griffintown"],
    "Ville-Marie": ["ville-marie", "centre-ville", "downtown", "quartier des spectacles"],
    "Verdun": ["verdun", "île-des-soeurs", "ile-des-soeurs", "nuns' island"],
    "Mercier–H.-M.": ["mercier", "hochelaga", "maisonneuve"],
    "Ahuntsic": ["ahuntsic", "cartierville"],
    "Saint-Léonard": ["saint-léonard", "st-léonard", "saint-leonard"],
    "LaSalle": ["lasalle"],
    "NDG–CDN": ["notre-dame-de-grâce", "ndg", "côte-des-neiges", "cote-des-neiges"],
    "Outremont": ["outremont"],
}

PRICE_BANDS = [
    ("< 500 K",     0,        500_000),
    ("500–700 K",   500_000,  700_000),
    ("700–900 K",   700_000,  900_000),
    ("900 K–1,2 M", 900_000,  1_200_000),
    ("> 1,2 M",     1_200_000, float("inf")),
]

FR_MONTHS = ["", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
             "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]


def _now():
    return datetime.now(timezone.utc)


def _age_days(iso):
    try:
        dt = datetime.fromisoformat(iso)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return max(0.0, (_now() - dt).total_seconds() / 86400)
    except Exception:
        return 999.0


def _w(sig, half_life):
    return WEIGHTS.get(sig["type"], 0.0) * (0.5 ** (_age_days(sig["occurred_at"]) / half_life))


def _borough(addr):
    a = (addr or "").lower()
    for name, keys in BOROUGHS.items():
        if any(k in a for k in keys):
            return name
    return None


def _fetch_window(c, start_iso, end_iso):
    return [dict(r) for r in c.execute(
        "SELECT * FROM signals WHERE occurred_at>=? AND occurred_at<?",
        (start_iso, end_iso)).fetchall()]


def _pct_delta(cur, prev):
    # Compare RAW activity across periods (never decayed weights — old signals decay
    # toward zero and would blow up the denominator). Clamp for sane display.
    if prev <= 0:
        return None if cur <= 0 else 100
    return max(-95, min(300, round((cur - prev) / prev * 100)))


def compute(db_path, lookback_days=30, half_life=7):
    now = _now()
    cur_start = (now - timedelta(days=lookback_days)).isoformat()
    prev_start = (now - timedelta(days=2 * lookback_days)).isoformat()
    now_iso = now.isoformat()

    with db.connect(db_path) as c:
        cur = _fetch_window(c, cur_start, now_iso)
        prev = _fetch_window(c, prev_start, cur_start)
        tiers = {t: n for t, n in c.execute(
            "SELECT tier, COUNT(*) FROM scores GROUP BY tier").fetchall()}
        active = c.execute(
            "SELECT COUNT(DISTINCT contact_key) FROM signals WHERE occurred_at>=?",
            (cur_start,)).fetchone()[0]

    # --- readouts ---
    readouts = {
        "signals": len(cur),
        "signals_delta": _pct_delta(len(cur), len(prev)),
        "hot": tiers.get("hot", 0),
        "warm": tiers.get("warm", 0),
        "cool": tiers.get("cool", 0),
        "active_buyers": active,
    }

    # --- sector demand: index from decayed weight (attention now), delta from raw counts ---
    def sector_stats(rows):
        wt, ct = {}, {}
        for s in rows:
            b = _borough(s.get("listing_addr"))
            if b:
                wt[b] = wt.get(b, 0) + _w(s, half_life)
                ct[b] = ct.get(b, 0) + 1
        return wt, ct

    cur_wt, cur_ct = sector_stats(cur)
    _, prev_ct = sector_stats(prev)
    peak = max(cur_wt.values(), default=1) or 1
    sectors = []
    for name, w in sorted(cur_wt.items(), key=lambda kv: kv[1], reverse=True)[:8]:
        delta = _pct_delta(cur_ct.get(name, 0), prev_ct.get(name, 0))
        heat = "hot" if (delta or 0) >= 15 else ("cool" if (delta or 0) < 0 else "warm")
        sectors.append({"name": name, "index": round(w / peak * 100),
                        "delta": delta, "heat": heat})

    # --- price-band heat (share of activity + trend), raw counts = intuitive ---
    def band_counts(rows):
        acc = [0] * len(PRICE_BANDS)
        for s in rows:
            p = s.get("listing_price")
            if not p:
                continue
            for i, (_, lo, hi) in enumerate(PRICE_BANDS):
                if lo <= p < hi:
                    acc[i] += 1
                    break
        return acc

    cw, pw = band_counts(cur), band_counts(prev)
    ctot, ptot = sum(cw) or 1, sum(pw) or 1
    bmax = max(cw) or 1
    bands = []
    for i, (label, _, _) in enumerate(PRICE_BANDS):
        share = round(cw[i] / ctot * 100)
        prev_share = pw[i] / ptot * 100
        trend = "up" if share - prev_share > 2 else ("down" if share - prev_share < -2 else "flat")
        bands.append({"label": label, "share": share,
                      "fill": round(cw[i] / bmax * 100), "trend": trend})

    # --- deterministic signals feed (no LLM cost) ---
    feed = []
    if sectors:
        top = sectors[0]
        if top["delta"] and top["delta"] > 0:
            feed.append({"dir": "up",
                         "text": f"<b>{top['name']}</b> mène la demande ce mois-ci — "
                                 f"+{top['delta']} % d'attention en {lookback_days} jours."})
        cooling = [s for s in sectors if (s["delta"] or 0) < 0]
        if cooling:
            feed.append({"dir": "dn",
                         "text": f"<b>{cooling[0]['name']}</b> refroidit "
                                 f"({cooling[0]['delta']} %) — cycles plus longs à prévoir."})
    if bands:
        hot_band = max(bands, key=lambda b: b["share"])
        feed.append({"dir": "up",
                     "text": f"La tranche <b>{hot_band['label']}</b> concentre "
                             f"{hot_band['share']} % de l'attention — le segment le plus profond."})
    if readouts["hot"]:
        feed.append({"dir": "up",
                     "text": f"<b>{readouts['hot']} prospect(s) chaud(s)</b> prêts à rappeler "
                             f"— marqués dans Follow Up Boss."})

    return {
        "period": f"{FR_MONTHS[now.month]} {now.year}",
        "scope": "broker",
        "readouts": readouts,
        "sectors": sectors,
        "price_bands": bands,
        "signals_feed": feed,
        "network_ready": False,   # flip True once aggregating across tenants
        "generated_at": now_iso,
    }
