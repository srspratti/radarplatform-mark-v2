"""'Why now' briefs (one Claude call per newly-hot contact) and the morning digest.
COST LEVER: briefs only fire for contacts crossing into 'hot' and not yet briefed,
so you pay per newly-hot lead, not per run."""
import smtplib
from email.mime.text import MIMEText
from datetime import datetime
from anthropic import Anthropic

_client = None


def _anthropic(cfg):
    global _client
    if _client is None:
        _client = Anthropic(api_key=cfg.anthropic_key)
    return _client


def why_now_brief(cfg, name, signals) -> str:
    """2-3 sentence rationale in the broker's language."""
    lines = []
    for s in signals[:12]:
        addr = s["listing_addr"] or s["listing_no"] or "a listing"
        price = f" (${int(s['listing_price']):,})" if s["listing_price"] else ""
        lines.append(f"- {s['type']}: {addr}{price} on {s['occurred_at'][:10]}")
    activity = "\n".join(lines)
    lang = "French" if cfg.broker_lang == "fr" else "English"
    client = _anthropic(cfg)
    resp = client.messages.create(
        model=cfg.model,
        max_tokens=200,
        system=[{"type": "text",
                 "text": f"You brief a busy real-estate broker in {lang}. Given a lead's "
                         f"recent portal activity, write 2-3 sentences on why they're worth "
                         f"calling now. Concrete, no fluff, no greeting.",
                 "cache_control": {"type": "ephemeral"}}],
        messages=[{"role": "user",
                   "content": f"Lead: {name or 'Unknown'}\nActivity:\n{activity}"}],
    )
    return "".join(b.text for b in resp.content if b.type == "text").strip()


def build_digest_html(cfg, rows) -> str:
    when = datetime.now().strftime("%A %d %B %Y")
    items = ""
    for r in rows:
        badge = {"hot": "#c0392b", "warm": "#e67e22", "cool": "#7f8c8d"}[r["tier"]]
        items += (
            f'<tr>'
            f'<td style="padding:8px 10px;border-bottom:1px solid #eee;">'
            f'<b>{r["contact_key"]}</b><br>'
            f'<span style="color:#555;font-size:13px;">{r["rationale"] or ""}</span></td>'
            f'<td style="padding:8px 10px;border-bottom:1px solid #eee;text-align:right;">'
            f'<span style="background:{badge};color:#fff;border-radius:10px;'
            f'padding:2px 10px;font-size:12px;">{r["tier"].upper()} {r["score"]}</span></td>'
            f'</tr>')
    return f"""<div style="font-family:Arial,sans-serif;max-width:640px;">
<h2 style="color:#16425B;">Radar Acheteur — {when}</h2>
<p style="color:#555;">Top buyer signals overnight, {cfg.broker_name}. Highest-intent first.</p>
<table style="width:100%;border-collapse:collapse;">{items}</table>
<p style="color:#999;font-size:12px;margin-top:16px;">Flagged leads are tagged
"AI: Ready for Danny" in Follow Up Boss with a task due today.</p></div>"""


def send_digest(cfg, html):
    if not cfg.broker_email:
        print("[digest] no BROKER_EMAIL set; writing digest.html instead")
        with open("digest.html", "w") as f:
            f.write(html)
        return
    msg = MIMEText(html, "html")
    msg["Subject"] = f"Radar Acheteur — your hot leads ({datetime.now():%d %b})"
    msg["From"] = cfg.smtp_user
    msg["To"] = cfg.broker_email
    with smtplib.SMTP(cfg.smtp_host, cfg.smtp_port) as s:
        s.starttls()
        s.login(cfg.smtp_user, cfg.smtp_pass)
        s.send_message(msg)
    print(f"[digest] sent to {cfg.broker_email}")
