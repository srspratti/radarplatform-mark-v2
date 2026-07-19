"""Unit tests for radar_acheteur.fub — Follow Up Boss REST client."""
import base64
import io
import json
import types
import urllib.error

import pytest

from radar_acheteur import fub


def _cfg(**over):
    base = dict(fub_key="secret", fub_system="RadarAcheteur", fub_system_key="")
    base.update(over)
    return types.SimpleNamespace(**base)


class _FakeResp:
    def __init__(self, body):
        self._body = body.encode() if isinstance(body, str) else body

    def read(self):
        return self._body

    def __enter__(self):
        return self

    def __exit__(self, *a):
        return False


def _http_error(code, body="err"):
    return urllib.error.HTTPError(
        "http://x", code, "msg", {}, io.BytesIO(body.encode()))


# ------------------------------------------------------------- headers ------
def test_headers_basic_auth_and_no_system_key():
    c = fub.FUB(_cfg())
    expected = base64.b64encode(b"secret:").decode()
    assert c.headers["Authorization"] == f"Basic {expected}"
    assert c.headers["X-System"] == "RadarAcheteur"
    assert "X-System-Key" not in c.headers


def test_headers_include_system_key_when_set():
    c = fub.FUB(_cfg(fub_system_key="sk"))
    assert c.headers["X-System-Key"] == "sk"


# --------------------------------------------------------------- _req -------
def test_req_success_parses_json(monkeypatch):
    captured = {}

    def _urlopen(req, timeout=None):
        captured["url"] = req.full_url
        captured["method"] = req.get_method()
        captured["data"] = req.data
        return _FakeResp(json.dumps({"ok": True}))

    monkeypatch.setattr(fub.urllib.request, "urlopen", _urlopen)
    out = fub.FUB(_cfg())._req("POST", "/events", {"a": 1})
    assert out == {"ok": True}
    assert captured["url"] == "https://api.followupboss.com/v1/events"
    assert captured["method"] == "POST"
    assert json.loads(captured["data"]) == {"a": 1}


def test_req_empty_body_returns_empty_dict(monkeypatch):
    monkeypatch.setattr(fub.urllib.request, "urlopen", lambda req, timeout=None: _FakeResp(""))
    assert fub.FUB(_cfg())._req("GET", "/people") == {}


def test_req_retries_on_429_then_raises(monkeypatch):
    calls = {"n": 0}

    def _urlopen(req, timeout=None):
        calls["n"] += 1
        raise _http_error(429)

    monkeypatch.setattr(fub.urllib.request, "urlopen", _urlopen)
    monkeypatch.setattr(fub.time, "sleep", lambda *_: None)
    with pytest.raises(RuntimeError, match="failed after 3 retries"):
        fub.FUB(_cfg())._req("GET", "/people", retries=3)
    assert calls["n"] == 3


def test_req_retries_on_500_then_succeeds(monkeypatch):
    seq = [_http_error(503), _FakeResp(json.dumps({"ok": 1}))]

    def _urlopen(req, timeout=None):
        item = seq.pop(0)
        if isinstance(item, Exception):
            raise item
        return item

    monkeypatch.setattr(fub.urllib.request, "urlopen", _urlopen)
    monkeypatch.setattr(fub.time, "sleep", lambda *_: None)
    assert fub.FUB(_cfg())._req("GET", "/x") == {"ok": 1}


def test_req_client_error_raises_immediately(monkeypatch):
    calls = {"n": 0}

    def _urlopen(req, timeout=None):
        calls["n"] += 1
        raise _http_error(400, "bad request")

    monkeypatch.setattr(fub.urllib.request, "urlopen", _urlopen)
    with pytest.raises(RuntimeError, match="400"):
        fub.FUB(_cfg())._req("POST", "/events", {})
    assert calls["n"] == 1  # 4xx is not retried


# ----------------------------------------------------- higher-level calls ---
def _capture_client(monkeypatch):
    sent = []
    monkeypatch.setattr(fub.FUB, "_req",
                        lambda self, method, path, body=None, retries=3:
                        sent.append((method, path, body)) or {"people": []})
    return fub.FUB(_cfg()), sent


def test_create_event_builds_person_payload(monkeypatch):
    c, sent = _capture_client(monkeypatch)
    c.create_event(name="MC Tremblay", email="mc@x.com", phone="514", tags=["AI: Hot"])
    method, path, body = sent[0]
    assert (method, path) == ("POST", "/events")
    assert body["person"]["firstName"] == "MC Tremblay"
    assert body["person"]["emails"] == [{"value": "mc@x.com"}]
    assert body["person"]["phones"] == [{"value": "514"}]
    assert body["person"]["tags"] == ["AI: Hot"]
    assert body["type"] == "Inquiry"


def test_find_person_no_identifier_returns_none(monkeypatch):
    c, sent = _capture_client(monkeypatch)
    assert c.find_person() is None
    assert sent == []  # never hits the network


def test_find_person_builds_email_query(monkeypatch):
    sent = []

    def _req(self, method, path, body=None, retries=3):
        sent.append((method, path))
        return {"people": [{"id": 42}]}

    monkeypatch.setattr(fub.FUB, "_req", _req)
    person = fub.FUB(_cfg()).find_person(email="a b@x.com")
    assert person == {"id": 42}
    assert "email=a%20b%40x.com" in sent[0][1] and sent[0][1].endswith("&limit=1")


def test_add_note_and_create_task(monkeypatch):
    c, sent = _capture_client(monkeypatch)
    c.add_note(7, "subject", "body")
    c.create_task(7, "Call lead", due_iso="2024-01-01")
    c.create_task(7, "No due")
    assert sent[0][:2] == ("POST", "/notes")
    assert sent[0][2] == {"personId": 7, "subject": "subject", "body": "body"}
    assert sent[1][2]["dueDate"] == "2024-01-01"
    assert "dueDate" not in sent[2][2]
