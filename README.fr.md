# Plateforme Radar

> 🇬🇧 **English version: [README.md](README.md)** · Guide pas à pas (tests,
> clés, intégrations, déploiement, mise en service) :
> **[GUIDE_DEPLOIEMENT.fr.md](GUIDE_DEPLOIEMENT.fr.md)** /
> [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) · Règles d'édition : [EDITION.md](EDITION.md)

Monorepo déployable de la plateforme courtier québécoise : la couche
d'intégration **Radar Hub** plus tous les artefacts existants, branchés
ensemble. Un seul processus sert tout.

| Route | Contenu |
|---|---|
| `/` | Tableau de bord d'engagement (`realtor-engagement-dashboard.jsx`, **données réelles**) |
| `/portail/{jeton}` | Portail client Vitrine v2 (`vitrine-mvp-v2.jsx`, pont d'événements + inscriptions réelles) |
| `/ops` | Console opérations — boîte de leads, agents, writebacks, fiche client |
| `/api/…` | API du hub — événements, leads, clients, connecteurs, agents (OpenAPI : `/docs`) |
| `/acheteur` | Module d'intelligence acheteur Radar Acheteur *(édition vendable)* |
| `internal/` | Outillage RPA Matrix/Centris *(édition interne — jamais dans une image Docker)* |

## Le flux

1. **Leads entrants, étiquetés** — import Follow Up Boss (origine tierce
   conservée en sous-étiquette), canaux de Danny, demandes de visite Matrix,
   formulaires propres, agent de prospection. Étiquette de source immuable au
   premier contact. Score de priorité IA + consigne d'action sur chaque lead
   (onglet Radar de `/ops`).
2. **Conversion** — bouton dans `/ops`, ou détection automatique quand un
   courriel Matrix « alerte créée » arrive pour un lead existant. La
   conversion émet le **jeton du portail Vitrine** et une **adresse d'alerte
   dédiée au client** (ex. `alertes.radar+mctremblay-dxec68@gmail.com`) —
   conçue à la volée, zéro configuration serveur par client.
3. **Flux d'inscriptions** — Danny ajoute cette adresse comme **2ᵉ
   destinataire** de l'alerte Matrix du client. Chaque courriel Centris est
   routé par destinataire, ses fiches extraites (nº Centris, adresse, prix,
   chambres, type, URL), dédupliquées, et servies à la Vitrine de ce client —
   chaque fiche garde un lien **« Voir sur Centris ↗ »**. Recevoir une
   correspondance ne gonfle jamais l'engagement.
4. **Engagement en retour** — chaque geste au portail (consultations, visites
   3D, favoris, messages, demandes de visite) passe par le webhook → score
   d'engagement à décroissance (acteur=client uniquement) et étape du
   pipeline québécois (dérivée du journal) se mettent à jour en direct sur le
   tableau de bord de Danny.
5. **Historique partout** — chaque lot du portail met en file une note
   Follow Up Boss (poussée par API) **et** une `matrix_note`. Édition
   vendable : liste prête à coller + digest par client. Édition interne :
   `matrix_history_writer.py` (RPA, dry-run par défaut) les écrit
   automatiquement dans Matrix.
6. **Voir comme le client** — sélecteur « 👁 Ouvrir le portail d'un
   client… » dans la barre du tableau de bord ; bouton « 👁 Portail client »
   dans `/ops` ; le seed imprime chaque URL de portail et adresse d'alerte.

## Démarrage rapide

```bash
pip install -r requirements.txt
python -m radar_hub.seed                # instance Danny + données démo + carte d'accès
python -m radar_acheteur.seed_demo      # édition vendable seulement (optionnel)
uvicorn radar_hub.main:app --reload
pytest                                  # vendable : 43 · interne : 40 + 3 sautés
```

Les frontends sont précompilés (`apps/*/dist`) ; rebâtir avec
`./build_frontend.sh` (Node 18+) après modification des sources.

## Contrats d'intégration (condensés)

**Vitrine → Hub** `POST /api/webhooks/vitrine`
(`X-Vitrine-Signature` = HMAC-SHA256 si un secret est défini) :

```json
{"client_token":"<jeton>","events":[
  {"type":"listing.viewed","event_id":"v2","listing_id":"21877102"},
  {"type":"visit.requested","event_id":"v4","listing_id":"21877102"}]}
```

Types acceptés : `portal.session_started`, `listing.viewed`,
`listing.favorited`, `listing.shared`, `tour3d.viewed`, `message.sent`,
`visit.requested`. `event_id` = clé d'idempotence.

**Inscriptions du client** `GET /api/vitrine/listings/{jeton}` — protégé par
jeton, alimente le portail. **État du portail**
`GET/PUT/DELETE /api/vitrine/storage/{jeton}/{clé}`.
**Proxy IA** `POST /api/vitrine/ai` — protégé par jeton ; clé côté serveur
seulement.

**Matrix** — `POST /api/connectors/matrix/ingest-raw` (un courriel brut) ou
`POST /api/connectors/matrix/poll` (IMAP). Parseurs déterministes d'abord ;
Claude Haiku uniquement sous le seuil de confiance 0,75.
**File d'historique Matrix** — `GET /api/connectors/matrix/notes?status=pending`,
`POST /api/connectors/matrix/notes/{id}/mark`.

**Follow Up Boss** — `POST /api/connectors/fub/import`,
`POST /api/connectors/fub/flush-writebacks`.
**Pont Radar Acheteur** — `POST /api/connectors/acheteur/sync`.
**Événements génériques** — `POST /api/events` (23 types, 7 familles).

## Décisions d'architecture

1. Seuls les événements `actor=client` alimentent le score d'engagement.
2. `idempotency_key` sur chaque événement — la synchronisation bidirectionnelle
   ne peut pas compter en double.
3. `tenant_id` partout — seule différence structurelle entre l'instance de
   Danny et un déploiement en marque blanche.
4. L'étape du pipeline est toujours **dérivée du journal d'événements**,
   jamais éditée à la main.
5. Étiquette de source immuable au premier contact, préservée après conversion.
6. Lead vs client = statut de cycle de vie sur une seule table.
7. Deux instruments distincts : **priorité** (pré-conversion, agir maintenant)
   vs **engagement** (post-conversion, décroissance pondérée). Jamais comparés
   entre eux ni à des comptes bruts.
8. Writeback en file, CRM d'abord : FUB reçoit des notes par API ; Matrix
   reçoit digest/file (pas d'API d'écriture publique ; les connexions
   automatisées violent les conditions Centris — le RPA interne est la seule
   exception, sur le compte de Danny).
9. Jeton du portail + adresse d'alerte émis **à la conversion**, jamais avant.

## Posture de conformité (pas un avis juridique — revue avant montée en charge)

Centris/Matrix : dans le produit vendable, ingestion des courriels de
notification uniquement — aucun scraping, aucune connexion automatisée.
LCAP/CASL : les brouillons courriel de prospection sont bloqués (HTTP 422)
sans base de consentement déclarée ; lettres et scripts d'appel toujours
permis ; mécanisme de désabonnement intégré ; les signaux de ciblage
n'apparaissent jamais dans le contenu des messages. Loi 25 : minimisation —
le hub ne stocke que ce que le flux exige ; l'état du portail est scellé au
jeton.

## Arborescence

```
radar_hub/            hub (API, scoring, étapes, agents, connecteurs, /ops)
radar_acheteur/       module acheteur (édition vendable)
apps/vitrine/         portail verbatim + pont + dist précompilé
apps/dashboard/       prototype (1 ligne documentée) + adaptateur + dist
internal/…rpa/        outillage Danny (édition interne)
samples/  scripts/    courriels de test + assistant d'ingestion (voir le guide)
tests/                suite complète  ·  make_editions.sh  ·  build_frontend.sh
```
