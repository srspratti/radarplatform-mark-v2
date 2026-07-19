import React, { useState, useEffect, useRef, useCallback } from "react";
import { T } from "../i18n.js";
import { api } from "../api.js";

export function NotifBell() {
  const [items, setItems] = useState([]);
  const [openB, setOpenB] = useState(false);
  const seen = useRef(-1);
  const poll = useCallback(async () => {
    try {
      const n = await api("/notifications?unread=1");
      if (seen.current >= 0 && n.length > seen.current && n.length &&
        "Notification" in window && Notification.permission === "granted") {
        new Notification(n[0].title, { body: n[0].body, icon: "/static/pwa/icon-192.png" });
      }
      seen.current = n.length;
      setItems(n);
    } catch (e) { /* ignore */ }
  }, []);
  useEffect(() => {
    poll();
    const id = setInterval(poll, 30000);
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
    return () => clearInterval(id);
  }, [poll]);
  const markRead = async () => {
    try { await api("/notifications/read", { method: "POST" }); poll(); } catch (e) { /* ignore */ }
  };
  return (
    <div className="relative">
      <button onClick={() => setOpenB((o) => !o)}
        title={T("Alertes", "Alerts")}
        data-testid="notif-bell-btn"
        className="mono text-[14px] px-2 py-1 rounded-lg border border-transparent hover:border-[var(--line)] relative">
        🔔
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[var(--warn)] text-black mono text-[9px] rounded-full px-1 font-bold">
            {items.length}
          </span>
        )}
      </button>
      {openB && (
        <div className="absolute right-0 mt-1 w-72 panel p-2 z-50 fadein" data-testid="notif-panel">
          {items.length === 0 && (
            <div className="text-[11px] text-[var(--mute)] p-2">{T("Aucune alerte non lue.", "No unread alerts.")}</div>
          )}
          {items.map((n) => {
            const smsIdx = (n.body || "").indexOf("\nsms:");
            return (
              <div key={n.id} className="text-[11px] py-1.5 px-1 border-b border-[var(--line)]/40 last:border-0">
                <div className="font-semibold">{n.title}</div>
                <div className="text-[var(--mute)] whitespace-pre-wrap">
                  {smsIdx < 0 ? n.body : n.body.slice(0, smsIdx)}
                </div>
                {smsIdx >= 0 && (
                  <a href={n.body.slice(smsIdx + 1)} className="amber underline">
                    📲 {T("Envoyer moi-même", "Send myself")}
                  </a>
                )}
              </div>
            );
          })}
          {items.length > 0 && (
            <button onClick={markRead} data-testid="notif-mark-read-btn"
              className="mono text-[10px] mt-1 w-full py-1 rounded border border-[var(--line)] hover:border-[var(--amber)]">
              {T("Tout marquer lu", "Mark all read")}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
