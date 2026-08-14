"""Unit tests for radar_acheteur.db — SQLite storage layer."""
import json

import pytest

from radar_acheteur import db


@pytest.fixture
def path(tmp_path):
    p = tmp_path / "acheteur_test.db"
    db.init(str(p))
    return str(p)


def test_now_iso_is_utc_isoformat():
    v = db.now_iso()
    assert v.endswith("+00:00") and "T" in v


def test_init_creates_all_tables(path):
    with db.connect(path) as c:
        names = {r[0] for r in c.execute(
            "SELECT name FROM sqlite_master WHERE type='table'").fetchall()}
    assert {"raw_emails", "contacts", "signals", "scores"} <= names


def test_connect_commits_on_success(path):
    with db.connect(path) as c:
        db.save_raw(c, message_id="m1", received_at="2024-01-01", sender="a@b.c",
                    subject="s", template="t", parse_status="deterministic",
                    payload={"n_signals": 2})
    # Re-open a fresh connection to prove the write was committed.
    with db.connect(path) as c:
        row = c.execute("SELECT payload FROM raw_emails WHERE message_id='m1'").fetchone()
    assert json.loads(row[0]) == {"n_signals": 2}


def test_seen_message(path):
    with db.connect(path) as c:
        assert db.seen_message(c, "nope") is False
        db.save_raw(c, message_id="m2", received_at=None, sender="s", subject="x")
        assert db.seen_message(c, "m2") is True


def test_save_raw_ignores_duplicate_message_id(path):
    with db.connect(path) as c:
        db.save_raw(c, message_id="dup", received_at=None, sender="s", subject="x")
        db.save_raw(c, message_id="dup", received_at=None, sender="s", subject="y")
        n = c.execute("SELECT COUNT(*) FROM raw_emails WHERE message_id='dup'").fetchone()[0]
    assert n == 1


def test_save_signal_and_signals_for(path):
    with db.connect(path) as c:
        db.save_signal(c, contact_key="mc@x.com", type="view", listing_no="123",
                       occurred_at="2024-06-02T00:00:00+00:00")
        db.save_signal(c, contact_key="mc@x.com", type="favorite", listing_no="456",
                       occurred_at="2024-06-01T00:00:00+00:00")
        rows = db.signals_for(c, "mc@x.com", since_iso="2024-01-01T00:00:00+00:00")
    # Ordered by occurred_at DESC.
    assert [r["type"] for r in rows] == ["view", "favorite"]


def test_signals_for_respects_since(path):
    with db.connect(path) as c:
        db.save_signal(c, contact_key="k", type="view", listing_no="1",
                       occurred_at="2020-01-01T00:00:00+00:00")
        rows = db.signals_for(c, "k", since_iso="2024-01-01T00:00:00+00:00")
    assert rows == []


def test_save_signal_dedupes_on_unique_key(path):
    with db.connect(path) as c:
        for _ in range(2):
            db.save_signal(c, contact_key="k", type="view", listing_no="1",
                           occurred_at="2024-01-01T00:00:00+00:00")
        n = c.execute("SELECT COUNT(*) FROM signals").fetchone()[0]
    assert n == 1


def test_all_contact_keys_distinct_and_filtered(path):
    with db.connect(path) as c:
        db.save_signal(c, contact_key="a", type="view", listing_no="1",
                       occurred_at="2024-06-01T00:00:00+00:00")
        db.save_signal(c, contact_key="a", type="favorite", listing_no="2",
                       occurred_at="2024-06-02T00:00:00+00:00")
        db.save_signal(c, contact_key="b", type="view", listing_no="3",
                       occurred_at="2020-01-01T00:00:00+00:00")
        keys = db.all_contact_keys(c, since_iso="2024-01-01T00:00:00+00:00")
    assert set(keys) == {"a"}


def test_upsert_score_insert_then_update(path):
    with db.connect(path) as c:
        db.upsert_score(c, "k", 3.0, "cool", "first")
        db.upsert_score(c, "k", 20.0, "hot", "second")
        rows = c.execute("SELECT score, tier, rationale FROM scores WHERE contact_key='k'").fetchall()
    assert len(rows) == 1
    assert rows[0]["score"] == 20.0 and rows[0]["tier"] == "hot" and rows[0]["rationale"] == "second"


def test_newly_hot_and_mark_briefed(path):
    with db.connect(path) as c:
        db.upsert_score(c, "hot1", 30.0, "hot", "")
        db.upsert_score(c, "hot2", 25.0, "hot", "")
        db.upsert_score(c, "warm1", 6.0, "warm", "")
        hot = db.newly_hot(c)
        assert [r["contact_key"] for r in hot] == ["hot1", "hot2"]  # DESC by score
        db.mark_briefed(c, "hot1")
        remaining = [r["contact_key"] for r in db.newly_hot(c)]
    assert remaining == ["hot2"]


def test_top_scores_orders_and_limits(path):
    with db.connect(path) as c:
        for i, s in enumerate([1.0, 9.0, 5.0, 7.0]):
            db.upsert_score(c, f"k{i}", s, "cool", "")
        top = db.top_scores(c, limit=2)
    assert [r["score"] for r in top] == [9.0, 7.0]
