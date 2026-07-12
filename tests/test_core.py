"""Core engine tests: the four locked decisions plus scoring instruments."""
from datetime import timedelta
from radar_hub.models import Contact, Event, utcnow
from radar_hub.events import ingest_event
from radar_hub.scoring import engagement_score, priority_score
from radar_hub.stages import derive_stage, is_dormant

T = "danny"


def _contact(db, **kw) -> Contact:
    defaults = dict(tenant_id=T, name="Test", source="own_generated")
    defaults.update(kw)
    c = Contact(**defaults)
    db.add(c)
    db.commit()
    return c


def test_event_idempotency(db):
    c = _contact(db)
    ev1, created1 = ingest_event(db, tenant_id=T, contact_id=c.id,
                                 etype="listing.viewed", actor="client",
                                 idempotency_key="same-key")
    ev2, created2 = ingest_event(db, tenant_id=T, contact_id=c.id,
                                 etype="listing.viewed", actor="client",
                                 idempotency_key="same-key")
    assert created1 is True and created2 is False
    assert ev1.id == ev2.id
    assert db.query(Event).filter_by(tenant_id=T).count() == 1


def test_realtor_events_never_inflate_engagement(db):
    c = _contact(db, lifecycle="client")
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="message.sent",
                 actor="realtor", idempotency_key="r1")
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="listing.viewed",
                 actor="realtor", idempotency_key="r2")
    assert db.get(Contact, c.id).engagement_score == 0
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="listing.favorited",
                 actor="client", idempotency_key="c1")
    assert db.get(Contact, c.id).engagement_score > 0


def test_decay_reduces_old_activity(db):
    c = _contact(db, lifecycle="client")
    old = Event(tenant_id=T, contact_id=c.id, type="listing.favorited",
                family="browsing", actor="client",
                ts=utcnow() - timedelta(days=21), idempotency_key="old")
    fresh = Event(tenant_id=T, contact_id=c.id, type="listing.favorited",
                  family="browsing", actor="client", ts=utcnow(),
                  idempotency_key="new")
    assert engagement_score([fresh]) > engagement_score([old])
    # 3 half-lives → old worth ~1/8 of fresh
    assert engagement_score([old]) <= engagement_score([fresh]) // 4 + 1


def test_stage_derivation_ladder(db):
    c = _contact(db)
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="lead.captured",
                 actor="system", idempotency_key="s1")
    assert db.get(Contact, c.id).stage == "nouveau"
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="client.converted",
                 actor="realtor", idempotency_key="s2")
    assert db.get(Contact, c.id).stage == "client_actif"
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="listing.viewed",
                 actor="client", idempotency_key="s3")
    assert db.get(Contact, c.id).stage == "en_reperage"
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="offer.submitted",
                 actor="client", idempotency_key="s4")
    assert db.get(Contact, c.id).stage == "offre"
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="notary.scheduled",
                 actor="system", idempotency_key="s5")
    assert db.get(Contact, c.id).stage == "transaction"
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="transaction.closed",
                 actor="system", idempotency_key="s6")
    assert db.get(Contact, c.id).stage == "cloture"


def test_stage_is_monotonic_projection(db):
    """Late browsing events never demote a client past the offer stage."""
    events = []
    for etype, fam in [("offer.submitted", "offers"), ("listing.viewed", "browsing")]:
        events.append(Event(tenant_id=T, contact_id=1, type=etype, family=fam,
                            actor="client", ts=utcnow(), idempotency_key=etype))
    assert derive_stage(events) == "offre"


def test_dormancy_flag(db):
    c = _contact(db, lifecycle="client",
                 converted_at=utcnow() - timedelta(days=40))
    stale = Event(tenant_id=T, contact_id=c.id, type="listing.viewed",
                  family="browsing", actor="client",
                  ts=utcnow() - timedelta(days=30), idempotency_key="stale")
    assert is_dormant(c, [stale]) is True
    fresh = Event(tenant_id=T, contact_id=c.id, type="listing.viewed",
                  family="browsing", actor="client", ts=utcnow(),
                  idempotency_key="fresh")
    assert is_dormant(c, [stale, fresh]) is False


def test_priority_score_source_and_intent(db):
    hot = _contact(db, source="matrix_visit",
                   notes="Pré-approuvé, veut visiter samedi")
    cold = _contact(db, source="prospecting_agent",
                    created_at=utcnow() - timedelta(days=10))
    s_hot, hint_hot = priority_score(hot)
    s_cold, hint_cold = priority_score(cold)
    assert s_hot >= 75 and "Appeler" in hint_hot
    assert s_cold < 40
    assert s_hot > s_cold


def test_convert_lead_endpoint(client, db):
    r = client.post("/api/leads", json={"name": "Test Lead",
                                        "email": "t@example.com"})
    cid = r.json()["id"]
    r = client.post(f"/api/leads/{cid}/convert")
    body = r.json()
    assert body["lifecycle"] == "client"
    assert body["portal_token"]  # Vitrine token issued at conversion
    assert body["stage"] == "client_actif"
    # conversion event exists exactly once, replay-safe
    r = client.post(f"/api/leads/{cid}/convert")
    assert r.json()["lifecycle"] == "client"
    assert db.query(Event).filter_by(type="client.converted").count() == 1
