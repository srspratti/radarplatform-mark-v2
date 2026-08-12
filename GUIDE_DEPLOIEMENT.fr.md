# Guide de déploiement — Plateforme Radar

> 🇬🇧 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) · Vue d'ensemble : [README.fr.md](README.fr.md)

Tout, d'une machine vierge jusqu'à la mise en service avec Danny. Les blocs
**[Interne]** ne concernent que l'édition interne, **[Vendable]** que
l'édition vendable.

---

## 0 · Prérequis

- Python 3.11+ (3.12 recommandé) et `pip`
- Node 18+ — **seulement** si vous modifiez `apps/*/src` et rebâtissez
- `flyctl` — seulement pour le déploiement (§6)
- Une boîte Gmail (ou Workspace) dédiée aux alertes Matrix

## 1 · Installation et exécution locale

```bash
cd radar-platform-…                      # ce dossier
python -m venv .venv && . .venv/bin/activate     # optionnel mais recommandé
pip install -r requirements.txt
python -m radar_hub.seed                 # instance Danny + données démo
python -m radar_acheteur.seed_demo       # [Vendable] démo intelligence acheteur
uvicorn radar_hub.main:app --reload
```

Le seed imprime une **carte d'accès** — gardez-la sous les yeux :

```
Accès:  tableau de bord  http://localhost:8000/
        console ops     http://localhost:8000/ops
  👁 Marie-Claude Tremblay  /portail/<jeton>   ✉ alertes.radar+marieclaudetre-…@gmail.com
```

Ouvrez, dans l'ordre : `/` (tableau de bord, clients réels du seed), `/ops`
(boîte de leads avec scores de priorité), une URL `👁 /portail/<jeton>` (la
Vitrine du client), `/docs` (OpenAPI), et **[Vendable]** `/acheteur`.

## 2 · Tests automatisés

```bash
pytest        # [Vendable] 43 réussis · [Interne] 40 réussis, 3 sautés
```

Ce que la suite garantit : idempotence des événements, score acteur=client
uniquement, dérivation des étapes, la barrière LCAP, import/writeback FUB
(transport simulé), parseurs Matrix (visite / alerte créée / **fiches
d'inscription**), la boucle webhook Vitrine, KV du portail + barrière du
proxy IA, le pont acheteur **[Vendable]**, la clôture Docker du RPA, et que
les courriels d'exemple livrés continuent de se parser. Les 3 sauts de
l'édition interne = les tests acheteur — attendu, le module n'y est pas.

## 3 · Vérification manuelle (10 minutes)

Avec le serveur du §1 en marche :

1. **Tableau de bord `/`** — la barre affiche `RADARHUB`, un compteur de
   leads 🔥 et le sélecteur « 👁 Ouvrir le portail d'un client… ». Les cartes
   montrent scores et étapes réels du seed.
2. **Ops `/ops`** — onglet Radar : 4 leads triés par priorité, étiquettes de
   source, consignes d'action. Cliquez **→ Client Centris** sur l'un : il
   passe dans Clients avec jeton de portail et adresse d'alerte émis.
3. **Fiche client** — onglet Clients → ouvrir Marie-Claude : étapes du
   pipeline québécois, décomposition du score, chronologie unifiée, boutons
   **👁 Portail client** et **✉ adresse d'alerte** (clic = copie), générateur
   de digest Matrix.
4. **Portail** — ouvrez son portail. Ses trois inscriptions Centris du seed
   s'affichent avec « Voir sur Centris ↗ ». Mettez-en une en favori,
   demandez une visite, envoyez un message.
5. **Vérification de la boucle** — dans `/ops`, rouvrez sa fiche : nouveaux
   événements, score en hausse, étape *En visites*. Sur `/`, sa carte suit.
6. **Courriels Matrix simulés** — copiez son adresse ✉, puis :

```bash
sed -i.bak "s/REPLACE_WITH_CLIENT_INTAKE_EMAIL/<coller-son-adresse>/" samples/matrix-alert-2-listings.eml
./scripts/ingest_email.sh samples/matrix-alert-2-listings.eml
./scripts/ingest_email.sh samples/matrix-visit-confirmed.eml
./scripts/ingest_email.sh samples/matrix-alert-created.eml
```

   Attendu : 1ᵉʳ appel → `routed_by_intake: true, listings_new: 2`
   (rafraîchir le portail : 2 nouvelles fiches). 2ᵉ → un nouveau lead
   « Jean Tremblay » en *En visites*. 3ᵉ → le lead **Nadia Petrov se
   convertit automatiquement** en client (détecteur « alerte créée »).
7. **Files d'historique** — `GET /api/connectors/matrix/notes` liste les
   notes Matrix en attente ; `POST /api/connectors/fub/flush-writebacks`
   pousse les notes FUB (marque `manual` sans clé — normal).

## 4 · Clés et secrets

| Variable | Rôle | Obtention |
|---|---|---|
| `RADAR_API_KEY` | Verrouille l'API du hub (`X-Radar-Key`) | `openssl rand -hex 24` |
| `ANTHROPIC_API_KEY` | Concierge Vitrine + prévisions (recherche web), parseur Haiku sous seuil, synthèse de rapport, brouillons d'approche/contenu | console.anthropic.com → API Keys |
| `FUB_API_KEY` | Import Follow Up Boss + writeback de notes | FUB → Admin → API → Créer une clé |
| `GHL_API_KEY`, `GHL_LOCATION_ID` | Import GoHighLevel + writeback de notes (même contrat que FUB) — **et transport SMS quand Twilio n'est pas défini** : les SMS sortants passent par LC Phone de GHL (Twilio revendu dans l'abonnement, numéros canadiens sans compte Twilio ; les fils arrivent aussi dans la boîte GHL). Les appels vocaux restent Twilio-seulement. | Sous-compte GHL → Settings → **Private Integrations** → jeton avec scopes *View/Edit Contacts* + *Conversations/Messages* ; location id = id du sous-compte (Settings → Business Profile). Pour les SMS : acheter un numéro sous Settings → **Phone Numbers** |
| `DDF_CLIENT_ID/SECRET` | Enrichissement d'inscriptions **licencié** par nº MLS (faits + photos, auto-appliqué à chaque inscription d'alerte) + balayage par critères | Le courtier demande un flux **DDF®** de l'ACI/CREA (crea.ca → DDF® → pool national, destination « outil de membre ») — l'ACI émet des identifiants OAuth2. Balayages : `POST /api/connectors/ddf/enrich` et `/ddf/match` (à planifier, §7) |
| `MATRIX_IMAP_HOST/USER/PASS` | Lecture IMAP de la boîte d'alertes par le hub | Gmail : activer 2FA → Sécurité → **Mots de passe d'application** → Mail. Hôte `imap.gmail.com` |
| `INTAKE_EMAIL_MODE/USER/DOMAIN` | Forme des adresses d'alerte par client | `plus` + le même compte Gmail (défaut) — ou `alias` + domaine fourre-tout |
| `VITRINE_WEBHOOK_SECRET` | HMAC des webhooks du portail | `openssl rand -hex 24` (même origine = optionnel ; définissez-le quand même) |
| `TWILIO_SID/TOKEN/FROM` | SMS réels + appels des agents vocaux IA (vide = tout en file « simulated ») | twilio.com → Console → Account SID / Auth token ; acheter un numéro local (514/438) |
| `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID` | La **voix clonée** du courtier sur les appels IA (vide = `<Say>` fr-CA/en-CA de Twilio) | elevenlabs.io → Profil → clé API (portée « Text to Speech » suffit) ; cloner la voix (~1 min d'audio propre) → copier son Voice ID |
| `SMTP_HOST/PORT/USER/PASS/FROM` | Courriel sortant (miroir d'alertes traqué, approche vendeur) | Un mot de passe d'application Gmail fonctionne (même technique que l'IMAP) |
| `DB_PATH` | Sqlite de Radar Acheteur **[Vendable]** | un chemin sur le volume persistant |
| `IMAP_HOST/USER/PASS`, `ALERT_SENDERS` | Boîte propre au module acheteur **[Vendable]** | même technique de mot de passe d'application |
| `RADAR_TENANT_ID` | Identité de l'instance (marque blanche = nouvelle valeur) | au choix par déploiement |

En local, copiez `.env.example` vers `.env` puis chargez avant de lancer :

```bash
cp .env.example .env && $EDITOR .env
set -a; . ./.env; set +a
uvicorn radar_hub.main:app
```

Tout se dégrade proprement sans clés : pas de clé Anthropic → parseurs
déterministes + gabarits + repli poli du concierge ; pas de clé FUB → l'import
signale la clé manquante, les writebacks passent en `manual`.

## 5 · Branchement des intégrations

### 5.1 Follow Up Boss
Définir `FUB_API_KEY`, puis `POST /api/connectors/fub/import` (bouton
« ↧ Importer FUB » dans `/ops`). Les personnes arrivent en leads étiquetés
`fub_import` avec leur origine FUB (Zillow, Realtor.ca…) en sous-étiquette —
idempotent, relançable à volonté. Writebacks :
`POST /api/connectors/fub/flush-writebacks` pousse les résumés d'activité
Vitrine en notes de personne. Planifiez les deux (§7).

### 5.2 Courriels d'alerte Matrix — la boucle par client
1. Créez/choisissez la boîte dédiée ; définissez `MATRIX_IMAP_*`.
2. Convertissez un lead → le hub émet son adresse ✉ (visible dans la fiche
   `/ops`, clic = copie).
3. Dans Matrix, sur l'alerte auto de ce client, **ajoutez l'adresse comme
   destinataire supplémentaire (CC)** — le nom exact du champ varie selon la
   configuration de la chambre ; tout champ qui fait envoyer l'alerte à cette
   adresse convient.
4. Dès lors, chaque alerte Centris de ce client arrive aussi dans votre
   boîte, est routée par destinataire, et ses inscriptions apparaissent dans
   sa Vitrine.
5. Cycle de lecture : `POST /api/connectors/matrix/poll` (à planifier, §7),
   ou testez n'importe quel courriel avec `scripts/ingest_email.sh`.

### 5.3 Secret du webhook Vitrine
Définissez `VITRINE_WEBHOOK_SECRET` côté serveur. Le portail livré est de
même origine, donc rien d'autre à configurer ; si un jour le portail est
hébergé ailleurs, signez le corps en HMAC-SHA256 dans `X-Vitrine-Signature`.

### 5.4 Anthropic
Définissez `ANTHROPIC_API_KEY` : concierge du portail, rafraîchissement des
prévisions (recherche web côté serveur), parseur sous seuil, synthèse du
rapport mensuel et brouillons personnalisés s'activent. La clé n'atteint
jamais le navigateur — le portail parle à `POST /api/vitrine/ai`.

### 5.5 Radar Acheteur **[Vendable]**
Définissez `DB_PATH` + les `IMAP_*`/`ALERT_SENDERS` du module. Son pipeline
remplit sa propre base ; l'interface vit à `/acheteur`. Miroitez ses signaux
dans la chronologie unifiée avec `POST /api/connectors/acheteur/sync`
(à planifier, §7).

### 5.6 Agents vocaux IA + réceptionniste (Twilio / ElevenLabs)
1. Définissez `TWILIO_SID/TOKEN/FROM`. Sans eux, tout fonctionne quand même en
   mode **simulé** : messages/appels en file dans `/ops` → 🤖 Agents → 📞 avec
   un repli « toucher pour envoyer » — parfait pour tester.
2. Pour la voix clonée du courtier, définissez `ELEVENLABS_API_KEY` +
   `ELEVENLABS_VOICE_ID` ; le TwiML `<Play>` alors l'audio synthétisé par le
   hub depuis `/api/voice/audio/{id}.mp3` (exige un `RADAR_PUBLIC_URL` public).
3. **Réceptionniste** : dans la console Twilio, pointez le webhook « a call
   comes in / appel manqué » de votre numéro vers
   `https://<app>/api/webhooks/voice-inbound?format=twiml` — l'appelant reçoit
   l'accueil bilingue (français québécois puis anglais), la boîte vocale est
   retranscrite, le SMS d'excuse part, et une tâche de rappel atterrit dans
   `/ops`.
4. Seuils, scripts et messages d'accueil vivent dans `features.toml
   [settings]` (`voice_*`, `receptionist_*`, `broker_name`).

### 5.7 Intelligence vendeur
Fonctionne d'emblée avec le fournisseur démo (`/ops` → 🤖 Agents → 🏠).
Données réelles = brancher le slot `RegistreProvider` (Registre foncier /
JLR). Les garde-fous de conformité sont appliqués dans le code :
lettres/scripts d'appel toujours permis, courriel/SMS exigent une base LCAP
consignée, la voix automatisée exige un consentement **exprès** (règles ADAD
du CRTC).

### 5.8 Suite RPA **[Interne]** — compte de Danny seulement
```bash
pip install -r internal/matrix-centris-rpa/requirements.txt
playwright install chromium
```
1. Remplissez les sélecteurs `PLACEHOLDER_…` dans `matrix_harvester.py`,
   `centris_agent.py`, `matrix_history_writer.py` contre le DOM réel
   (DevTools → clic droit sur l'élément → Copier → Copier le sélecteur).
2. Premier lancement de quoi que ce soit : **dry-run par défaut** — lisez la
   sortie.
3. `python internal/matrix-centris-rpa/matrix_history_writer.py --hub
   http://localhost:8000 --key $RADAR_API_KEY` liste les notes en attente ;
   ajoutez `--apply` seulement après sélecteurs remplis et vérification
   manuelle.
4. Fréquence basse, cadence humaine (intégrée). Ne jamais conteneuriser ni
   distribuer ce dossier — `.dockerignore` le clôture déjà.
5. **Ingestion courriel complète (tableaux « lien seulement »)** : le hub met
   en file le lien de portail de chaque auto-courriel vide
   (`GET /api/connectors/matrix/link-queue`) ;
   `portal_link_watcher.py` ouvre chaque lien (session anonyme, connexion
   jamais automatisée), relève les numéros Centris de la page rendue et les
   renvoie au hub — l'enrichissement vient ensuite du DDF®/PDF détaillés.
   Dry-run par défaut ; voir le README du dossier.

## 6 · Déploiement (Fly.io, YUL)

```bash
brew install flyctl            # ou curl -L https://fly.io/install.sh | sh
fly auth login
fly launch --copy-config --no-deploy        # conserve le fly.toml livré
fly volumes create radar_data --size 1 --region yul
fly secrets set \
  RADAR_API_KEY=… ANTHROPIC_API_KEY=… FUB_API_KEY=… \
  GHL_API_KEY=… GHL_LOCATION_ID=… \
  MATRIX_IMAP_HOST=imap.gmail.com MATRIX_IMAP_USER=… MATRIX_IMAP_PASS=… \
  INTAKE_EMAIL_MODE=plus INTAKE_EMAIL_USER=… VITRINE_WEBHOOK_SECRET=… \
  TWILIO_SID=… TWILIO_TOKEN=… TWILIO_FROM=… \
  ELEVENLABS_API_KEY=… ELEVENLABS_VOICE_ID=… \
  SMTP_HOST=smtp.gmail.com SMTP_PORT=587 SMTP_USER=… SMTP_PASS=… SMTP_FROM=… \
  RADAR_PUBLIC_URL=https://<app>.fly.dev \
  IMAP_HOST=imap.gmail.com IMAP_USER=… IMAP_PASS=…        # [Vendable]
# ajoutez DDF_CLIENT_ID/SECRET à l'arrivée des identifiants DDF® de l'ACI
fly deploy
fly logs            # premier démarrage : seed du volume vide, puis service
fly open            # tableau de bord à /, ops à /ops
```

Les données vivent sur le volume (`/data/*.db`) et survivent aux déploiements.
Mise à jour = modifier → `fly deploy`. Domaine :
`fly certs add app.votredomaine.ca`. Marque blanche **[Vendable]** : nouveau
nom d'app + volume + secret `RADAR_TENANT_ID` — rien d'autre (décision nº 3).

**Passage en production (sans données démo)** : avant le déploiement final,
retirez `python -m radar_hub.seed && ` du `CMD` du `Dockerfile` (ou, après un
premier essai avec démo : `fly ssh console -C "rm /data/radar_hub.db"` puis
redéployez avec le CMD nettoyé). Importez ensuite les vrais leads via FUB
(§8).

## 7 · Tâches planifiées

N'importe quel cron (serveur, GitHub Actions, ou petite machine Fly) :

```cron
*/10 * * * *  curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/matrix/poll
0 */6 * * *   curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/crm/sync   # agnostique CRM : import + writebacks FUB/GHL/…
0 */4 * * *   curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/ddf/enrich  # enrichissement DDF® licencié (si configuré)
30 */4 * * *  curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/ddf/match   # balayage DDF® par critères → remplit les Vitrines depuis les préférences sauvegardées
0 */6 * * *   curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/connectors/acheteur/sync   # [Vendable]
0 9 * * *     curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/agents/deadlines/run       # deadline_sentinel
0 10 * * *    curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/agents/feedback/run        # visit_feedback
0 11 * * *    curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/agents/voice/checkins/run  # ai_client_checkin
0 */2 * * *   curl -s -X POST -H "X-Radar-Key: $KEY" https://<app>.fly.dev/api/agents/voice/outreach/run  # ai_voice_outreach
```

**[Interne]** le rédacteur RPA tourne depuis la machine de Danny, à la
demande ou à cadence douce :
`matrix_history_writer.py --hub https://<app>.fly.dev --key $KEY --apply`.

## 8 · Mise en service — liste Jour 1 avec Danny

1. `fly logs` propre ; `/api/health` renvoie la bonne édition.
2. Production sans démo (voir fin du §6) : CMD sans seed, volume propre.
3. `POST /api/connectors/fub/import` — le vrai carnet de Danny arrive,
   étiqueté.
4. Danny traite la boîte Radar : contact → conversion du premier vrai client.
5. Copier son adresse ✉ → l'ajouter en CC sur son alerte Matrix.
6. Attendre (ou transférer) une vraie alerte → confirmer les inscriptions
   dans son portail.
7. Envoyer au client son lien `/portail/<jeton>`.
8. Observer la première vraie activité bouger score et étape sur `/`.
9. Pousser les writebacks → vérifier la note dans FUB ; traiter la file
   `matrix_note` (coller le digest, ou **[Interne]** lancer le rédacteur avec
   `--apply`).
10. Mettre en place les crons du §7 + une sauvegarde hebdomadaire
    `fly ssh sftp get /data/radar_hub.db` au calendrier.

## 9 · Exploitation et dépannage

| Symptôme | Cause / correctif |
|---|---|
| `401 clé API invalide` | Envoyer `X-Radar-Key` ; doit égaler le secret `RADAR_API_KEY` |
| `401 jeton portail invalide` | Jeton faux/périmé — revérifier le client dans `/ops` |
| Connexion IMAP refusée | Utiliser un **mot de passe d'application** Gmail (2FA requis), pas le mot de passe du compte |
| Alerte ingérée mais `listings_new: 0` | Format de fiche non reconnu — passer le courriel par `scripts/ingest_email.sh`, inspecter `parsed` ; étendre les regex de `radar_hub/connectors/matrix_email.py` |
| `routed_by_intake: false` | L'adresse d'alerte n'est pas encore sur les destinataires de l'alerte Matrix |
| Portail vide | Rebâtir : `./build_frontend.sh` ; vérifier la console du navigateur |
| Notes bloquées `pending` | Vendable : c'est la file à coller — marquer via `/notes/{id}/mark`. Interne : lancer le rédacteur |
| Sauvegarde | `fly ssh sftp get /data/radar_hub.db` (et `/data/radar_acheteur.db`) |

## 10 · Rappel sécurité et conformité

Définissez `RADAR_API_KEY` avant toute exposition publique. La clé Anthropic
reste côté serveur (c'est déjà le cas). Le produit vendable ne touche Centris
que par courriels de notification et hyperliens sortants. La barrière LCAP
est appliquée dans le code. Faites réviser Loi 25 / LCAP / conditions
Centris / OACIQ par un·e avocat·e techno du Québec avant de dépasser le
pilote.
