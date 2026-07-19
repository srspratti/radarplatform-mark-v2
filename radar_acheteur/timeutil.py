"""Shared UTC time + decay helpers.

Before this module, every scoring/analytics/storage file grew its own copy of
"what time is it", "how old is this ISO timestamp", and "0.5 ** (age / half_life)".
They drifted (different fallbacks on bad input, ``_now`` vs ``now_iso`` vs ``_iso``).
Keep the single source of truth here.
"""
from datetime import datetime, timezone, timedelta


def now() -> datetime:
    """Timezone-aware current time in UTC."""
    return datetime.now(timezone.utc)


def now_iso() -> str:
    return now().isoformat()


def days_ago_iso(days: float, hours: float = 0) -> str:
    """ISO timestamp ``days`` (and optional ``hours``) in the past."""
    return (now() - timedelta(days=days, hours=hours)).isoformat()


def age_days(iso: str, on_error: float = 0.0) -> float:
    """Age in days of an ISO timestamp, never negative. ``on_error`` on bad input."""
    try:
        dt = datetime.fromisoformat(iso)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
    except (TypeError, ValueError):
        return on_error
    return max(0.0, (now() - dt).total_seconds() / 86400)


def decay_factor(age: float, half_life_days: float) -> float:
    """Exponential recency weight in (0, 1]: halves every ``half_life_days``."""
    return 0.5 ** (age / half_life_days)
