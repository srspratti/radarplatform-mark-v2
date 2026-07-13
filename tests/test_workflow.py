"""Tests for the client-listings loop and the two-edition workflow pieces."""
import pathlib
from radar_hub.config import settings
from radar_hub.models import Contact, Event, Listing, WritebackItem
from radar_hub.connectors.matrix_email import (convert_contact,
                                               make_intake_email,
                                               parse_listing_cards)

T = "danny"
ROOT = pathlib.Path(__file__).resolve().parents[1]

ALERT_WITH_LISTINGS = """Delivered-To: alertes.radar+mctremblay-abc123@gmail.com
To: mc.tremblay@example.com
Cc: alertes.radar+mctremblay-abc123@gmail.com
Subject: Centris — 2 nouvelles inscriptions correspondent à vos critères

Bonjour, de nouvelles inscriptions correspondent à votre recherche.

4823, rue Chambord, Montréal (Le Plateau-Mont-Royal)
Condo — 2 chambres, 1 salle de bain
612 000 $
https://www.centris.ca/fr/condo~a-vendre~le-plateau-mont-royal/21877102?view=Summary

6155, rue Cartier, Montréal (Rosemont)
Duplex — 3 chambres
674 000 $
https://www.centris.ca/fr/duplex~a-vendre~rosemont/21880226

— Centris.ca / Matrix
"""


def _mk_client(db, name="Marie-Claude Tremblay",
               email="mc.tremblay@example.com") -> Contact:
    c = Contact(tenant_id=T, name=name, email=email, source="danny_channel")
    db.add(c)
    db.commit()
    convert_contact(db, T, c, via="test")
    return c


def test_intake_email_designed_at_conversion(db):
    c = _mk_client(db)
    assert c.intake_email.startswith("alertes.radar+marieclaudetre")
    assert c.intake_email.endswith("@gmail.com")
    assert c.portal_token[:6].lower() in c.intake_email
    # alias mode
    old = settings.INTAKE_EMAIL_MODE
    settings.INTAKE_EMAIL_MODE = "alias"
    alias = make_intake_email("Karim Bensalem", "ZzTop123")
    settings.INTAKE_EMAIL_MODE = old
    assert alias == f"karimbensalem-zztop1@{settings.INTAKE_EMAIL_DOMAIN}"


def test_listing_cards_parser():
    cards = parse_listing_cards(ALERT_WITH_LISTINGS)
    assert len(cards) == 2
    a, b = cards
    assert a["centris_no"] == "21877102" and a["price"] == 612000
    assert "Chambord" in a["address"] and a["beds"] == 2 and a["baths"] == 1
    assert a["prop_type"].startswith("Condo")
    assert b["centris_no"] == "21880226" and b["beds"] == 3
    assert b["url"].startswith("https://www.centris.ca/fr/duplex")


def test_email_routed_by_intake_address_feeds_vitrine(client, db):
    c = _mk_client(db)
    # simulate: Danny pasted the generated address as 2nd recipient in Matrix
    raw = ALERT_WITH_LISTINGS.replace(
        "alertes.radar+mctremblay-abc123@gmail.com", c.intake_email)
    r = client.post("/api/connectors/matrix/ingest-raw",
                    json={"raw": raw, "message_id": "m-1"}).json()
    assert r["routed_by_intake"] is True
    assert r["listings_new"] == 2
    # replay: everything dedupes
    r2 = client.post("/api/connectors/matrix/ingest-raw",
                     json={"raw": raw, "message_id": "m-1"}).json()
    assert r2["listings_new"] == 0 and r2["listings_dup"] == 2
    assert db.query(Listing).filter_by(contact_id=c.id).count() == 2
    # match receipt logged as system fact, engagement untouched
    assert db.query(Event).filter_by(contact_id=c.id,
                                     type="email.opened").count() == 2
    assert db.get(Contact, c.id).engagement_score == 0
    # …and the portal endpoint now serves them
    rows = client.get(f"/api/vitrine/listings/{c.portal_token}").json()
    assert {x["centris_no"] for x in rows} == {"21877102", "21880226"}
    assert all(x["url"].startswith("https://www.centris.ca") for x in rows)


def test_routed_match_email_never_creates_spurious_contact(client, db):
    """Regression: apply_parsed used to re-resolve the contact from the first
    email regex-matched in the raw text — the intake address itself in the
    To/Delivered-To headers — and create a 'Prospect Matrix' lead even though
    the email was already routed by intake address."""
    c = _mk_client(db)
    raw = (ALERT_WITH_LISTINGS
           .replace("To: mc.tremblay@example.com\n", "")   # intake addr = only email
           # singular form so _RX_MATCH fires → kind == listing_match
           .replace("nouvelles inscriptions correspondent",
                    "nouvelle inscription correspond")
           .replace("alertes.radar+mctremblay-abc123@gmail.com",
                    c.intake_email))
    r = client.post("/api/connectors/matrix/ingest-raw",
                    json={"raw": raw, "message_id": "m-7"}).json()
    assert r["routed_by_intake"] is True
    assert r["parsed"]["kind"] == "listing_match"
    assert r["parsed"]["email"] == ""            # intake address filtered out
    assert r["created_contact"] is False
    assert r["contact_id"] == c.id
    assert r["listings_new"] == 2
    assert db.query(Contact).count() == 1

    # match email without listing cards: event attributed to routed contact
    raw2 = (f"To: {c.intake_email}\n"
            "Subject: Centris\n\n"
            "Une nouvelle inscription correspond à vos critères.\n")
    r2 = client.post("/api/connectors/matrix/ingest-raw",
                     json={"raw": raw2, "message_id": "m-8"}).json()
    assert r2["created_contact"] is False and r2["contact_id"] == c.id
    assert db.query(Contact).count() == 1
    assert db.query(Event).filter_by(contact_id=c.id,
                                     type="email.opened").count() == 3


def test_listings_endpoint_token_gated(client):
    assert client.get("/api/vitrine/listings/bogus").status_code == 401


def test_matrix_notes_queue_and_mark(client, db):
    c = _mk_client(db, name="Karim Bensalem", email="k@x.com")
    client.post("/api/webhooks/vitrine", json={
        "client_token": c.portal_token,
        "events": [{"type": "listing.favorited", "event_id": "n1",
                    "listing_id": "C-1"}]})
    notes = client.get("/api/connectors/matrix/notes").json()
    assert len(notes) == 1 and notes[0]["contact_name"] == "Karim Bensalem"
    assert "Karim" in notes[0]["body"]
    nid = notes[0]["id"]
    assert client.post(f"/api/connectors/matrix/notes/{nid}/mark",
                       json={"status": "sent"}).json()["status"] == "sent"
    assert client.get("/api/connectors/matrix/notes").json() == []
    row = db.get(WritebackItem, nid)
    assert row.status == "sent" and row.sent_at is not None


def test_portal_landing_and_view_as(client, db):
    r = client.get("/portail")
    assert r.status_code == 200 and "jeton" in r.text  # landing, not blank
    c = _mk_client(db, name="Sophie Gagnon", email="s@x.com")
    r = client.get(f"/portail/{c.portal_token}")
    assert "/static/vitrine/vitrine.js" in r.text
    out = client.get(f"/api/clients/{c.id}").json()
    assert out["portal_url"] == f"/portail/{c.portal_token}"
    assert out["intake_email"] == c.intake_email


def test_bundles_carry_new_contracts():
    vit = (ROOT / "apps/vitrine/dist/vitrine.js").read_text(errors="ignore")
    assert "__VITRINE_MERGE__" in vit
    assert "/api/vitrine/listings" in vit
    assert "centrisUrl" in vit
    dash = (ROOT / "apps/dashboard/dist/dashboard.js").read_text(errors="ignore")
    assert "/portail/" in dash            # view-as select opens client portals
    assert "Ouvrir le portail" in dash


def test_shipped_sample_email_parses():
    """The samples/ file used in the deployment guide must keep parsing."""
    raw = (ROOT / "samples" / "matrix-alert-2-listings.eml").read_text()
    cards = parse_listing_cards(raw)
    assert {c["centris_no"] for c in cards} == {"21877102", "21880226"}
    assert all(c["price"] > 0 for c in cards)
