"""Thin Anthropic API wrapper. Deterministic-first everywhere: every caller has
a non-LLM fallback, so the whole MVP runs (and tests pass) with no API key.
Uses prompt caching on system blocks to keep Haiku fallback costs near zero.
"""
from __future__ import annotations
import json
import logging
import httpx
from .config import settings

logger = logging.getLogger(__name__)

_API = "https://api.anthropic.com/v1/messages"


def complete(prompt: str, system: str = "", max_tokens: int = 600,
             transport: httpx.BaseTransport | None = None) -> str | None:
    """Returns text or None (no key / any error). Callers must handle None."""
    if not settings.ANTHROPIC_API_KEY:
        return None
    body: dict = {
        "model": settings.HAIKU_MODEL,
        "max_tokens": max_tokens,
        "messages": [{"role": "user", "content": prompt}],
    }
    if system:
        body["system"] = [{"type": "text", "text": system,
                           "cache_control": {"type": "ephemeral"}}]
    try:
        with httpx.Client(transport=transport, timeout=30) as c:
            r = c.post(_API, json=body, headers={
                "x-api-key": settings.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01",
            })
            r.raise_for_status()
            data = r.json()
            return "".join(b.get("text", "") for b in data.get("content", [])
                           if b.get("type") == "text").strip()
    except Exception:  # noqa: BLE001 — every caller has a deterministic fallback
        logger.warning("Anthropic completion failed; falling back",
                       exc_info=True)
        return None


def complete_json(prompt: str, system: str = "", max_tokens: int = 600) -> dict | None:
    text = complete(prompt, system=system + "\nRéponds UNIQUEMENT en JSON valide, "
                    "sans backticks ni préambule.", max_tokens=max_tokens)
    if not text:
        return None
    try:
        return json.loads(text.replace("```json", "").replace("```", "").strip())
    except json.JSONDecodeError:
        logger.warning("Anthropic JSON parse failed for output: %s", text[:200])
        return None


def classify_lead_intent(notes: str) -> int:
    """Returns a priority adjustment in [-15, +15]. 0 on any failure."""
    out = complete_json(
        f"Note d'un lead immobilier au Québec:\n---\n{notes[:1500]}\n---\n"
        'Classe l\'intention: {"heat":"hot|warm|cold","adjust":-15..15,"reason":"..."}',
        system="Tu es un qualificateur de leads immobiliers québécois. "
               "hot=+10..15, warm=0..9, cold=-15..-5.")
    if not out:
        return 0
    try:
        return max(-15, min(15, int(out.get("adjust", 0))))
    except (TypeError, ValueError):
        logger.warning("Unexpected 'adjust' value in intent output: %r",
                       out.get("adjust"))
        return 0
