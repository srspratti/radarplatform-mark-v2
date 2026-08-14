# Matrix RPA — ÉDITION INTERNE SEULEMENT / INTERNAL EDITION ONLY

⚠️ **Lire avant d'exécuter.** L'automatisation de Matrix/Centris n'est pas
couverte par leurs conditions d'utilisation. Ce dossier existe uniquement pour
l'édition interne : le compte du courtier lui-même, à des fins de test
personnel, à cadence humaine, jamais distribué, jamais dans une image Docker
(`.dockerignore` le bloque déjà), jamais dans le produit vendable.

⚠️ Automating Matrix/Centris sits outside their Terms of Use. This folder is
for the INTERNAL edition only: the broker's own account, personal testing,
human-paced, never distributed, never in a Docker image (already fenced by
`.dockerignore`), never in the sellable product.

## Le chemin recommandé n'est PAS celui-ci

Pour les tableaux « lien seulement », le chemin conforme est déjà dans le
produit : dans Matrix, ouvrir les résultats → Sélectionner tout →
**Envoyer PDF / Imprimer PDF** (format détaillé, ex. `my:Partial`) → envoyer
le PDF à l'adresse d'admission du client OU le déposer dans `/ops` (fiche du
client → « Import PDF Matrix »). Quatre clics humains, aucune automatisation
de Matrix, et la Vitrine se peuple. Essayez ça d'abord.

## Ce que fait le harvester (si vous choisissez quand même de l'utiliser)

`matrix_results_harvester.py` rejoue ces mêmes clics dans un navigateur
Playwright **après que VOUS vous soyez connecté manuellement** (profil
persistant — le script n'automatise jamais la connexion et ne stocke aucun
mot de passe) :

1. Premier lancement : la fenêtre s'ouvre, vous vous connectez à Matrix
   vous-même, puis Entrée dans le terminal pour continuer.
2. Le script navigue vers l'auto-courriel indiqué, sélectionne tout,
   exporte le PDF de la grille (format détaillé).
3. **Dry-run par défaut** : il affiche ce qu'il enverrait. Avec `--apply`,
   il POSTe le PDF à `POST /api/connectors/matrix/ingest-pdf` du hub.

```bash
pip install playwright httpx && playwright install chromium
python matrix_results_harvester.py \
  --hub http://localhost:8000 --key $RADAR_API_KEY \
  --contact-id 3 --results-url "https://matrix.centris.ca/…"      # dry-run
# … vérifier la sortie, puis ajouter --apply
```

### Deux formats — et pourquoi le détaillé remplace un « API de détails »

🇫🇷 `--format grid` (défaut, `my:Partial`) crée les inscriptions du client.
`--format detailed` (« Client Detailed with Photo Album ») **enrichit** :
année de construction, taxes, dimensions des pièces (→ plan 3D de la
Vitrine), remarques et photos. Le hub route l'export détaillé tout seul par
nº Centris, donc `--contact-id` devient facultatif — un seul export enrichit
tous les clients qui suivent ces inscriptions.

C'est le chemin d'enrichissement **en attendant le DDF®/Source.immo** : mêmes
données que la fiche que vous imprimez déjà à la main, depuis VOTRE session
authentifiée, sans tiers, sans revendeur. Aucun besoin d'une API de
« détails par nº » non officielle.

🇬🇧 `--format grid` (default) creates the client's listings; `--format
detailed` **enriches** them (year built, taxes, room dimensions → the
Vitrine's 3D plan, remarks, photos) and routes itself by Centris number, so
`--contact-id` is optional — one export enriches every client tracking those
listings. This is the enrichment path **while waiting for DDF®/Source.immo**:
the same sheet you already print by hand, from YOUR authenticated session,
no third party, no reseller. No unofficial "details by id" API needed.

```bash
python matrix_results_harvester.py --hub http://localhost:8000 \
  --key $RADAR_API_KEY --format detailed \
  --results-url "https://matrix.centris.ca/…"          # dry-run
# … vérifier, puis --apply
```

### Balayage Sommaire — enrichir SANS sélecteurs ni session / no-selector enrichment

🇫🇷 La page du portail (lien du courriel, session anonyme) offre une vue
**Sommaire** (« 1 of N ») qui contient les détails complets de chaque
propriété. `portal_link_watcher.py --details` la parcourt : année, taxes,
superficies, style, type de bâtiment, chambres/SDB, adresse et prix sont
relevés fiche par fiche et renvoyés à `ingest-details` — **aucun sélecteur à
remplir, aucune session Matrix, aucun PDF**. Ce qui manque encore après ce
balayage : les dimensions des pièces (plan 3D) et l'album photos — pour ça,
l'export PDF détaillé côté Matrix reste le chemin.

🇬🇧 The portal page (the emailed link, anonymous session) has a **Summary**
view ("1 of N") carrying each property's full details. `portal_link_watcher.py
--details` walks it: year, taxes, areas, style, building type, beds/baths,
address and price are lifted per sheet and posted to `ingest-details` — **no
selectors, no Matrix session, no PDF**. Still missing after this sweep: room
dimensions (the 3D plan) and the photo album — the broker-side detailed PDF
export remains the path for those.

```bash
python portal_link_watcher.py --hub $HUB --key $KEY --details --headed   # dry-run, watch it
python portal_link_watcher.py --hub $HUB --key $KEY --details --apply
```

Si le lien s'ouvre dans une autre vue (carte/galerie), le script le signale :
ouvrez le lien une fois à la main et choisissez ⋯ → « Portal list and
Summary » — le portail retient la vue. / If the link opens in another view,
the script says so: open it once by hand and pick ⋯ → "Portal list and
Summary" — the portal remembers the view.

⚠️ **Harvester et liens de portail** : le flux « tout sélectionner → Imprimer
PDF » du harvester vit sur la page de résultats **côté Matrix** (votre
session : Courriels envoyés → ouvrir les résultats), PAS sur la page du
portail client — utilisez `--results-url` avec cette URL-là. `--from-queue`
ne convient que si votre chambre affiche l'interface d'impression sur la page
du portail (la nôtre : non). / The harvester's select-all → Print-PDF flow
lives on the **Matrix-side** results page (your session: Sent emails → open
results), NOT on the client portal page — use `--results-url` with that URL.
`--from-queue` only fits boards whose portal page carries the print UI (ours
does not).

### Mode file — l'enrichissement sans intervention / hands-off enrichment

🇫🇷 `--from-queue` enchaîne la **même file de liens de portail** que
`portal_link_watcher.py` : chaque tâche porte l'URL *et* le client, donc rien
n'est fourni à la main (`--contact-id` devient inutile) et chaque tâche est
marquée `done`/`failed` en fin de traitement. Le script tourne **headless**
par défaut : tant que le profil garde une session Matrix valide, aucune
fenêtre ne s'ouvre — donc cron possible. Quand Matrix vous déconnecte, il
rouvre une fenêtre et attend VOTRE connexion; c'est le seul moment humain qui
reste, et il reste humain par choix.

🇬🇧 `--from-queue` works the **same portal-link queue** the watcher fills:
each task carries the URL *and* the client, so nothing is supplied by hand
(`--contact-id` is unnecessary) and each task is marked `done`/`failed`.
Runs **headless** by default — no window while the stored profile holds a
valid Matrix session, so it can live in cron. When Matrix signs you out it
reopens a window and waits for YOU; that is the one remaining human moment,
kept human on purpose.

```bash
# la boucle complète, une fois les sélecteurs remplis :
python portal_link_watcher.py     --hub $HUB --key $KEY --apply   # nºs
python matrix_results_harvester.py --hub $HUB --key $KEY \
       --format detailed --from-queue --apply                    # substance
```

Les sélecteurs `PLACEHOLDER_…` doivent être remplis contre le DOM réel
(DevTools → clic droit sur l'élément → Copy selector) — ils varient selon la
configuration du tableau. Cadence humaine intégrée (pauses aléatoires);
gardez les exécutions rares (1-2×/jour max.).

## Le watcher de liens de portail — ingestion courriel complète / complete email ingestion

🇫🇷 `portal_link_watcher.py` ferme la boucle des tableaux « lien seulement »
sans AUCUN clic humain : le hub met en file le lien « View All Listings » de
chaque auto-courriel vide (`GET /api/connectors/matrix/link-queue`); le
watcher ouvre chaque lien dans Chromium (session anonyme — le lien courriel
se rend sans connexion; si une connexion est demandée, la tâche est marquée
`failed`, jamais forcée), relève les numéros Centris de la page rendue, et
les POSTe à `ingest-numbers`. La substance (année, taxes, pièces, photos)
vient ensuite du flux DDF® licencié ou d'un PDF détaillé. Aucun sélecteur à
remplir — l'extraction est textuelle.

🇬🇧 `portal_link_watcher.py` closes the link-only-board loop with ZERO human
clicks: the hub queues each empty auto-email's "View All Listings" link; the
watcher opens each one in Chromium (anonymous session — the emailed link
renders without login; if a login is demanded the task is marked `failed`,
never forced), lifts the Centris numbers from the rendered page and POSTs
them to `ingest-numbers`. Substance (year, taxes, rooms, photos) then comes
from the licensed DDF® feed or a detailed PDF. No selectors to fill — the
extraction is text-based.

```bash
python portal_link_watcher.py --hub http://localhost:8000 --key $RADAR_API_KEY          # dry-run
python portal_link_watcher.py --hub http://localhost:8000 --key $RADAR_API_KEY --apply  # pour vrai / for real
# --limit 5 (défaut) · --headed pour voir la fenêtre / to watch the browser
```

Mêmes règles que le reste du dossier : édition interne seulement, compte et
courriels du courtier seulement, cadence humaine, jamais conteneurisé ni
distribué. / Same rules as the rest of this folder: internal edition only,
the broker's own account and emails only, human-paced, never containerized
or distributed.
