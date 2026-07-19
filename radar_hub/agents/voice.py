"""AI voice & callback agents — outreach caller, client check-in, receptionist.

Three agents, all provider-agnostic and CASL/Loi 25-gated like every other
outbound path in the hub:

  • Lead outreach (ai_voice_outreach) — a lead whose AI PRIORITY score crosses
    the threshold gets an automated touch: a voice call in the broker's cloned
    voice (or an SMS), a qualification-form link by text, and a "callback"
    follow-up so the realtor phones back within N hours.
  • Client check-in (ai_client_checkin) — an existing Centris CLIENT is
    re-contacted from their ENGAGEMENT score: hot (≥ threshold) → propose
    visits; dormant → re-engage. One touch per cooldown window.
  • Receptionist (ai_receptionist) — missed calls hit the voice-inbound
    webhook: bilingual greeting (Québécois French + English), an apology SMS,
    a lead is created for unknown callers (with implied consent recorded —
    the caller initiated contact), and a callback task for the realtor.

Transport reality, same doctrine as connectors/sms.py: without provider
credentials every touch is queued "simulated" with a tap-to-act fallback, so
the queue shows exactly what WOULD have gone out. With TWILIO_* set, SMS goes
out for real and voice calls are placed through the Twilio Calls API; with
ELEVENLABS_API_KEY + ELEVENLABS_VOICE_ID the TwiML <Play>s hub-synthesized
audio in the broker's own cloned voice, otherwise TwiML <Say> (fr-CA/en-CA).

Firewall: engagement/priority signals choose WHO and WHEN to contact — the
scripts never quote the tracked activity back at the person.
"""
from __future__ import annotations

import hashlib
import hmac
import logging
import re
from datetime import timedelta
from xml.sax.saxutils import escape

from sqlalchemy.orm import Session

from .. import features
from ..automations import has_consent, notify, queue_msg, _recent_ping
from ..config import settings
from ..connectors.sms import normalize_phone
from ..events import ingest_event
from ..models import (ConsentRecord, Contact, FollowUp, OutboundMessage,
                      utcnow)

logger = logging.getLogger(__name__)


# ------------------------------------------------------------- provider ----
def voice_provider_status() -> dict:
    """What would actually happen if a call were placed right now."""
    telephony = bool(settings.TWILIO_SID and settings.TWILIO_TOKEN
                     and settings.TWILIO_FROM)
    cloned = bool(settings.ELEVENLABS_API_KEY and settings.ELEVENLABS_VOICE_ID)
    return {
        "telephony": "twilio" if telephony else "simulated",
        "voice": "cloned" if cloned else ("tts" if telephony else "simulated"),
        "note": ("Appels réels (Twilio) · voix clonée du courtier (ElevenLabs)"
                 if telephony and cloned else
                 "Appels réels (Twilio) · voix de synthèse fr-CA/en-CA"
                 if telephony else
                 "Mode simulé — configurer TWILIO_* (et ELEVENLABS_* pour la "
                 "voix clonée) pour placer de vrais appels."),
    }


def build_twiml(msg_id: int, script: str, lang: str = "fr") -> str:
    """TwiML for one outbound call. Cloned voice when ElevenLabs is wired
    (Twilio fetches the mp3 from our public audio endpoint), <Say> otherwise."""
    if settings.ELEVENLABS_API_KEY and settings.ELEVENLABS_VOICE_ID:
        url = f"{settings.PUBLIC_BASE_URL}/api/voice/audio/{msg_id}.mp3"
        return f'<Response><Play>{escape(url)}</Play></Response>'
    say_lang = "fr-CA" if (lang or "fr") == "fr" else "en-CA"
    return (f'<Response><Say language="{say_lang}">{escape(script)}</Say>'
            f'</Response>')


def synthesize_speech(text: str) -> bytes | None:
    """ElevenLabs TTS in the broker's cloned voice. None when not configured
    or on any transport error — callers fall back to <Say>."""
    if not (settings.ELEVENLABS_API_KEY and settings.ELEVENLABS_VOICE_ID):
        return None
    try:
        import httpx
        r = httpx.post(
            "https://api.elevenlabs.io/v1/text-to-speech/"
            f"{settings.ELEVENLABS_VOICE_ID}",
            headers={"xi-api-key": settings.ELEVENLABS_API_KEY},
            json={"text": text[:2500],
                  "model_id": "eleven_multilingual_v2"},
            timeout=30)
        if r.status_code != 200:
            logger.warning("ElevenLabs synthesis failed: %s %s",
                           r.status_code, r.text[:200])
            return None
        return r.content
    except Exception:  # noqa: BLE001 — synthesis must never break a call flow
        logger.warning("ElevenLabs synthesis transport error", exc_info=True)
        return None


def place_voice_call(to: str, twiml: str) -> tuple[str, str]:
    """Twilio Calls API. Returns (status, detail); never raises."""
    to = normalize_phone(to)
    if not to:
        return "failed", "numéro invalide"
    if not (settings.TWILIO_SID and settings.TWILIO_TOKEN and settings.TWILIO_FROM):
        return "simulated", ""
    try:
        import httpx
        r = httpx.post(
            f"https://api.twilio.com/2010-04-01/Accounts/{settings.TWILIO_SID}"
            "/Calls.json",
            data={"From": settings.TWILIO_FROM, "To": to, "Twiml": twiml},
            auth=(settings.TWILIO_SID, settings.TWILIO_TOKEN), timeout=10)
        if r.status_code == 201:
            return "sent", r.json().get("sid", "")
        logger.warning("Twilio voice call failed: %s %s", r.status_code,
                       r.text[:200])
        return "failed", f"twilio {r.status_code}: {r.text[:120]}"
    except Exception as exc:  # noqa: BLE001
        logger.warning("Twilio voice call transport error to %s: %s", to, exc,
                       exc_info=True)
        return "failed", str(exc)[:120]


def queue_voice_call(db: Session, t: str, c: Contact, script: str,
                     purpose: str) -> OutboundMessage:
    """Queue a voice call + best-effort immediate dispatch (same contract as
    automations.queue_msg for SMS)."""
    m = OutboundMessage(tenant_id=t, contact_id=c.id, channel="voice",
                        to_addr=c.phone, body=script, purpose=purpose,
                        status="pending" if settings.TWILIO_SID else "simulated")
    db.add(m)
    db.commit()
    if m.status == "pending":
        status, _detail = place_voice_call(
            c.phone, build_twiml(m.id, script, c.language or "fr"))
        m.status = status
        if status == "sent":
            m.sent_at = utcnow()
        db.commit()
    if m.status == "simulated":
        notify(db, t, "voice_sim", f"Appel IA simulé → {c.name}",
               body=f"Script ({(c.language or 'fr').upper()}):\n{script}",
               contact_id=c.id)
    return m


# ------------------------------------------------- templates & settings ----
def _broker() -> str:
    return str(features.setting("broker_name", "Danny"))


def _tpl(key: str, lang: str, default_fr: str, default_en: str, **kw) -> str:
    default = default_fr if lang == "fr" else default_en
    raw = features.setting(f"{key}_{lang}", default)
    return str(raw).format(broker=_broker(), **kw)


def _first(c: Contact) -> str:
    return c.name.split()[0] if c.name else ""


def _lang(c: Contact) -> str:
    return "en" if (c.language or "fr").startswith("en") else "fr"


# --------------------------------------------------- qualification form ----
def qual_token(contact_id: int) -> str:
    sig = hmac.new(settings.TOKEN_SECRET.encode(),
                   f"{contact_id}|radar-qualification".encode(),
                   hashlib.sha256).hexdigest()[:10]
    return f"{contact_id}-{sig}"


def parse_qual_token(qid: str) -> int | None:
    m = re.fullmatch(r"(\d+)-([0-9a-f]{10})", qid or "")
    if not m or not hmac.compare_digest(qual_token(int(m.group(1))), qid):
        return None
    return int(m.group(1))


def qualification_url(c: Contact) -> str:
    return f"{settings.PUBLIC_BASE_URL}/q/{qual_token(c.id)}"


def apply_qualification(db: Session, t: str, contact_id: int,
                        answers: dict) -> Contact:
    """Fold the lead's own answers into their notes → priority re-scores on
    real intent words (budget, préapprouvé, horizon…)."""
    c = db.get(Contact, contact_id)
    if not c or c.tenant_id != t:
        raise ValueError("contact introuvable")
    bits = []
    if answers.get("budget"):
        bits.append(f"budget {answers['budget']}")
    if answers.get("timeline"):
        bits.append(f"horizon {answers['timeline']}")
    if answers.get("prequalified"):
        bits.append("préapprouvé hypothécaire")
    if answers.get("areas"):
        bits.append(f"secteurs: {answers['areas']}")
    if answers.get("message"):
        bits.append(str(answers["message"])[:300])
    line = "Formulaire de qualification: " + " · ".join(bits or ["soumis"])
    c.notes = (c.notes + "\n" if c.notes else "") + line
    db.commit()
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="lead.enriched",
                 actor="client", origin="hub",
                 payload={"kind": "qualification_form", **{
                     k: str(v)[:120] for k, v in answers.items() if v}},
                 idempotency_key=f"qualform-{c.id}-{utcnow():%Y%m%d%H%M}")
    from ..scoring import refresh_priority
    refresh_priority(db, c)
    notify(db, t, "qual_form",
           f"📋 {c.name} a rempli le formulaire de qualification "
           f"(priorité {c.priority_score})", contact_id=c.id)
    return c


# ---------------------------------------------------- lead outreach agent --
def run_lead_outreach(db: Session, t: str, c: Contact,
                      channel: str = "auto") -> dict:
    """Priority-score-driven touch on a LEAD: voice (cloned) or SMS, plus the
    qualification-form text and a realtor callback task. Once per lead."""
    if not features.enabled("ai_voice_outreach"):
        return {"status": "skipped", "reason": "fonction ai_voice_outreach désactivée"}
    if c.lifecycle != "lead":
        return {"status": "skipped", "reason": "pas un lead"}
    threshold = int(features.setting("voice_priority_threshold", 75))
    if c.priority_score < threshold:
        return {"status": "skipped",
                "reason": f"priorité {c.priority_score} < seuil {threshold}"}
    if _recent_ping(db, t, c.id, "voice_priority"):
        return {"status": "skipped", "reason": "déjà contacté (voice_priority)"}
    if not c.phone:
        notify(db, t, "no_phone",
               f"Priorité {c.priority_score} mais aucun téléphone pour {c.name}",
               contact_id=c.id)
        return {"status": "skipped", "reason": "aucun téléphone"}
    if not has_consent(db, t, c):
        return {"status": "skipped", "reason": "aucun consentement consigné"}

    lang = _lang(c)
    hours = int(features.setting("voice_callback_hours", 2))
    if channel == "auto":
        channel = str(features.setting("voice_outreach_channel", "voice"))
    form_url = qualification_url(c)

    if channel == "voice":
        script = _tpl(
            "voice_lead_script", lang,
            "Bonjour {name}, ici l'assistante virtuelle de {broker}, courtier "
            "immobilier. Merci pour votre demande — {broker} l'a bien reçue et "
            "vous rappelle personnellement d'ici {hours} heures. Pour accélérer "
            "les choses, on vient de vous texter un court formulaire. "
            "À très bientôt!",
            "Hi {name}, this is {broker}'s virtual assistant. Thanks for "
            "reaching out — {broker} received your request and will call you "
            "personally within {hours} hours. To speed things up, we just "
            "texted you a short form. Talk soon!",
            name=_first(c), hours=hours)
        queue_voice_call(db, t, c, script, "voice_priority")
    else:
        script = _tpl(
            "voice_lead_text", lang,
            "Bonjour {name}, merci pour votre demande — {broker} vous rappelle "
            "d'ici {hours} h.",
            "Hi {name}, thanks for reaching out — {broker} will call you back "
            "within {hours} h.",
            name=_first(c), hours=hours)
        queue_msg(db, t, c, "sms", script, "voice_priority")

    # "send a form": the qualification link always goes out by SMS
    form_sms = _tpl(
        "qualification_sms", lang,
        "{name}, 30 secondes pour préciser votre recherche et préparer votre "
        "rappel : {url} — {broker}",
        "{name}, 30 seconds to sharpen your search before the callback: "
        "{url} — {broker}",
        name=_first(c), url=form_url)
    queue_msg(db, t, c, "sms", form_sms, "qualification_form")

    db.add(FollowUp(tenant_id=t, contact_id=c.id, kind="callback",
                    due_at=utcnow() + timedelta(hours=hours),
                    note=f"Rappeler — l'agent vocal IA a contacté ce lead "
                         f"prioritaire ({c.priority_score})"))
    db.commit()
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="outreach.sent",
                 actor="system", origin="agent",
                 payload={"kind": "voice_priority", "channel": channel,
                          "score": c.priority_score},
                 idempotency_key=f"voiceprio-{c.id}", reproject=False)
    notify(db, t, "ai_voice",
           f"📞 Agent IA a contacté {c.name} ({channel}, priorité "
           f"{c.priority_score}) — rappeler d'ici {hours} h", contact_id=c.id)
    return {"status": "sent", "channel": channel, "form_url": form_url}


def run_outreach_sweep(db: Session, t: str) -> dict:
    threshold = int(features.setting("voice_priority_threshold", 75))
    leads = (db.query(Contact)
             .filter(Contact.tenant_id == t, Contact.lifecycle == "lead",
                     Contact.priority_score >= threshold).all())
    results = {"sent": 0, "skipped": 0, "details": []}
    for c in leads:
        r = run_lead_outreach(db, t, c)
        results["sent" if r["status"] == "sent" else "skipped"] += 1
        results["details"].append({"contact": c.name, **r})
    return results


# --------------------------------------------------- client check-in agent --
def run_client_checkin(db: Session, t: str, c: Contact) -> dict:
    """Engagement-score-driven check-back on an existing Centris CLIENT."""
    if not features.enabled("ai_client_checkin"):
        return {"status": "skipped", "reason": "fonction ai_client_checkin désactivée"}
    if c.lifecycle != "client":
        return {"status": "skipped", "reason": "pas un client Centris"}
    hot = int(features.setting("voice_checkin_hot_threshold", 70))
    if c.engagement_score >= hot:
        kind = "hot"
    elif c.dormant:
        kind = "dormant"
    else:
        return {"status": "skipped",
                "reason": f"engagement {c.engagement_score} sous le seuil "
                          f"et client actif — aucune relance nécessaire"}
    cooldown = int(features.setting("voice_checkin_cooldown_days", 14))
    if _recent_ping(db, t, c.id, "voice_checkin", within_days=cooldown):
        return {"status": "skipped", "reason": "relance déjà faite (cooldown)"}
    if not c.phone:
        return {"status": "skipped", "reason": "aucun téléphone"}
    if not has_consent(db, t, c):
        return {"status": "skipped", "reason": "aucun consentement consigné"}

    lang = _lang(c)
    if kind == "hot":
        body = _tpl(
            "voice_checkin_hot", lang,
            "Bonjour {name}, je vois que votre recherche avance — voulez-vous "
            "qu'on planifie des visites cette semaine? Répondez OUI et {broker} "
            "vous propose des créneaux. — l'assistante de {broker}",
            "Hi {name}, your search seems to be moving — want to book visits "
            "this week? Reply YES and {broker} will suggest time slots. "
            "— {broker}'s assistant",
            name=_first(c))
    else:
        body = _tpl(
            "voice_checkin_dormant", lang,
            "Bonjour {name}, ça fait un moment! De nouvelles inscriptions "
            "pourraient correspondre à vos critères — voulez-vous que {broker} "
            "rafraîchisse votre recherche? — l'assistante de {broker}",
            "Hi {name}, it's been a while! New listings may match your "
            "criteria — want {broker} to refresh your search? "
            "— {broker}'s assistant",
            name=_first(c))
    channel = str(features.setting("voice_checkin_channel", "sms"))
    if channel == "voice":
        queue_voice_call(db, t, c, body, "voice_checkin")
    else:
        queue_msg(db, t, c, "sms", body, "voice_checkin")
    db.add(FollowUp(tenant_id=t, contact_id=c.id, kind="callback",
                    due_at=utcnow() + timedelta(hours=int(
                        features.setting("voice_callback_hours", 2)) * 12),
                    note=f"Relance client ({'chaud' if kind == 'hot' else 'inactif'}) "
                         f"— l'agent IA a texté, faire le suivi humain"))
    db.commit()
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="outreach.sent",
                 actor="system", origin="agent",
                 payload={"kind": f"checkin_{kind}", "channel": channel,
                          "score": c.engagement_score},
                 idempotency_key=f"checkin-{c.id}-{utcnow():%Y%m%d}",
                 reproject=False)
    notify(db, t, "ai_voice",
           f"📞 Relance IA → {c.name} ({'client chaud' if kind == 'hot' else 'client inactif'}, "
           f"engagement {c.engagement_score})", contact_id=c.id)
    return {"status": "sent", "kind": kind, "channel": channel}


def run_checkin_sweep(db: Session, t: str) -> dict:
    clients = (db.query(Contact)
               .filter(Contact.tenant_id == t, Contact.lifecycle == "client")
               .all())
    results = {"sent": 0, "skipped": 0, "details": []}
    for c in clients:
        r = run_client_checkin(db, t, c)
        results["sent" if r["status"] == "sent" else "skipped"] += 1
        if r["status"] == "sent":
            results["details"].append({"contact": c.name, **r})
    return results


# ------------------------------------------------------ receptionist agent --
def receptionist_greetings() -> dict:
    """Bilingual missed-call greetings — Québécois French first (Loi 96),
    English second. Overridable in features.toml [settings]."""
    return {
        "fr": _tpl("receptionist_greeting", "fr",
                   "Bonjour! Vous avez bien joint le bureau de {broker}, "
                   "courtier immobilier. Nous sommes désolés d'avoir manqué "
                   "votre appel. Laissez votre nom et votre numéro après le "
                   "bip, ou répondez au texto qu'on vient de vous envoyer — "
                   "on vous rappelle au plus vite. Merci et bonne journée!",
                   ""),
        "en": _tpl("receptionist_greeting", "en", "",
                   "Hi! You've reached {broker}, real estate broker. Sorry we "
                   "missed your call — leave your name and number after the "
                   "tone, or reply to the text we just sent, and we'll call "
                   "you right back. Thanks, have a great day!"),
    }


def receptionist_twiml() -> str:
    """TwiML a Twilio number can point at for unanswered calls: bilingual
    greeting then voicemail recording (transcription posts back to us)."""
    g = receptionist_greetings()
    cb = f"{settings.PUBLIC_BASE_URL}/api/webhooks/voice-inbound"
    return ('<Response>'
            f'<Say language="fr-CA">{escape(g["fr"])}</Say>'
            f'<Say language="en-CA">{escape(g["en"])}</Say>'
            f'<Record maxLength="120" transcribe="true" '
            f'transcribeCallback="{escape(cb)}"/>'
            '</Response>')


def handle_missed_call(db: Session, t: str, *, from_number: str,
                       caller_name: str = "", transcript: str = "",
                       lang: str = "") -> dict:
    """Missed call → contact matched or lead created (implied consent — the
    caller initiated contact), apology SMS, callback task, realtor notified."""
    if not features.enabled("ai_receptionist"):
        return {"handled": False, "reason": "fonction ai_receptionist désactivée"}
    phone = normalize_phone(from_number)
    if not phone:
        return {"handled": False, "reason": "numéro invalide"}

    contact, created = None, False
    for row in db.query(Contact).filter_by(tenant_id=t).all():
        if row.phone and normalize_phone(row.phone) == phone:
            contact = row
            break
    if not contact:
        contact = Contact(tenant_id=t, name=caller_name or f"Appel {phone}",
                          phone=phone, source="own_generated",
                          sublabel="Appel manqué", funnel="own_generated",
                          campaign="Appel manqué",
                          language=lang or "fr",
                          notes=(f"Boîte vocale: {transcript[:400]}"
                                 if transcript else ""))
        db.add(contact)
        db.commit()
        created = True
        # CASL: the caller reached out to us — record the implied-consent
        # basis so the ack text and the callback are auditable (Loi 25).
        db.add(ConsentRecord(tenant_id=t, contact_id=contact.id,
                             basis="implied", scope="communications",
                             granted=True, source="missed_call",
                             note="Appel entrant manqué — demande initiée par "
                                  "le contact (consentement tacite LCAP)"))
        db.commit()
        ingest_event(db, tenant_id=t, contact_id=contact.id,
                     etype="lead.captured", actor="client", origin="hub",
                     payload={"kind": "missed_call", "phone": phone},
                     idempotency_key=f"misscall-{phone}-{utcnow():%Y%m%d%H%M}")
        from ..scoring import refresh_priority
        refresh_priority(db, contact)
    else:
        if transcript:
            contact.notes = ((contact.notes + "\n" if contact.notes else "")
                             + f"Boîte vocale: {transcript[:400]}")
            db.commit()
        ingest_event(db, tenant_id=t, contact_id=contact.id,
                     etype="call.logged", actor="client", origin="hub",
                     payload={"kind": "missed_call",
                              **({"transcript": transcript[:400]}
                                 if transcript else {})},
                     idempotency_key=f"misscall-{contact.id}-{utcnow():%Y%m%d%H%M}")

    hours = int(features.setting("voice_callback_hours", 2))
    use_lang = lang or _lang(contact)
    if created and not lang:
        # unknown caller, unknown language → bilingual ack (Loi 96: FR first)
        sms = _tpl("receptionist_sms", "fr",
                   "Ici l'assistante de {broker} — désolée d'avoir manqué "
                   "votre appel! Répondez à ce texto avec votre question, ou "
                   "{broker} vous rappelle d'ici {hours} h.", "",
                   hours=hours) + " / " + _tpl(
                   "receptionist_sms", "en", "",
                   "This is {broker}'s assistant — sorry we missed your call! "
                   "Reply with your question, or {broker} will call you back "
                   "within {hours} h.", hours=hours)
    else:
        sms = _tpl("receptionist_sms", use_lang,
                   "Ici l'assistante de {broker} — désolée d'avoir manqué "
                   "votre appel! Répondez à ce texto avec votre question, ou "
                   "{broker} vous rappelle d'ici {hours} h.",
                   "This is {broker}'s assistant — sorry we missed your call! "
                   "Reply with your question, or {broker} will call you back "
                   "within {hours} h.", hours=hours)
    # one apology text per caller per day; one pending callback at a time
    if has_consent(db, t, contact) and not _recent_ping(
            db, t, contact.id, "missed_call_ack", within_days=1):
        queue_msg(db, t, contact, "sms", sms, "missed_call_ack")
    pending_cb = db.query(FollowUp).filter_by(
        tenant_id=t, contact_id=contact.id, kind="callback",
        status="pending").count()
    if not pending_cb:
        db.add(FollowUp(tenant_id=t, contact_id=contact.id, kind="callback",
                        due_at=utcnow() + timedelta(hours=hours),
                        note="Appel manqué — la réceptionniste IA a répondu, "
                             "rappeler" + (f" · «{transcript[:120]}»"
                                           if transcript else "")))
    db.commit()
    notify(db, t, "missed_call",
           f"☎️ Appel manqué de {contact.name}"
           + (" (nouveau lead)" if created else "")
           + f" — la réceptionniste IA a répondu, rappeler d'ici {hours} h",
           contact_id=contact.id)
    return {"handled": True, "contact_id": contact.id, "lead_created": created,
            "greetings": receptionist_greetings()}
