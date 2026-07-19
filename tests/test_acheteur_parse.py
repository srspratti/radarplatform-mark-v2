"""Unit tests for radar_acheteur.parse — two-stage (deterministic + Claude) parser."""
import types

import pytest

from radar_acheteur import parse


# --------------------------------------------------------------- fakes ------
class _Block:
    def __init__(self, type, name=None, input=None):
        self.type = type
        self.name = name
        self.input = input or {}


class _Resp:
    def __init__(self, content):
        self.content = content


class _FakeMessages:
    def __init__(self, resp):
        self._resp = resp
        self.calls = []

    def create(self, **kw):
        self.calls.append(kw)
        return self._resp


class _FakeClient:
    def __init__(self, resp):
        self.messages = _FakeMessages(resp)


def _cfg(**over):
    base = dict(anthropic_key="key", model="claude-haiku-test")
    base.update(over)
    return types.SimpleNamespace(**base)


@pytest.fixture(autouse=True)
def _reset_client():
    parse._client = None
    yield
    parse._client = None


# ------------------------------------------------------ classify_template ---
@pytest.mark.parametrize("subject,expected", [
    ("Nouvelle correspondance trouvée", "alert_new_matches"),
    ("New matches for your search", "alert_new_matches"),
    ("Baisse de prix sur une propriété", "price_change"),
    ("Price reduction alert", "price_change"),
    ("Activité récente sur votre portail", "portal_activity"),
    ("A listing was favorited", "portal_activity"),
    ("Your monthly statement", "unknown"),
])
def test_classify_template(subject, expected):
    assert parse.classify_template(subject, "sender@x.com", "<html></html>") == expected


# ------------------------------------------------------ deterministic_parse -
def test_deterministic_parse_no_listing_returns_none():
    assert parse.deterministic_parse("alert_new_matches", "<p>nothing here</p>") is None


def test_deterministic_parse_alert_matches_dedupes_and_pairs_prices():
    html = ("<div>Centris 21877102 &mdash; $450,000</div>"
            "<div>Centris 21877102 again</div>"
            "<div>Centris 30012345 &mdash; $1,250,000</div>")
    signals = parse.deterministic_parse("alert_new_matches", html)
    assert [s["listing_no"] for s in signals] == ["21877102", "30012345"]
    assert all(s["type"] == "alert_match" for s in signals)
    assert signals[0]["listing_price"] == 450000.0
    assert signals[1]["listing_price"] == 1250000.0


def test_deterministic_parse_handles_unparseable_price():
    # A price token made only of punctuation/space triggers the ValueError branch.
    html = "<div>Centris 21877102 costs $ . ,. now</div>"
    signals = parse.deterministic_parse("alert_new_matches", html)
    assert signals[0]["listing_no"] == "21877102"
    assert signals[0]["listing_price"] is None


def test_deterministic_parse_non_alert_template_defers_to_claude():
    html = "<div>Centris 21877102 viewed by client</div>"
    assert parse.deterministic_parse("portal_activity", html) is None


# ------------------------------------------------------------- claude_parse -
def test_claude_parse_returns_signals_and_language():
    resp = _Resp([_Block("tool_use", "record_signals",
                          {"signals": [{"type": "view", "listing_no": "1"}],
                           "language": "fr"})])
    parse._client = _FakeClient(resp)
    signals, lang = parse.claude_parse(_cfg(), "<html>x</html>")
    assert signals == [{"type": "view", "listing_no": "1"}]
    assert lang == "fr"


def test_claude_parse_no_tool_use_returns_empty():
    resp = _Resp([_Block("text")])
    parse._client = _FakeClient(resp)
    assert parse.claude_parse(_cfg(), "<html>x</html>") == ([], None)


def test_claude_parse_truncates_long_payload():
    resp = _Resp([_Block("tool_use", "record_signals", {"signals": []})])
    fake = _FakeClient(resp)
    parse._client = fake
    parse.claude_parse(_cfg(), "x" * 50000)
    sent = fake.messages.calls[0]["messages"][0]["content"]
    assert len(sent) < 21000  # 20000 char cap + short prefix


# ------------------------------------------------------------- _anthropic ---
def test_anthropic_client_is_cached(monkeypatch):
    created = []

    def _factory(api_key):
        created.append(api_key)
        return object()

    monkeypatch.setattr(parse, "Anthropic", _factory)
    c1 = parse._anthropic(_cfg(anthropic_key="abc"))
    c2 = parse._anthropic(_cfg(anthropic_key="abc"))
    assert c1 is c2
    assert created == ["abc"]  # constructed only once


# -------------------------------------------------------------- parse_email -
def test_parse_email_uses_deterministic_path():
    html = "<div>Centris 21877102 &mdash; $450,000</div>"
    signals, lang, method = parse.parse_email(
        _cfg(), "Nouvelle correspondance", "noreply@matrixmailer.com", html)
    assert method == "deterministic"
    assert signals[0]["listing_no"] == "21877102"
    assert lang is None


def test_parse_email_falls_back_to_claude():
    resp = _Resp([_Block("tool_use", "record_signals",
                          {"signals": [{"type": "favorite"}], "language": "en"})])
    parse._client = _FakeClient(resp)
    signals, lang, method = parse.parse_email(
        _cfg(), "Random subject", "someone@x.com", "<p>no anchors</p>")
    assert method == "claude"
    assert signals == [{"type": "favorite"}]
    assert lang == "en"
