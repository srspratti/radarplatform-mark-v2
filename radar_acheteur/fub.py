"""Follow Up Boss REST client. Auth = HTTP Basic, API key as username, blank password.
Docs: https://docs.followupboss.com/  Base: https://api.followupboss.com/v1"""
import base64
import json
import time
import urllib.request
import urllib.error
import urllib.parse

BASE = "https://api.followupboss.com/v1"


class FUB:
    def __init__(self, cfg):
        self.cfg = cfg
        token = base64.b64encode(f"{cfg.fub_key}:".encode()).decode()
        self.headers = {
            "Authorization": f"Basic {token}",
            "Content-Type": "application/json",
            "X-System": cfg.fub_system,
        }
        if cfg.fub_system_key:
            self.headers["X-System-Key"] = cfg.fub_system_key

    def _req(self, method, path, body=None, retries=3):
        url = f"{BASE}{path}"
        data = json.dumps(body).encode() if body is not None else None
        for attempt in range(retries):
            req = urllib.request.Request(url, data=data, headers=self.headers, method=method)
            try:
                with urllib.request.urlopen(req, timeout=30) as r:
                    raw = r.read().decode()
                    return json.loads(raw) if raw else {}
            except urllib.error.HTTPError as e:
                if e.code == 429 or e.code >= 500:      # rate-limited / transient
                    time.sleep(2 ** attempt)
                    continue
                raise RuntimeError(f"FUB {method} {path} -> {e.code}: {e.read().decode()[:300]}")
        raise RuntimeError(f"FUB {method} {path} failed after {retries} retries")

    # --- lead ingestion: the recommended, auto-deduping path ---
    def create_event(self, name, email=None, phone=None, message="", source="Radar Acheteur",
                     tags=None):
        person = {"firstName": name or "Unknown"}
        if email:
            person["emails"] = [{"value": email}]
        if phone:
            person["phones"] = [{"value": phone}]
        if tags:
            person["tags"] = tags
        body = {"source": source, "type": "Inquiry", "message": message, "person": person}
        return self._req("POST", "/events", body)

    def find_person(self, email=None, phone=None):
        q = f"?email={urllib.parse.quote(email)}" if email else \
            (f"?phone={urllib.parse.quote(phone)}" if phone else "")
        if not q:
            return None
        res = self._req("GET", f"/people{q}&limit=1")
        people = res.get("people", [])
        return people[0] if people else None

    def add_tags(self, person_id, tags):
        return self._req("PUT", f"/people/{person_id}", {"tags": tags})

    def add_note(self, person_id, subject, body_text):
        return self._req("POST", "/notes",
                         {"personId": person_id, "subject": subject, "body": body_text})

    def create_task(self, person_id, name, due_iso=None):
        body = {"personId": person_id, "name": name}
        if due_iso:
            body["dueDate"] = due_iso
        return self._req("POST", "/tasks", body)
