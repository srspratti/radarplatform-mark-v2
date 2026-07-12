"""Decay-weighted activity scoring. Transparent, tunable, no ML needed for the pilot."""
from datetime import datetime, timezone

WEIGHTS = {
    "favorite": 5.0,
    "alert_match": 2.0,
    "view": 1.0,
    "portal_login": 1.0,
    "discard": 0.5,
}
REPEAT_VIEW_BONUS = 4.0   # applied when >=3 views of same listing


def _age_days(iso: str) -> float:
    try:
        dt = datetime.fromisoformat(iso)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
    except Exception:
        return 0.0
    return max(0.0, (datetime.now(timezone.utc) - dt).total_seconds() / 86400)


def score_contact(signals, half_life_days: float) -> float:
    if not signals:
        return 0.0
    decay = lambda age: 0.5 ** (age / half_life_days)
    total = 0.0
    view_counts = {}
    for s in signals:
        w = WEIGHTS.get(s["type"], 0.0)
        total += w * decay(_age_days(s["occurred_at"]))
        if s["type"] == "view" and s["listing_no"]:
            view_counts[s["listing_no"]] = view_counts.get(s["listing_no"], 0) + 1
    for listing, n in view_counts.items():
        if n >= 3:
            total += REPEAT_VIEW_BONUS
    return round(total, 2)


def tier_for(score: float, hot: float, warm: float) -> str:
    if score >= hot:
        return "hot"
    if score >= warm:
        return "warm"
    return "cool"
