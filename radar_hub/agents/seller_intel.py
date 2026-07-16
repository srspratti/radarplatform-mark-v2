"""Seller Intelligence — which homes are likely to list next, and compliant
multichannel outreach to their owners. The seller-side mirror of the buyer
pipeline: discover → score → reach out → promote to lead when they respond.

Likely-to-list score (deterministic, explainable): tenure, mortgage-renewal
window, public life events (succession), FSBO activity, assessment gap,
neighbourhood turnover. Same firewall as the prospecting agent: signals pick
WHO to contact — the message never quotes them back.

Market conditions shape the message instead ("inventaire bas, X jours au
marché dans votre secteur") — a deterministic per-sector snapshot today, with
a documented slot for real board stats (JLR/Centris market data) and an LLM
refresh when a key is present.

Channel gates (hard, not advisory):
  letter / call script  → always allowed (CASL covers electronic messages)
  email / SMS           → require a CASL consent basis on the prospect
  automated VOICE call  → requires EXPRESS consent (CRTC ADAD rules prohibit
                          unsolicited automated solicitation calls)
Providers: StubProvider ships deterministic demo homeowners (is_demo=True);
RegistreProvider is the slot for real data (Registre foncier / JLR / FSBO
watch) once credentials exist.
"""
from __future__ import annotations

import random
from datetime import timedelta

from sqlalchemy.orm import Session

from .. import features
from ..automations import has_consent, notify, queue_msg
from ..config import settings
from ..events import ingest_event
from ..models import ConsentRecord, Contact, SellerProspect, utcnow
from .prospecting import CASL_BASES, EMAIL_ALLOWED_BASES, CASLError

SIGNAL_LABELS_FR = {
    "long_tenure": "Propriétaire de longue date (rôle d'évaluation)",
    "renewal": "Renouvellement hypothécaire dans la fenêtre",
    "succession": "Succession récente au Registre foncier",
    "fsbo": "Annonce FSBO active ou récente",
    "over_assessment": "Écart évaluation municipale vs marché",
    "turnover": "Fort roulement dans le voisinage",
}
ELECTRONIC_CHANNELS = {"email", "sms"}


# ---------------------------------------------------------------- scoring --
def sell_score(owned_years: float, renewal_months: int | None,
               signals: list[str]) -> tuple[int, str]:
    """Deterministic likely-to-list score + FR reasons string."""
    score, reasons = 15, []
    if owned_years >= 15:
        score += 25
        reasons.append(f"{int(owned_years)} ans de propriété")
    elif owned_years >= 8:
        score += 15
        reasons.append(f"{int(owned_years)} ans de propriété")
    if renewal_months is not None and renewal_months <= 9:
        score += 15
        reasons.append(f"renouvellement ≈ {renewal_months} mois")
    bonus = {"succession": 20, "fsbo": 25, "over_assessment": 8, "turnover": 8}
    for s in signals:
        if s in bonus:
            score += bonus[s]
            reasons.append(SIGNAL_LABELS_FR.get(s, s))
    return max(5, min(95, score)), " · ".join(reasons[:4])


# ------------------------------------------------------- market snapshot ---
def market_snapshot(sector: str) -> dict:
    """Per-sector market conditions. Deterministic stand-in derived from the
    sector name (stable across calls) — replace with board stats (JLR /
    Centris market data) via the provider slot. When an Anthropic key exists,
    an LLM pass can refresh the narrative from recent news (best-effort)."""
    rng = random.Random(f"market|{sector.lower().strip()}")
    inventory = round(rng.uniform(1.8, 6.5), 1)   # months of inventory
    dom = rng.randint(16, 70)                     # avg days on market
    yoy = round(rng.uniform(-2.5, 8.5), 1)        # yearly price trend %
    verdict = ("vendeur" if inventory < 3.5 and dom < 40
               else "acheteur" if inventory > 5.5 else "équilibré")
    snap = {"sector": sector, "inventory_months": inventory, "avg_dom": dom,
            "yoy_price_pct": yoy, "verdict": verdict, "source": "stub"}
    if settings.ANTHROPIC_API_KEY:
        from ..llm import complete_json
        out = complete_json(
            f"Conditions actuelles du marché immobilier résidentiel pour "
            f"« {sector} » (Québec). Estime prudemment: "
            '{"inventory_months":x,"avg_dom":n,"yoy_price_pct":x,'
            '"verdict":"vendeur|equilibre|acheteur"}',
            system="Analyste immobilier québécois. Chiffres plausibles, prudents.")
        if out:
            snap.update({k: out[k] for k in
                         ("inventory_months", "avg_dom", "yoy_price_pct",
                          "verdict") if k in out})
            snap["source"] = "llm"
    snap["narrative_fr"] = (
        f"{sector} : marché {snap['verdict']} — {snap['inventory_months']} mois "
        f"d'inventaire, {snap['avg_dom']} jours au marché en moyenne, prix "
        f"{'+' if snap['yoy_price_pct'] >= 0 else ''}{snap['yoy_price_pct']} % sur un an.")
    snap["narrative_en"] = (
        f"{sector}: {'seller’s' if snap['verdict'] == 'vendeur' else 'buyer’s' if snap['verdict'] == 'acheteur' else 'balanced'} "
        f"market — {snap['inventory_months']} months of inventory, "
        f"{snap['avg_dom']} avg days on market, prices "
        f"{'+' if snap['yoy_price_pct'] >= 0 else ''}{snap['yoy_price_pct']}% year over year.")
    return snap


# -------------------------------------------------------------- providers --
class StubSellerProvider:
    """Deterministic demo homeowners — every row flagged is_demo=True."""
    name = "stub"
    _FIRST = ["Gilles", "Monique", "Huong", "Rachid", "Diane", "Bruno",
              "Carmela", "Steve", "Lucie", "Patrice"]
    _LAST = ["Gagné", "Pham", "Bélanger", "Moreau", "Santoro", "Fortin",
             "Ouellet", "El-Khoury", "Girard", "Roy"]
    _STREETS = ["rue Masson", "av. Papineau", "rue Sainte-Catherine E",
                "boul. Rosemont", "rue Adam", "rue de Bordeaux"]

    def search(self, sector: str, count: int) -> list[dict]:
        rng = random.Random(f"sellers|{sector}")
        rows = []
        pool = list(SIGNAL_LABELS_FR)
        for _ in range(count):
            fn, ln = rng.choice(self._FIRST), rng.choice(self._LAST)
            owned = round(rng.uniform(2, 24), 1)
            renewal = rng.choice([None, rng.randint(1, 18)])
            sigs = rng.sample(pool, rng.randint(0, 2))
            if owned >= 8 and "long_tenure" not in sigs:
                sigs.append("long_tenure")
            rows.append({
                "name": f"{fn} {ln}",
                "address": f"{rng.randint(1000, 9999)} {rng.choice(self._STREETS)}, {sector}",
                "email": f"{fn}.{ln}@example.com".lower().replace("é", "e").replace("è", "e"),
                "phone": f"514-555-0{rng.randint(200, 299)}",
                "owned_years": owned, "renewal_months": renewal,
                "signals": sigs, "is_demo": True,
            })
        return rows


class RegistreProvider:
    """Slot for real homeowner data: Registre foncier du Québec extracts,
    JLR feeds, municipal assessment rolls, FSBO watch. Not implemented in
    the MVP — wire credentials + parsers here when ready."""
    name = "registre"

    def search(self, sector: str, count: int) -> list[dict]:
        raise RuntimeError(
            "RegistreProvider: aucune source configurée. Utiliser "
            "provider=stub ou brancher Registre foncier / JLR.")


def get_provider(name: str):
    return {"stub": StubSellerProvider(),
            "registre": RegistreProvider()}.get(name, StubSellerProvider())


def run_discovery(db: Session, tenant_id: str, *, sector: str, count: int = 5,
                  provider: str = "stub") -> list[SellerProspect]:
    rows = get_provider(provider).search(sector, count)
    out = []
    for r in rows:
        score, reasons = sell_score(r["owned_years"], r["renewal_months"],
                                    r["signals"])
        p = SellerProspect(tenant_id=tenant_id, sector=sector,
                           provider=provider, sell_score=score,
                           score_reasons=reasons, **r)
        db.add(p)
        out.append(p)
    db.commit()
    out.sort(key=lambda x: -x.sell_score)
    return out


# --------------------------------------------------------------- outreach --
_TPL = {
    ("letter", "fr"): (
        "{name}\n{address}\n\nBonjour {name},\n\n"
        "Je suis courtier immobilier dans votre secteur. Le marché y est "
        "actuellement {verdict} : environ {dom} jours pour vendre et des prix "
        "en évolution de {yoy} % sur un an. Si vous vous demandez ce que "
        "votre propriété vaut aujourd'hui, je peux vous préparer une analyse "
        "sans frais et sans engagement.\n\nAu plaisir,\n{signature}"),
    ("call", "fr"): (
        "SCRIPT D'APPEL (humain) — {name}, {sector}\n"
        "1. « Bonjour {name}, ici {signature}. Je travaille dans {sector} — "
        "avez-vous 30 secondes? »\n"
        "2. Contexte marché : {narrative}\n"
        "3. Offrir l'analyse de valeur gratuite. Si non → remercier et noter "
        "NE PAS RAPPELER si demandé."),
    ("email", "fr"): (
        "Objet: {sector} — ce que le marché fait à votre valeur\n\n"
        "Bonjour {name},\n\n{narrative}\n\nDans ce contexte, plusieurs "
        "propriétaires me demandent une évaluation à jour. Je peux vous en "
        "préparer une sans frais — souhaitez-vous la recevoir?\n\n"
        "Aucune obligation : un simple « non merci » suffit.\n\n{signature}\n\n"
        "Vous recevez ce courriel sur la base suivante: {basis}. "
        "Répondez DÉSABONNER pour ne plus rien recevoir."),
    ("sms", "fr"): (
        "Bonjour {name}, {signature} ici. {narrative} Curieux de la valeur "
        "actuelle de votre propriété? Je peux vous préparer une analyse "
        "gratuite. Répondez ARRET pour ne plus recevoir de messages."),
    ("voice", "fr"): (
        "Bonjour {name}, ici l'assistante de {signature}, courtier immobilier "
        "dans {sector}. {narrative} Si vous souhaitez connaître la valeur "
        "actuelle de votre propriété, {signature} offre une analyse gratuite — "
        "restez en ligne ou répondez au texto qui suit. Merci et bonne journée!"),
    ("email", "en"): (
        "Subject: {sector} — what the market is doing to your home's value\n\n"
        "Hi {name},\n\n{narrative}\n\nIn this context many owners ask me for "
        "an updated valuation. I can prepare one free of charge — would you "
        "like it?\n\nNo obligation — a simple \"no thanks\" works.\n\n"
        "{signature}\n\nYou're receiving this under: {basis}. "
        "Reply UNSUBSCRIBE to opt out."),
    ("sms", "en"): (
        "Hi {name}, this is {signature}. {narrative} Curious what your home "
        "is worth today? I can prepare a free valuation. Reply STOP to opt out."),
    ("voice", "en"): (
        "Hi {name}, this is {signature}'s assistant. {narrative} If you'd "
        "like to know your home's current value, {signature} offers a free "
        "analysis — stay on the line or reply to the text that follows. "
        "Thanks, have a great day!"),
    ("letter", "en"): (
        "{name}\n{address}\n\nHi {name},\n\nI'm a real estate broker in your "
        "area. {narrative} If you're wondering what your property is worth "
        "today, I can prepare a free, no-obligation analysis.\n\n{signature}"),
    ("call", "en"): (
        "CALL SCRIPT (human) — {name}, {sector}\n"
        "1. \"Hi {name}, this is {signature}. I work in {sector} — do you "
        "have 30 seconds?\"\n2. Market context: {narrative}\n"
        "3. Offer the free valuation. If no → thank them and note DO NOT "
        "CALL if requested."),
}


def _check_channel(p: SellerProspect, channel: str) -> None:
    if channel in ELECTRONIC_CHANNELS and p.consent_basis not in EMAIL_ALLOWED_BASES:
        raise CASLError(
            f"LCAP/CASL: {channel} bloqué — aucune base de consentement "
            f"électronique (actuelle: {p.consent_basis or 'aucune'}). "
            "Options: consigner une base valide, ou channel=letter/call.")
    if channel == "voice" and p.consent_basis != "express":
        raise CASLError(
            "CRTC (règles ADAD): appel vocal automatisé interdit sans "
            "consentement EXPRÈS. Options: consentement exprès consigné, ou "
            "channel=call (script d'appel humain) / letter.")


def draft_outreach(db: Session, tenant_id: str, prospect_id: int, *,
                   channel: str, language: str = "fr",
                   signature: str = "Julie Fortin, RE/MAX du Cartier") -> str:
    p = db.get(SellerProspect, prospect_id)
    if not p or p.tenant_id != tenant_id:
        raise ValueError("prospect vendeur introuvable")
    _check_channel(p, channel)
    tpl = _TPL.get((channel, language)) or _TPL.get((channel, "fr"))
    if not tpl:
        raise ValueError(f"canal inconnu: {channel}")
    snap = market_snapshot(p.sector)
    body = None
    if settings.ANTHROPIC_API_KEY:
        from ..llm import complete
        body = complete(
            f"Rédige un {channel} de première approche ({language}) d'un "
            f"courtier immobilier QC à un propriétaire ({p.name}, {p.sector}). "
            f"Conditions de marché à intégrer: {snap['narrative_fr']} "
            f"IMPORTANT: ne JAMAIS mentionner pourquoi ce propriétaire a été "
            f"ciblé. Mécanisme de désabonnement si courriel/SMS. "
            f"Signature: {signature}. 120 mots max.",
            system="Rédacteur immobilier, conforme LCAP/CASL. Le signal de "
                   "ciblage ne doit jamais transparaître.")
    if not body:
        body = tpl.format(
            name=p.name, address=p.address, sector=p.sector,
            narrative=snap["narrative_fr" if language == "fr" else "narrative_en"],
            verdict=snap["verdict"], dom=snap["avg_dom"],
            yoy=snap["yoy_price_pct"], signature=signature,
            basis=CASL_BASES.get(p.consent_basis or "", "—"))
    p.outreach_status = "drafted"
    db.commit()
    return body


def _ensure_contact(db: Session, tenant_id: str, p: SellerProspect) -> Contact:
    if p.contact_id:
        c = db.get(Contact, p.contact_id)
        if c:
            return c
    c = Contact(tenant_id=tenant_id, name=p.name, email=p.email,
                phone=p.phone, source="seller_intel", funnel="seller_intel",
                sublabel=f"Vendeur potentiel · {p.sector}"[:120],
                notes=f"Signaux: {p.score_reasons}" if p.score_reasons else "")
    db.add(c)
    db.commit()
    p.contact_id = c.id
    db.commit()
    ingest_event(db, tenant_id=tenant_id, contact_id=c.id,
                 etype="lead.captured", actor="system", origin="agent",
                 payload={"seller_prospect_id": p.id, "sell_score": p.sell_score},
                 idempotency_key=f"sellerlead-{p.id}")
    from ..scoring import refresh_priority
    refresh_priority(db, c)
    return c


def send_outreach(db: Session, tenant_id: str, prospect_id: int, *,
                  channel: str, language: str = "fr",
                  signature: str = "Julie Fortin, RE/MAX du Cartier") -> dict:
    """Draft AND dispatch through the outbound queue (simulated without
    provider credentials). Letters/call scripts are draft-only by nature."""
    p = db.get(SellerProspect, prospect_id)
    if not p or p.tenant_id != tenant_id:
        raise ValueError("prospect vendeur introuvable")
    body = draft_outreach(db, tenant_id, prospect_id, channel=channel,
                          language=language, signature=signature)
    if channel in ("letter", "call"):
        return {"status": "drafted", "channel": channel, "draft": body,
                "note": "lettre/script: envoi hors plateforme"}
    c = _ensure_contact(db, tenant_id, p)
    # audit trail: the basis under which this electronic touch goes out
    db.add(ConsentRecord(tenant_id=tenant_id, contact_id=c.id,
                         basis=p.consent_basis or "express",
                         scope="communications", granted=True,
                         source="seller_intel",
                         note=f"Base déclarée pour l'approche vendeur ({channel})"))
    db.commit()
    if not has_consent(db, tenant_id, c):
        raise CASLError("consentement révoqué au niveau du contact")
    if channel == "voice":
        from .voice import queue_voice_call
        m = queue_voice_call(db, tenant_id, c, body, "seller_outreach")
    else:
        m = queue_msg(db, tenant_id, c, channel, body, "seller_outreach")
    p.outreach_status = "sent"
    db.commit()
    ingest_event(db, tenant_id=tenant_id, contact_id=c.id,
                 etype="outreach.sent", actor="system", origin="agent",
                 payload={"kind": "seller_outreach", "channel": channel,
                          "sell_score": p.sell_score},
                 idempotency_key=f"sellerout-{p.id}-{channel}",
                 reproject=False)
    notify(db, tenant_id, "seller_outreach",
           f"🏠 Approche vendeur {m.status} → {p.name} ({channel}, score "
           f"{p.sell_score})", contact_id=c.id)
    return {"status": m.status, "channel": channel, "draft": body,
            "contact_id": c.id}


def promote_to_lead(db: Session, tenant_id: str, prospect_id: int) -> Contact:
    p = db.get(SellerProspect, prospect_id)
    if not p or p.tenant_id != tenant_id:
        raise ValueError("prospect vendeur introuvable")
    return _ensure_contact(db, tenant_id, p)
