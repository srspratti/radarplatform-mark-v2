"""Prospecting agent: targeted candidates in any niche/market, contact info,
and initial outreach — with a hard CASL gate.

Firewall (design principle): signals choose WHO to contact, never what the
message says. Outreach drafts are generic value propositions; the scoring
signal is never quoted back to the prospect.

CASL gate: an email draft requires a declared consent basis. No basis, or
mail_only → HTTP 422 upstream. Postal letters and call scripts are always
allowed (CASL governs commercial electronic messages, not mail).

Providers: StubProvider ships realistic demo rows (flagged is_demo) so the
pipeline is testable today. ExploriumProvider is the documented slot for real
B2B contact data once an EXPLORIUM_API_KEY exists.
"""
from __future__ import annotations
import os
import random
from typing import Protocol
from sqlalchemy.orm import Session
from ..config import settings
from ..models import Contact, ProspectCandidate
from ..events import ingest_event
from ..scoring import refresh_priority

CASL_BASES = {
    "express": "Consentement exprès documenté (opt-in)",
    "implied_existing_business": "Relation d'affaires existante (< 2 ans)",
    "implied_inquiry": "Demande de renseignements (< 6 mois)",
    "conspicuous_publication_b2b": "Adresse publiée bien en vue, message lié au rôle (B2B)",
    "mail_only": "Aucune base électronique — courrier postal seulement",
}
EMAIL_ALLOWED_BASES = {"express", "implied_existing_business",
                       "implied_inquiry", "conspicuous_publication_b2b"}


class CASLError(Exception):
    pass


class Provider(Protocol):
    name: str
    def search(self, niche: str, market: str, count: int) -> list[dict]: ...


class StubProvider:
    """Deterministic demo data — every row flagged is_demo=True."""
    name = "stub"
    _FIRST = ["Réal", "Ginette", "Tuan", "Fatima", "Pierre-Luc", "Anna",
              "Mamadou", "Chantal", "Stavros", "Mei"]
    _LAST = ["Bouchard", "Nguyen", "Rossi", "Tremblay", "Diallo", "Papadakis",
             "Côté", "Haddad", "Lévesque", "Wong"]
    _SIGNALS = ["Propriétaire depuis 14 ans (rôle d'évaluation)",
                "Plex 4 logements, secteur en gentrification",
                "Renouvellement hypothécaire estimé < 8 mois",
                "Annonce FSBO active depuis 60+ jours",
                "Succession récente au Registre foncier"]

    def search(self, niche: str, market: str, count: int) -> list[dict]:
        rng = random.Random(f"{niche}|{market}")
        rows = []
        for i in range(count):
            fn, ln = rng.choice(self._FIRST), rng.choice(self._LAST)
            rows.append({
                "name": f"{fn} {ln}",
                "company": "" if "propriétaire" in niche.lower() else f"{ln} Immobilier",
                "email": f"{fn}.{ln}@example.com".lower().replace("é", "e").replace("è", "e"),
                "phone": f"514-555-0{rng.randint(100, 199)}",
                "address": f"{rng.randint(100, 9999)} rue "
                           f"{rng.choice(['Beaubien', 'Masson', 'Ontario', 'Fleury'])} E, "
                           f"{market}",
                "signal": rng.choice(self._SIGNALS),
                "is_demo": True,
            })
        return rows


class ExploriumProvider:
    """Slot for real contact data (Explorium / Vibe Prospecting API).
    Not implemented in the MVP — wire EXPLORIUM_API_KEY and the /businesses
    + /prospects match/enrich endpoints here when ready."""
    name = "explorium"

    def search(self, niche: str, market: str, count: int) -> list[dict]:
        if not os.getenv("EXPLORIUM_API_KEY"):
            raise RuntimeError(
                "ExploriumProvider: EXPLORIUM_API_KEY manquante. "
                "Utiliser provider=stub ou configurer la clé.")
        raise NotImplementedError(
            "Connecteur Explorium: implémenter match-business/enrich-prospects.")


def get_provider(name: str) -> Provider:
    return {"stub": StubProvider(), "explorium": ExploriumProvider()}.get(
        name, StubProvider())


def run_prospecting(db: Session, tenant_id: str, *, niche: str, market: str,
                    count: int = 5, provider: str = "stub") -> list[ProspectCandidate]:
    rows = get_provider(provider).search(niche, market, count)
    out = []
    for r in rows:
        cand = ProspectCandidate(tenant_id=tenant_id, niche=niche, market=market,
                                 provider=provider, **r)
        db.add(cand)
        out.append(cand)
    db.commit()
    return out


_TPL = {
    ("email", "fr"): (
        "Objet: {market} — une question rapide\n\n"
        "Bonjour {name},\n\n"
        "Je travaille avec des {niche_low} dans {market} et je remarque souvent "
        "les mêmes trois questions: valeur actuelle, moment du marché, et coûts "
        "de transaction. J'ai préparé une courte analyse du secteur — voulez-vous "
        "que je vous l'envoie?\n\nAucune obligation. Un simple « non merci » "
        "suffit et je ne relancerai pas.\n\n{signature}\n\n"
        "Vous recevez ce courriel sur la base suivante: {basis}. "
        "Répondez DÉSABONNER pour ne plus rien recevoir."),
    ("email", "en"): (
        "Subject: {market} — quick question\n\n"
        "Hi {name},\n\n"
        "I work with {niche_low} in {market} and keep hearing the same three "
        "questions: current value, market timing, and transaction costs. I've "
        "put together a short sector brief — want me to send it over?\n\n"
        "No obligation — a simple \"no thanks\" works and I won't follow up.\n\n"
        "{signature}\n\nYou're receiving this under: {basis}. "
        "Reply UNSUBSCRIBE to opt out."),
    ("letter", "fr"): (
        "{name}\n{address}\n\nBonjour {name},\n\n"
        "Je suis courtier immobilier dans {market}. Si vous vous interrogez sur "
        "la valeur de votre propriété ou sur le marché actuel, je peux vous "
        "préparer une analyse sans frais et sans engagement.\n\n"
        "Au plaisir,\n{signature}"),
    ("call", "fr"): (
        "SCRIPT D'APPEL — {name} ({market})\n"
        "1. « Bonjour {name}, ici {signature}. Je vous appelle car je travaille "
        "avec des {niche_low} dans votre secteur. Avez-vous 30 secondes? »\n"
        "2. Si oui → offrir l'analyse de secteur gratuite.\n"
        "3. Si non → « Parfait, bonne journée » et noter NE PAS RAPPELER si demandé."),
}


def draft_outreach(db: Session, tenant_id: str, candidate_id: int, *,
                   channel: str, language: str = "fr",
                   signature: str = "Julie Fortin, RE/MAX du Cartier") -> str:
    cand = db.get(ProspectCandidate, candidate_id)
    if not cand or cand.tenant_id != tenant_id:
        raise ValueError("candidat introuvable")
    if channel == "email":
        if cand.consent_basis not in EMAIL_ALLOWED_BASES:
            raise CASLError(
                "CASL: aucun consentement électronique valide pour ce candidat. "
                f"Base actuelle: {cand.consent_basis or 'aucune'}. "
                "Options: définir une base valide (exprès, relation d'affaires, "
                "demande, publication B2B) ou utiliser channel=letter/call.")
    tpl = _TPL.get((channel, language)) or _TPL.get((channel, "fr"))
    if not tpl:
        raise ValueError(f"canal inconnu: {channel}")
    body = None
    if settings.ANTHROPIC_API_KEY:
        from ..llm import complete
        body = complete(
            f"Rédige un {channel} de première approche ({language}) pour un "
            f"courtier immobilier QC. Prospect: {cand.name}, niche: {cand.niche}, "
            f"marché: {cand.market}. IMPORTANT: ne JAMAIS mentionner le signal de "
            f"ciblage. Inclure mécanisme de désabonnement si courriel. "
            f"Signature: {signature}. 120 mots max.",
            system="Rédacteur d'approche immobilière, conforme LCAP/CASL. "
                   "Le signal de ciblage ne doit jamais transparaître.")
    if not body:
        body = tpl.format(name=cand.name, market=cand.market,
                          niche_low=cand.niche.lower(), address=cand.address,
                          signature=signature,
                          basis=CASL_BASES.get(cand.consent_basis or "", "—"))
    cand.outreach_status = "drafted"
    db.commit()
    return body


def promote_to_lead(db: Session, tenant_id: str, candidate_id: int) -> Contact:
    cand = db.get(ProspectCandidate, candidate_id)
    if not cand or cand.tenant_id != tenant_id:
        raise ValueError("candidat introuvable")
    contact = Contact(tenant_id=tenant_id, name=cand.name, email=cand.email,
                      phone=cand.phone, source="prospecting_agent",
                      sublabel=cand.niche[:120],
                      notes=f"Signal: {cand.signal}" if cand.signal else "")
    db.add(contact)
    db.commit()
    ingest_event(db, tenant_id=tenant_id, contact_id=contact.id,
                 etype="lead.captured", actor="system", origin="agent",
                 payload={"candidate_id": cand.id, "provider": cand.provider},
                 idempotency_key=f"prospect-{cand.id}")
    refresh_priority(db, contact)
    return contact
