"""Decay-weighted activity scoring. Transparent, tunable, no ML needed for the pilot."""
from .timeutil import age_days, decay_factor

WEIGHTS = {
    "favorite": 5.0,
    "alert_match": 2.0,
    "view": 1.0,
    "portal_login": 1.0,
    "discard": 0.5,
}
REPEAT_VIEW_BONUS = 4.0   # applied when >=3 views of same listing


def signal_weight(sig, half_life_days: float) -> float:
    """Base weight for a signal type, decayed by the signal's age."""
    return WEIGHTS.get(sig["type"], 0.0) * decay_factor(
        age_days(sig["occurred_at"]), half_life_days)


def score_contact(signals, half_life_days: float) -> float:
    if not signals:
        return 0.0
    total = 0.0
    view_counts = {}
    for s in signals:
        total += signal_weight(s, half_life_days)
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
