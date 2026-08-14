"""One end-to-end run: ingest -> parse -> store -> score -> flag hot in FUB -> digest."""
from . import db, ingest, parse, score, digest
from .fub import FUB
from .config import cfg
from .timeutil import days_ago_iso, now


def _contact_key(sig) -> str:
    return (sig.get("contact_email") or sig.get("contact_phone")
            or sig.get("contact_name") or "unknown").strip().lower()


def ingest_and_parse():
    fallback = det = 0
    with db.connect(cfg.db_path) as c:
        for mail in ingest.fetch_unseen(cfg):
            if db.seen_message(c, mail["message_id"]):
                continue
            signals, lang, method = parse.parse_email(
                cfg, mail["subject"], mail["sender"], mail["html"])
            det += method == "deterministic"
            fallback += method == "claude"
            raw_id = db.save_raw(c, message_id=mail["message_id"],
                                 received_at=mail["received_at"], sender=mail["sender"],
                                 subject=mail["subject"],
                                 template=parse.classify_template(
                                     mail["subject"], mail["sender"], mail["html"]),
                                 parse_status=method, payload={"n_signals": len(signals)})
            for sig in signals:
                db.save_signal(c, contact_key=_contact_key(sig), type=sig["type"],
                               listing_no=sig.get("listing_no"),
                               listing_addr=sig.get("listing_addr"),
                               listing_price=sig.get("listing_price"),
                               listing_url=sig.get("listing_url"),
                               occurred_at=mail["received_at"] or db.now_iso(),
                               raw_email_id=raw_id)
    total = det + fallback
    if total:
        print(f"[parse] {total} emails | deterministic {det} | claude fallback {fallback} "
              f"({fallback/total*100:.0f}% -> tune parsers to lower cost)")
    return total


def rescore():
    since = days_ago_iso(cfg.lookback_days)
    with db.connect(cfg.db_path) as c:
        for key in db.all_contact_keys(c, since):
            sigs = [dict(r) for r in db.signals_for(c, key, since)]
            sc = score.score_contact(sigs, cfg.half_life_days)
            tier = score.tier_for(sc, cfg.hot_threshold, cfg.warm_threshold)
            db.upsert_score(c, key, sc, tier, "")


def flag_hot():
    """Push newly-hot contacts to FUB with a why-now brief + same-day task."""
    fub = FUB(cfg)
    since = days_ago_iso(cfg.lookback_days)
    due = now().replace(hour=17, minute=0, second=0).isoformat()
    with db.connect(cfg.db_path) as c:
        hot = db.newly_hot(c)
        for r in hot:
            key = r["contact_key"]
            sigs = [dict(s) for s in db.signals_for(c, key, since)]
            brief = digest.why_now_brief(cfg, key, sigs)
            db.upsert_score(c, key, r["score"], r["tier"], brief)

            email = key if "@" in key else None
            phone = key if key.replace("+", "").isdigit() else None
            name = None if (email or phone) else key.title()

            fub.create_event(name=name or "Portal Lead", email=email, phone=phone,
                             message=f"[Radar Acheteur] {brief}",
                             tags=["AI: Hot", "AI: Ready for Danny"])
            person = fub.find_person(email=email, phone=phone)
            if person:
                pid = person["id"]
                fub.add_note(pid, "Why now (Radar Acheteur)", brief)
                fub.create_task(pid, f"Call {name or email or phone} — hot buyer signal", due)
            db.mark_briefed(c, key)
        if hot:
            print(f"[fub] flagged {len(hot)} hot lead(s) as 'Ready for {cfg.broker_name}'")
        return len(hot)


def send_digest():
    with db.connect(cfg.db_path) as c:
        rows = db.top_scores(c, 15)
    if rows:
        digest.send_digest(cfg, digest.build_digest_html(cfg, rows))


def run_once(with_digest=False):
    cfg.validate()
    db.init(cfg.db_path)
    ingest_and_parse()
    rescore()
    flag_hot()
    if with_digest:
        send_digest()
