"""Connector tests: Matrix email parser, FUB import/writeback, Vitrine loop."""
import json
import httpx
from radar_hub.models import Contact, Event, WritebackItem
from radar_hub.connectors.matrix_email import parse_matrix_email, apply_parsed
from radar_hub.connectors.fub import FUBClient, import_from_fub, flush_writebacks
from radar_hub.connectors.vitrine import build_matrix_digest

T = "danny"

VISIT_EMAIL = """Subject: Matrix - Visite confirmée
Bonjour,
La visite pour votre client Jean Tremblay (jean.tremblay@example.com) est
confirmée au 6244 rue Cartier, Montréal le 12 juillet à 14h00.
— Système Matrix / Centris"""

ALERT_EMAIL = """Subject: Bienvenue sur le portail Centris
Bonjour Nadia Petrov,
Votre alerte d'inscriptions a été créée avec succès pour le secteur Villeray.
Courriel: n.petrov@example.com
— Centris.ca"""


def test_parse_visit_email():
    p = parse_matrix_email(VISIT_EMAIL)
    assert p.kind == "visit_scheduled"
    assert p.confidence >= 0.75
    assert "Cartier" in p.address
    assert p.contact_email == "jean.tremblay@example.com"


def test_parse_alert_email():
    p = parse_matrix_email(ALERT_EMAIL)
    assert p.kind == "new_client_alert"
    assert p.confidence >= 0.75


def test_parser_skips_tenant_intake_addresses():
    # intake address in the headers must never win over the client's email
    raw = "Delivered-To: alertes.radar+jeantremblay-abc123@gmail.com\n" + VISIT_EMAIL
    assert parse_matrix_email(raw).contact_email == "jean.tremblay@example.com"
    # when the intake address is the ONLY email, contact_email stays empty
    only_intake = ("To: alertes.radar+x-abc123@gmail.com\n"
                   "Subject: Matrix - Visite confirmée\n"
                   "La visite est confirmée au 6244 rue Cartier, Montréal.")
    assert parse_matrix_email(only_intake).contact_email == ""


def test_visit_email_creates_lead_and_scores_engagement(db):
    p = parse_matrix_email(VISIT_EMAIL)
    res = apply_parsed(db, T, p, raw_id="msg-001")
    assert res["applied"] and res["created_contact"]
    c = db.get(Contact, res["contact_id"])
    assert c.source == "matrix_visit"
    # visit.scheduled is client intent → feeds engagement
    assert c.engagement_score > 0
    # replay of the same message-id is a no-op
    apply_parsed(db, T, p, raw_id="msg-001")
    assert db.query(Event).filter_by(type="visit.scheduled").count() == 1


def test_alert_email_converts_existing_lead(db):
    lead = Contact(tenant_id=T, name="Nadia Petrov",
                   email="n.petrov@example.com", source="fub_import")
    db.add(lead)
    db.commit()
    p = parse_matrix_email(ALERT_EMAIL)
    res = apply_parsed(db, T, p, raw_id="msg-002")
    assert res["converted"] is True
    c = db.get(Contact, lead.id)
    assert c.lifecycle == "client"
    assert c.portal_token          # Vitrine access issued
    assert c.source == "fub_import"  # first-touch attribution immutable


def _fub_transport():
    people = {"people": [
        {"id": 88231, "name": "Karim Bensalem", "source": "Zillow",
         "emails": [{"value": "k@example.com"}],
         "phones": [{"value": "438-555-0177"}], "background": "3½ Plateau"},
        {"id": 90114, "name": "Nadia Petrov", "source": "Realtor.ca",
         "emails": [{"value": "n@example.com"}], "phones": []},
    ]}

    def handler(request: httpx.Request) -> httpx.Response:
        if request.url.path.endswith("/people"):
            return httpx.Response(200, json=people)
        if request.url.path.endswith("/notes"):
            return httpx.Response(200, json={"id": 1,
                                             **json.loads(request.content)})
        return httpx.Response(404)
    return httpx.MockTransport(handler)


def test_fub_import_idempotent_with_sublabels(db):
    fub = FUBClient(api_key="test-key", transport=_fub_transport())
    r1 = import_from_fub(db, T, fub)
    r2 = import_from_fub(db, T, fub)
    assert r1 == {"imported": 2, "skipped": 0}
    assert r2 == {"imported": 0, "skipped": 2}
    karim = db.query(Contact).filter_by(fub_person_id="88231").one()
    assert karim.source == "fub_import" and karim.sublabel == "Zillow"
    assert karim.priority_score > 0


def test_fub_writeback_flush(db):
    fub = FUBClient(api_key="test-key", transport=_fub_transport())
    c = Contact(tenant_id=T, name="Karim", source="fub_import",
                fub_person_id="88231", lifecycle="client")
    no_id = Contact(tenant_id=T, name="Sans FUB", source="own_generated",
                    lifecycle="client")
    db.add_all([c, no_id])
    db.commit()
    db.add_all([WritebackItem(tenant_id=T, contact_id=c.id, target="fub_note",
                              body="activité Vitrine"),
                WritebackItem(tenant_id=T, contact_id=no_id.id,
                              target="fub_note", body="x")])
    db.commit()
    res = flush_writebacks(db, T, client=fub)
    assert res["sent"] == 1 and res["manual"] == 1 and res["failed"] == 0
    assert db.query(Event).filter_by(type="crm.synced").count() == 1


def test_vitrine_webhook_full_loop(client, db):
    c = Contact(tenant_id=T, name="Marie-Claude Tremblay",
                source="danny_channel", lifecycle="client")
    c.issue_portal_token()
    db.add(c)
    db.commit()
    payload = {"client_token": c.portal_token, "events": [
        {"type": "portal.session_started", "event_id": "v1"},
        {"type": "listing.viewed", "event_id": "v2", "listing_id": "C-123"},
        {"type": "listing.favorited", "event_id": "v3", "listing_id": "C-123"},
        {"type": "visit.requested", "event_id": "v4", "listing_id": "C-123"},
    ]}
    r = client.post("/api/webhooks/vitrine", json=payload)
    body = r.json()
    assert body["ok"] and body["ingested"] == 4
    assert body["engagement_score"] > 0
    assert body["stage"] == "en_visites"  # visit.requested drives the stage
    # replay: fully deduped, no double-count
    r2 = client.post("/api/webhooks/vitrine", json=payload)
    assert r2.json()["ingested"] == 0 and r2.json()["deduped"] == 4
    # one consolidated writeback per target: FUB note + Matrix history mirror
    assert db.query(WritebackItem).filter_by(contact_id=c.id, status="pending",
                                             target="fub_note").count() == 1
    assert db.query(WritebackItem).filter_by(contact_id=c.id, status="pending",
                                             target="matrix_note").count() == 1


def test_vitrine_unknown_token_404(client):
    r = client.post("/api/webhooks/vitrine",
                    json={"client_token": "nope", "events": []})
    assert r.status_code == 404


def test_matrix_digest_paste_ready(db):
    c = Contact(tenant_id=T, name="Marie-Claude Tremblay",
                source="danny_channel", lifecycle="client")
    c.issue_portal_token()
    db.add(c)
    db.commit()
    from radar_hub.events import ingest_event
    ingest_event(db, tenant_id=T, contact_id=c.id, etype="listing.favorited",
                 actor="client", origin="vitrine",
                 payload={"listing_id": "C-777"}, idempotency_key="d1")
    digest = build_matrix_digest(db, T, db.get(Contact, c.id))
    assert "Marie-Claude Tremblay" in digest
    assert "favori" in digest and "C-777" in digest
    assert "Matrix" in digest  # paste instruction present
