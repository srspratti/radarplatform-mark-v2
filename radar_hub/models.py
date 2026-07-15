"""ORM models. Locked decisions honored:
  #2 idempotency_key on every event (unique per tenant)
  #3 tenant_id is the sole structural difference between Danny's instance and white-label clients
  #4 pipeline stage is NEVER stored as truth — always derived from the event log
  #6 Lead vs Client is a lifecycle status on one contacts table, not two tables
"""
from __future__ import annotations
import secrets
from datetime import datetime, timezone
from sqlalchemy import (String, Integer, Float, DateTime, Text, JSON, Boolean,
                        UniqueConstraint, Index, create_engine)
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, sessionmaker
from .config import settings


def utcnow() -> datetime:
    return datetime.now(timezone.utc).replace(tzinfo=None)  # store naive UTC


class Base(DeclarativeBase):
    pass


class Contact(Base):
    """One row per human. lifecycle: lead -> client (conversion = added to Centris)."""
    __tablename__ = "contacts"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    name: Mapped[str] = mapped_column(String(200))
    email: Mapped[str] = mapped_column(String(200), default="")
    phone: Mapped[str] = mapped_column(String(50), default="")
    language: Mapped[str] = mapped_column(String(5), default="fr")
    # Immutable first-touch attribution (decision #5):
    # own_generated | danny_channel | fub_import | matrix_visit | prospecting_agent
    source: Mapped[str] = mapped_column(String(40), index=True)
    sublabel: Mapped[str] = mapped_column(String(120), default="")  # e.g. FUB origin "Zillow"
    # Reporting split, kept apart from immutable first-touch attribution:
    # funnel = the pipe (fub_import, danny_channel, own_generated, …) so new
    # sources plug in without touching `source` semantics; campaign = the
    # specific origin inside it (portal name, campaign tag). init_db backfills
    # both from source/sublabel for rows that predate these columns.
    funnel: Mapped[str] = mapped_column(String(40), default="", index=True)
    campaign: Mapped[str] = mapped_column(String(120), default="")
    lifecycle: Mapped[str] = mapped_column(String(10), default="lead", index=True)  # lead|client
    notes: Mapped[str] = mapped_column(Text, default="")
    priority_score: Mapped[int] = mapped_column(Integer, default=0)
    priority_hint: Mapped[str] = mapped_column(String(120), default="")
    engagement_score: Mapped[int] = mapped_column(Integer, default=0)  # cached projection
    stage: Mapped[str] = mapped_column(String(30), default="nouveau")   # cached projection
    dormant: Mapped[bool] = mapped_column(Boolean, default=False)
    portal_token: Mapped[str] = mapped_column(String(64), default="", index=True)  # Vitrine link
    intake_email: Mapped[str] = mapped_column(String(200), default="", index=True)  # per-client Matrix CC
    fub_person_id: Mapped[str] = mapped_column(String(40), default="", index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    converted_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    __table_args__ = (Index("ix_contact_tenant_email", "tenant_id", "email"),)

    def issue_portal_token(self) -> str:
        if not self.portal_token:
            self.portal_token = secrets.token_urlsafe(16)
        return self.portal_token


class Listing(Base):
    """Listings parsed from this client's Matrix alert emails — what Vitrine
    renders. Dedupe on (tenant, contact, centris_no)."""
    __tablename__ = "listings"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int] = mapped_column(Integer, index=True)
    centris_no: Mapped[str] = mapped_column(String(20))
    address: Mapped[str] = mapped_column(String(300), default="")
    area: Mapped[str] = mapped_column(String(200), default="")
    price: Mapped[int] = mapped_column(Integer, default=0)
    beds: Mapped[int] = mapped_column(Integer, default=0)
    baths: Mapped[int] = mapped_column(Integer, default=0)
    prop_type: Mapped[str] = mapped_column(String(120), default="")
    url: Mapped[str] = mapped_column(String(500), default="")
    received_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    __table_args__ = (UniqueConstraint("tenant_id", "contact_id", "centris_no",
                                       name="uq_listing_per_client"),)


class Event(Base):
    """Canonical event envelope — the single source of truth for stage and score."""
    __tablename__ = "events"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int] = mapped_column(Integer, index=True)
    type: Mapped[str] = mapped_column(String(60), index=True)
    family: Mapped[str] = mapped_column(String(20), index=True)
    actor: Mapped[str] = mapped_column(String(10))  # client | realtor | system
    origin: Mapped[str] = mapped_column(String(20), default="hub")  # vitrine|matrix|fub|hub|agent
    ts: Mapped[datetime] = mapped_column(DateTime, default=utcnow, index=True)
    payload: Mapped[dict] = mapped_column(JSON, default=dict)
    idempotency_key: Mapped[str] = mapped_column(String(120))
    __table_args__ = (UniqueConstraint("tenant_id", "idempotency_key", name="uq_event_idem"),)


class WritebackItem(Base):
    """Queue: hub timeline -> external systems. FUB via API; Matrix via paste-ready digest."""
    __tablename__ = "writeback_queue"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int] = mapped_column(Integer, index=True)
    target: Mapped[str] = mapped_column(String(20))  # fub_note | matrix_digest
    body: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(12), default="pending")  # pending|sent|failed|manual
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    sent_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    error: Mapped[str] = mapped_column(String(300), default="")


class PortalKV(Base):
    """Server-side backing for Vitrine's window.storage — keyed by portal token
    so a client's portal state survives across their devices."""
    __tablename__ = "portal_kv"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    token: Mapped[str] = mapped_column(String(64), index=True)
    key: Mapped[str] = mapped_column(String(120))
    value: Mapped[str] = mapped_column(Text, default="")
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    __table_args__ = (UniqueConstraint("tenant_id", "token", "key",
                                       name="uq_portal_kv"),)


class LedgerEntry(Base):
    """Office manager: commission ledger with QC tax treatment."""
    __tablename__ = "ledger"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    property_address: Mapped[str] = mapped_column(String(300))
    sale_price: Mapped[float] = mapped_column(Float)
    commission_rate: Mapped[float] = mapped_column(Float)  # e.g. 0.02
    commission_gross: Mapped[float] = mapped_column(Float)
    closed_on: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    kind: Mapped[str] = mapped_column(String(10), default="sale")  # sale|purchase(buy-side)


class Expense(Base):
    __tablename__ = "expenses"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    category: Mapped[str] = mapped_column(String(80))  # publicité, OACIQ, essence, ...
    amount: Mapped[float] = mapped_column(Float)
    memo: Mapped[str] = mapped_column(String(300), default="")
    spent_on: Mapped[datetime] = mapped_column(DateTime, default=utcnow)


class ProspectCandidate(Base):
    """Prospecting agent output. Outreach is CASL-gated: no consent_basis, no email."""
    __tablename__ = "prospect_candidates"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    niche: Mapped[str] = mapped_column(String(200))
    market: Mapped[str] = mapped_column(String(120))
    name: Mapped[str] = mapped_column(String(200))
    company: Mapped[str] = mapped_column(String(200), default="")
    email: Mapped[str] = mapped_column(String(200), default="")
    phone: Mapped[str] = mapped_column(String(50), default="")
    address: Mapped[str] = mapped_column(String(300), default="")
    signal: Mapped[str] = mapped_column(String(300), default="")  # why this candidate
    provider: Mapped[str] = mapped_column(String(40), default="stub")
    is_demo: Mapped[bool] = mapped_column(Boolean, default=False)
    # CASL: express | implied_existing_business | implied_inquiry |
    #       conspicuous_publication_b2b | mail_only | None
    consent_basis: Mapped[str | None] = mapped_column(String(40), nullable=True)
    outreach_status: Mapped[str] = mapped_column(String(20), default="none")  # none|drafted|sent
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)


class ContentItem(Base):
    """Content/social agent queue."""
    __tablename__ = "content_queue"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    platform: Mapped[str] = mapped_column(String(30))  # instagram|facebook|linkedin
    language: Mapped[str] = mapped_column(String(5), default="fr")
    topic: Mapped[str] = mapped_column(String(300))
    body: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(12), default="draft")  # draft|scheduled|posted
    scheduled_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)


class FollowUp(Base):
    """Scheduled touches: lead nurture sequence steps, post-closing
    client-for-life touches, review asks. Computed queues read WHERE
    due_at <= now AND status='pending'."""
    __tablename__ = "followups"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int] = mapped_column(Integer, index=True)
    kind: Mapped[str] = mapped_column(String(30), index=True)  # sequence|anniversary|tax_season|equity_report|review_ask
    due_at: Mapped[datetime] = mapped_column(DateTime, index=True)
    status: Mapped[str] = mapped_column(String(12), default="pending", index=True)  # pending|done|skipped|cancelled
    note: Mapped[str] = mapped_column(Text, default="")       # drafted message / context
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    done_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)


class OutboundMessage(Base):
    """Provider-agnostic outbound queue (auto-acks, SMS/WhatsApp connector).
    Dev mode marks 'simulated'; a real provider (Twilio, SMTP) flips to 'sent'."""
    __tablename__ = "outbound_messages"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int] = mapped_column(Integer, index=True)
    channel: Mapped[str] = mapped_column(String(12))            # sms|email|whatsapp|voice
    to_addr: Mapped[str] = mapped_column(String(200), default="")
    body: Mapped[str] = mapped_column(Text, default="")
    purpose: Mapped[str] = mapped_column(String(30), default="")  # auto_ack|sequence|review_ask|…
    status: Mapped[str] = mapped_column(String(12), default="pending", index=True)  # pending|sent|simulated|failed
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow)
    sent_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)


class NotificationItem(Base):
    """In-app alert feed (hot lead, booking, message). The bell in the ops
    console polls unread; browser Notification fires while the app is open."""
    __tablename__ = "notifications"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int | None] = mapped_column(Integer, nullable=True)
    kind: Mapped[str] = mapped_column(String(30), default="info")  # hot_lead|booking|message|info
    title: Mapped[str] = mapped_column(String(200), default="")
    body: Mapped[str] = mapped_column(Text, default="")
    read: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow, index=True)


class ConsentRecord(Base):
    """Loi 25 / LCAP audit trail — one row per consent fact, never updated,
    only appended (revocations are new rows with granted=False)."""
    __tablename__ = "consents"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    tenant_id: Mapped[str] = mapped_column(String(64), index=True)
    contact_id: Mapped[int] = mapped_column(Integer, index=True)
    basis: Mapped[str] = mapped_column(String(40))     # express|implied|business_relationship
    scope: Mapped[str] = mapped_column(String(120), default="communications")
    granted: Mapped[bool] = mapped_column(Boolean, default=True)
    source: Mapped[str] = mapped_column(String(60), default="")  # open_house|web_form|prospecting|import
    note: Mapped[str] = mapped_column(Text, default="")
    recorded_at: Mapped[datetime] = mapped_column(DateTime, default=utcnow, index=True)


# --- engine/session -------------------------------------------------------
engine = create_engine(settings.DB_URL, connect_args={"check_same_thread": False}
                       if settings.DB_URL.startswith("sqlite") else {})
SessionLocal = sessionmaker(bind=engine, autoflush=False, expire_on_commit=False)


def init_db() -> None:
    Base.metadata.create_all(engine)
    _migrate_contacts()


def _migrate_contacts() -> None:
    """Additive, idempotent migration for DB files that predate new columns.
    SQLite ALTER TABLE ADD COLUMN only — never destructive."""
    from sqlalchemy import inspect, text
    cols = {c["name"] for c in inspect(engine).get_columns("contacts")}
    added = []
    if "funnel" not in cols:
        added.append("ALTER TABLE contacts ADD COLUMN funnel VARCHAR(40) DEFAULT ''")
    if "campaign" not in cols:
        added.append("ALTER TABLE contacts ADD COLUMN campaign VARCHAR(120) DEFAULT ''")
    with engine.begin() as conn:
        for stmt in added:
            conn.execute(text(stmt))
        # Backfill is safe to run every boot: only touches empty values.
        conn.execute(text("UPDATE contacts SET funnel = source "
                          "WHERE funnel = '' OR funnel IS NULL"))
        conn.execute(text("UPDATE contacts SET campaign = sublabel "
                          "WHERE campaign = '' OR campaign IS NULL"))


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
