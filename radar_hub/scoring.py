"""Two instruments, deliberately separate:

  priority_score  — pre-conversion. "Should Danny act on this lead NOW?"
                    Source quality + recency + intent signals (+ optional Haiku adjust).
  engagement_score — post-conversion. Decay-weighted client activity.
                    ONLY actor == "client" events count (locked decision #1).

Decay-weighted indices are never compared against raw counts (prior bug class:
period deltas exploding when decayed weights met raw-count baselines).
"""
from __future__ import annotations
import math
import re
from datetime import datetime
from .config import settings
from .events import ENGAGEMENT_WEIGHTS
from .models import Contact, Event, utcnow

LAMBDA = math.log(2) / settings.ENGAGEMENT_HALF_LIFE_DAYS


def _decay(ts: datetime, now: datetime | None = None) -> float:
    now = now or utcnow()
    age_days = max(0.0, (now - ts).total_seconds() / 86400.0)
    return math.exp(-LAMBDA * age_days)


def engagement_score(events: list[Event], now: datetime | None = None) -> int:
    pts = sum(ENGAGEMENT_WEIGHTS.get(e.type, 0) * _decay(e.ts, now)
              for e in events if e.actor == "client")
    return min(100, round(pts))


def engagement_breakdown(events: list[Event], now: datetime | None = None) -> dict:
    """Per-family decayed points for the dashboard score ring."""
    fam: dict[str, float] = {}
    for e in events:
        if e.actor != "client":
            continue
        w = ENGAGEMENT_WEIGHTS.get(e.type, 0)
        if w:
            fam[e.family] = fam.get(e.family, 0.0) + w * _decay(e.ts, now)
    return {k: round(v, 1) for k, v in sorted(fam.items(), key=lambda x: -x[1])}


# ---------------------------------------------------------------- priority ---
SOURCE_BASE = {
    "matrix_visit": 70,      # already engaged with real inventory
    "danny_channel": 55,     # warm referral / personal network
    "fub_import": 45,        # third-party portals via FUB
    "own_generated": 40,     # our own capture forms
    "prospecting_agent": 25, # cold, agent-sourced
    "seller_intel": 30,      # homeowner flagged likely-to-list (seller side)
}

INTENT_PATTERNS: list[tuple[re.Pattern, int, str]] = [
    (re.compile(r"pr[eé][- ]?(approuv|qualifi)|pre[- ]?approv", re.I), 15, "préqualifié"),
    (re.compile(r"\bvisit(e|er)?\b|\bshowing\b", re.I), 10, "veut visiter"),
    (re.compile(r"\bvendre\b|\bacheter\b|\bsell(ing)?\b|\bbuy(ing)?\b", re.I), 8, "intention claire"),
    (re.compile(r"\$\s?\d|(\d{3}\s?\d{3})\s?\$|budget", re.I), 6, "budget mentionné"),
    (re.compile(r"urgent|rapidement|asap|d[eé]m[eé]nag", re.I), 6, "urgence"),
]


def priority_score(contact: Contact, now: datetime | None = None,
                   llm_adjust: int = 0) -> tuple[int, str]:
    now = now or utcnow()
    score = SOURCE_BASE.get(contact.source, 35)
    age_h = (now - contact.created_at).total_seconds() / 3600.0
    if age_h < 24:
        score += 15
    elif age_h < 72:
        score += 8
    text = f"{contact.notes} {contact.sublabel}"
    reasons = []
    for pat, pts, label in INTENT_PATTERNS:
        if pat.search(text):
            score += pts
            reasons.append(label)
    score = max(0, min(100, score + llm_adjust))
    if score >= 75:
        hint = "Appeler maintenant"
    elif score >= 50:
        hint = "Contacter aujourd'hui"
    elif score >= 30:
        hint = "Suivi cette semaine"
    else:
        hint = "Séquence de nurture"
    if reasons:
        hint += " · " + ", ".join(reasons[:2])
    return score, hint


def refresh_priority(db, contact: Contact, use_llm: bool = False) -> None:
    adjust = 0
    if use_llm and settings.ANTHROPIC_API_KEY and len(contact.notes) > 40:
        from .llm import classify_lead_intent
        adjust = classify_lead_intent(contact.notes)
    contact.priority_score, contact.priority_hint = priority_score(contact, llm_adjust=adjust)
    db.commit()
