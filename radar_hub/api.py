"""Radar Hub API. Auth: X-Radar-Key header (open when RADAR_API_KEY unset).
Tenant: X-Tenant-Id header, defaults to Danny's instance (decision #3 —
tenant_id is the only structural difference between internal and white-label).
"""
from __future__ import annotations
import hmac
import json
import logging
from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, Header, HTTPException, Request
from fastapi.responses import Response
from pydantic import BaseModel, Field
from sqlalchemy import func
from sqlalchemy.orm import Session
from .config import settings
from .models import (ConsentRecord, Contact, ContentItem, Event, Expense,
                     FollowUp, GeoCache, LedgerEntry, Listing, ListingPhoto,
                     NotificationItem, OutboundMessage, PortalKV,
                     ProspectCandidate, SellerProspect, WritebackItem,
                     get_db, utcnow)
from .events import ingest_event, FAMILIES
from . import features, llm
from .scoring import engagement_breakdown, refresh_priority
from .stages import STAGE_LABELS_FR, STAGE_ORDER
from .connectors import fub as fub_conn
from .connectors import matrix_email as mx
from .connectors import vitrine as vit
from .agents import office_manager as office
from .agents import prospecting as prospect
from .agents import content_social as content
from .agents import voice as voice_agent
from .agents import seller_intel as seller

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api")


def auth(x_radar_key: str = Header(default="")) -> None:
    if settings.API_KEY and not hmac.compare_digest(x_radar_key,
                                                    settings.API_KEY):
        raise HTTPException(401, "clé API invalide (X-Radar-Key)")


def tenant(x_tenant_id: str = Header(default="")) -> str:
    return x_tenant_id or settings.DEFAULT_TENANT


def _contact_out(c: Contact) -> dict:
    return {"id": c.id, "name": c.name, "email": c.email, "phone": c.phone,
            "source": c.source, "sublabel": c.sublabel,
            "funnel": c.funnel or c.source, "campaign": c.campaign or c.sublabel,
            "lifecycle": c.lifecycle,
            "stage": c.stage, "stage_label": STAGE_LABELS_FR.get(c.stage, c.stage),
            "priority_score": c.priority_score, "priority_hint": c.priority_hint,
            "engagement_score": c.engagement_score, "dormant": c.dormant,
            "notes": c.notes, "portal_token": c.portal_token,
            "fub_person_id": c.fub_person_id,
            "intake_email": c.intake_email,
            "portal_url": f"/portail/{c.portal_token}" if c.portal_token else "",
            "created_at": c.created_at.isoformat(),
            "converted_at": c.converted_at.isoformat() if c.converted_at else None}


@router.get("/health")
def health():
    return {"ok": True, "service": "radar-hub", "edition": settings.EDITION,
            "tenant_default": settings.DEFAULT_TENANT}


# ------------------------------------------------------------------ events --
class EventIn(BaseModel):
    contact_id: int
    type: str
    actor: str = "system"
    origin: str = "hub"
    ts: datetime | None = None
    payload: dict = Field(default_factory=dict)
    idempotency_key: str | None = None


@router.post("/events", dependencies=[Depends(auth)])
def post_event(body: EventIn, db: Session = Depends(get_db),
               t: str = Depends(tenant)):
    if body.type not in FAMILIES:
        raise HTTPException(422, f"type d'événement inconnu: {body.type}")
    ev, created = ingest_event(db, tenant_id=t, contact_id=body.contact_id,
                               etype=body.type, actor=body.actor,
                               origin=body.origin, ts=body.ts,
                               payload=body.payload,
                               idempotency_key=body.idempotency_key)
    return {"event_id": ev.id if ev else None, "created": created}


# ------------------------------------------------------------------- leads --
class LeadIn(BaseModel):
    name: str
    email: str = ""
    phone: str = ""
    source: str = "own_generated"
    sublabel: str = ""
    funnel: str = ""    # defaults to source — override for new pipes
    campaign: str = ""  # defaults to sublabel — portal / campaign tag
    notes: str = ""
    language: str = "fr"


@router.get("/leads", dependencies=[Depends(auth)])
def list_leads(db: Session = Depends(get_db), t: str = Depends(tenant)):
    rows = (db.query(Contact).filter_by(tenant_id=t, lifecycle="lead")
            .order_by(Contact.priority_score.desc()).all())
    return [_contact_out(c) for c in rows]


@router.post("/leads", dependencies=[Depends(auth)])
def create_lead(body: LeadIn, db: Session = Depends(get_db),
                t: str = Depends(tenant)):
    c = Contact(tenant_id=t, **body.model_dump())
    c.funnel = c.funnel or c.source
    c.campaign = c.campaign or c.sublabel
    db.add(c)
    db.commit()
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="lead.captured",
                 actor="system", origin="hub",
                 idempotency_key=f"lead-{c.id}")
    refresh_priority(db, c, use_llm=True)
    # -- tiered hooks (each no-ops when the plan doesn't include it) ----------
    if features.enabled("speed_to_lead") and (c.phone or c.email):
        tmpl = features.setting(
            "auto_ack_fr" if c.language == "fr" else "auto_ack_en",
            "Bonjour {name}, j'ai bien reçu votre demande — je vous reviens "
            "très vite.")
        first = c.name.split()[0] if c.name else ""
        _queue_msg(db, t, c, "sms" if c.phone else "email",
                   tmpl.format(name=first), "auto_ack")
        ingest_event(db, tenant_id=t, contact_id=c.id, etype="message.sent",
                     actor="system", origin="hub",
                     payload={"kind": "auto_ack"},
                     idempotency_key=f"ack-{c.id}")
    if features.enabled("sequences"):
        for d in features.setting("sequence_days", [1, 3, 7, 30]):
            db.add(FollowUp(tenant_id=t, contact_id=c.id, kind="sequence",
                            due_at=utcnow() + timedelta(days=int(d)),
                            note=f"Relance J+{d} — prendre des nouvelles"))
        db.commit()
    if features.enabled("consent_vault"):
        db.add(ConsentRecord(tenant_id=t, contact_id=c.id, basis="implied",
                             scope="communications", granted=True,
                             source=c.funnel or c.source,
                             note="Demande entrante — consentement tacite LCAP"))
        db.commit()
    if c.priority_score >= 60:
        _notify(db, t, "hot_lead", f"🔥 Lead chaud : {c.name}",
                c.priority_hint or "", c.id)
    from .automations import check_priority_threshold
    check_priority_threshold(db, t, c)
    return _contact_out(c)


@router.post("/leads/{contact_id}/contacted", dependencies=[Depends(auth)])
def mark_contacted(contact_id: int, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    c = db.get(Contact, contact_id)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "lead introuvable")
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="lead.contacted",
                 actor="realtor", origin="hub")
    return _contact_out(db.get(Contact, contact_id))


@router.post("/leads/{contact_id}/convert", dependencies=[Depends(auth)])
def convert_lead(contact_id: int, db: Session = Depends(get_db),
                 t: str = Depends(tenant)):
    c = db.get(Contact, contact_id)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "lead introuvable")
    if c.lifecycle == "client":
        return _contact_out(c)
    mx.convert_contact(db, t, c, via="dashboard")
    return _contact_out(db.get(Contact, contact_id))


# ----------------------------------------------------------------- clients --
@router.get("/clients", dependencies=[Depends(auth)])
def list_clients(db: Session = Depends(get_db), t: str = Depends(tenant)):
    rows = (db.query(Contact).filter_by(tenant_id=t, lifecycle="client")
            .order_by(Contact.engagement_score.desc()).all())
    return [_contact_out(c) for c in rows]


@router.get("/contacts", dependencies=[Depends(auth)])
def list_contacts(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Full directory — leads from every funnel AND Centris clients, one list.
    Leads first (actionable), then clients by engagement."""
    rows = (db.query(Contact).filter_by(tenant_id=t)
            .order_by(Contact.lifecycle.desc(),  # "lead" > "client"
                      Contact.priority_score.desc(),
                      Contact.engagement_score.desc()).all())
    return [_contact_out(c) for c in rows]


def _client_rich(db: Session, t: str, c: Contact, timeline_limit: int = 100) -> dict:
    events = (db.query(Event).filter_by(tenant_id=t, contact_id=c.id)
              .order_by(Event.ts.desc()).limit(timeline_limit).all())
    wb = (db.query(WritebackItem).filter_by(tenant_id=t, contact_id=c.id)
          .order_by(WritebackItem.created_at.desc()).limit(10).all())
    # engagement_trend: score today vs score as-of a week ago (same decay
    # model, evaluated at now-7d over events that existed then)
    trend = 0
    if features.enabled("engagement_trend"):
        from .scoring import engagement_score
        wk = utcnow() - timedelta(days=7)
        then = engagement_score([e for e in events if e.ts <= wk], now=wk)
        trend = c.engagement_score - then
    return {**_contact_out(c),
            "trend": trend,
            "stage_order": STAGE_ORDER,
            "stage_labels": STAGE_LABELS_FR,
            "score_breakdown": engagement_breakdown(events),
            "timeline": [{"id": e.id, "type": e.type, "family": e.family,
                          "actor": e.actor, "origin": e.origin,
                          "ts": e.ts.isoformat(), "payload": e.payload}
                         for e in events],
            "writebacks": [{"id": w.id, "target": w.target, "status": w.status,
                            "body": w.body, "created_at": w.created_at.isoformat()}
                           for w in wb]}


@router.get("/clients/{contact_id}", dependencies=[Depends(auth)])
def client_detail(contact_id: int, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    c = db.get(Contact, contact_id)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    return _client_rich(db, t, c)


@router.get("/dashboard/clients-rich", dependencies=[Depends(auth)])
def clients_rich(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """One call for the realtor dashboard adapter: every client with timeline,
    score breakdown, and writebacks merged."""
    rows = (db.query(Contact).filter_by(tenant_id=t, lifecycle="client")
            .order_by(Contact.engagement_score.desc()).all())
    return [_client_rich(db, t, c, timeline_limit=50) for c in rows]


@router.get("/clients/{contact_id}/matrix-digest", dependencies=[Depends(auth)])
def matrix_digest(contact_id: int, days: int = 7,
                  db: Session = Depends(get_db), t: str = Depends(tenant)):
    c = db.get(Contact, contact_id)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    return {"digest": vit.build_matrix_digest(db, t, c, days=days)}


# -------------------------------------------------------------- connectors --
@router.post("/connectors/fub/import", dependencies=[Depends(auth)])
def fub_import(limit: int = 100, db: Session = Depends(get_db),
               t: str = Depends(tenant)):
    return fub_conn.import_from_fub(db, t, fub_conn.FUBClient(), limit=limit)


@router.post("/connectors/fub/flush-writebacks", dependencies=[Depends(auth)])
def fub_flush(db: Session = Depends(get_db), t: str = Depends(tenant)):
    return fub_conn.flush_writebacks(db, t)


class RawEmailIn(BaseModel):
    raw: str
    message_id: str = ""


@router.post("/connectors/matrix/ingest-raw", dependencies=[Depends(auth)])
def matrix_ingest_raw(body: RawEmailIn, db: Session = Depends(get_db),
                      t: str = Depends(tenant)):
    return mx.process_raw_email(db, t, body.raw, raw_id=body.message_id)


@router.post("/connectors/matrix/poll", dependencies=[Depends(auth)])
def matrix_poll(db: Session = Depends(get_db), t: str = Depends(tenant)):
    return mx.poll_matrix_inbox(db, t)


# ---------------------------------------------------------------- webhooks --
@router.post("/webhooks/vitrine")
async def vitrine_webhook(request: Request, db: Session = Depends(get_db),
                          t: str = Depends(tenant)):
    body = await request.body()
    sig = request.headers.get("X-Vitrine-Signature", "")
    if not vit.verify_signature(body, sig):
        raise HTTPException(401, "signature Vitrine invalide")
    payload = await request.json()
    result = vit.handle_vitrine_payload(db, t, payload)
    if not result.get("ok"):
        raise HTTPException(404, result.get("error", "erreur"))
    return result


@router.post("/webhooks/fub")
async def fub_webhook(request: Request):
    # Receive-side stub: FUB event webhooks (peopleCreated, notesCreated…)
    payload = await request.json()
    return {"received": True, "event": payload.get("event", "unknown")}


# ------------------------------------------------------------------ agents --
class LedgerIn(BaseModel):
    property_address: str
    sale_price: float
    commission_rate: float
    contact_id: int | None = None
    kind: str = "sale"
    closed_on: datetime | None = None


@router.post("/agents/office/ledger", dependencies=[Depends(auth)])
def office_ledger(body: LedgerIn, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    e = office.add_ledger_entry(db, t, **body.model_dump())
    return {"id": e.id, "commission_gross": e.commission_gross}


class ExpenseIn(BaseModel):
    category: str
    amount: float
    memo: str = ""
    spent_on: datetime | None = None


@router.post("/agents/office/expenses", dependencies=[Depends(auth)])
def office_expense(body: ExpenseIn, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    e = office.add_expense(db, t, **body.model_dump())
    return {"id": e.id}


@router.get("/agents/office/report/{year}/{month}", dependencies=[Depends(auth)])
def office_report(year: int, month: int, narrative: bool = False,
                  db: Session = Depends(get_db), t: str = Depends(tenant)):
    return office.monthly_report(db, t, year, month, narrative=narrative)


class ProspectRunIn(BaseModel):
    niche: str
    market: str
    count: int = 5
    provider: str = "stub"


@router.post("/agents/prospecting/run", dependencies=[Depends(auth)])
def prospecting_run(body: ProspectRunIn, db: Session = Depends(get_db),
                    t: str = Depends(tenant)):
    try:
        cands = prospect.run_prospecting(db, t, **body.model_dump())
    except (RuntimeError, NotImplementedError) as e:
        raise HTTPException(422, str(e))
    return [{"id": c.id, "name": c.name, "email": c.email, "phone": c.phone,
             "address": c.address, "signal": c.signal, "is_demo": c.is_demo,
             "consent_basis": c.consent_basis,
             "outreach_status": c.outreach_status} for c in cands]


@router.get("/agents/prospecting/candidates", dependencies=[Depends(auth)])
def prospecting_list(db: Session = Depends(get_db), t: str = Depends(tenant)):
    rows = (db.query(ProspectCandidate).filter_by(tenant_id=t)
            .order_by(ProspectCandidate.created_at.desc()).limit(100).all())
    return [{"id": c.id, "name": c.name, "niche": c.niche, "market": c.market,
             "email": c.email, "phone": c.phone, "signal": c.signal,
             "is_demo": c.is_demo, "consent_basis": c.consent_basis,
             "outreach_status": c.outreach_status} for c in rows]


class ConsentIn(BaseModel):
    consent_basis: str


@router.post("/agents/prospecting/candidates/{cid}/consent",
             dependencies=[Depends(auth)])
def prospecting_consent(cid: int, body: ConsentIn,
                        db: Session = Depends(get_db), t: str = Depends(tenant)):
    if body.consent_basis not in prospect.CASL_BASES:
        raise HTTPException(422, f"base CASL inconnue. Options: "
                                 f"{list(prospect.CASL_BASES)}")
    c = db.get(ProspectCandidate, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "candidat introuvable")
    c.consent_basis = body.consent_basis
    db.commit()
    return {"id": c.id, "consent_basis": c.consent_basis}


class OutreachIn(BaseModel):
    channel: str  # email | letter | call
    language: str = "fr"
    signature: str = "Julie Fortin, RE/MAX du Cartier"


@router.post("/agents/prospecting/candidates/{cid}/outreach",
             dependencies=[Depends(auth)])
def prospecting_outreach(cid: int, body: OutreachIn,
                         db: Session = Depends(get_db), t: str = Depends(tenant)):
    try:
        draft = prospect.draft_outreach(db, t, cid, channel=body.channel,
                                        language=body.language,
                                        signature=body.signature)
    except prospect.CASLError as e:
        raise HTTPException(422, str(e))
    except ValueError as e:
        raise HTTPException(404, str(e))
    return {"draft": draft, "casl_note": "Signal de ciblage jamais inclus "
            "dans le message (pare-feu ciblage/contenu)."}


@router.post("/agents/prospecting/candidates/{cid}/promote",
             dependencies=[Depends(auth)])
def prospecting_promote(cid: int, db: Session = Depends(get_db),
                        t: str = Depends(tenant)):
    try:
        c = prospect.promote_to_lead(db, t, cid)
    except ValueError as e:
        raise HTTPException(404, str(e))
    return _contact_out(c)


class ContentIn(BaseModel):
    topic: str
    platforms: list[str] = ["instagram", "facebook", "linkedin"]
    language: str = "fr"
    voice_profile: str = ""


@router.post("/agents/content/generate", dependencies=[Depends(auth)])
def content_generate(body: ContentIn, db: Session = Depends(get_db),
                     t: str = Depends(tenant)):
    items = content.generate_content(db, t, **body.model_dump())
    return [{"id": i.id, "platform": i.platform, "body": i.body,
             "status": i.status} for i in items]


@router.get("/agents/content/queue", dependencies=[Depends(auth)])
def content_queue(db: Session = Depends(get_db), t: str = Depends(tenant)):
    rows = (db.query(ContentItem).filter_by(tenant_id=t)
            .order_by(ContentItem.created_at.desc()).limit(50).all())
    return [{"id": i.id, "platform": i.platform, "language": i.language,
             "topic": i.topic, "body": i.body, "status": i.status,
             "scheduled_at": i.scheduled_at.isoformat() if i.scheduled_at else None}
            for i in rows]


class ScheduleIn(BaseModel):
    when: datetime


@router.post("/agents/content/{item_id}/schedule", dependencies=[Depends(auth)])
def content_schedule(item_id: int, body: ScheduleIn,
                     db: Session = Depends(get_db), t: str = Depends(tenant)):
    try:
        i = content.schedule_content(db, t, item_id, body.when)
    except ValueError as e:
        raise HTTPException(404, str(e))
    return {"id": i.id, "status": i.status,
            "scheduled_at": i.scheduled_at.isoformat()}


# ------------------------------------------------------- AI voice agents --
class VoiceOutreachIn(BaseModel):
    channel: str = "auto"  # auto | voice | sms


@router.post("/agents/voice/outreach/run", dependencies=[Depends(auth)])
def voice_outreach_sweep(db: Session = Depends(get_db), t: str = Depends(tenant)):
    if not features.enabled("ai_voice_outreach"):
        raise HTTPException(422, "fonction ai_voice_outreach désactivée "
                                 "(forfait platinum ou [overrides])")
    return voice_agent.run_outreach_sweep(db, t)


@router.post("/agents/voice/outreach/{cid}", dependencies=[Depends(auth)])
def voice_outreach_one(cid: int, body: VoiceOutreachIn = VoiceOutreachIn(),
                       db: Session = Depends(get_db), t: str = Depends(tenant)):
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    return voice_agent.run_lead_outreach(db, t, c, channel=body.channel)


@router.post("/agents/voice/checkins/run", dependencies=[Depends(auth)])
def voice_checkin_sweep(db: Session = Depends(get_db), t: str = Depends(tenant)):
    if not features.enabled("ai_client_checkin"):
        raise HTTPException(422, "fonction ai_client_checkin désactivée "
                                 "(forfait platinum ou [overrides])")
    return voice_agent.run_checkin_sweep(db, t)


@router.post("/agents/voice/checkin/{cid}", dependencies=[Depends(auth)])
def voice_checkin_one(cid: int, db: Session = Depends(get_db),
                      t: str = Depends(tenant)):
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    return voice_agent.run_client_checkin(db, t, c)


@router.get("/agents/voice/queue", dependencies=[Depends(auth)])
def voice_queue(db: Session = Depends(get_db), t: str = Depends(tenant)):
    rows = (db.query(OutboundMessage)
            .filter(OutboundMessage.tenant_id == t,
                    OutboundMessage.purpose.in_(
                        ["voice_priority", "voice_checkin", "missed_call_ack",
                         "qualification_form"]))
            .order_by(OutboundMessage.created_at.desc()).limit(50).all())
    names = {c.id: c.name for c in
             db.query(Contact).filter_by(tenant_id=t).all()}
    return [{"id": m.id, "contact": names.get(m.contact_id, f"#{m.contact_id}"),
             "channel": m.channel, "purpose": m.purpose, "status": m.status,
             "body": m.body, "created_at": m.created_at.isoformat()}
            for m in rows]


@router.get("/agents/voice/receptionist", dependencies=[Depends(auth)])
def voice_receptionist_config():
    return {"enabled": features.enabled("ai_receptionist"),
            "greetings": voice_agent.receptionist_greetings(),
            "provider": voice_agent.voice_provider_status(),
            "webhook": "/api/webhooks/voice-inbound",
            "twiml": voice_agent.receptionist_twiml()}


@router.post("/webhooks/voice-inbound")  # public — telephony provider posts here
async def voice_inbound(request: Request, format: str = "",
                        db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Missed-call / voicemail webhook. Accepts our JSON shape
    ({"from", "name", "transcript", "lang"}) or Twilio's form fields
    (From, CallerName, TranscriptionText). ?format=twiml answers with the
    bilingual greeting so a Twilio number can point straight at this URL."""
    data: dict = {}
    try:
        data = await request.json()
    except Exception:  # noqa: BLE001 — Twilio posts x-www-form-urlencoded
        try:
            form = await request.form()
            data = {"from": form.get("From", ""),
                    "name": form.get("CallerName", ""),
                    "transcript": form.get("TranscriptionText", "")}
        except Exception:  # noqa: BLE001
            logger.warning("voice-inbound webhook body unparsable as JSON or "
                           "form; treating as empty", exc_info=True)
            data = {}
    result = voice_agent.handle_missed_call(
        db, t, from_number=str(data.get("from", "")),
        caller_name=str(data.get("name", "") or ""),
        transcript=str(data.get("transcript", "") or ""),
        lang=str(data.get("lang", "") or ""))
    if format == "twiml":
        return Response(voice_agent.receptionist_twiml(),
                        media_type="application/xml")
    return result


@router.get("/voice/audio/{msg_id}.mp3")  # public — Twilio <Play>s this URL
def voice_audio(msg_id: int, db: Session = Depends(get_db)):
    m = db.get(OutboundMessage, msg_id)
    if not m or m.channel != "voice":
        raise HTTPException(404, "message vocal introuvable")
    audio = voice_agent.synthesize_speech(m.body)
    if not audio:
        raise HTTPException(404, "synthèse vocale non configurée "
                                 "(ELEVENLABS_API_KEY / ELEVENLABS_VOICE_ID)")
    return Response(audio, media_type="audio/mpeg")


class QualificationIn(BaseModel):
    budget: str = ""
    timeline: str = ""
    prequalified: bool = False
    areas: str = ""
    message: str = ""


@router.post("/forms/qualification/{qid}")  # public — the lead submits here
def qualification_submit(qid: str, body: QualificationIn,
                         db: Session = Depends(get_db), t: str = Depends(tenant)):
    cid = voice_agent.parse_qual_token(qid)
    if cid is None:
        raise HTTPException(404, "formulaire introuvable")
    try:
        c = voice_agent.apply_qualification(db, t, cid, body.model_dump())
    except ValueError as e:
        raise HTTPException(404, str(e))
    return {"ok": True, "priority_score": c.priority_score}


# ------------------------------------------------------ seller intelligence --
class SellerRunIn(BaseModel):
    sector: str
    count: int = 5
    provider: str = "stub"


def _seller_out(p: SellerProspect) -> dict:
    return {"id": p.id, "name": p.name, "address": p.address,
            "sector": p.sector, "email": p.email, "phone": p.phone,
            "owned_years": p.owned_years, "renewal_months": p.renewal_months,
            "signals": p.signals, "sell_score": p.sell_score,
            "score_reasons": p.score_reasons, "is_demo": p.is_demo,
            "consent_basis": p.consent_basis,
            "outreach_status": p.outreach_status, "contact_id": p.contact_id}


@router.post("/agents/seller/run", dependencies=[Depends(auth)])
def seller_run(body: SellerRunIn, db: Session = Depends(get_db),
               t: str = Depends(tenant)):
    _require("seller_intelligence")
    try:
        rows = seller.run_discovery(db, t, **body.model_dump())
    except RuntimeError as e:
        raise HTTPException(422, str(e))
    return [_seller_out(p) for p in rows]


@router.get("/agents/seller/prospects", dependencies=[Depends(auth)])
def seller_list(db: Session = Depends(get_db), t: str = Depends(tenant)):
    rows = (db.query(SellerProspect).filter_by(tenant_id=t)
            .order_by(SellerProspect.sell_score.desc()).limit(100).all())
    return [_seller_out(p) for p in rows]


@router.get("/agents/seller/market/{sector}", dependencies=[Depends(auth)])
def seller_market(sector: str):
    return seller.market_snapshot(sector)


@router.post("/agents/seller/prospects/{pid}/consent",
             dependencies=[Depends(auth)])
def seller_consent(pid: int, body: ConsentIn, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    if body.consent_basis not in prospect.CASL_BASES:
        raise HTTPException(422, f"base CASL inconnue. Options: "
                                 f"{list(prospect.CASL_BASES)}")
    p = db.get(SellerProspect, pid)
    if not p or p.tenant_id != t:
        raise HTTPException(404, "prospect vendeur introuvable")
    p.consent_basis = body.consent_basis
    db.commit()
    return {"id": p.id, "consent_basis": p.consent_basis}


class SellerOutreachIn(BaseModel):
    channel: str  # letter | call | email | sms | voice
    language: str = "fr"
    signature: str = "Julie Fortin, RE/MAX du Cartier"
    send: bool = False


@router.post("/agents/seller/prospects/{pid}/outreach",
             dependencies=[Depends(auth)])
def seller_outreach(pid: int, body: SellerOutreachIn,
                    db: Session = Depends(get_db), t: str = Depends(tenant)):
    _require("seller_intelligence")
    try:
        if body.send:
            return seller.send_outreach(db, t, pid, channel=body.channel,
                                        language=body.language,
                                        signature=body.signature)
        draft = seller.draft_outreach(db, t, pid, channel=body.channel,
                                      language=body.language,
                                      signature=body.signature)
    except prospect.CASLError as e:
        raise HTTPException(422, str(e))
    except ValueError as e:
        raise HTTPException(404, str(e))
    return {"status": "drafted", "channel": body.channel, "draft": draft}


@router.post("/agents/seller/prospects/{pid}/promote",
             dependencies=[Depends(auth)])
def seller_promote(pid: int, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    try:
        c = seller.promote_to_lead(db, t, pid)
    except ValueError as e:
        raise HTTPException(404, str(e))
    return _contact_out(c)


# --------------------------------------------- deadlines / feedback / privacy --
class DeadlineIn(BaseModel):
    label: str
    due_at: datetime


@router.post("/contacts/{cid}/deadlines", dependencies=[Depends(auth)])
def deadline_add(cid: int, body: DeadlineIn, db: Session = Depends(get_db),
                 t: str = Depends(tenant)):
    _require("deadline_sentinel")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    f = FollowUp(tenant_id=t, contact_id=cid, kind="deadline",
                 due_at=body.due_at, note=body.label)
    db.add(f)
    db.commit()
    return {"id": f.id, "due_at": f.due_at.isoformat(), "label": f.note}


@router.get("/contacts/{cid}/deadlines", dependencies=[Depends(auth)])
def deadline_list(cid: int, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    rows = (db.query(FollowUp).filter_by(tenant_id=t, contact_id=cid,
                                         kind="deadline")
            .order_by(FollowUp.due_at).all())
    return [{"id": f.id, "label": f.note, "due_at": f.due_at.isoformat(),
             "status": f.status} for f in rows]


@router.post("/agents/deadlines/run", dependencies=[Depends(auth)])
def deadline_sweep(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Warn ahead of condition deadlines (financing, inspection…). One
    notification per deadline per day — safe to run on a schedule."""
    _require("deadline_sentinel")
    warn = int(features.setting("deadline_warn_days", 3))
    horizon = utcnow() + timedelta(days=warn)
    rows = (db.query(FollowUp)
            .filter(FollowUp.tenant_id == t, FollowUp.kind == "deadline",
                    FollowUp.status == "pending", FollowUp.due_at <= horizon)
            .all())
    names = {c.id: c.name for c in db.query(Contact).filter_by(tenant_id=t)}
    warned = 0
    for f in rows:
        tag = f"⏳ [{f.id}]"
        today = utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
        dup = (db.query(NotificationItem)
               .filter(NotificationItem.tenant_id == t,
                       NotificationItem.title.like(f"{tag}%"),
                       NotificationItem.created_at >= today).first())
        if dup:
            continue
        days_left = max(0, (f.due_at - utcnow()).days)
        _notify(db, t, "deadline",
                f"{tag} {f.note} — {names.get(f.contact_id, '?')} : échéance "
                f"dans {days_left} j" + (" ⚠ AUJOURD'HUI" if days_left == 0 else ""),
                contact_id=f.contact_id)
        warned += 1
    return {"checked": len(rows), "warned": warned}


@router.post("/agents/feedback/run", dependencies=[Depends(auth)])
def feedback_sweep(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Post-visit feedback: text a 3-question mini-survey after each completed
    visit (once per visit event, idempotent)."""
    _require("visit_feedback")
    window = int(features.setting("feedback_window_days", 3))
    since = utcnow() - timedelta(days=window)
    evs = (db.query(Event)
           .filter(Event.tenant_id == t, Event.type == "visit.completed",
                   Event.ts >= since).all())
    sent = 0
    from .automations import queue_msg
    for ev in evs:
        c = db.get(Contact, ev.contact_id)
        if not c or not c.phone or not c.portal_token:
            continue
        _, created = ingest_event(
            db, tenant_id=t, contact_id=c.id, etype="outreach.sent",
            actor="system", origin="hub",
            payload={"kind": "visit_feedback", "visit_event_id": ev.id},
            idempotency_key=f"fbreq-{ev.id}", reproject=False)
        if not created:
            continue
        url = f"{settings.PUBLIC_BASE_URL}/fb/{c.portal_token}?v={ev.id}"
        first = c.name.split()[0] if c.name else ""
        body = (f"Bonjour {first}, merci pour la visite! 3 petites questions "
                f"pour ajuster la suite : {url}"
                if (c.language or "fr") == "fr" else
                f"Hi {first}, thanks for the visit! 3 quick questions to "
                f"fine-tune the search: {url}")
        queue_msg(db, t, c, "sms", body, "visit_feedback")
        sent += 1
    return {"visits_checked": len(evs), "surveys_sent": sent}


class FeedbackIn(BaseModel):
    visit_event_id: int = 0
    interest: int = 3          # 1..5
    price_opinion: str = ""    # juste | trop_cher | aubaine
    comments: str = ""


@router.post("/feedback/{token}")  # public — the client submits here
def feedback_submit(token: str, body: FeedbackIn,
                    db: Session = Depends(get_db)):
    c = _contact_by_token(db, token)
    ingest_event(db, tenant_id=c.tenant_id, contact_id=c.id,
                 etype="feedback.submitted", actor="client", origin="vitrine",
                 payload={"interest": max(1, min(5, body.interest)),
                          "price_opinion": body.price_opinion[:40],
                          "comments": body.comments[:400],
                          "visit_event_id": body.visit_event_id},
                 idempotency_key=f"fb-{c.id}-{body.visit_event_id or utcnow():%Y%m%d%H%M}"
                 if not body.visit_event_id else f"fb-{c.id}-{body.visit_event_id}")
    _notify(db, c.tenant_id, "feedback",
            f"📝 Rétroaction de visite — {c.name} : intérêt "
            f"{max(1, min(5, body.interest))}/5"
            + (f" · {body.price_opinion}" if body.price_opinion else ""),
            contact_id=c.id)
    return {"ok": True}


@router.get("/privacy/{cid}/export", dependencies=[Depends(auth)])
def privacy_export(cid: int, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    """Loi 25 — full, portable dump of one person's data."""
    _require("data_rights")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    evs = db.query(Event).filter_by(tenant_id=t, contact_id=cid).all()
    msgs = db.query(OutboundMessage).filter_by(tenant_id=t, contact_id=cid).all()
    cons = db.query(ConsentRecord).filter_by(tenant_id=t, contact_id=cid).all()
    fups = db.query(FollowUp).filter_by(tenant_id=t, contact_id=cid).all()
    kv = (db.query(PortalKV).filter_by(tenant_id=t, token=c.portal_token).all()
          if c.portal_token else [])
    return {"generated_at": utcnow().isoformat(), "contact": _contact_out(c),
            "events": [{"type": e.type, "ts": e.ts.isoformat(),
                        "actor": e.actor, "payload": e.payload} for e in evs],
            "messages": [{"channel": m.channel, "purpose": m.purpose,
                          "status": m.status, "body": m.body,
                          "created_at": m.created_at.isoformat()} for m in msgs],
            "consents": [{"basis": r.basis, "granted": r.granted,
                          "source": r.source, "note": r.note,
                          "recorded_at": r.recorded_at.isoformat()} for r in cons],
            "followups": [{"kind": f.kind, "note": f.note, "status": f.status,
                           "due_at": f.due_at.isoformat()} for f in fups],
            "portal_state": [{"key": r.key, "value": r.value} for r in kv]}


class EraseIn(BaseModel):
    confirm_name: str


@router.post("/privacy/{cid}/erase", dependencies=[Depends(auth)])
def privacy_erase(cid: int, body: EraseIn, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    """Loi 25 — right to erasure. Deletes the person's data and anonymizes
    the contact row; the erasure itself is logged (without personal data)."""
    _require("data_rights")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    if body.confirm_name.strip().lower() != c.name.strip().lower():
        raise HTTPException(422, "confirm_name ne correspond pas au contact — "
                                 "effacement refusé")
    counts = {}
    for model, label in ((Event, "events"), (OutboundMessage, "messages"),
                         (FollowUp, "followups"), (WritebackItem, "writebacks"),
                         (ConsentRecord, "consents"), (Listing, "listings"),
                         (NotificationItem, "notifications")):
        q = db.query(model).filter_by(tenant_id=t, contact_id=cid)
        counts[label] = q.count()
        q.delete()
    if c.portal_token:
        counts["portal_state"] = (db.query(PortalKV)
                                  .filter_by(tenant_id=t, token=c.portal_token)
                                  .count())
        db.query(PortalKV).filter_by(tenant_id=t, token=c.portal_token).delete()
    c.name, c.email, c.phone, c.notes = "[supprimé]", "", "", ""
    c.portal_token, c.intake_email, c.fub_person_id = "", "", ""
    c.sublabel = c.campaign = ""
    db.commit()
    _notify(db, t, "privacy",
            f"🗑 Effacement Loi 25 exécuté — contact #{cid}",
            body=", ".join(f"{k}: {v}" for k, v in counts.items()))
    return {"ok": True, "erased": counts}


# ----------------------------------------------- listing photos / geo / book --
class PhotoIn(BaseModel):
    content_b64: str
    mime: str = "image/jpeg"
    sort: int = 0


@router.post("/listings/{centris_no}/photos", dependencies=[Depends(auth)])
def photo_add(centris_no: str, body: PhotoIn, db: Session = Depends(get_db),
              t: str = Depends(tenant)):
    _require("listing_photos")
    if len(body.content_b64) > 4_000_000:  # ~3 MB decoded
        raise HTTPException(422, "photo trop lourde (max ~3 Mo)")
    p = ListingPhoto(tenant_id=t, centris_no=centris_no,
                     content=body.content_b64, mime=body.mime, sort=body.sort)
    db.add(p)
    db.commit()
    return {"id": p.id, "url": f"/api/listing-photos/{p.id}"}


@router.get("/listings/{centris_no}/photos", dependencies=[Depends(auth)])
def photo_list(centris_no: str, db: Session = Depends(get_db),
               t: str = Depends(tenant)):
    rows = (db.query(ListingPhoto).filter_by(tenant_id=t, centris_no=centris_no)
            .order_by(ListingPhoto.sort).all())
    return [{"id": p.id, "url": f"/api/listing-photos/{p.id}",
             "mime": p.mime, "sort": p.sort} for p in rows]


@router.delete("/listing-photos/{pid}", dependencies=[Depends(auth)])
def photo_delete(pid: int, db: Session = Depends(get_db),
                 t: str = Depends(tenant)):
    p = db.get(ListingPhoto, pid)
    if not p or p.tenant_id != t:
        raise HTTPException(404, "photo introuvable")
    db.delete(p)
    db.commit()
    return {"ok": True}


@router.get("/listing-photos/{pid}")  # public — <img> tags load this
def photo_serve(pid: int, db: Session = Depends(get_db)):
    import base64
    p = db.get(ListingPhoto, pid)
    if not p:
        raise HTTPException(404, "photo introuvable")
    try:
        raw = base64.b64decode(p.content)
    except Exception:  # noqa: BLE001
        raise HTTPException(500, "photo corrompue")
    return Response(raw, media_type=p.mime,
                    headers={"Cache-Control": "public, max-age=86400"})


@router.get("/geo")  # public — portal map embeds geocode through the hub
def geocode(q: str, db: Session = Depends(get_db)):
    """Address → lat/lon via Nominatim (OSM), cached forever. Fails soft:
    {found: false} when offline or unmatched — the portal keeps its
    stylized map."""
    q = (q or "").strip()[:300]
    if not q:
        raise HTTPException(422, "q requis")
    row = db.query(GeoCache).filter_by(query=q).first()
    if not row:
        lat = lon = None
        try:
            import httpx
            r = httpx.get("https://nominatim.openstreetmap.org/search",
                          params={"q": q, "format": "json", "limit": 1,
                                  "countrycodes": "ca"},
                          headers={"User-Agent": "radar-hub/1.0"}, timeout=8)
            hits = r.json() if r.status_code == 200 else []
            if hits:
                lat, lon = float(hits[0]["lat"]), float(hits[0]["lon"])
        except Exception:  # noqa: BLE001 — geocoding is best-effort
            logger.warning("Geocoding lookup failed for %r; caching as "
                           "not-found", q, exc_info=True)
        row = GeoCache(query=q, lat=lat, lon=lon)
        db.add(row)
        db.commit()
    return {"found": row.lat is not None, "lat": row.lat, "lon": row.lon}


class BookIn(BaseModel):
    slot: str
    listing_id: str = ""
    address: str = ""


@router.post("/vitrine/book/{token}")  # public — live-slot booking
def vitrine_book(token: str, body: BookIn, db: Session = Depends(get_db)):
    """The visit.requested event flows through the normal webhook; this call
    adds the broker side: a confirm task + an immediate notification."""
    c = _contact_by_token(db, token)
    db.add(FollowUp(tenant_id=c.tenant_id, contact_id=c.id, kind="callback",
                    due_at=utcnow() + timedelta(hours=2),
                    note=f"Confirmer la visite — {body.slot}"
                         + (f" · {body.address or body.listing_id}"
                            if (body.address or body.listing_id) else "")))
    db.commit()
    _notify(db, c.tenant_id, "booking",
            f"📅 {c.name} a réservé un créneau : {body.slot}"
            + (f" ({body.address or body.listing_id})"
               if (body.address or body.listing_id) else ""),
            contact_id=c.id)
    return {"ok": True, "slot": body.slot}


@router.get("/vitrine/features/{token}")  # public — the bridge reads this
def vitrine_features(token: str, db: Session = Depends(get_db),
                     t: str = Depends(tenant)):
    """Which portal capabilities are on for this tenant + their settings and
    the client's listing photos. Demo token gets everything (showroom mode)."""
    keys = ["listing_photos", "visit_scheduler_live", "offer_checklist",
            "portal_pwa", "real_map", "co_buyer", "mortgage_handoff"]
    if token == "demo":
        flags = {k: True for k in keys}
        photos: dict = {}
    else:
        c = _contact_by_token(db, token)
        t = c.tenant_id
        f = features.resolve()["features"]
        flags = {k: f.get(k, {}).get("enabled", False) for k in keys}
        photos = {}
        if flags["listing_photos"]:
            nos = [r.centris_no for r in db.query(Listing)
                   .filter_by(tenant_id=t, contact_id=c.id).all()]
            if nos:
                for p in (db.query(ListingPhoto)
                          .filter(ListingPhoto.tenant_id == t,
                                  ListingPhoto.centris_no.in_(nos))
                          .order_by(ListingPhoto.sort).all()):
                    photos.setdefault(p.centris_no, []).append(
                        f"/api/listing-photos/{p.id}")
    return {"features": flags,
            "settings": {
                "mortgage_partner_name": features.setting(
                    "mortgage_partner_name", "partenaire hypothécaire"),
                "mortgage_partner_url": features.setting(
                    "mortgage_partner_url", ""),
                "visit_slot_days": int(features.setting("visit_slot_days", 5)),
                "visit_slot_times": features.setting(
                    "visit_slot_times",
                    ["10:00", "11:30", "13:00", "15:30", "17:00", "18:30"]),
            },
            "photos": photos}


# ---------------------------------------------------- vitrine portal APIs --
def _contact_by_token(db: Session, token: str) -> Contact:
    c = db.query(Contact).filter_by(portal_token=token).first()
    if not token or not c:
        raise HTTPException(401, "jeton portail invalide")
    return c


class VitrineAIIn(BaseModel):
    token: str
    payload: dict


_AI_FALLBACK = {"content": [{"type": "text", "text":
    '{"reply": "Le concierge IA n\'est pas configuré sur ce serveur '
    '(ANTHROPIC_API_KEY manquante). Julie vous répondra directement.", '
    '"escalate": true, "topics": ["autre"]}'}]}


@router.post("/vitrine/ai")
def vitrine_ai(body: VitrineAIIn, db: Session = Depends(get_db)):
    """Server-side proxy for the portal's two AI features (concierge chat +
    forecast refresh). The artifact-era build called api.anthropic.com with no
    key; deployed, the key lives here and never reaches the browser."""
    _contact_by_token(db, body.token)
    if not settings.ANTHROPIC_API_KEY:
        return _AI_FALLBACK
    p = dict(body.payload or {})
    clean = {
        "model": p.get("model") or settings.HAIKU_MODEL,
        "max_tokens": min(int(p.get("max_tokens") or 1000), 1500),
        "messages": p.get("messages") or [],
    }
    if p.get("system"):
        clean["system"] = p["system"]
    tools = [tl for tl in (p.get("tools") or [])
             if str(tl.get("type", "")).startswith("web_search")]
    if tools:
        clean["tools"] = tools
    import httpx
    try:
        with httpx.Client(timeout=60) as cx:
            r = cx.post("https://api.anthropic.com/v1/messages", json=clean,
                        headers={"x-api-key": settings.ANTHROPIC_API_KEY,
                                 "anthropic-version": "2023-06-01"})
            r.raise_for_status()
            return r.json()
    except Exception:  # noqa: BLE001 — the portal keeps a deterministic fallback
        logger.warning("Vitrine AI proxy call failed; returning fallback",
                       exc_info=True)
        return _AI_FALLBACK


class KVIn(BaseModel):
    value: str


@router.get("/vitrine/storage/{token}/{key}")
def kv_get(token: str, key: str, db: Session = Depends(get_db)):
    c = _contact_by_token(db, token)
    row = (db.query(PortalKV)
           .filter_by(tenant_id=c.tenant_id, token=token, key=key).first())
    if not row:
        raise HTTPException(404, "clé absente")
    return {"key": key, "value": row.value}


@router.put("/vitrine/storage/{token}/{key}")
def kv_put(token: str, key: str, body: KVIn, db: Session = Depends(get_db)):
    c = _contact_by_token(db, token)
    row = (db.query(PortalKV)
           .filter_by(tenant_id=c.tenant_id, token=token, key=key).first())
    if row:
        row.value, row.updated_at = body.value, utcnow()
    else:
        db.add(PortalKV(tenant_id=c.tenant_id, token=token, key=key,
                        value=body.value))
    db.commit()
    return {"key": key, "ok": True}


@router.delete("/vitrine/storage/{token}/{key}")
def kv_del(token: str, key: str, db: Session = Depends(get_db)):
    c = _contact_by_token(db, token)
    (db.query(PortalKV)
     .filter_by(tenant_id=c.tenant_id, token=token, key=key).delete())
    db.commit()
    return {"key": key, "deleted": True}


@router.get("/vitrine/listings/{token}")
def vitrine_listings(token: str, db: Session = Depends(get_db)):
    """The client's live inventory — parsed from their Matrix alert emails.
    Token-gated; consumed by the Vitrine bridge at load."""
    c = _contact_by_token(db, token)
    rows = (db.query(Listing)
            .filter_by(tenant_id=c.tenant_id, contact_id=c.id)
            .order_by(Listing.received_at.desc()).limit(40).all())
    return [{"centris_no": r.centris_no, "address": r.address, "area": r.area,
             "price": r.price, "beds": r.beds, "baths": r.baths,
             "prop_type": r.prop_type, "url": r.url,
             "received_at": r.received_at.isoformat()} for r in rows]


class NoteMarkIn(BaseModel):
    status: str  # sent | failed | manual


@router.get("/connectors/matrix/notes", dependencies=[Depends(auth)])
def matrix_notes(status: str = "pending", db: Session = Depends(get_db),
                 t: str = Depends(tenant)):
    """Matrix-history queue. Marketable edition: paste-ready list.
    Internal edition: consumed by internal/…/matrix_history_writer.py."""
    rows = (db.query(WritebackItem)
            .filter_by(tenant_id=t, target="matrix_note", status=status)
            .order_by(WritebackItem.created_at.asc()).limit(100).all())
    out = []
    for w in rows:
        c = db.get(Contact, w.contact_id)
        out.append({"id": w.id, "contact_id": w.contact_id,
                    "contact_name": c.name if c else "?",
                    "fub_person_id": c.fub_person_id if c else "",
                    "body": w.body, "created_at": w.created_at.isoformat()})
    return out


@router.post("/connectors/matrix/notes/{note_id}/mark",
             dependencies=[Depends(auth)])
def matrix_note_mark(note_id: int, body: NoteMarkIn,
                     db: Session = Depends(get_db), t: str = Depends(tenant)):
    w = db.get(WritebackItem, note_id)
    if not w or w.tenant_id != t or w.target != "matrix_note":
        raise HTTPException(404, "note introuvable")
    if body.status not in {"sent", "failed", "manual"}:
        raise HTTPException(422, "statut invalide")
    w.status = body.status
    if body.status == "sent":
        w.sent_at = utcnow()
    db.commit()
    return {"id": w.id, "status": w.status}


@router.post("/connectors/acheteur/sync", dependencies=[Depends(auth)])
def acheteur_sync(db: Session = Depends(get_db), t: str = Depends(tenant)):
    from .connectors.acheteur_bridge import sync_from_acheteur
    return sync_from_acheteur(db, t)


# --------------------------------------------------------------- dashboard --
# ------------------------------------------------------- tiered features ----
@router.get("/features", dependencies=[Depends(auth)])
def feature_flags():
    """Resolved feature map for the active tier — the UI renders from this."""
    return features.resolve()


def _require(key: str) -> None:
    if not features.enabled(key):
        label = features.FEATURES.get(key, ("", key, ""))[1]
        raise HTTPException(403, f"« {label} » n'est pas incluse dans votre "
                                 f"forfait — ajuster tier/overrides dans features.toml")


# Bodies live in automations.py (shared with the connectors — no import cycle);
# these delegates keep every existing call site unchanged.
def _notify(db: Session, t: str, kind: str, title: str, body: str = "",
            contact_id: int | None = None) -> None:
    from .automations import notify
    notify(db, t, kind, title, body, contact_id)


def _queue_msg(db: Session, t: str, c: Contact, channel: str, body: str,
               purpose: str) -> OutboundMessage:
    from .automations import queue_msg
    return queue_msg(db, t, c, channel, body, purpose)


# --- notifications (premium) ------------------------------------------------
@router.get("/notifications", dependencies=[Depends(auth)])
def notifications_list(unread: int = 0, db: Session = Depends(get_db),
                       t: str = Depends(tenant)):
    _require("notifications")
    q = db.query(NotificationItem).filter_by(tenant_id=t)
    if unread:
        q = q.filter_by(read=False)
    rows = q.order_by(NotificationItem.created_at.desc()).limit(20).all()
    return [{"id": n.id, "kind": n.kind, "title": n.title, "body": n.body,
             "read": n.read, "contact_id": n.contact_id,
             "ts": n.created_at.isoformat()} for n in rows]


@router.post("/notifications/read", dependencies=[Depends(auth)])
def notifications_read(db: Session = Depends(get_db), t: str = Depends(tenant)):
    _require("notifications")
    n = (db.query(NotificationItem).filter_by(tenant_id=t, read=False)
         .update({"read": True}))
    db.commit()
    return {"marked": n}


# --- follow-up queue: sequences + client-for-life + review asks -------------
_FOLLOWUP_FEATURE = {"sequence": "sequences", "anniversary": "client_for_life",
                     "tax_season": "client_for_life",
                     "equity_report": "client_for_life",
                     "review_ask": "review_engine"}


@router.get("/followups/due", dependencies=[Depends(auth)])
def followups_due(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Touches due today or overdue, filtered to enabled features. Sequence
    steps auto-cancel once the lead replied (any client-actor event) or
    converted — no manual bookkeeping."""
    now = utcnow()
    rows = (db.query(FollowUp).filter_by(tenant_id=t, status="pending")
            .filter(FollowUp.due_at <= now)
            .order_by(FollowUp.due_at).limit(50).all())
    out = []
    for f in rows:
        feat = _FOLLOWUP_FEATURE.get(f.kind)
        if feat and not features.enabled(feat):
            continue
        c = db.get(Contact, f.contact_id)
        if not c:
            f.status = "cancelled"
            continue
        if f.kind == "sequence":
            replied = (db.query(Event).filter_by(tenant_id=t, contact_id=c.id,
                                                 actor="client")
                       .filter(Event.ts > f.created_at).first())
            if replied or c.lifecycle == "client":
                f.status = "cancelled"
                continue
        out.append({"id": f.id, "kind": f.kind, "due_at": f.due_at.isoformat(),
                    "note": f.note, "contact": _contact_out(c)})
    db.commit()
    return out


@router.post("/followups/{fid}/{action}", dependencies=[Depends(auth)])
def followup_action(fid: int, action: str, db: Session = Depends(get_db),
                    t: str = Depends(tenant)):
    if action not in {"done", "skip"}:
        raise HTTPException(422, "action: done|skip")
    f = db.get(FollowUp, fid)
    if not f or f.tenant_id != t:
        raise HTTPException(404, "relance introuvable")
    f.status = "done" if action == "done" else "skipped"
    f.done_at = utcnow()
    db.commit()
    if action == "done":
        ingest_event(db, tenant_id=t, contact_id=f.contact_id,
                     etype="outreach.sent", actor="realtor", origin="hub",
                     payload={"kind": f.kind},
                     idempotency_key=f"followup-{f.id}")
    return {"id": f.id, "status": f.status}


# --- call capture (basic) ----------------------------------------------------
class CallNoteIn(BaseModel):
    notes: str
    outcome: str = ""  # joint | boîte vocale | pas de réponse …


@router.post("/contacts/{cid}/call-note", dependencies=[Depends(auth)])
def call_note(cid: int, body: CallNoteIn, db: Session = Depends(get_db),
              t: str = Depends(tenant)):
    _require("call_capture")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    summary = llm.complete(
        f"Résume cette note d'appel d'un courtier immobilier en 2 lignes "
        f"factuelles (français) : {body.notes}",
        system="Tu résumes des notes d'appel immobilières. Concis, factuel.",
        max_tokens=150) or body.notes
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="call.logged",
                 actor="realtor", origin="hub",
                 payload={"summary": summary, "outcome": body.outcome},
                 idempotency_key=f"call-{c.id}-{int(utcnow().timestamp())}")
    if c.fub_person_id:
        db.add(WritebackItem(tenant_id=t, contact_id=c.id, target="fub_note",
                             body=f"Appel ({body.outcome or 'fait'}) — {summary}"))
        db.commit()
    return {"summary": summary, "fub_queued": bool(c.fub_person_id)}


# --- open house QR intake (basic) --------------------------------------------
class OpenHouseIn(BaseModel):
    name: str
    email: str = ""
    phone: str = ""
    consent: bool = False
    language: str = "fr"


@router.post("/openhouse/{ref}")  # public — the sign-in form posts here
def openhouse_signin(ref: str, body: OpenHouseIn,
                     db: Session = Depends(get_db)):
    _require("open_house_qr")
    t = settings.DEFAULT_TENANT
    c = Contact(tenant_id=t, name=body.name.strip(), email=body.email.strip(),
                phone=body.phone.strip(), language=body.language,
                source="open_house", sublabel=ref,
                funnel="open_house", campaign=ref,
                notes=f"Porte ouverte {ref}")
    db.add(c)
    db.commit()
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="lead.captured",
                 actor="system", origin="hub", payload={"open_house": ref},
                 idempotency_key=f"oh-{c.id}")
    if features.enabled("consent_vault"):
        db.add(ConsentRecord(tenant_id=t, contact_id=c.id,
                             basis="express" if body.consent else "implied",
                             scope="communications", granted=True,
                             source="open_house",
                             note=f"Formulaire porte ouverte {ref}"
                                  + (" — case cochée" if body.consent else "")))
        db.commit()
    refresh_priority(db, c, use_llm=False)
    _notify(db, t, "hot_lead", f"Porte ouverte : {c.name}",
            f"Nouveau visiteur inscrit — {ref}", c.id)
    from .automations import check_priority_threshold
    check_priority_threshold(db, t, c)
    return {"ok": True, "merci": True}


@router.get("/openhouse/{ref}/qr.svg", dependencies=[Depends(auth)])
def openhouse_qr(ref: str, request: Request):
    _require("open_house_qr")
    url = str(request.base_url).rstrip("/") + f"/oh/{ref}"
    try:
        import qrcode
        import qrcode.image.svg
        img = qrcode.make(url, image_factory=qrcode.image.svg.SvgPathImage,
                          box_size=14)
        from fastapi.responses import Response as _Resp
        return _Resp(img.to_string(), media_type="image/svg+xml")
    except ImportError:
        raise HTTPException(501, f"module qrcode absent — le lien reste {url}")


# --- client for life + review engine (gold) ----------------------------------
@router.get("/lifecycle/{cid}/upcoming", dependencies=[Depends(auth)])
def lifecycle_upcoming(cid: int, db: Session = Depends(get_db),
                       t: str = Depends(tenant)):
    _require("client_for_life")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t or c.lifecycle != "client":
        raise HTTPException(404, "client introuvable")
    closed = (db.query(Event).filter_by(tenant_id=t, contact_id=cid,
                                        type="transaction.closed")
              .order_by(Event.ts.desc()).first())
    anchor = (closed.ts if closed else c.converted_at) or c.created_at
    now = utcnow()
    nxt_anniv = anchor.replace(year=anchor.year + 1)
    while nxt_anniv <= now:
        nxt_anniv = nxt_anniv.replace(year=nxt_anniv.year + 1)
    jan15 = now.replace(month=1, day=15, hour=9, minute=0, second=0,
                        microsecond=0)
    if jan15 <= now:
        jan15 = jan15.replace(year=jan15.year + 1)
    sugg = [
        {"kind": "anniversary", "due_at": nxt_anniv.isoformat(),
         "note": f"Anniversaire d'achat de {c.name.split()[0]} — un mot personnel"},
        {"kind": "tax_season", "due_at": jan15.isoformat(),
         "note": "Rappel taxes municipales/scolaires — offrir le relevé et répondre aux questions"},
        {"kind": "equity_report", "due_at": nxt_anniv.isoformat(),
         "note": "Rapport annuel de valeur — « votre propriété vaut maintenant… »"},
    ]
    if features.enabled("review_engine") and closed:
        recent = (now - closed.ts).days <= 60
        asked = (db.query(FollowUp).filter_by(tenant_id=t, contact_id=cid,
                                              kind="review_ask").first())
        if recent and not asked:
            sugg.insert(0, {"kind": "review_ask",
                            "due_at": now.isoformat(),
                            "note": "Clôture récente — demander un avis Google maintenant"})
    pending = {f.kind for f in db.query(FollowUp)
               .filter_by(tenant_id=t, contact_id=cid, status="pending").all()}
    return {"contact": _contact_out(c), "anchor": anchor.isoformat(),
            "suggestions": [s for s in sugg if s["kind"] not in pending],
            "already_scheduled": sorted(pending)}


@router.post("/lifecycle/{cid}/schedule", dependencies=[Depends(auth)])
def lifecycle_schedule(cid: int, db: Session = Depends(get_db),
                       t: str = Depends(tenant)):
    up = lifecycle_upcoming(cid, db=db, t=t)
    created = []
    for s in up["suggestions"]:
        db.add(FollowUp(tenant_id=t, contact_id=cid, kind=s["kind"],
                        due_at=datetime.fromisoformat(s["due_at"]),
                        note=s["note"]))
        created.append(s["kind"])
    db.commit()
    return {"scheduled": created}


@router.get("/lifecycle/{cid}/equity-report", dependencies=[Depends(auth)])
def equity_report(cid: int, price: float = 0,
                  db: Session = Depends(get_db), t: str = Depends(tenant)):
    _require("client_for_life")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    if not price:
        offer = (db.query(Event).filter_by(tenant_id=t, contact_id=cid,
                                           type="offer.accepted")
                 .order_by(Event.ts.desc()).first())
        price = float((offer.payload or {}).get("amount", 0)) if offer else 0
    if not price:
        raise HTTPException(422, "prix d'achat inconnu — passer ?price=")
    anchor = c.converted_at or c.created_at
    years = max((utcnow() - anchor).days / 365.25, 0)
    rate = float(features.setting("appreciation_rate", 0.028))
    est = price * ((1 + rate) ** years)
    lo, hi = est * 0.96, est * 1.04
    body = (f"Bonjour {c.name.split()[0]},\n\n"
            f"Petit bilan annuel : la propriété acquise à "
            f"{price:,.0f} $ vaut aujourd'hui environ {lo:,.0f} $ à "
            f"{hi:,.0f} $ (appréciation moyenne du secteur ~{rate*100:.1f} %/an "
            f"sur {years:.1f} ans). Estimation indicative — pour une évaluation "
            f"précise, appelez-moi.\n\nDanny").replace(",", " ")
    nicer = llm.complete(
        f"Améliore ce message annuel de valeur immobilière (français, chaleureux, "
        f"4 phrases max, garde tous les chiffres exacts) :\n{body}",
        max_tokens=300)
    return {"purchase_price": price, "estimate_low": round(lo),
            "estimate_high": round(hi), "years": round(years, 1),
            "message": nicer or body}


@router.post("/clients/{cid}/review-ask", dependencies=[Depends(auth)])
def review_ask(cid: int, db: Session = Depends(get_db),
               t: str = Depends(tenant)):
    _require("review_engine")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    link = features.setting("review_link", "")
    first = c.name.split()[0] if c.name else ""
    body = (f"Bonjour {first} ! Merci encore pour votre confiance. "
            f"Un petit avis Google m'aiderait énormément : {link}"
            if c.language == "fr" else
            f"Hi {first}! Thanks again for your trust. A quick Google review "
            f"would mean a lot: {link}")
    _queue_msg(db, t, c, "sms" if c.phone else "email", body, "review_ask")
    ingest_event(db, tenant_id=t, contact_id=cid, etype="outreach.sent",
                 actor="realtor", origin="hub", payload={"kind": "review_ask"},
                 idempotency_key=f"review-{cid}-{int(utcnow().timestamp())}")
    db.add(FollowUp(tenant_id=t, contact_id=cid, kind="review_ask",
                    due_at=utcnow(), status="done", note=body,
                    done_at=utcnow()))
    db.commit()
    return {"message": body,
            "sms_url": ("sms:" + "".join(ch for ch in c.phone
                                         if ch.isdigit() or ch == "+"))
                       if c.phone else ""}


# --- transaction tracker (gold) — token-authenticated, client-facing ---------
_MILESTONES_FR = {
    "visit.completed": "Visite effectuée", "offer.submitted": "Offre déposée",
    "offer.accepted": "Offre acceptée", "inspection.completed": "Inspection complétée",
    "financing.confirmed": "Financement confirmé", "notary.scheduled": "Rendez-vous notaire fixé",
    "transaction.closed": "Transaction clôturée 🎉",
}


@router.get("/portal/{token}/progress")
def portal_progress(token: str, db: Session = Depends(get_db)):
    _require("transaction_tracker")
    c = _contact_by_token(db, token)
    events = (db.query(Event).filter_by(tenant_id=c.tenant_id, contact_id=c.id)
              .filter(Event.type.in_(list(_MILESTONES_FR)))
              .order_by(Event.ts).all())
    return {"first_name": c.name.split()[0] if c.name else "",
            "stage": c.stage, "stage_label": STAGE_LABELS_FR.get(c.stage, c.stage),
            "stage_order": STAGE_ORDER, "stage_labels": STAGE_LABELS_FR,
            "milestones": [{"type": e.type, "label": _MILESTONES_FR[e.type],
                            "ts": e.ts.isoformat()} for e in events]}


# --- showing scheduler (premium) ---------------------------------------------
class SlotsIn(BaseModel):
    slots: list[str]  # e.g. ["samedi 10h", "samedi 14h", "dimanche 11h"]


@router.post("/contacts/{cid}/propose-slots", dependencies=[Depends(auth)])
def propose_slots(cid: int, body: SlotsIn, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    _require("showing_scheduler")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    if not body.slots:
        raise HTTPException(422, "au moins un créneau")
    first = c.name.split()[0] if c.name else ""
    opts = " ".join(f"{i+1}) {s}" for i, s in enumerate(body.slots[:3]))
    msg = (f"Bonjour {first} ! Pour la visite, je vous propose : {opts}. "
           f"Répondez 1, 2 ou 3 et c'est noté. Danny")
    _queue_msg(db, t, c, "sms", msg, "slots")
    ingest_event(db, tenant_id=t, contact_id=cid, etype="outreach.sent",
                 actor="realtor", origin="hub",
                 payload={"kind": "slots", "slots": body.slots[:3]},
                 idempotency_key=f"slots-{cid}-{int(utcnow().timestamp())}")
    return {"message": msg,
            "sms_url": ("sms:" + "".join(ch for ch in c.phone
                                         if ch.isdigit() or ch == "+"))
                       if c.phone else ""}


# --- CMA generator (platinum) -------------------------------------------------
class CMAIn(BaseModel):
    subject: str = ""     # adresse/description de la propriété sujette
    comps_text: str       # une ligne par comparable : adresse, prix, [pi2]


@router.post("/cma", dependencies=[Depends(auth)])
def cma_generate(body: CMAIn, t: str = Depends(tenant)):
    _require("cma_generator")
    import re as _re
    comps = []
    for line in body.comps_text.splitlines():
        line = line.strip()
        if not line:
            continue
        nums = [float(n.replace(" ", "").replace(",", ""))
                for n in _re.findall(r"[\d][\d\s,]{4,}", line)]
        prices = [n for n in nums if n >= 50_000]
        sqft = next((n for n in nums if 200 <= n < 50_000), None)
        if prices:
            comps.append({"line": line, "price": prices[0], "sqft": sqft})
    if len(comps) < 2:
        raise HTTPException(422, "au moins 2 comparables avec prix requis")
    prices = sorted(c["price"] for c in comps)
    n = len(prices)
    median = (prices[n // 2] if n % 2 else (prices[n//2 - 1] + prices[n//2]) / 2)
    ppsf = [c["price"] / c["sqft"] for c in comps if c.get("sqft")]
    stats = {"n": n, "min": prices[0], "max": prices[-1],
             "median": round(median),
             "suggested_low": round(median * 0.97),
             "suggested_high": round(median * 1.03),
             "avg_price_per_sqft": round(sum(ppsf) / len(ppsf)) if ppsf else None}
    det = (f"ACM — {body.subject or 'propriété sujette'}\n"
           f"{n} comparables · fourchette {stats['min']:,.0f} $ – "
           f"{stats['max']:,.0f} $ · médiane {stats['median']:,} $"
           + (f" · {stats['avg_price_per_sqft']} $/pi²" if ppsf else "") + "\n"
           f"Prix suggéré : {stats['suggested_low']:,} $ à "
           f"{stats['suggested_high']:,} $.\n"
           f"Analyse indicative fondée sur les comparables fournis — ne "
           f"constitue pas une évaluation agréée.").replace(",", " ")
    narrative = llm.complete(
        f"Rédige une courte analyse comparative de marché (français, 6 phrases "
        f"max, ton professionnel) pour « {body.subject or 'la propriété'} » à "
        f"partir de ces chiffres exacts : {json.dumps(stats)} et comparables : "
        f"{[c['line'] for c in comps]}. Termine par la fourchette suggérée. "
        f"Mentionne que ce n'est pas une évaluation agréée.",
        max_tokens=450)
    return {"stats": stats, "comps": comps, "narrative": narrative or det,
            "llm": bool(narrative)}


# --- farming reports (gold) ----------------------------------------------------
class FarmIn(BaseModel):
    area: str
    highlights: str = ""   # ventes récentes, projets, stats à mentionner
    language: str = "fr"


@router.post("/agents/content/farming-report", dependencies=[Depends(auth)])
def farming_report(body: FarmIn, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    _require("farming_reports")
    hl = body.highlights or ("activité stable, bon moment pour faire évaluer "
                             "sa propriété")
    draft = llm.complete(
        f"Rédige une infolettre de quartier (français québécois, 160 mots max) "
        f"pour les résidents de {body.area}, signée par leur courtier Danny. "
        f"Angle : « le marché dans votre quartier ce mois-ci ». "
        f"Éléments à intégrer : {hl}. CTA doux (évaluation gratuite). "
        f"Aucune promesse chiffrée inventée.",
        max_tokens=400)
    if not draft:
        draft = (f"[{body.area} — le marché ce mois-ci]\n\n"
                 f"Bonjour voisins ! Le marché bouge dans {body.area}"
                 + (f" : {body.highlights}" if body.highlights else "")
                 + ". Curieux de savoir ce que vaut votre propriété "
                 "aujourd'hui ? Je vous prépare une estimation gratuite, sans "
                 "engagement — répondez à ce message ou appelez-moi.\n\nDanny")
    item = ContentItem(tenant_id=t, platform="infolettre",
                       language=body.language, topic=f"Quartier — {body.area}",
                       body=draft)
    db.add(item)
    db.commit()
    return {"id": item.id, "draft": draft, "queued": "file de contenu"}


# --- messaging sync connector (platinum) ---------------------------------------
@router.get("/messaging/status", dependencies=[Depends(auth)])
def messaging_status(db: Session = Depends(get_db), t: str = Depends(tenant)):
    _require("messaging_sync")
    q = db.query(OutboundMessage).filter_by(tenant_id=t)
    return {"provider_configured": bool(settings.TWILIO_SID),
            "provider": "twilio" if settings.TWILIO_SID else "aucun (mode simulation)",
            "queued": q.filter_by(status="pending").count(),
            "simulated": q.filter_by(status="simulated").count(),
            "sent": q.filter_by(status="sent").count()}


@router.post("/messaging/flush", dependencies=[Depends(auth)])
def messaging_flush(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Re-drive still-pending outbound messages (e.g. after adding Twilio creds)."""
    _require("messaging_sync")
    from .connectors import sms
    return sms.flush_pending(db, t)


class MsgIn(BaseModel):
    contact_id: int
    body: str
    channel: str = "sms"


@router.post("/messaging/send", dependencies=[Depends(auth)])
def messaging_send(body: MsgIn, db: Session = Depends(get_db),
                   t: str = Depends(tenant)):
    _require("messaging_sync")
    c = db.get(Contact, body.contact_id)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    m = _queue_msg(db, t, c, body.channel, body.body, "manual")
    ingest_event(db, tenant_id=t, contact_id=c.id, etype="message.sent",
                 actor="realtor", origin="hub",
                 payload={"channel": body.channel},
                 idempotency_key=f"msg-{m.id}")
    return {"id": m.id, "status": m.status}


@router.post("/webhooks/sms-inbound")  # public — provider posts inbound texts
async def sms_inbound(request: Request, db: Session = Depends(get_db)):
    _require("messaging_sync")
    data = await request.json()
    frm = "".join(ch for ch in str(data.get("from", "")) if ch.isdigit())[-10:]
    if not frm:
        raise HTTPException(422, "champ from requis")
    t = settings.DEFAULT_TENANT
    match = None
    for c in db.query(Contact).filter_by(tenant_id=t).all():
        if "".join(ch for ch in (c.phone or "") if ch.isdigit())[-10:] == frm:
            match = c
            break
    if not match:
        return {"matched": False}
    ingest_event(db, tenant_id=t, contact_id=match.id, etype="message.sent",
                 actor="client", origin="hub",
                 payload={"channel": "sms", "body": str(data.get("body", ""))[:500]},
                 idempotency_key=f"sms-in-{match.id}-{int(utcnow().timestamp())}")
    _notify(db, t, "message", f"SMS de {match.name}",
            str(data.get("body", ""))[:120], match.id)
    return {"matched": True, "contact_id": match.id}


# --- consent vault (platinum) ---------------------------------------------------
class ConsentIn2(BaseModel):
    basis: str = "express"          # express | implied | business_relationship
    scope: str = "communications"
    granted: bool = True
    source: str = "manuel"
    note: str = ""


@router.get("/contacts/{cid}/consents", dependencies=[Depends(auth)])
def consents_list(cid: int, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    _require("consent_vault")
    rows = (db.query(ConsentRecord).filter_by(tenant_id=t, contact_id=cid)
            .order_by(ConsentRecord.recorded_at.desc()).all())
    return [{"id": r.id, "basis": r.basis, "scope": r.scope,
             "granted": r.granted, "source": r.source, "note": r.note,
             "recorded_at": r.recorded_at.isoformat()} for r in rows]


@router.post("/contacts/{cid}/consents", dependencies=[Depends(auth)])
def consents_add(cid: int, body: ConsentIn2, db: Session = Depends(get_db),
                 t: str = Depends(tenant)):
    _require("consent_vault")
    c = db.get(Contact, cid)
    if not c or c.tenant_id != t:
        raise HTTPException(404, "contact introuvable")
    r = ConsentRecord(tenant_id=t, contact_id=cid, **body.model_dump())
    db.add(r)
    db.commit()
    return {"id": r.id}


@router.get("/consents/export", dependencies=[Depends(auth)])
def consents_export(db: Session = Depends(get_db), t: str = Depends(tenant)):
    """Registre complet — piste d'audit Loi 25 (à archiver)."""
    _require("consent_vault")
    rows = (db.query(ConsentRecord).filter_by(tenant_id=t)
            .order_by(ConsentRecord.recorded_at).all())
    names = {c.id: c.name for c in db.query(Contact).filter_by(tenant_id=t)}
    return {"generated_at": utcnow().isoformat(), "tenant": t,
            "records": [{"contact": names.get(r.contact_id, f"#{r.contact_id}"),
                         "basis": r.basis, "scope": r.scope,
                         "granted": r.granted, "source": r.source,
                         "note": r.note, "recorded_at": r.recorded_at.isoformat()}
                        for r in rows]}


# --------------------------------------------------------------- analytics --
FUNNEL_LABELS_FR = {"fub_import": "CRM FUB", "matrix_visit": "Alertes Matrix",
                    "danny_channel": "Références", "own_generated": "Site web",
                    "prospecting_agent": "Prospection"}


def _analytics_stats(db: Session, t: str) -> dict:
    """One pass over the contact book → per-funnel conversion + volume trends.
    Shared by the analytics endpoint and the LLM report generator."""
    contacts = db.query(Contact).filter_by(tenant_id=t).all()
    by_funnel: dict[str, dict] = {}
    for c in contacts:
        f = c.funnel or c.source
        d = by_funnel.setdefault(f, {"funnel": f,
                                     "label": FUNNEL_LABELS_FR.get(f, f),
                                     "leads": 0, "clients": 0, "eng_sum": 0})
        if c.lifecycle == "client":
            d["clients"] += 1
            d["eng_sum"] += c.engagement_score
        else:
            d["leads"] += 1
    funnels = []
    for d in by_funnel.values():
        total = d["leads"] + d["clients"]
        funnels.append({"funnel": d["funnel"], "label": d["label"],
                        "leads": d["leads"], "clients": d["clients"],
                        "total": total,
                        "conversion_pct": round(100 * d["clients"] / total)
                                          if total else 0,
                        "avg_engagement": round(d["eng_sum"] / d["clients"])
                                          if d["clients"] else 0})
    funnels.sort(key=lambda x: -x["total"])
    now = utcnow()
    weekly = []
    for i in range(7, -1, -1):
        start, end = now - timedelta(days=(i + 1) * 7), now - timedelta(days=i * 7)
        weekly.append({"label": end.strftime("%d/%m"),
                       "count": sum(1 for c in contacts
                                    if start < c.created_at <= end)})
    stages: dict[str, int] = {}
    for c in contacts:
        if c.lifecycle == "client":
            lbl = STAGE_LABELS_FR.get(c.stage, c.stage)
            stages[lbl] = stages.get(lbl, 0) + 1
    clients = [c for c in contacts if c.lifecycle == "client"]
    return {"funnels": funnels, "weekly_new": weekly, "stages": stages,
            "totals": {"contacts": len(contacts),
                       "leads": len(contacts) - len(clients),
                       "clients": len(clients),
                       "dormant_clients": sum(1 for c in clients if c.dormant),
                       "avg_engagement": round(sum(c.engagement_score
                                                   for c in clients)
                                               / len(clients)) if clients else 0}}


@router.get("/analytics/summary", dependencies=[Depends(auth)])
def analytics_summary(db: Session = Depends(get_db), t: str = Depends(tenant)):
    return _analytics_stats(db, t)


class AskIn(BaseModel):
    question: str


def _fallback_report(stats: dict) -> str:
    """Deterministic answer when no ANTHROPIC_API_KEY — same data, no prose."""
    tot = stats["totals"]
    lines = [f"Portefeuille : {tot['contacts']} contacts — {tot['leads']} leads "
             f"en attente, {tot['clients']} clients Centris "
             f"(engagement moyen {tot['avg_engagement']}/100, "
             f"{tot['dormant_clients']} à relancer)."]
    for f in stats["funnels"]:
        lines.append(f"• {f['label']} : {f['total']} contacts "
                     f"({f['leads']} leads, {f['clients']} clients, "
                     f"conversion {f['conversion_pct']} %, "
                     f"engagement moyen {f['avg_engagement']}/100)")
    best = max(stats["funnels"], key=lambda f: f["conversion_pct"],
               default=None)
    if best and best["conversion_pct"]:
        lines.append(f"Meilleur taux de conversion : {best['label']} "
                     f"({best['conversion_pct']} %).")
    return "\n".join(lines)


@router.post("/analytics/ask", dependencies=[Depends(auth)])
def analytics_ask(body: AskIn, db: Session = Depends(get_db),
                  t: str = Depends(tenant)):
    _require("analytics_ai")
    stats = _analytics_stats(db, t)
    prompt = (f"Question du courtier : {body.question}\n\n"
              f"Données du portefeuille (JSON) :\n"
              f"{json.dumps(stats, ensure_ascii=False)}")
    answer = llm.complete(
        prompt,
        system=("Tu es l'analyste d'affaires de Radar Hub, la plateforme d'un "
                "courtier immobilier québécois. Réponds en français, de façon "
                "concise et chiffrée, UNIQUEMENT à partir des données JSON "
                "fournies — n'invente aucun chiffre. Termine par une "
                "recommandation actionnable d'une ligne si pertinent."),
        max_tokens=700)
    return {"question": body.question,
            "answer": answer or _fallback_report(stats),
            "llm": bool(answer)}


@router.get("/dashboard/summary", dependencies=[Depends(auth)])
def dashboard_summary(db: Session = Depends(get_db), t: str = Depends(tenant)):
    leads = db.query(Contact).filter_by(tenant_id=t, lifecycle="lead").all()
    clients = db.query(Contact).filter_by(tenant_id=t, lifecycle="client").all()
    sources: dict[str, int] = {}
    funnels: dict[str, int] = {}
    for c in leads + clients:
        sources[c.source] = sources.get(c.source, 0) + 1
        f = c.funnel or c.source
        funnels[f] = funnels.get(f, 0) + 1
    # Connector freshness — lets the UI show "system alive" on an empty inbox.
    last_fub = (db.query(func.max(Event.ts))
                .filter(Event.tenant_id == t, Event.origin == "fub").scalar())
    last_matrix = (db.query(func.max(Event.ts))
                   .filter(Event.tenant_id == t, Event.origin == "matrix").scalar())
    hot = sorted([c for c in leads if c.priority_score >= 75],
                 key=lambda c: -c.priority_score)
    dormant = [c for c in clients if c.dormant]
    pending_wb = (db.query(WritebackItem)
                  .filter_by(tenant_id=t, status="pending").count())
    alerts = ([f"🔥 {c.name} — priorité {c.priority_score}: {c.priority_hint}"
               for c in hot[:5]] +
              [f"😴 {c.name} — client inactif, à relancer" for c in dormant[:5]] +
              ([f"📤 {pending_wb} writeback(s) en attente vers FUB"]
               if pending_wb else []))
    return {"counts": {"leads": len(leads), "clients": len(clients),
                       "hot_leads": len(hot), "dormant_clients": len(dormant),
                       "pending_writebacks": pending_wb},
            "sources": sources,
            "funnels": funnels,
            "sync": {"last_fub": last_fub.isoformat() if last_fub else None,
                     "last_matrix": last_matrix.isoformat() if last_matrix else None},
            "hot_leads": [_contact_out(c) for c in hot[:5]],
            "top_clients": [_contact_out(c) for c in
                            sorted(clients, key=lambda c: -c.engagement_score)[:5]],
            "alerts": alerts}
