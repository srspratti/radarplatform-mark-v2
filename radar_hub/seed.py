"""Seed Danny's instance with demo data so the dashboard is alive on first run.
    python -m radar_hub.seed
"""
from datetime import datetime, timedelta
from .models import (Contact, Expense, LedgerEntry, SessionLocal, init_db,
                     utcnow)
from .events import ingest_event
from .scoring import refresh_priority
from .connectors.vitrine import enqueue_activity_writeback
from .connectors.matrix_email import make_intake_email
from .models import Listing
from .agents.office_manager import add_expense, add_ledger_entry
from .agents.prospecting import run_prospecting
from .agents.content_social import generate_content

T = "danny"


def _c(db, **kw) -> Contact:
    c = Contact(tenant_id=T, **kw)
    db.add(c)
    db.commit()
    return c


def _e(db, c, etype, actor, origin, days_ago=0.0, hours_ago=0.0, payload=None):
    ts = utcnow() - timedelta(days=days_ago, hours=hours_ago)
    ingest_event(db, tenant_id=T, contact_id=c.id, etype=etype, actor=actor,
                 origin=origin, ts=ts, payload=payload or {})


def run() -> None:
    init_db()
    db = SessionLocal()
    if db.query(Contact).filter_by(tenant_id=T).count():
        print("Seed déjà présent — rien à faire.")
        return

    # ---- CLIENTS -----------------------------------------------------------
    mc = _c(db, name="Marie-Claude Tremblay", email="mc.tremblay@example.com",
            phone="514-555-0142", source="danny_channel",
            sublabel="Référence gym", lifecycle="client",
            converted_at=utcnow() - timedelta(days=9))
    mc.issue_portal_token()
    mc.intake_email = make_intake_email(mc.name, mc.portal_token)
    db.commit()
    for no, addr, price, beds in [
        ("21877102", "4823, rue Chambord", 612000, 2),
        ("21874563", "5210, rue de Bordeaux", 559000, 2),
        ("21880226", "6155, rue Cartier", 674000, 3)]:
        db.add(Listing(tenant_id=T, contact_id=mc.id, centris_no=no,
                       address=addr, area="Le Plateau / Rosemont, Montréal",
                       price=price, beds=beds, baths=1, prop_type="Condo",
                       url=f"https://www.centris.ca/fr/condo~a-vendre~montreal/{no}"))
    db.commit()
    _e(db, mc, "lead.captured", "system", "hub", days_ago=12)
    _e(db, mc, "lead.contacted", "realtor", "hub", days_ago=11)
    _e(db, mc, "client.converted", "realtor", "hub", days_ago=9)
    _e(db, mc, "portal.session_started", "client", "vitrine", days_ago=2)
    for i, lid in enumerate(["C-21874563", "C-21877102", "C-21879441", "C-21880226"]):
        _e(db, mc, "listing.viewed", "client", "vitrine", days_ago=2,
           hours_ago=i, payload={"listing_id": lid})
    _e(db, mc, "tour3d.viewed", "client", "vitrine", days_ago=1,
       payload={"listing_id": "C-21877102"})
    _e(db, mc, "listing.favorited", "client", "vitrine", days_ago=1,
       payload={"listing_id": "C-21877102"})
    _e(db, mc, "message.sent", "client", "vitrine", hours_ago=20,
       payload={"text": "Le 5½ sur Chambord — dispo samedi?"})
    _e(db, mc, "visit.requested", "client", "vitrine", hours_ago=18,
       payload={"listing_id": "C-21877102"})
    enqueue_activity_writeback(db, T, db.get(Contact, mc.id), window_hours=72)

    karim = _c(db, name="Karim Bensalem", email="k.bensalem@example.com",
               phone="438-555-0177", source="fub_import", sublabel="Zillow",
               lifecycle="client", fub_person_id="88231",
               converted_at=utcnow() - timedelta(days=25))
    karim.issue_portal_token()
    karim.intake_email = make_intake_email(karim.name, karim.portal_token)
    db.commit()
    db.add(Listing(tenant_id=T, contact_id=karim.id, centris_no="21860034",
                   address="6244, rue Cartier", area="Rosemont, Montréal",
                   price=715000, beds=3, baths=1, prop_type="Duplex",
                   url="https://www.centris.ca/fr/duplex~a-vendre~montreal/21860034"))
    db.commit()
    _e(db, karim, "lead.captured", "system", "fub", days_ago=31)
    _e(db, karim, "client.converted", "realtor", "hub", days_ago=25)
    _e(db, karim, "listing.viewed", "client", "vitrine", days_ago=6,
       payload={"listing_id": "C-21860034"})
    _e(db, karim, "visit.completed", "client", "matrix", days_ago=4,
       payload={"address": "6244 rue Cartier, Montréal"})
    _e(db, karim, "offer.submitted", "client", "hub", days_ago=1,
       payload={"address": "6244 rue Cartier", "amount": 715000})

    sophie = _c(db, name="Sophie Gagnon", email="s.gagnon@example.com",
                phone="514-555-0163", source="matrix_visit",
                sublabel="Alerte Centris", lifecycle="client",
                converted_at=utcnow() - timedelta(days=40))
    sophie.issue_portal_token()
    sophie.intake_email = make_intake_email(sophie.name, sophie.portal_token)
    db.commit()
    _e(db, sophie, "client.converted", "realtor", "matrix", days_ago=40)
    _e(db, sophie, "visit.completed", "client", "matrix", days_ago=20,
       payload={"address": "4510 av. Papineau"})
    _e(db, sophie, "offer.accepted", "client", "hub", days_ago=12,
       payload={"address": "4510 av. Papineau", "amount": 542000})
    _e(db, sophie, "inspection.completed", "system", "hub", days_ago=6)
    _e(db, sophie, "notary.scheduled", "system", "hub", days_ago=2,
       payload={"notaire": "Me Bélanger", "date": "2026-08-03"})

    eric = _c(db, name="Éric Lavoie", email="e.lavoie@example.com",
              phone="450-555-0119", source="own_generated",
              sublabel="Formulaire site", lifecycle="client",
              converted_at=utcnow() - timedelta(days=45))
    eric.issue_portal_token()
    eric.intake_email = make_intake_email(eric.name, eric.portal_token)
    db.commit()
    _e(db, eric, "client.converted", "realtor", "hub", days_ago=45)
    _e(db, eric, "portal.session_started", "client", "vitrine", days_ago=32)
    _e(db, eric, "listing.viewed", "client", "vitrine", days_ago=32,
       payload={"listing_id": "C-21810112"})  # stale → dormant flag

    # ---- LEADS -------------------------------------------------------------
    nadia = _c(db, name="Nadia Petrov", email="n.petrov@example.com",
               phone="514-555-0188", source="fub_import", sublabel="Realtor.ca",
               fub_person_id="90114",
               notes="Pré-approuvée 650k, veut visiter ce week-end, quartier Villeray")
    _e(db, nadia, "lead.captured", "system", "fub", hours_ago=5)
    refresh_priority(db, nadia)

    jf = _c(db, name="Jean-François Roy", email="jf.roy@example.com",
            phone="438-555-0102", source="matrix_visit",
            sublabel="Demande de visite",
            notes="A demandé une visite pour le condo sur Masson")
    _e(db, jf, "lead.captured", "system", "matrix", hours_ago=8)
    refresh_priority(db, jf)

    marc = _c(db, name="Marc-André Dubé", email="ma.dube@example.com",
              phone="514-555-0155", source="danny_channel",
              sublabel="Référence hockey",
              notes="Pense à vendre son duplex au printemps")
    _e(db, marc, "lead.captured", "system", "hub", days_ago=2)
    refresh_priority(db, marc)

    lucie = _c(db, name="Lucie Bergeron", email="l.bergeron@example.com",
               phone="450-555-0134", source="own_generated",
               sublabel="Landing Vitrine", notes="Veut vendre, budget rachat 480k")
    _e(db, lucie, "lead.captured", "system", "hub", days_ago=4)
    refresh_priority(db, lucie)

    # ---- Office manager ----------------------------------------------------
    first_of_month = utcnow().replace(day=1)
    add_ledger_entry(db, T, property_address="4510 av. Papineau, Montréal",
                     sale_price=542000, commission_rate=0.02,
                     contact_id=None, closed_on=first_of_month + timedelta(days=2))
    add_ledger_entry(db, T, property_address="1287 rue Fleury E, Montréal",
                     sale_price=389000, commission_rate=0.025,
                     closed_on=first_of_month + timedelta(days=5))
    add_expense(db, T, category="Cotisation OACIQ", amount=145.50,
                spent_on=first_of_month + timedelta(days=1))
    add_expense(db, T, category="Publicité Facebook", amount=320.00,
                spent_on=first_of_month + timedelta(days=3))
    add_expense(db, T, category="Essence", amount=96.40,
                spent_on=first_of_month + timedelta(days=4))

    # ---- Prospecting + content --------------------------------------------
    run_prospecting(db, T, niche="Propriétaires de plex",
                    market="Rosemont, Montréal", count=3, provider="stub")
    generate_content(db, T, topic="Le marché de Villeray ce mois-ci",
                     platforms=["instagram", "linkedin"], language="fr")

    n_contacts = db.query(Contact).filter_by(tenant_id=T).count()
    print(f"Seed OK — {n_contacts} contacts (tenant '{T}').")
    print("Accès:  tableau de bord  http://localhost:8000/")
    print("        console ops     http://localhost:8000/ops")
    for c in db.query(Contact).filter_by(tenant_id=T, lifecycle="client"):
        print(f"  👁 {c.name:26s} /portail/{c.portal_token}   ✉ {c.intake_email}")
    db.close()


if __name__ == "__main__":
    run()
