"""SQLite storage. Zero infra cost for a single-broker pilot.
Swap for Postgres by changing the connection in `connect()` when going multi-tenant."""
import sqlite3
import json
from contextlib import contextmanager

from .timeutil import now_iso

SCHEMA = """
CREATE TABLE IF NOT EXISTS raw_emails (
    id INTEGER PRIMARY KEY,
    message_id TEXT UNIQUE,
    received_at TEXT,
    sender TEXT,
    subject TEXT,
    template TEXT,
    parse_status TEXT,
    payload TEXT
);
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY,
    fub_person_id TEXT,
    full_name TEXT,
    email TEXT,
    phone TEXT,
    language TEXT,
    created_at TEXT,
    UNIQUE(email),
    UNIQUE(phone)
);
CREATE TABLE IF NOT EXISTS signals (
    id INTEGER PRIMARY KEY,
    contact_key TEXT,          -- email|phone|name used to group before FUB match
    type TEXT,                 -- view | favorite | discard | alert_match | portal_login
    listing_no TEXT,
    listing_addr TEXT,
    listing_price REAL,
    listing_url TEXT,
    occurred_at TEXT,
    raw_email_id INTEGER,
    UNIQUE(contact_key, type, listing_no, occurred_at)
);
CREATE TABLE IF NOT EXISTS scores (
    contact_key TEXT PRIMARY KEY,
    score REAL,
    tier TEXT,
    rationale TEXT,
    briefed INTEGER DEFAULT 0,
    computed_at TEXT
);
"""


@contextmanager
def connect(path: str):
    conn = sqlite3.connect(path)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init(path: str):
    with connect(path) as c:
        c.executescript(SCHEMA)


def seen_message(c, message_id: str) -> bool:
    return c.execute("SELECT 1 FROM raw_emails WHERE message_id=?",
                     (message_id,)).fetchone() is not None


def save_raw(c, **kw) -> int:
    cur = c.execute(
        """INSERT OR IGNORE INTO raw_emails
           (message_id, received_at, sender, subject, template, parse_status, payload)
           VALUES (?,?,?,?,?,?,?)""",
        (kw["message_id"], kw["received_at"], kw["sender"], kw["subject"],
         kw.get("template"), kw.get("parse_status"), json.dumps(kw.get("payload", {}))))
    return cur.lastrowid


def save_signal(c, **kw):
    c.execute(
        """INSERT OR IGNORE INTO signals
           (contact_key, type, listing_no, listing_addr, listing_price,
            listing_url, occurred_at, raw_email_id)
           VALUES (?,?,?,?,?,?,?,?)""",
        (kw["contact_key"], kw["type"], kw.get("listing_no"), kw.get("listing_addr"),
         kw.get("listing_price"), kw.get("listing_url"),
         kw.get("occurred_at", now_iso()), kw.get("raw_email_id")))


def signals_for(c, contact_key: str, since_iso: str):
    return c.execute(
        "SELECT * FROM signals WHERE contact_key=? AND occurred_at>=? ORDER BY occurred_at DESC",
        (contact_key, since_iso)).fetchall()


def all_contact_keys(c, since_iso: str):
    return [r[0] for r in c.execute(
        "SELECT DISTINCT contact_key FROM signals WHERE occurred_at>=?", (since_iso,)).fetchall()]


def upsert_score(c, key, score, tier, rationale):
    c.execute(
        """INSERT INTO scores (contact_key, score, tier, rationale, computed_at)
           VALUES (?,?,?,?,?)
           ON CONFLICT(contact_key) DO UPDATE SET
             score=excluded.score, tier=excluded.tier,
             rationale=excluded.rationale, computed_at=excluded.computed_at""",
        (key, score, tier, rationale, now_iso()))


def mark_briefed(c, key):
    c.execute("UPDATE scores SET briefed=1 WHERE contact_key=?", (key,))


def newly_hot(c):
    """Hot contacts not yet briefed/flagged."""
    return c.execute(
        "SELECT * FROM scores WHERE tier='hot' AND briefed=0 ORDER BY score DESC").fetchall()


def top_scores(c, limit=15):
    return c.execute(
        "SELECT * FROM scores ORDER BY score DESC LIMIT ?", (limit,)).fetchall()
