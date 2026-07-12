"""Radar Hub API. Auth: X-Radar-Key header (open when RADAR_API_KEY unset).
Tenant: X-Tenant-Id header, defaults to Danny's instance (decision #3 —
tenant_id is the only structural difference between internal and white-label).
"""
from __future__ import annotations
import json
from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, Header, HTTPException, Request
from pydantic import BaseModel, Field
from sqlalchemy import func
from sqlalchemy.orm import Session
from .config import settings
from .models import (Contact, ContentItem, Event, Expense, LedgerEntry,
                     Listing, PortalKV, ProspectCandidate, WritebackItem,
                     get_db, utcnow)
from .events import ingest_event, FAMILIES
from . import llm
from .scoring import engagement_breakdown, refresh_priority
from .stages import STAGE_LABELS_FR, STAGE_ORDER
from .connectors import fub as fub_conn
from .connectors import matrix_email as mx
from .connectors import vitrine as vit
from .agents import office_manager as office
from .agents import prospecting as prospect
from .agents import content_social as content

router = APIRouter(prefix="/api")


def auth(x_radar_key: str = Header(default="")) -> None:
    if settings.API_KEY and x_radar_key != settings.API_KEY:
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
    return {**_contact_out(c),
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
    except Exception:
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
