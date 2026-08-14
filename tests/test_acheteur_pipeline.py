"""Unit tests for radar_acheteur.pipeline — end-to-end orchestration."""
from datetime import datetime, timezone

import pytest

from radar_acheteur import pipeline, db


@pytest.fixture
def cfg_db(tmp_path, monkeypatch):
    p = tmp_path / "pipeline.db"
    db.init(str(p))
    monkeypatch.setattr(pipeline.cfg, "db_path", str(p))
    monkeypatch.setattr(pipeline.cfg, "lookback_days", 30)
    monkeypatch.setattr(pipeline.cfg, "half_life_days", 7)
    monkeypatch.setattr(pipeline.cfg, "hot_threshold", 12)
    monkeypatch.setattr(pipeline.cfg, "warm_threshold", 5)
    monkeypatch.setattr(pipeline.cfg, "broker_name", "Danny")
    return str(p)


# --------------------------------------------------------------- _contact_key
def test_contact_key_prefers_email_then_phone_then_name():
    assert pipeline._contact_key({"contact_email": "A@X.com"}) == "a@x.com"
    assert pipeline._contact_key({"contact_phone": " 514 "}) == "514"
    assert pipeline._contact_key({"contact_name": "MC Tremblay"}) == "mc tremblay"
    assert pipeline._contact_key({}) == "unknown"


# ------------------------------------------------------------ ingest_and_parse
def test_ingest_and_parse_stores_signals(cfg_db, monkeypatch):
    mails = [{
        "message_id": "m1", "received_at": "2024-06-01T00:00:00+00:00",
        "sender": "noreply@matrixmailer.com", "subject": "Nouvelle",
        "html": "<div>Centris 21877102</div>",
    }]
    monkeypatch.setattr(pipeline.ingest, "fetch_unseen", lambda cfg: iter(mails))
    monkeypatch.setattr(pipeline.parse, "parse_email",
                        lambda cfg, s, se, h: ([{"type": "alert_match", "listing_no": "21877102"}],
                                               None, "deterministic"))
    monkeypatch.setattr(pipeline.parse, "classify_template",
                        lambda s, se, h: "alert_new_matches")
    total = pipeline.ingest_and_parse()
    assert total == 1
    with db.connect(cfg_db) as c:
        sigs = c.execute("SELECT contact_key, type, listing_no FROM signals").fetchall()
        raw = c.execute("SELECT parse_status FROM raw_emails").fetchall()
    assert sigs[0]["listing_no"] == "21877102"
    assert sigs[0]["contact_key"] == "unknown"
    assert raw[0]["parse_status"] == "deterministic"


def test_ingest_and_parse_skips_already_seen(cfg_db, monkeypatch):
    with db.connect(cfg_db) as c:
        db.save_raw(c, message_id="dup", received_at=None, sender="s", subject="x")
    mails = [{"message_id": "dup", "received_at": None, "sender": "s",
              "subject": "x", "html": "<p>x</p>"}]
    monkeypatch.setattr(pipeline.ingest, "fetch_unseen", lambda cfg: iter(mails))
    called = {"n": 0}
    monkeypatch.setattr(pipeline.parse, "parse_email",
                        lambda *a, **k: called.__setitem__("n", called["n"] + 1) or ([], None, "claude"))
    assert pipeline.ingest_and_parse() == 0
    assert called["n"] == 0  # parser never invoked for a seen message


# --------------------------------------------------------------------- rescore
def test_rescore_writes_scores_and_tiers(cfg_db, monkeypatch):
    now = datetime.now(timezone.utc).isoformat()
    with db.connect(cfg_db) as c:
        for i in range(3):
            db.save_signal(c, contact_key="hot@x.com", type="favorite",
                           listing_no=str(i), occurred_at=now)
        db.save_signal(c, contact_key="cool@x.com", type="view",
                       listing_no="9", occurred_at=now)
    pipeline.rescore()
    with db.connect(cfg_db) as c:
        rows = {r["contact_key"]: r["tier"]
                for r in c.execute("SELECT contact_key, tier FROM scores").fetchall()}
    assert rows["hot@x.com"] == "hot"     # 3 favorites ~15 >= hot threshold 12
    assert rows["cool@x.com"] == "cool"   # single view ~1 < warm threshold 5


# -------------------------------------------------------------------- flag_hot
class _FakeFUB:
    def __init__(self, cfg):
        self.events = []
        self.notes = []
        self.tasks = []

    def create_event(self, **kw):
        self.events.append(kw)

    def find_person(self, email=None, phone=None):
        return {"id": 77}

    def add_note(self, pid, subject, body):
        self.notes.append((pid, subject, body))

    def create_task(self, pid, name, due_iso=None):
        self.tasks.append((pid, name, due_iso))


def test_flag_hot_pushes_to_fub_and_marks_briefed(cfg_db, monkeypatch):
    now = datetime.now(timezone.utc).isoformat()
    with db.connect(cfg_db) as c:
        db.save_signal(c, contact_key="mc@x.com", type="favorite",
                       listing_no="1", occurred_at=now)
        db.upsert_score(c, "mc@x.com", 30.0, "hot", "")

    fake = _FakeFUB(pipeline.cfg)
    monkeypatch.setattr(pipeline, "FUB", lambda cfg: fake)
    monkeypatch.setattr(pipeline.digest, "why_now_brief",
                        lambda cfg, key, sigs: "call now")

    n = pipeline.flag_hot()
    assert n == 1
    assert fake.events[0]["email"] == "mc@x.com"
    assert "call now" in fake.events[0]["message"]
    assert fake.notes[0][0] == 77
    assert fake.tasks[0][0] == 77
    with db.connect(cfg_db) as c:
        briefed = c.execute("SELECT briefed FROM scores WHERE contact_key='mc@x.com'").fetchone()[0]
        rationale = c.execute("SELECT rationale FROM scores WHERE contact_key='mc@x.com'").fetchone()[0]
    assert briefed == 1
    assert rationale == "call now"
    # No hot leads remain -> a second run flags nothing.
    assert pipeline.flag_hot() == 0


def test_flag_hot_phone_only_contact(cfg_db, monkeypatch):
    with db.connect(cfg_db) as c:
        db.upsert_score(c, "5145551212", 40.0, "hot", "")
    fake = _FakeFUB(pipeline.cfg)
    monkeypatch.setattr(pipeline, "FUB", lambda cfg: fake)
    monkeypatch.setattr(pipeline.digest, "why_now_brief", lambda *a: "brief")
    pipeline.flag_hot()
    assert fake.events[0]["phone"] == "5145551212"
    assert fake.events[0]["email"] is None


# ------------------------------------------------------------------ send_digest
def test_send_digest_only_when_rows_present(cfg_db, monkeypatch):
    sent = []
    monkeypatch.setattr(pipeline.digest, "build_digest_html", lambda cfg, rows: "<html>")
    monkeypatch.setattr(pipeline.digest, "send_digest", lambda cfg, html: sent.append(html))

    pipeline.send_digest()  # no scores yet
    assert sent == []

    with db.connect(cfg_db) as c:
        db.upsert_score(c, "k", 5.0, "warm", "")
    pipeline.send_digest()
    assert sent == ["<html>"]


# --------------------------------------------------------------------- run_once
def test_run_once_invokes_stages(monkeypatch):
    calls = []
    monkeypatch.setattr(pipeline.cfg, "validate", lambda: calls.append("validate"))
    monkeypatch.setattr(pipeline.db, "init", lambda path: calls.append("init"))
    monkeypatch.setattr(pipeline, "ingest_and_parse", lambda: calls.append("ingest"))
    monkeypatch.setattr(pipeline, "rescore", lambda: calls.append("rescore"))
    monkeypatch.setattr(pipeline, "flag_hot", lambda: calls.append("flag"))
    monkeypatch.setattr(pipeline, "send_digest", lambda: calls.append("digest"))

    pipeline.run_once(with_digest=False)
    assert calls == ["validate", "init", "ingest", "rescore", "flag"]

    calls.clear()
    pipeline.run_once(with_digest=True)
    assert calls[-1] == "digest"
