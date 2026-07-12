"""Two-stage parser: cheap deterministic extraction first, Claude fallback on drift.

COST LEVER: every email parsed deterministically is a $0 parse. Every fallback is
one Haiku call. Tune the selectors in `deterministic_parse` against real Matrix
emails to drive the fallback rate toward zero. The MVP works day one because the
Claude fallback handles anything the deterministic layer misses."""
import json
import re
from html import unescape
from anthropic import Anthropic

# --- schema every parse must satisfy ---
EVENT_TYPES = {"view", "favorite", "discard", "alert_match", "portal_login"}

EXTRACTION_TOOL = {
    "name": "record_signals",
    "description": "Record every buyer-activity signal found in a real-estate portal notification email.",
    "input_schema": {
        "type": "object",
        "properties": {
            "language": {"type": "string", "enum": ["fr", "en"]},
            "signals": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "contact_name": {"type": "string", "description": "Client/lead name if present, else empty"},
                        "contact_email": {"type": "string"},
                        "contact_phone": {"type": "string"},
                        "type": {"type": "string", "enum": sorted(EVENT_TYPES)},
                        "listing_no": {"type": "string", "description": "Centris number, digits only"},
                        "listing_addr": {"type": "string"},
                        "listing_price": {"type": "number"},
                        "listing_url": {"type": "string"},
                    },
                    "required": ["type"],
                },
            },
        },
        "required": ["signals"],
    },
}

_SYS = ("You extract structured buyer-activity signals from Québec real-estate portal "
        "(Matrix/Centris) notification emails. Call record_signals with everything you find. "
        "A single email may contain many signals (e.g. a client viewed several listings). "
        "If the email is a saved-search 'new matches' alert with no per-client identity, "
        "use type 'alert_match' and leave contact fields empty. Return only the tool call.")

_CENTRIS_RE = re.compile(r"\b(\d{7,9})\b")
_PRICE_RE = re.compile(r"\$\s?([\d\s,\.]{4,})")
_client = None


def _anthropic(cfg):
    global _client
    if _client is None:
        _client = Anthropic(api_key=cfg.anthropic_key)
    return _client


def classify_template(subject: str, sender: str, html: str) -> str:
    s = subject.lower()
    if any(w in s for w in ("nouveau", "new", "match", "correspond")):
        return "alert_new_matches"
    if any(w in s for w in ("price", "prix", "réduction", "baisse")):
        return "price_change"
    if any(w in s for w in ("activity", "activité", "favori", "favorite", "viewed", "consulté")):
        return "portal_activity"
    return "unknown"


def deterministic_parse(template: str, html: str):
    """Return list[signal] or None if not confidently parseable.
    TODO(sriram): tighten these selectors against the golden set. Placeholder logic
    below extracts listing refs generically; identity extraction depends on template."""
    text = unescape(re.sub(r"<[^>]+>", " ", html))
    text = re.sub(r"\s+", " ", text).strip()

    listing_nos = _CENTRIS_RE.findall(text)
    if not listing_nos:
        return None  # nothing to anchor on -> fallback

    # Only the alert_new_matches template is safe to parse deterministically for now:
    # it has no per-client identity, so each listing => one alert_match signal.
    if template == "alert_new_matches":
        prices = _PRICE_RE.findall(text)
        signals = []
        for i, no in enumerate(dict.fromkeys(listing_nos)):  # dedupe, keep order
            price = None
            if i < len(prices):
                try:
                    price = float(re.sub(r"[^\d.]", "", prices[i]))
                except ValueError:
                    price = None
            signals.append({"type": "alert_match", "listing_no": no, "listing_price": price})
        return signals or None

    # portal_activity / price_change carry client identity in template-specific markup.
    # Until selectors are written, defer to Claude.
    return None


def claude_parse(cfg, html: str):
    """Schema-driven extraction. Prompt-cache the system + tool to cut token cost."""
    client = _anthropic(cfg)
    # Truncate very long emails to control tokens (Matrix emails are small anyway).
    payload = html[:20000]
    resp = client.messages.create(
        model=cfg.model,
        max_tokens=1024,
        system=[{"type": "text", "text": _SYS,
                 "cache_control": {"type": "ephemeral"}}],
        tools=[EXTRACTION_TOOL],
        tool_choice={"type": "tool", "name": "record_signals"},
        messages=[{"role": "user", "content": f"Email HTML:\n{payload}"}],
    )
    for block in resp.content:
        if block.type == "tool_use" and block.name == "record_signals":
            return block.input.get("signals", []), block.input.get("language")
    return [], None


def parse_email(cfg, subject: str, sender: str, html: str):
    """Returns (signals, language, method). method in {'deterministic','claude'}."""
    template = classify_template(subject, sender, html)
    det = deterministic_parse(template, html)
    if det:
        return det, None, "deterministic"
    signals, lang = claude_parse(cfg, html)
    return signals, lang, "claude"
