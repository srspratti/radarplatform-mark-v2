"""Content/social agent: Instagram, Facebook, LinkedIn drafts in the broker's
voice, FR/EN, with a scheduling queue. MVP posture: draft + queue + copy —
no direct platform APIs yet (Meta/LinkedIn publishing is a Phase-2 connector).
"""
from __future__ import annotations
from datetime import datetime
from sqlalchemy.orm import Session
from ..config import settings
from ..models import ContentItem

_HASHTAGS = {
    "fr": "#immobilier #Montréal #Québec #courtierimmobilier #Centris",
    "en": "#realestate #Montreal #Quebec #realtor #Centris",
}

_TPL = {
    ("instagram", "fr"): (
        "📍 {topic}\n\nCe que je vois sur le terrain cette semaine: les "
        "acheteurs bien préparés gagnent. Préapprobation en main, alertes "
        "personnalisées, décision rapide.\n\nVous magasinez? Écrivez-moi "
        "« ANALYSE » en DM et je vous prépare le portrait de votre secteur.\n\n"
        "{tags}"),
    ("facebook", "fr"): (
        "🏡 {topic}\n\nBeaucoup de questions cette semaine sur le marché. "
        "Voici ce que je réponds à mes clients: chaque secteur bouge "
        "différemment — les moyennes provinciales ne veulent rien dire pour "
        "VOTRE rue.\n\nCommentez « SECTEUR » et je vous envoie l'analyse de "
        "votre quartier, sans frais.\n\n{tags}"),
    ("linkedin", "fr"): (
        "{topic} — trois constats terrain cette semaine:\n\n"
        "1. Les délais de vente s'étirent dans certains segments, pas tous.\n"
        "2. Les acheteurs préqualifiés négocient mieux.\n"
        "3. La donnée de secteur bat l'intuition, chaque fois.\n\n"
        "Je partage mes analyses de secteur chaque mois. Intéressé·e? "
        "Commentez ou écrivez-moi.\n\n{tags}"),
    ("instagram", "en"): (
        "📍 {topic}\n\nWhat I'm seeing on the ground this week: prepared "
        "buyers win. Pre-approval in hand, custom alerts, fast decisions.\n\n"
        "House hunting? DM me \"BRIEF\" and I'll pull your sector snapshot.\n\n"
        "{tags}"),
    ("facebook", "en"): (
        "🏡 {topic}\n\nLots of market questions this week. My answer: every "
        "sector moves differently — provincial averages mean nothing for YOUR "
        "street.\n\nComment \"SECTOR\" and I'll send your neighbourhood "
        "analysis, free.\n\n{tags}"),
    ("linkedin", "en"): (
        "{topic} — three field notes this week:\n\n"
        "1. Days-on-market is stretching in some segments, not all.\n"
        "2. Pre-qualified buyers negotiate better.\n"
        "3. Sector data beats intuition, every time.\n\n"
        "I share monthly sector briefs. Interested? Comment or DM.\n\n{tags}"),
}


def generate_content(db: Session, tenant_id: str, *, topic: str,
                     platforms: list[str], language: str = "fr",
                     voice_profile: str = "") -> list[ContentItem]:
    items = []
    for platform in platforms:
        body = None
        if settings.ANTHROPIC_API_KEY:
            from ..llm import complete
            body = complete(
                f"Rédige une publication {platform} ({language}) pour un courtier "
                f"immobilier québécois. Sujet: {topic}. "
                f"Voix personnelle: {voice_profile or 'chaleureuse, directe, terrain'}. "
                f"CTA clair, 130 mots max, hashtags QC.",
                system="Rédacteur de contenu immobilier québécois. Ton humain, "
                       "jamais corporatif, jamais de superlatifs vides.")
        if not body:
            tpl = _TPL.get((platform, language)) or _TPL.get((platform, "fr"))
            if not tpl:
                continue
            body = tpl.format(topic=topic, tags=_HASHTAGS.get(language, ""))
        item = ContentItem(tenant_id=tenant_id, platform=platform,
                           language=language, topic=topic, body=body)
        db.add(item)
        items.append(item)
    db.commit()
    return items


def schedule_content(db: Session, tenant_id: str, item_id: int,
                     when: datetime) -> ContentItem:
    item = db.get(ContentItem, item_id)
    if not item or item.tenant_id != tenant_id:
        raise ValueError("contenu introuvable")
    item.status, item.scheduled_at = "scheduled", when
    db.commit()
    return item
