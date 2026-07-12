"""Populate SQLite with realistic demo signals so the dashboard renders end-to-end
with REAL computed numbers (not hardcoded). Safe to run repeatedly.

    python -m radar_acheteur.seed_demo
    uvicorn radar_acheteur.api:app --port 8000   # then open http://localhost:8000/
"""
import random
from datetime import datetime, timezone, timedelta
from . import db
from .config import cfg
from .score import score_contact, tier_for

random.seed(11)

# borough -> (sample address, price centre, current-window count, prior-window count)
# The current/prior split encodes each sector's trend (growth or cooling).
SEED = [
    ("Villeray",       "Rue De Castelnau, Villeray",         820_000, 30, 24),
    ("Rosemont–P.-P.", "Rue Beaubien, Rosemont",             880_000, 27, 23),
    ("Mercier–H.-M.",  "Rue Ontario, Hochelaga-Maisonneuve", 690_000, 22, 19),
    ("Saint-Léonard",  "Rue Jean-Talon, Saint-Léonard",      640_000, 17, 15),
    ("Verdun",         "Rue Wellington, Verdun",             760_000, 15, 14),
    ("Ahuntsic",       "Rue Fleury, Ahuntsic",               720_000, 12, 11),
    ("Le Plateau",     "Rue Saint-Denis, Le Plateau",        980_000, 13, 16),   # cooling
    ("Le Sud-Ouest",   "Rue Notre-Dame, Saint-Henri",       1_260_000, 9, 13),   # cooling
]
# price spread so every band is represented
EXTRA_PRICES = {"Mercier–H.-M.": 470_000, "Saint-Léonard": 540_000, "Le Sud-Ouest": 1_300_000}
TYPES = ["view", "view", "view", "favorite", "alert_match", "portal_login"]


def _iso(days_ago, jitter_h=0):
    return (datetime.now(timezone.utc) - timedelta(days=days_ago, hours=jitter_h)).isoformat()


def run():
    db.init(cfg.db_path)
    listing = 10_000_000
    activity = {}   # contact_key -> list of signals (for scoring)

    def add(c, key, typ, addr, price, day):
        nonlocal listing
        listing += 1
        no = str(listing)
        db.save_signal(c, contact_key=key, type=typ, listing_no=no,
                       listing_addr=addr, listing_price=price,
                       occurred_at=_iso(day, random.randint(0, 20)))
        activity.setdefault(key, []).append(
            {"type": typ, "listing_no": no, "occurred_at": _iso(day)})

    with db.connect(cfg.db_path) as c:
        c.execute("DELETE FROM signals"); c.execute("DELETE FROM scores")

        for borough, addr, price, n_cur, n_prev in SEED:
            for day_lo, day_hi, n in ((0, 29, n_cur), (30, 59, n_prev)):
                for _ in range(n):
                    key = f"buyer{random.randint(1, 45)}@demo.ca"
                    p = int(price * random.uniform(0.9, 1.12))
                    if borough in EXTRA_PRICES and random.random() < 0.35:
                        p = int(EXTRA_PRICES[borough] * random.uniform(0.95, 1.08))
                    add(c, key, random.choice(TYPES), addr, p,
                        random.randint(day_lo, day_hi))

        # a handful of "power buyers" -> real hot leads (favorite + 3 views same listing)
        hot_targets = [("Villeray", "Rue De Castelnau, Villeray", 850_000),
                       ("Rosemont–P.-P.", "Rue Beaubien, Rosemont", 890_000),
                       ("Mercier–H.-M.", "Rue Ontario, Hochelaga-Maisonneuve", 710_000),
                       ("Verdun", "Rue Wellington, Verdun", 775_000),
                       ("Saint-Léonard", "Rue Jean-Talon, Saint-Léonard", 660_000)]
        for i, (b, addr, price) in enumerate(hot_targets):
            key = f"hotbuyer{i}@demo.ca"
            listing += 1; no = str(listing)
            for typ in ("favorite", "favorite", "view", "view", "view", "view"):
                day = random.randint(0, 3)
                db.save_signal(c, contact_key=key, type=typ, listing_no=no,
                               listing_addr=addr, listing_price=price,
                               occurred_at=_iso(day))
                activity.setdefault(key, []).append(
                    {"type": typ, "listing_no": no, "occurred_at": _iso(day)})

        for key, sigs in activity.items():
            s = score_contact(sigs, cfg.half_life_days)
            db.upsert_score(c, key, s, tier_for(s, cfg.hot_threshold, cfg.warm_threshold), "")

    print(f"[seed] populated {cfg.db_path} across {len(SEED)} sectors + {len(hot_targets)} hot buyers.")
    print("[seed] start the API:  uvicorn radar_acheteur.api:app --port 8000")


if __name__ == "__main__":
    run()
