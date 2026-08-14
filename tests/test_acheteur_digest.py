"""Unit tests for radar_acheteur.digest — briefs, digest HTML, and delivery."""
import types

import pytest

from radar_acheteur import digest


def _cfg(**over):
    base = dict(anthropic_key="key", model="m", broker_lang="fr", broker_name="Danny",
                broker_email="", smtp_host="smtp", smtp_port=587,
                smtp_user="u@x.com", smtp_pass="pw")
    base.update(over)
    return types.SimpleNamespace(**base)


class _Block:
    def __init__(self, type, text=""):
        self.type = type
        self.text = text


class _Resp:
    def __init__(self, content):
        self.content = content


@pytest.fixture(autouse=True)
def _reset_client():
    digest._client = None
    yield
    digest._client = None


# ------------------------------------------------------------ why_now_brief -
def test_why_now_brief_composes_activity_and_returns_text():
    captured = {}

    class _Messages:
        def create(self, **kw):
            captured.update(kw)
            return _Resp([_Block("text", "Call now: "), _Block("other", "ignored"),
                          _Block("text", "high intent.")])

    digest._client = types.SimpleNamespace(messages=_Messages())
    signals = [{"type": "favorite", "listing_addr": "123 rue X",
                "listing_no": "1", "listing_price": 450000,
                "occurred_at": "2024-06-01T10:00:00+00:00"}]
    out = digest.why_now_brief(_cfg(), "MC", signals)
    assert out == "Call now: high intent."
    user_msg = captured["messages"][0]["content"]
    assert "123 rue X" in user_msg and "$450,000" in user_msg and "2024-06-01" in user_msg


def test_why_now_brief_language_switches_to_english():
    captured = {}

    class _Messages:
        def create(self, **kw):
            captured.update(kw)
            return _Resp([_Block("text", "ok")])

    digest._client = types.SimpleNamespace(messages=_Messages())
    sig = [{"type": "view", "listing_addr": "", "listing_no": "", "listing_price": 0,
            "occurred_at": "2024-06-01T00:00:00+00:00"}]
    digest.why_now_brief(_cfg(broker_lang="en"), "", sig)
    assert "English" in captured["system"][0]["text"]


# ---------------------------------------------------------- build_digest_html
def test_build_digest_html_renders_rows_and_tiers():
    rows = [
        {"contact_key": "mc@x.com", "rationale": "hot lead", "tier": "hot", "score": 30},
        {"contact_key": "bob@x.com", "rationale": None, "tier": "cool", "score": 2},
    ]
    html = digest.build_digest_html(_cfg(), rows)
    assert "mc@x.com" in html and "hot lead" in html
    assert "HOT 30" in html and "COOL 2" in html
    assert "#c0392b" in html  # hot badge colour
    assert "Danny" in html


# --------------------------------------------------------------- send_digest
def test_send_digest_writes_file_when_no_broker_email(monkeypatch, tmp_path):
    monkeypatch.chdir(tmp_path)
    digest.send_digest(_cfg(broker_email=""), "<b>hi</b>")
    assert (tmp_path / "digest.html").read_text() == "<b>hi</b>"


def test_send_digest_sends_email_when_configured(monkeypatch):
    events = []

    class _SMTP:
        def __init__(self, host, port):
            events.append(("init", host, port))

        def __enter__(self):
            return self

        def __exit__(self, *a):
            events.append(("close",))
            return False

        def starttls(self):
            events.append(("starttls",))

        def login(self, u, p):
            events.append(("login", u, p))

        def send_message(self, msg):
            events.append(("send", msg["To"], msg["Subject"]))

    monkeypatch.setattr(digest.smtplib, "SMTP", _SMTP)
    digest.send_digest(_cfg(broker_email="danny@x.com"), "<b>digest</b>")
    kinds = [e[0] for e in events]
    assert kinds == ["init", "starttls", "login", "send", "close"]
    send = [e for e in events if e[0] == "send"][0]
    assert send[1] == "danny@x.com"
