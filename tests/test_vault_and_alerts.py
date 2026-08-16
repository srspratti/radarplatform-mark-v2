"""Client notification (email + SMS on new listings) and the portal vault
(documents + notes, both directions)."""
import base64

from radar_hub.models import Contact, Listing, PortalDocument, utcnow


PNG = base64.b64encode(b"\x89PNG\r\n\x1a\n" + b"0" * 64).decode()


def _client(db, name="Marie Tremblay", **kw):
    c = Contact(tenant_id="danny", name=name, source="own_generated",
                lifecycle="client", email="marie@example.com",
                phone="+15145550123", **kw)
    c.issue_portal_token()
    db.add(c)
    db.commit()
    return c


# ------------------------------------------------------------ announcement --
def test_numbers_ingest_announces_once_and_stamps_rows(client, db):
    c = _client(db)
    r = client.post("/api/connectors/matrix/ingest-numbers",
                    json={"contact_id": c.id,
                          "numbers": ["12345678", "23456789"]}).json()
    assert r["listings_new"] == 2
    assert r["announced"]["announced"] == 2
    # SMTP/Twilio are unset in tests → the channels report themselves honestly
    assert r["announced"]["email"] in ("simulated", "sent", "skipped")
    rows = db.query(Listing).filter_by(tenant_id="danny", contact_id=c.id).all()
    assert all(x.announced_at is not None for x in rows)
    # Re-posting the same numbers announces nothing: the rows are stamped.
    r2 = client.post("/api/connectors/matrix/ingest-numbers",
                     json={"contact_id": c.id,
                           "numbers": ["12345678", "23456789"]}).json()
    assert r2["listings_dup"] == 2 and r2["announced"]["announced"] == 0


def test_announcement_defers_until_the_facts_are_in(client, db):
    """The internal edition's order: identifiers → details → notify. With
    announce=false the client hears nothing yet, and the later email carries
    the address instead of a bare Centris number."""
    c = _client(db)
    r = client.post("/api/connectors/matrix/ingest-numbers",
                    json={"contact_id": c.id, "numbers": ["34567890"],
                          "announce": False}).json()
    assert r["listings_new"] == 1
    assert r["announced"] == {"announced": 0, "deferred": True}
    row = db.query(Listing).filter_by(centris_no="34567890").first()
    assert row.announced_at is None

    rd = client.post("/api/connectors/matrix/ingest-details",
                     json={"contact_id": c.id, "items": [
                         {"centris_no": "34567890", "address": "12 rue Principale",
                          "price": 450000,
                          "fields": {"year": "1998", "remarks": "Beau jardin"}}]}
                     ).json()
    assert rd["enriched"] == ["34567890"]
    assert rd["announced"][str(c.id)]["announced"] == 1
    db.expire_all()
    row = db.query(Listing).filter_by(centris_no="34567890").first()
    assert row.announced_at is not None and row.address == "12 rue Principale"


def test_enriching_an_announced_book_sends_nothing(client, db):
    c = _client(db)
    client.post("/api/connectors/matrix/ingest-numbers",
                json={"contact_id": c.id, "numbers": ["45678901"]})
    rd = client.post("/api/connectors/matrix/ingest-details",
                     json={"contact_id": c.id, "items": [
                         {"centris_no": "45678901",
                          "fields": {"remarks": "Rénové"}}]}).json()
    assert rd["announced"][str(c.id)]["announced"] == 0


def test_sms_is_skipped_without_a_phone(client, db):
    from radar_hub import automations
    c = _client(db)
    c.phone = ""
    db.commit()
    assert automations.send_listing_alert_sms(db, "danny", c, 2, "x") == "skipped"


# -------------------------------------------------------------- doc vault --
def test_client_uploads_a_document_and_the_broker_reads_it(client, db):
    c = _client(db)
    up = client.post(f"/api/vitrine/vault/{c.portal_token}/documents",
                     json={"name": "preapproval.pdf",
                           "content_b64": base64.b64encode(b"%PDF-1.4 x").decode()})
    assert up.status_code == 200
    doc = up.json()
    assert doc["uploaded_by"] == "client" and doc["size_bytes"] > 0

    shelf = client.get(f"/api/vitrine/vault/{c.portal_token}").json()
    assert shelf["enabled"] and len(shelf["documents"]) == 1

    broker = client.get(f"/api/clients/{c.id}/vault").json()
    assert broker["documents"][0]["name"] == "preapproval.pdf"

    dl = client.get(f"/api/clients/{c.id}/vault/documents/{doc['id']}")
    assert dl.status_code == 200 and dl.content.startswith(b"%PDF")

    # A client document scores engagement; the event log is the truth.
    db.expire_all()
    assert db.get(Contact, c.id).engagement_score > 0


def test_broker_document_cannot_be_deleted_from_the_portal(client, db):
    c = _client(db)
    d = client.post(f"/api/clients/{c.id}/vault/documents",
                    json={"name": "promesse.pdf",
                          "content_b64": base64.b64encode(b"%PDF-1.4").decode()}
                    ).json()
    r = client.delete(f"/api/vitrine/vault/{c.portal_token}/documents/{d['id']}")
    assert r.status_code == 403
    # …but the client may withdraw their own upload.
    mine = client.post(f"/api/vitrine/vault/{c.portal_token}/documents",
                       json={"name": "releve.png", "content_b64": PNG}).json()
    assert client.delete(
        f"/api/vitrine/vault/{c.portal_token}/documents/{mine['id']}"
    ).status_code == 200
    assert db.query(PortalDocument).filter_by(contact_id=c.id).count() == 1


def test_executables_and_oversize_files_are_refused(client, db):
    c = _client(db)
    bad = client.post(f"/api/vitrine/vault/{c.portal_token}/documents",
                      json={"name": "payload.exe",
                            "content_b64": base64.b64encode(b"MZ").decode()})
    assert bad.status_code == 422
    big = client.post(f"/api/vitrine/vault/{c.portal_token}/documents",
                      json={"name": "huge.pdf", "content_b64": "A" * 11_000_004})
    assert big.status_code == 422


def test_notes_thread_runs_both_ways(client, db):
    c = _client(db)
    client.post(f"/api/vitrine/vault/{c.portal_token}/notes",
                json={"body": "Puis-je visiter samedi?"})
    client.post(f"/api/clients/{c.id}/vault/notes",
                json={"body": "Oui — 10h ou 14h?"})
    shelf = client.get(f"/api/vitrine/vault/{c.portal_token}").json()
    assert [n["author"] for n in shelf["notes"]] == ["client", "broker"]

    broker = client.get(f"/api/clients/{c.id}/vault").json()
    assert broker["unread_before"] == 1        # the client's note was unread
    again = client.get(f"/api/clients/{c.id}/vault").json()
    assert again["unread_before"] == 0         # reading marks it read


def test_every_flag_the_portal_gates_on_is_in_the_features_payload(client, db):
    """A key missing from /vitrine/features reads as OFF in the browser, so
    the feature ships server-side and stays invisible to the client — which
    is exactly how the « Mon dossier » tab went missing. Guard it: whatever
    the portal calls featOn() on must appear in the payload."""
    import pathlib
    import re
    src = pathlib.Path(__file__).resolve().parents[1] / "apps/vitrine/src"
    gated = set()
    for f in src.glob("*.jsx"):
        gated |= set(re.findall(r'featOn\("([a-z_]+)"\)', f.read_text()))
    assert "client_documents" in gated          # the file this test guards
    c = _client(db)
    served = set(client.get(f"/api/vitrine/features/{c.portal_token}")
                 .json()["features"])
    assert gated <= served, f"not served to the portal: {sorted(gated - served)}"


def test_the_portal_sees_the_vault_flag_enabled(client, db):
    c = _client(db)
    flags = client.get(f"/api/vitrine/features/{c.portal_token}").json()["features"]
    assert flags["client_documents"] is True


def test_vault_rejects_an_unknown_token(client, db):
    assert client.get("/api/vitrine/vault/not-a-token").status_code == 401


def test_a_clients_vault_is_not_reachable_through_another_clients_token(client, db):
    a = _client(db)
    b = _client(db, name="Luc Gagnon")
    d = client.post(f"/api/clients/{a.id}/vault/documents",
                    json={"name": "prive.pdf",
                          "content_b64": base64.b64encode(b"%PDF").decode()}
                    ).json()
    r = client.get(f"/api/vitrine/vault/{b.portal_token}/documents/{d['id']}")
    assert r.status_code == 404


# ------------------------------------------------- alert email preview/test --
def test_preview_renders_the_real_template_without_announcing(client, db):
    c = _client(db)
    client.post("/api/connectors/matrix/ingest-numbers",
                json={"contact_id": c.id, "numbers": ["55555555"],
                      "announce": False})
    r = client.get(f"/api/alert-mail/preview?contact_id={c.id}")
    assert r.status_code == 200 and "text/html" in r.headers["content-type"]
    assert f"/l/{c.portal_token}/55555555" in r.text     # tracked links
    db.expire_all()
    row = db.query(Listing).filter_by(centris_no="55555555").first()
    assert row.announced_at is None                      # preview costs nothing


def test_preview_falls_back_to_sample_cards_for_an_empty_book(client, db):
    c = _client(db)
    r = client.get(f"/api/alert-mail/preview?contact_id={c.id}")
    assert "1425 rue Sherbrooke" in r.text


def test_test_send_reports_its_recipient_and_leaves_no_trace(client, db):
    c = _client(db)
    before = db.query(Listing).filter_by(contact_id=c.id).count()
    r = client.post("/api/alert-mail/test",
                    json={"contact_id": c.id, "to": "courtier@example.com"}).json()
    assert r["to"] == "courtier@example.com"
    assert r["status"] == "simulated"          # no SMTP_HOST in tests
    assert r["used_sample_cards"] is True
    assert db.query(Listing).filter_by(contact_id=c.id).count() == before
    db.expire_all()
    assert db.get(Contact, c.id).engagement_score == 0


def test_test_send_defaults_to_the_clients_own_address(client, db):
    c = _client(db)
    r = client.post("/api/alert-mail/test", json={"contact_id": c.id}).json()
    assert r["to"] == c.email


def test_test_send_needs_a_recipient(client, db):
    c = _client(db)
    c.email = ""
    db.commit()
    assert client.post("/api/alert-mail/test",
                       json={"contact_id": c.id}).status_code == 422
