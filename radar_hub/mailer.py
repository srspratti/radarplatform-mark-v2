"""Outbound email — stdlib smtplib, no new dependency.

Powers alert_mailer: when a Centris alert copy lands at the client's intake
address, the hub sends ITS OWN mirror email whose links are tracked
(/l/<portal_token>/<centris_no> → event → redirect into the portal).
The links inside Centris' own emails can't be instrumented — we don't control
their HTML — so this mirror email IS the click-capture mechanism.
Dev mode (no SMTP_HOST): sends return "simulated". Never raises.
"""
from __future__ import annotations
import smtplib
from email.message import EmailMessage
from .config import settings


def send_email(to: str, subject: str, html: str, text: str = "") -> str:
    """Returns sent|simulated|failed. Never raises into calling pipelines."""
    if not to:
        return "failed"
    if not settings.SMTP_HOST:
        return "simulated"
    try:
        msg = EmailMessage()
        msg["Subject"] = subject
        msg["From"] = settings.SMTP_FROM or settings.SMTP_USER
        msg["To"] = to
        msg.set_content(text or "Voir la version HTML de ce courriel.")
        if html:
            msg.add_alternative(html, subtype="html")
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=15) as s:
            s.starttls()
            if settings.SMTP_USER:
                s.login(settings.SMTP_USER, settings.SMTP_PASS)
            s.send_message(msg)
        return "sent"
    except Exception:  # noqa: BLE001 — mail failure must never down an intake
        return "failed"


def _fmt_price(p) -> str:
    try:
        return f"{int(p):,}".replace(",", " ") + " $"
    except (TypeError, ValueError):
        return ""


def build_alert_email(contact, cards: list[dict], lang: str = "fr"
                      ) -> tuple[str, str, str]:
    """(subject, html, text) for the tracked-link mirror of a Centris alert."""
    from . import features
    n = len(cards)
    first = (contact.name or "").split()[0] if contact.name else ""
    base = settings.PUBLIC_BASE_URL.rstrip("/")
    link = lambda c: f"{base}/l/{contact.portal_token}/{c.get('centris_no','')}"  # noqa: E731
    fr = lang == "fr"
    subject = features.setting(
        "alert_mail_subject_fr" if fr else "alert_mail_subject_en",
        "{n} nouvelles inscriptions dans votre portail").format(n=n)
    hello = f"Bonjour {first}," if fr else f"Hi {first},"
    intro = (f"{n} nouvelles inscriptions correspondent à votre alerte :" if fr
             else f"{n} new listings match your alert:")
    btn = "Voir dans mon portail →" if fr else "View in my portal →"
    portal = f"{base}/portail/{contact.portal_token}"
    footer = (("Envoyé par votre courtier · <a href=\"%s\">Ouvrir mon portail</a> · "
               "Vous recevez ce courriel car une alerte Centris est active — "
               "répondez « désabonner » pour cesser (LCAP/Loi 25).") % portal if fr else
              ("Sent by your realtor · <a href=\"%s\">Open my portal</a> · "
               "You receive this email because a Centris alert is active — "
               "reply “unsubscribe” to stop (CASL/Law 25).") % portal)

    boxes = []
    text_lines = [hello, intro, ""]
    for c in cards:
        specs = " · ".join(x for x in [
            _fmt_price(c.get("price")),
            f"{c['beds']} ch." if fr and c.get("beds") else
            (f"{c['beds']} bd" if c.get("beds") else ""),
            f"{c['baths']} sdb" if fr and c.get("baths") else
            (f"{c['baths']} ba" if c.get("baths") else ""),
            c.get("prop_type") or "",
        ] if x)
        addr = c.get("address") or f"Centris {c.get('centris_no', '')}"
        boxes.append(f"""
  <div style="background:#fff;border:1px solid #DCE2EA;border-radius:12px;
              padding:16px;margin:0 0 12px">
    <a href="{link(c)}" style="font-size:18px;font-weight:700;color:#1656B4;
       text-decoration:none">{addr}</a>
    <div style="color:#5A6577;font-size:13px;margin:6px 0 12px">{specs}</div>
    <a href="{link(c)}" style="display:inline-block;background:#1656B4;color:#fff;
       border-radius:10px;padding:9px 14px;font-size:13px;font-weight:700;
       text-decoration:none">{btn}</a>
  </div>""")
        text_lines.append(f"- {addr} — {specs}\n  {link(c)}")
    text_lines += ["", portal]

    html = f"""
<div style="background:#F4F6F8;padding:24px 12px;
            font-family:'Public Sans',system-ui,sans-serif">
  <div style="max-width:560px;margin:0 auto">
    <div style="background:#111B2E;color:#fff;border-radius:12px 12px 0 0;
                padding:14px 18px;font-weight:800;font-size:16px">Vitrine</div>
    <div style="background:#F8FAFC;border:1px solid #DCE2EA;border-top:0;
                border-radius:0 0 12px 12px;padding:18px">
      <p style="margin:0 0 4px;font-size:15px;color:#111B2E">{hello}</p>
      <p style="margin:0 0 14px;font-size:14px;color:#5A6577">{intro}</p>
      {''.join(boxes)}
      <p style="font-size:11px;color:#8A94A6;margin:14px 0 0">{footer}</p>
    </div>
  </div>
</div>"""
    return subject, html, "\n".join(text_lines)
