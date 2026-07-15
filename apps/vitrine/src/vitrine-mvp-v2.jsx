import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import {
  Home, Building2, MapPin, TrainFront, Footprints, Bike, Calculator,
  MessageCircle, Send, Heart, ThumbsDown, CalendarCheck, Flame, FileText,
  ShieldCheck, Globe, Copy, Check, X, ChevronRight, User, Clock,
  Sofa, BedDouble, Bath, UtensilsCrossed, Trees, Car, Landmark,
  TrendingDown, TrendingUp, Sparkles, RotateCcw, Eye, Play, Pause, Sun, Moon,
  Coffee, Film, ShoppingCart, Dumbbell, Cross, Waves, Wind, Thermometer,
  Volume2, Droplets, AlertTriangle, Navigation, MessageSquare, Users,
  Languages, DollarSign, GitCompare, Route, Box, Mountain, Bell, Palette,
  ShoppingBag, Brush, Wand2, List, Map, Star, Award, Phone, Mail
} from "lucide-react";

/* ================================================================== */
/*  Design tokens — "civic Québec"                                     */
/* ================================================================== */
const C = {
  ink: "#111B2E", snow: "#F6F8FA", paper: "#FFFFFF",
  metro: "#1656B4", metroSoft: "#E8EEF9",
  ochre: "#E8A33D", ochreSoft: "#FBF1DD",
  spruce: "#2F7D5C", spruceSoft: "#E4F1EA",
  line: "#DCE2EA", sub: "#5A6577", danger: "#B4552E", dangerSoft: "#F6E3DA",
};
const F = {
  disp: "'Bricolage Grotesque', 'Public Sans', sans-serif",
  body: "'Public Sans', system-ui, -apple-system, sans-serif",
  mono: "'Spline Sans Mono', 'SF Mono', monospace",
};
const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Public+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap');
* { box-sizing: border-box; }
button { cursor: pointer; font-family: inherit; }
button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 2px solid ${C.metro}; outline-offset: 2px; }
input[type=range] { accent-color: ${C.metro}; }
input[type=text], input[type=search] { font-family: inherit; }
::-webkit-scrollbar { height: 6px; width: 8px; }
::-webkit-scrollbar-thumb { background: ${C.line}; border-radius: 4px; }
.tour-canvas { touch-action: none; }
@media (prefers-reduced-motion: no-preference) {
  .seg-grow { transition: width .8s cubic-bezier(.2,.8,.2,1); }
  .fade-up { animation: fadeUp .5s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(6px);} to { opacity:1; transform:none; } }
}`;

const prefersReduced = typeof window !== "undefined" && window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

/* ================================================================== */
/*  Money & mortgage math (Canadian semi-annual compounding)           */
/* ================================================================== */
const fmt$ = (v, lang, dec = 0) =>
  new Intl.NumberFormat(lang === "fr" ? "fr-CA" : "en-CA",
    { style: "currency", currency: "CAD", minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v);
const fmtN = (v, lang) => new Intl.NumberFormat(lang === "fr" ? "fr-CA" : "en-CA").format(v);
const fmtK = (v, lang) => (lang === "fr" ? `${Math.round(v / 1000)} k$` : `$${Math.round(v / 1000)}k`);

function mortgageMonthly(principal, annualPct, years) {
  const r = annualPct / 100;
  if (r <= 0) return principal / (years * 12);
  const mr = Math.pow(1 + r / 2, 2 / 12) - 1;
  const n = years * 12;
  return (principal * mr) / (1 - Math.pow(1 + mr, -n));
}
function cmhcRate(d) { return d >= 20 ? 0 : d >= 15 ? 0.028 : d >= 10 ? 0.031 : 0.04; }
const MUTATION = {
  montreal: { labelFr: "Barème Montréal (2025 — indexé)", labelEn: "Montréal scale (2025 — indexed)",
    brackets: [[61500, 0.005], [307800, 0.01], [552300, 0.015], [1104700, 0.02], [2136500, 0.025], [3113000, 0.035], [Infinity, 0.04]] },
  longueuil: { labelFr: "Barème provincial (+ majorations municipales)", labelEn: "Provincial scale (+ municipal add-ons)",
    brackets: [[61500, 0.005], [307800, 0.01], [Infinity, 0.015]] },
};
function welcomeTax(price, muni) {
  const cfg = MUTATION[muni] || MUTATION.longueuil;
  let tax = 0, prev = 0;
  for (const [upTo, rate] of cfg.brackets) {
    const cap = Math.min(price, upTo);
    if (cap > prev) tax += (cap - prev) * rate;
    prev = upTo;
    if (price <= upTo) break;
  }
  return Math.round(tax);
}
const HEAT = {
  electric: { fr: "Plinthes électriques", en: "Electric baseboards", perSqft: 1.35 },
  gas: { fr: "Gaz naturel (Énergir) + Hydro", en: "Natural gas (Énergir) + Hydro", perSqft: 1.10 },
  heatpump: { fr: "Thermopompe", en: "Heat pump", perSqft: 0.85 },
};

/* ================================================================== */
/*  Forecast model: organic growth + phased development drivers        */
/* ================================================================== */
function projectPrices(base, drivers, years = 6, organic = 0.028) {
  const now = new Date().getFullYear();
  const rows = [];
  for (let i = 0; i <= years; i++) {
    const yr = now + i;
    let low = base * Math.pow(1 + organic - 0.006, i);
    let mid = base * Math.pow(1 + organic, i);
    let high = base * Math.pow(1 + organic + 0.006, i);
    // phase in each driver's uplift as its completion year approaches/passes
    for (const d of drivers) {
      const ramp = Math.max(0, Math.min(1, (yr - (d.year - 2)) / 2)); // starts 2y before, full at completion
      low += base * (d.lo / 100) * ramp;
      mid += base * (((d.lo + d.hi) / 2) / 100) * ramp;
      high += base * (d.hi / 100) * ramp;
    }
    rows.push({ yr, low: Math.round(low), mid: Math.round(mid), high: Math.round(high) });
  }
  return rows;
}

/* ================================================================== */
/*  Demo listings (stand-ins for the broker's Centris feed)            */
/* ================================================================== */
const DEMO_LISTINGS = [
  {
    id: "28374619",
    addr: "4517, rue de Brébeuf", area: "Le Plateau-Mont-Royal, Montréal", muni: "montreal",
    typeFr: "Condo divise — 2 chambres", typeEn: "Divided condo — 2 bedrooms",
    price: 549000, evalMun: 471200, sqft: 1042, year: 1912, beds: 2, baths: 1,
    parkFr: "Rue (vignette SRRR)", parkEn: "Street (permit)",
    taxesMun: 3124, taxesScol: 389, condoFees: 285, heating: "electric", insuranceEst: 38,
    inclFr: "Luminaires, stores, lave-vaisselle Bosch (2022)", inclEn: "Light fixtures, blinds, Bosch dishwasher (2022)",
    accent: ["#31456B", "#5F7BA6"],
    rooms: [
      { icon: Home, fr: "Façade 1912", en: "1912 façade", d: "Brique + corniche", g: ["#31456B", "#5F7BA6"] },
      { icon: Sofa, fr: "Salon double", en: "Double living room", d: "5,8 × 3,4 m", g: ["#C7D5EA", "#8FA8CC"] },
      { icon: UtensilsCrossed, fr: "Cuisine", en: "Kitchen", d: "Rénovée 2022", g: ["#E9E2D2", "#C9BB9B"] },
      { icon: BedDouble, fr: "Chambre principale", en: "Primary bedroom", d: "4,1 × 3,6 m", g: ["#D7DEE9", "#A9B7CD"] },
      { icon: Bath, fr: "Salle de bain", en: "Bathroom", d: "Douche + bain", g: ["#DCE9E4", "#A9C8BB"] },
      { icon: Trees, fr: "Balcon arrière", en: "Back balcony", d: "Sud-ouest", g: ["#CFE2D6", "#8FB8A0"] },
    ],
    // 3D dollhouse plan (metres). floor kept single-level for an indicative tour.
    plan: [
      { key: "salon", fr: "Salon", en: "Living room", x: 0, z: 0, w: 5, d: 4, col: "#C9D8EE", furn: ["sofa", "coffee", "rug", "tv", "plant", "art"] },
      { key: "cuisine", fr: "Cuisine", en: "Kitchen", x: 5.2, z: 0, w: 3.4, d: 4, col: "#EDE6D6", furn: ["counter", "island", "stool"] },
      { key: "chP", fr: "Chambre principale", en: "Primary bedroom", x: 0, z: 4.2, w: 4, d: 3.6, col: "#DCE2EE", furn: ["bed", "night", "plant"] },
      { key: "ch2", fr: "Chambre 2", en: "Bedroom 2", x: 4.2, z: 4.2, w: 3, d: 3.6, col: "#E6E1EE", furn: ["bedS", "night"] },
      { key: "sdb", fr: "Salle de bain", en: "Bathroom", x: 7.4, z: 4.2, w: 2.4, d: 2.4, col: "#DCEAE4", furn: ["tub", "vanity", "mirror"] },
      { key: "balcon", fr: "Balcon", en: "Balcony", x: 0, z: 8, w: 5, d: 1.6, col: "#CFE2D6", furn: ["chair", "chair2"], open: true },
    ],
    dv: [
      { s: "D2", qFr: "Année / conversion", qEn: "Year / conversion", aFr: "Immeuble 1912, converti en copropriété divise en 2004.", aEn: "1912 building, converted to divided co-ownership in 2004." },
      { s: "D5", qFr: "Infiltrations d’eau", qEn: "Water infiltration", aFr: "Infiltration mineure au rangement du sous-sol en 2019, réparée (Bisson Expert). Aucune récurrence depuis.", aEn: "Minor infiltration in basement storage (2019), repaired (Bisson Expert). No recurrence since." },
      { s: "D7", qFr: "Toiture", qEn: "Roof", aFr: "Membrane élastomère refaite en 2021 — garantie 10 ans transférable.", aEn: "Elastomeric membrane redone in 2021 — 10-year transferable warranty." },
      { s: "D11", qFr: "Plomberie / chauffe-eau", qEn: "Plumbing / water heater", aFr: "Entrée d’eau en cuivre. Chauffe-eau remplacé en 2023.", aEn: "Copper water entry. Water heater replaced in 2023." },
      { s: "D14", qFr: "Copropriété", qEn: "Co-ownership", aFr: "Fonds de prévoyance : 148 000 $ (étude 2024). Aucune cotisation spéciale votée ni annoncée.", aEn: "Contingency fund: $148,000 (2024 study). No special assessment voted or announced." },
    ],
    fund: { balance: 148000, units: 12, studyYear: 2024, special: false },
    hood: {
      walk: 94, transit: 82, bike: 96, metroFr: "Métro Mont-Royal — 450 m", metroEn: "Mont-Royal metro — 450 m", bixi: 3,
      demo: {
        incomeMed: 68400, incomeBands: [["<40k", 22], ["40–80k", 38], ["80–120k", 24], [">120k", 16]],
        ageBands: [["0–14", 12], ["15–29", 27], ["30–44", 33], ["45–64", 20], ["65+", 8]],
        fam: 31, rent: 64, langs: [["Français", 71], ["Anglais", 13], ["Autres", 16]],
      },
      crime: [100, 96, 91, 94, 87, 82], crimeDelta: -12,
      incidents: [["Introduction par effraction", "Break-in", -18], ["Méfait", "Mischief", -7], ["Vol de véhicule", "Vehicle theft", 4]],
      schoolsFr: "École Paul-Bruchési (600 m) · CPE : attente ≈ 14 mois", schoolsEn: "Paul-Bruchési school (600 m) · CPE wait ≈ 14 months",
    },
    forecast: {
      organic: 0.03,
      drivers: [
        { kind: "transit", fr: "Prolongement REM de l’Est — station projetée", en: "REM de l’Est extension — planned station", dist: "1.2 km", year: 2030, lo: 4, hi: 9, srcFr: "Actualité — annonce gouvernementale", srcEn: "News — government announcement" },
        { kind: "zoning", fr: "Requalification de l’ancien site industriel De Lorimier", en: "De Lorimier industrial site rezoning", dist: "800 m", year: 2028, lo: 2, hi: 5, srcFr: "Ville — avis de changement de zonage", srcEn: "City — rezoning notice" },
        { kind: "commercial", fr: "Nouvelle artère commerciale — projet BIA Mont-Royal", en: "New commercial corridor — Mont-Royal BIA project", dist: "300 m", year: 2027, lo: 1, hi: 3, srcFr: "SDC Mont-Royal", srcEn: "Mont-Royal merchants’ assoc." },
      ],
    },
    risks: [
      { kind: "flood", level: "none", fr: "Hors zone inondable (0-20 ans et 20-100 ans).", en: "Outside flood zones (0–20 yr and 20–100 yr)." },
      { kind: "radon", level: "low", fr: "Potentiel radon faible (secteur cartographié SPLQ).", en: "Low radon potential (mapped sector)." },
      { kind: "pyrite", level: "low", fr: "Risque pyrite faible — dalle d’origine, aucun soulèvement déclaré.", en: "Low pyrite risk — original slab, no heaving declared." },
      { kind: "oil", level: "none", fr: "Aucun réservoir d’huile actuel ou passé déclaré.", en: "No current or former oil tank declared." },
      { kind: "heat", level: "moderate", fr: "Îlot de chaleur modéré — faible canopée sur la rue.", en: "Moderate heat island — low street tree canopy." },
      { kind: "noise", level: "low", fr: "Bruit faible — rue résidentielle, loin des grands axes.", en: "Low noise — residential street, away from arteries." },
    ],
    amenities: [
      { type: "resto", items: [["L’Express", 210], ["Au Pied de Cochon", 350], ["Pizzeria Napoletana", 480]] },
      { type: "cafe", items: [["Café Olimpico", 260], ["Larue & Fils", 190]] },
      { type: "cinema", items: [["Cinéma du Parc", 900], ["Cinéma Beaubien", 1400]] },
      { type: "grocery", items: [["Provigo", 300], ["Marché Jean-Talon", 1600]] },
      { type: "park", items: [["Parc La Fontaine", 550], ["Parc Baldwin", 700]] },
      { type: "gym", items: [["Nautilus Plus", 620]] },
      { type: "pharma", items: [["Jean Coutu", 280]] },
    ],
    commute: {
      // travel minutes to downtown across the day, weekday vs weekend, by mode
      dest: "Centre-ville (Ville-Marie)",
      hours: [6, 7, 8, 9, 12, 15, 17, 18, 20],
      weekday: { car: [14, 22, 31, 26, 18, 19, 33, 30, 15], transit: [24, 26, 28, 27, 24, 24, 29, 28, 25], bike: [19, 19, 20, 19, 19, 19, 20, 20, 19] },
      weekend: { car: [13, 14, 16, 18, 20, 21, 19, 17, 14], transit: [26, 26, 27, 27, 28, 28, 27, 27, 28], bike: [19, 19, 19, 19, 20, 20, 19, 19, 19] },
    },
    soldComps: [
      ["4490, rue de Brébeuf", 529000, "2025-03", 1005], ["1233, rue Gilford", 562000, "2025-01", 1080], ["4602, rue Fabre", 505000, "2024-11", 970],
    ],
  },
  {
    id: "19052833",
    addr: "1183, rue Saint-Charles O.", area: "Vieux-Longueuil, Longueuil", muni: "longueuil",
    typeFr: "Cottage — 3 chambres", typeEn: "Cottage — 3 bedrooms",
    price: 615000, evalMun: 522300, sqft: 1610, year: 1958, beds: 3, baths: 1.5,
    parkFr: "Allée double + garage", parkEn: "Double driveway + garage",
    taxesMun: 4188, taxesScol: 512, condoFees: 0, heating: "gas", insuranceEst: 92,
    inclFr: "Cabanon, piscine hors terre (2020), thermopompe murale", inclEn: "Shed, above-ground pool (2020), wall heat pump",
    accent: ["#7A5A3F", "#B08A63"],
    rooms: [
      { icon: Home, fr: "Façade 1958", en: "1958 façade", d: "Terrain 5 200 pi²", g: ["#7A5A3F", "#B08A63"] },
      { icon: Sofa, fr: "Salon", en: "Living room", d: "Foyer au bois", g: ["#E4D9C6", "#C2AE8C"] },
      { icon: UtensilsCrossed, fr: "Cuisine", en: "Kitchen", d: "Armoires 2016", g: ["#DDE5E9", "#AABDC7"] },
      { icon: BedDouble, fr: "3 chambres", en: "3 bedrooms", d: "Étage", g: ["#D8DEE9", "#A9B4CC"] },
      { icon: Trees, fr: "Cour arrière", en: "Backyard", d: "Piscine + cabanon", g: ["#CFE2D0", "#8FB894"] },
      { icon: Car, fr: "Garage", en: "Garage", d: "Attaché", g: ["#D5D8DE", "#9BA3B0"] },
    ],
    plan: [
      { key: "salon", fr: "Salon", en: "Living room", x: 0, z: 0, w: 5, d: 4.2, col: "#EADFCB", furn: ["sofa", "coffee", "rug", "tv", "plant", "art"] },
      { key: "cuisine", fr: "Cuisine", en: "Kitchen", x: 5.2, z: 0, w: 4, d: 4.2, col: "#DDE5E9", furn: ["counter", "island", "stool"] },
      { key: "salle", fr: "Salle à manger", en: "Dining", x: 5.2, z: 4.4, w: 4, d: 3.2, col: "#E8E2D6", furn: ["table", "art"] },
      { key: "chP", fr: "Chambre principale", en: "Primary bedroom", x: 0, z: 4.4, w: 4.2, d: 3.6, col: "#DCE2EE", furn: ["bed", "night", "plant"] },
      { key: "ch2", fr: "Chambre 2", en: "Bedroom 2", x: 0, z: 8.2, w: 3, d: 3, col: "#E6E1EE", furn: ["bedS", "night"] },
      { key: "ch3", fr: "Chambre 3", en: "Bedroom 3", x: 3.2, z: 8.2, w: 3, d: 3, col: "#E1E8EE", furn: ["bedS"] },
      { key: "garage", fr: "Garage", en: "Garage", x: 9.4, z: 0, w: 3.2, d: 5.8, col: "#DADEE4", furn: ["car"] },
      { key: "cour", fr: "Cour", en: "Yard", x: 6.4, z: 8, w: 6, d: 3.4, col: "#CFE2D0", furn: ["pool", "shed"], open: true },
    ],
    dv: [
      { s: "D5", qFr: "Infiltrations d’eau", qEn: "Water infiltration", aFr: "Aucune infiltration déclarée par le vendeur.", aEn: "No infiltration declared by the seller." },
      { s: "D7", qFr: "Toiture", qEn: "Roof", aFr: "Bardeaux d’asphalte remplacés en 2017.", aEn: "Asphalt shingles replaced in 2017." },
      { s: "D10", qFr: "Réservoir d’huile", qEn: "Oil tank", aFr: "Ancien réservoir retiré en 2009 — attestation de retrait disponible.", aEn: "Former tank removed in 2009 — removal attestation on file." },
      { s: "D12", qFr: "Piscine", qEn: "Pool", aFr: "Hors terre, installée en 2020, conforme au règlement municipal.", aEn: "Above-ground, installed 2020, compliant with municipal bylaw." },
      { s: "D16", qFr: "Certificat de localisation", qEn: "Certificate of location", aFr: "Daté de 2022 — conforme, aucune servitude particulière.", aEn: "Dated 2022 — compliant, no unusual servitude." },
    ],
    fund: null,
    hood: {
      walk: 71, transit: 58, bike: 74, metroFr: "REM Panama — 2,1 km", metroEn: "Panama REM station — 2.1 km", bixi: 0,
      demo: {
        incomeMed: 81200, incomeBands: [["<40k", 14], ["40–80k", 34], ["80–120k", 31], [">120k", 21]],
        ageBands: [["0–14", 18], ["15–29", 18], ["30–44", 24], ["45–64", 26], ["65+", 14]],
        fam: 52, rent: 31, langs: [["Français", 88], ["Anglais", 6], ["Autres", 6]],
      },
      crime: [100, 97, 95, 90, 88, 84], crimeDelta: -16,
      incidents: [["Introduction par effraction", "Break-in", -22], ["Méfait", "Mischief", -11], ["Vol de véhicule", "Vehicle theft", -3]],
      schoolsFr: "École Saint-Jude (400 m) · CPE : attente ≈ 9 mois", schoolsEn: "Saint-Jude school (400 m) · CPE wait ≈ 9 months",
    },
    forecast: {
      organic: 0.026,
      drivers: [
        { kind: "transit", fr: "REM — station Panama en service, prolongement projeté", en: "REM — Panama station in service, extension planned", dist: "2.1 km", year: 2027, lo: 3, hi: 7, srcFr: "ARTM / actualité", srcEn: "ARTM / news" },
        { kind: "commercial", fr: "Redéveloppement du secteur Roland-Therrien", en: "Roland-Therrien sector redevelopment", dist: "1.4 km", year: 2029, lo: 2, hi: 4, srcFr: "Ville de Longueuil — PPU", srcEn: "City of Longueuil — special plan" },
        { kind: "risk", fr: "Hausse des primes d’assurance (secteur riverain élargi)", en: "Insurance premium rise (expanded riverine zone)", dist: "—", year: 2026, lo: -2, hi: 0, srcFr: "Actualité — révision cartographie", srcEn: "News — mapping revision" },
      ],
    },
    risks: [
      { kind: "flood", level: "moderate", fr: "Proximité du fleuve — vérifier la cote de crue 20-100 ans à l’adresse exacte.", en: "River proximity — verify 20–100 yr flood line at the exact address." },
      { kind: "radon", level: "moderate", fr: "Potentiel radon modéré — test recommandé (sous-sol habité).", en: "Moderate radon potential — testing recommended (finished basement)." },
      { kind: "pyrite", level: "low", fr: "Risque pyrite faible pour le secteur.", en: "Low pyrite risk for the sector." },
      { kind: "oil", level: "low", fr: "Ancien réservoir retiré en 2009 (attestation) — sol non testé.", en: "Former tank removed 2009 (attestation) — soil not tested." },
      { kind: "heat", level: "low", fr: "Faible îlot de chaleur — bonne canopée résidentielle.", en: "Low heat island — good residential canopy." },
      { kind: "noise", level: "low", fr: "Bruit faible — quartier résidentiel établi.", en: "Low noise — established residential area." },
    ],
    amenities: [
      { type: "resto", items: [["Lou Nissart", 400], ["Le Fin Gourmet", 650]] },
      { type: "cafe", items: [["Café Bloom", 350], ["Presse Café", 500]] },
      { type: "cinema", items: [["Cineplex Longueuil", 2600]] },
      { type: "grocery", items: [["IGA", 450], ["Metro", 900]] },
      { type: "park", items: [["Parc Saint-Mark", 300], ["Parc de la Cité", 2100]] },
      { type: "gym", items: [["Éconofitness", 800]] },
      { type: "pharma", items: [["Pharmaprix", 550]] },
    ],
    commute: {
      dest: "Centre-ville de Montréal",
      hours: [6, 7, 8, 9, 12, 15, 17, 18, 20],
      weekday: { car: [22, 31, 44, 38, 26, 27, 46, 41, 23], transit: [38, 40, 43, 42, 39, 39, 45, 43, 40], bike: [46, 46, 47, 46, 46, 46, 47, 47, 46] },
      weekend: { car: [20, 21, 24, 27, 30, 31, 28, 25, 21], transit: [42, 42, 43, 43, 44, 44, 43, 43, 44], bike: [46, 46, 46, 46, 47, 47, 46, 46, 46] },
    },
    soldComps: [
      ["1211, rue Sainte-Hélène", 592000, "2025-02", 1540], ["905, rue Grant", 638000, "2024-12", 1720], ["1450, rue Bourget", 575000, "2024-10", 1490],
    ],
  },
];
// [radar-platform] live-listings hook: the bridge supplies __VITRINE_MERGE__ to blend
// Matrix-parsed listings with these demo templates. No bridge -> pure demo.
const LISTINGS = (typeof window !== "undefined" && window.__VITRINE_MERGE__)
  ? window.__VITRINE_MERGE__(DEMO_LISTINGS) : DEMO_LISTINGS;


const BROKER = { name: "Julie Fortin", title_fr: "Courtière immobilière résidentielle", title_en: "Residential real estate broker", agency: "RE/MAX du Cartier" };
const DEMO_PROSPECT = { id: "p_live", name: "Marie-Claude Tremblay" };

/* ================================================================== */
/*  Telemetry: weights, scoring, signals                               */
/* ================================================================== */
const W = {
  visit: 3, section_view: 1, tour_view: 6, tour_room: 1, calc_use: 8, calc_adjust: 2,
  forecast_view: 5, forecast_refresh: 6, risk_view: 3, amenity_view: 2, commute_calc: 5,
  compare_view: 4, chat_message: 5, chat_escalation: 6, broker_message: 22,
  booking_request: 30, reaction_interested: 20, reaction_pass: -5,
  criteria_update: 7, designer_request: 18, shop_item: 3, theme_change: 1, plan_generate: 4, restage_compare: 3,
  note_saved: 6, centris_click: 5,
};
const TOPIC_W = { financement: 15, visite: 12, juridique: 8, taxes: 6, copropriete: 6, renovations: 5, chauffage: 4, inclusions: 3, stationnement: 3, quartier: 3, autre: 1 };
function scoreEvents(evts) {
  let s = 0, visits = 0;
  for (const e of evts) {
    if (e.type === "chat_topic") s += TOPIC_W[e.meta?.topic] ?? 1;
    else s += W[e.type] ?? 0;
    if (e.type === "visit") visits++;
  }
  if (visits >= 3) s += 10;
  return Math.max(0, Math.round(s));
}
const bucket = (s) => (s >= 60 ? "hot" : s >= 25 ? "warm" : "cool");
function signalsFor(evts, lang) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const has = (ty, pred) => evts.some((e) => e.type === ty && (!pred || pred(e)));
  const out = [];
  if (has("broker_message")) out.push({ txt: t("A écrit à la courtière", "Messaged broker"), hot: true });
  if (has("designer_request")) out.push({ txt: t("Designer demandé", "Designer requested"), hot: true });
  if (has("booking_request")) out.push({ txt: t("Demande de visite", "Showing request"), hot: true });
  if (has("chat_topic", (e) => e.meta?.topic === "financement")) out.push({ txt: t("Question financement", "Financing question"), hot: true });
  if (evts.filter((e) => e.type === "visit").length >= 3) out.push({ txt: t("3+ visites", "3+ visits"), hot: true });
  if (has("reaction_interested")) out.push({ txt: t("Intéressé·e", "Interested") });
  if (has("forecast_view")) out.push({ txt: t("A vu la prévision", "Viewed forecast") });
  if (has("criteria_update")) out.push({ txt: t("Critères mis à jour", "Criteria updated") });
  if (has("note_saved")) out.push({ txt: t("Notes personnelles", "Personal notes") });
  if (has("centris_click")) out.push({ txt: t("A ouvert la fiche Centris", "Opened the Centris sheet") });
  if (has("commute_calc")) out.push({ txt: t("Calcul trajet", "Commute check") });
  if (has("calc_use")) out.push({ txt: t("Calculatrice", "Calculator") });
  if (has("tour_view")) out.push({ txt: t("Visite 3D", "3D tour") });
  if (has("chat_escalation")) out.push({ txt: t("Question transmise", "Escalated question") });
  if (has("reaction_pass")) out.push({ txt: t("A passé", "Passed") });
  return out;
}
function seedEvents() {
  const h = 3600e3, now = Date.now();
  const mk = (pid, pname, lid, type, ago, meta) => ({ id: `${pid}-${type}-${ago}`, pid, pname, lid, type, ts: now - ago * h, meta: meta || null });
  return [
    mk("p_eric", "Éric Bouchard", "28374619", "visit", 52), mk("p_eric", "Éric Bouchard", "28374619", "visit", 29),
    mk("p_eric", "Éric Bouchard", "28374619", "visit", 5), mk("p_eric", "Éric Bouchard", "28374619", "tour_view", 29),
    mk("p_eric", "Éric Bouchard", "28374619", "calc_use", 28), mk("p_eric", "Éric Bouchard", "28374619", "forecast_view", 28),
    mk("p_eric", "Éric Bouchard", "28374619", "chat_topic", 27, { topic: "financement" }),
    mk("p_eric", "Éric Bouchard", "28374619", "broker_message", 4, { text: "Est-ce que le vendeur serait ouvert à une prise de possession en juillet?" }),
    mk("p_nadia", "Nadia Kaci", "19052833", "visit", 70), mk("p_nadia", "Nadia Kaci", "19052833", "visit", 20),
    mk("p_nadia", "Nadia Kaci", "19052833", "tour_view", 20), mk("p_nadia", "Nadia Kaci", "19052833", "commute_calc", 19),
    mk("p_nadia", "Nadia Kaci", "19052833", "calc_use", 19), mk("p_nadia", "Nadia Kaci", "19052833", "reaction_interested", 18),
    mk("p_simon", "Simon Lavallée", "28374619", "visit", 90), mk("p_simon", "Simon Lavallée", "28374619", "reaction_pass", 89, { reasons: ["prix"] }),
  ];
}

/* ================================================================== */
/*  Persistence: window.storage with in-memory fallback                */
/* ================================================================== */
const mem = {};
const store = {
  async get(k, d) { if (k in mem) return mem[k]; try { const r = await window.storage.get(k); return r ? JSON.parse(r.value) : d; } catch { return d; } },
  async set(k, v) { mem[k] = v; try { await window.storage.set(k, JSON.stringify(v)); } catch {} },
  async del(k) { delete mem[k]; try { await window.storage.delete(k); } catch {} },
};
const K = { events: "vitrine2_events", reactions: "vitrine2_reactions", chats: "vitrine2_chats", dms: "vitrine2_dms", prefs: "vitrine2_prefs", notes: "vitrine2_notes" };

/* ================================================================== */
/*  Claude API — grounded concierge + live forecast (web_search)       */
/* ================================================================== */
function conciergePrompt(l, lang) {
  const facts = {
    centris: l.id, adresse: `${l.addr}, ${l.area}`, type: l.typeFr, prix: l.price, evaluation_municipale: l.evalMun,
    superficie_pi2: l.sqft, annee: l.year, chambres: l.beds, sdb: l.baths, stationnement: l.parkFr,
    taxes_municipales_an: l.taxesMun, taxes_scolaires_an: l.taxesScol, frais_copro_mois: l.condoFees,
    chauffage: HEAT[l.heating].fr, inclusions: l.inclFr,
  };
  const dv = l.dv.map((d) => `[DV ${d.s}] ${d.qFr} : ${d.aFr}`).join("\n");
  return `Tu es l’assistant de propriété de ${BROKER.name}, ${BROKER.title_fr} (${BROKER.agency}), pour UNE seule inscription.

FICHE (source: fiche descriptive Centris) :
${JSON.stringify(facts, null, 1)}

DÉCLARATIONS DU VENDEUR (source: formulaire DV, extraits) :
${dv}

RÈGLES STRICTES :
1. Réponds UNIQUEMENT à partir des données ci-dessus. Cite ta source (« Selon la fiche… » ou « Selon la déclaration du vendeur, section D7… »).
2. Si l’information n’est pas dans les données : dis-le, ne devine JAMAIS, mets "escalate": true (transmis à ${BROKER.name}).
3. INTERDIT : conseil sur le prix d’offre ou la négociation, conseil juridique/fiscal/hypothécaire personnalisé, toute caractérisation des résidents du quartier. Redirige vers ${BROKER.name}.
4. Réponds dans la langue du dernier message (défaut : ${lang === "fr" ? "français" : "anglais"}). Maximum 110 mots. Ton chaleureux et précis.
5. Réponds SEULEMENT avec un objet JSON valide, sans backticks :
{"reply": "…", "escalate": true|false, "topics": ["…"]}
"topics" : 1 à 3 parmi : financement, taxes, copropriete, chauffage, renovations, inclusions, stationnement, quartier, visite, juridique, autre.`;
}
async function askConcierge(listing, lang, history, userText) {
  const msgs = history.slice(-12).map((m) => ({ role: m.role, content: m.text })).concat([{ role: "user", content: userText }]);
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, system: conciergePrompt(listing, lang), messages: msgs }),
  });
  const data = await res.json();
  const raw = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
  const clean = raw.replace(/```json|```/g, "").trim();
  try { const o = JSON.parse(clean); return { reply: o.reply || clean, escalate: !!o.escalate, topics: Array.isArray(o.topics) && o.topics.length ? o.topics : ["autre"] }; }
  catch { return { reply: clean || "…", escalate: false, topics: ["autre"] }; }
}
// Live forecast refresh: search recent news for developments near the address, return typed drivers.
async function refreshForecast(listing, lang) {
  const prompt = `Recherche des nouvelles RÉCENTES (transport, zonage, grands projets, construction, risques) susceptibles d’influencer la valeur immobilière près de « ${listing.addr}, ${listing.area} » (Québec).
Résume 2 à 4 facteurs concrets. Pour chacun estime un impact prudent sur les prix locaux, en pourcentage (négatif possible).
Réponds SEULEMENT avec un objet JSON valide, sans backticks :
{"drivers":[{"kind":"transit|zoning|commercial|risk","label_fr":"…","label_en":"…","dist":"~x km|—","year":2029,"lo":2,"hi":5,"src":"source"}],"note_fr":"mise en garde brève","note_en":"brief caveat"}`;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6", max_tokens: 1200,
      messages: [{ role: "user", content: prompt }],
      tools: [{ type: "web_search_20250305", name: "web_search" }],
    }),
  });
  const data = await res.json();
  const raw = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
  const clean = raw.replace(/```json|```/g, "").trim();
  const m = clean.match(/\{[\s\S]*\}/);
  const obj = JSON.parse(m ? m[0] : clean);
  const drivers = (obj.drivers || []).slice(0, 4).map((d) => ({
    kind: ["transit", "zoning", "commercial", "risk"].includes(d.kind) ? d.kind : "commercial",
    fr: d.label_fr || d.label_en || "Facteur", en: d.label_en || d.label_fr || "Factor",
    dist: d.dist || "—", year: Number(d.year) || (new Date().getFullYear() + 3),
    lo: Number(d.lo) || 0, hi: Number(d.hi) || 0, srcFr: d.src || "Actualité", srcEn: d.src || "News", live: true,
  }));
  return { drivers, noteFr: obj.note_fr || "", noteEn: obj.note_en || "" };
}

/* ================================================================== */
/*  Shared UI + SVG charts                                             */
/* ================================================================== */
const Eyebrow = ({ children }) => (
  <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: C.sub }}>{children}</div>
);
const SectionHead = ({ icon: Icon, title, note }) => (
  <div className="flex items-baseline gap-2 mb-3">
    <Icon size={17} style={{ color: C.metro, transform: "translateY(2px)" }} />
    <h2 style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 20, color: C.ink, margin: 0 }}>{title}</h2>
    {note && <span style={{ fontFamily: F.mono, fontSize: 10.5, color: C.sub }}>{note}</span>}
  </div>
);
const Pill = ({ children, tone = "neutral" }) => {
  const tones = {
    neutral: { bg: C.snow, fg: C.sub, bd: C.line }, hot: { bg: "#FBEAD9", fg: "#8A4B12", bd: "#F0CFA6" },
    blue: { bg: C.metroSoft, fg: C.metro, bd: "#C9D9F2" }, green: { bg: C.spruceSoft, fg: C.spruce, bd: "#C4E0D2" },
    amber: { bg: C.ochreSoft, fg: "#8A5A12", bd: "#EBD3A0" }, red: { bg: C.dangerSoft, fg: C.danger, bd: "#E7C3B4" },
  }[tone];
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: tones.bg, color: tones.fg, border: `1px solid ${tones.bd}`, fontSize: 11.5, fontWeight: 600 }}>{children}</span>
  );
};
const Sparkline = ({ data, color, w = 120, h = 34 }) => {
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * (w - 4) + 2},${h - 3 - ((v - min) / (max - min || 1)) * (h - 8)}`).join(" ");
  return <svg width={w} height={h} aria-hidden="true"><polyline points={pts} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
};
// Line chart with low/high band + labelled x years
function BandChart({ rows, lang, height = 150 }) {
  const w = 320, h = height, padL = 44, padR = 8, padT = 10, padB = 22;
  const ys = rows.flatMap((r) => [r.low, r.high]);
  const min = Math.min(...ys) * 0.995, max = Math.max(...ys) * 1.005;
  const X = (i) => padL + (i / (rows.length - 1)) * (w - padL - padR);
  const Y = (v) => padT + (1 - (v - min) / (max - min || 1)) * (h - padT - padB);
  const line = (key) => rows.map((r, i) => `${X(i)},${Y(r[key])}`).join(" ");
  const band = rows.map((r, i) => `${X(i)},${Y(r.high)}`).concat(rows.slice().reverse().map((r, i) => `${X(rows.length - 1 - i)},${Y(r.low)}`)).join(" ");
  const ticks = [min, (min + max) / 2, max];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} role="img" aria-label="Projection de prix">
      {ticks.map((tk, i) => (
        <g key={i}>
          <line x1={padL} x2={w - padR} y1={Y(tk)} y2={Y(tk)} stroke={C.line} strokeWidth="1" />
          <text x={padL - 6} y={Y(tk) + 3} textAnchor="end" style={{ fontFamily: F.mono, fontSize: 8.5, fill: C.sub }}>{fmtK(tk, lang)}</text>
        </g>
      ))}
      <polygon points={band} fill={C.metro} opacity="0.10" />
      <polyline points={line("high")} fill="none" stroke={C.metro} strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <polyline points={line("low")} fill="none" stroke={C.metro} strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <polyline points={line("mid")} fill="none" stroke={C.metro} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {rows.map((r, i) => (i % 1 === 0 ? <text key={i} x={X(i)} y={h - 6} textAnchor="middle" style={{ fontFamily: F.mono, fontSize: 8.5, fill: C.sub }}>{`’${String(r.yr).slice(2)}`}</text> : null))}
    </svg>
  );
}
// Grouped bars for commute minutes over the day
function CommuteChart({ hours, series, lang, height = 140 }) {
  const w = 320, h = height, padL = 26, padR = 6, padT = 8, padB = 20;
  const all = series.flatMap((s) => s.values);
  const max = Math.max(...all) * 1.1;
  const groupW = (w - padL - padR) / hours.length;
  const barW = Math.min(9, (groupW - 4) / series.length);
  const Y = (v) => padT + (1 - v / max) * (h - padT - padB);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} role="img" aria-label="Temps de trajet">
      {[0, max / 2, max].map((tk, i) => (
        <g key={i}><line x1={padL} x2={w - padR} y1={Y(tk)} y2={Y(tk)} stroke={C.line} /><text x={padL - 4} y={Y(tk) + 3} textAnchor="end" style={{ fontFamily: F.mono, fontSize: 8, fill: C.sub }}>{Math.round(tk)}</text></g>
      ))}
      {hours.map((hr, gi) => (
        <g key={gi}>
          {series.map((s, si) => {
            const x = padL + gi * groupW + (groupW - barW * series.length) / 2 + si * barW;
            const y = Y(s.values[gi]);
            return <rect key={si} x={x} y={y} width={barW - 1.5} height={h - padB - y} rx="1.5" fill={s.color} />;
          })}
          <text x={padL + gi * groupW + groupW / 2} y={h - 6} textAnchor="middle" style={{ fontFamily: F.mono, fontSize: 8, fill: C.sub }}>{hr}h</text>
        </g>
      ))}
    </svg>
  );
}
const StackBar = ({ segments }) => (
  <div>
    <div className="flex w-full rounded-full overflow-hidden" style={{ height: 12, border: `1px solid ${C.line}` }}>
      {segments.map((s, i) => <div key={i} style={{ width: `${s.pct}%`, background: s.color }} title={`${s.label} ${s.pct}%`} />)}
    </div>
    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
      {segments.map((s, i) => (
        <span key={i} className="inline-flex items-center gap-1" style={{ fontSize: 11, color: C.sub }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color }} /> {s.label} <b style={{ fontFamily: F.mono, color: C.ink }}>{s.pct}%</b>
        </span>
      ))}
    </div>
  </div>
);
const SliderRow = ({ label, val, set, min, max, step, suffix, field, mark }) => (
  <label className="block">
    <div className="flex justify-between" style={{ fontSize: 12.5, color: C.sub, marginBottom: 2 }}>
      <span>{label}</span><span style={{ fontFamily: F.mono, color: C.ink, fontWeight: 600 }}>{val}{suffix}</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={val} className="w-full"
      onChange={(e) => { set(Number(e.target.value)); mark && mark(field); }} />
  </label>
);
const Modal = ({ onClose, children, label }) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" style={{ background: "rgba(17,27,46,.55)" }} role="dialog" aria-label={label}>
    <div className="w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl p-5 fade-up" style={{ background: C.paper, maxHeight: "88vh", overflowY: "auto" }}>
      <div className="flex justify-end"><button onClick={onClose} aria-label="Fermer" className="p-1 rounded-md" style={{ color: C.sub }}><X size={18} /></button></div>
      {children}
    </div>
  </div>
);
const Disclosure = ({ text }) => (
  <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: "rgba(17,27,46,.72)", color: "#fff", fontSize: 10.5, fontWeight: 600, backdropFilter: "blur(4px)" }}>
    <Sparkles size={11} style={{ color: C.ochre }} /> {text}
  </div>
);

/* ================================================================== */
/*  3D dollhouse tour (Three.js r128) — AI-reconstructed, guided       */
/* ================================================================== */
/* ---- Procedural textures (planks, deck, grass, sky) ---- */
const TEXCACHE = {};
function makeCanvasTex(key, draw, w = 256, h = 256, rep = [1, 1]) {
  if (TEXCACHE[key]) return TEXCACHE[key];
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]);
  TEXCACHE[key] = t; return t;
}
function texPlank() {
  return makeCanvasTex("plank", (g, w, h) => {
    g.fillStyle = "#f2ede4"; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) {
      const v = 226 + Math.floor(Math.random() * 20);
      g.fillStyle = `rgb(${v},${v - 7},${v - 16})`; g.fillRect(0, y, w, 30);
      g.fillStyle = "rgba(120,100,78,.38)"; g.fillRect(0, y + 30, w, 2);
      for (let x = Math.random() * 70; x < w; x += 90 + Math.random() * 70) g.fillRect(x, y, 2, 30);
    }
  }, 256, 256, [2, 2]);
}
function texDeck() {
  return makeCanvasTex("deck", (g, w, h) => {
    g.fillStyle = "#d9d2c2"; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 42) {
      const v = 196 + Math.floor(Math.random() * 18);
      g.fillStyle = `rgb(${v},${v - 10},${v - 24})`; g.fillRect(0, y, w, 38);
      g.fillStyle = "rgba(90,74,56,.4)"; g.fillRect(0, y + 38, w, 4);
    }
  }, 256, 256, [1.6, 1.6]);
}
function texGrass() {
  return makeCanvasTex("grass", (g, w, h) => {
    g.fillStyle = "#b8d3ac"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      const shades = ["#a7c79a", "#c2dcb5", "#9dbf8f", "#b0cda2"];
      g.fillStyle = shades[i % 4];
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2 + Math.random() * 2);
    }
  }, 256, 256, [16, 16]);
}
function texSky(mode) {
  return makeCanvasTex("sky-" + mode, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    if (mode === "dusk") { gr.addColorStop(0, "#141d3f"); gr.addColorStop(0.55, "#3a3a63"); gr.addColorStop(0.82, "#b65a33"); gr.addColorStop(1, "#e8925a"); }
    else { gr.addColorStop(0, "#9cc4ea"); gr.addColorStop(0.6, "#cfe3f5"); gr.addColorStop(1, "#eef6fc"); }
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    if (mode === "dusk") {
      g.fillStyle = "rgba(255,255,255,.85)";
      for (let i = 0; i < 60; i++) g.fillRect(Math.random() * w, Math.random() * h * 0.5, 1.4, 1.4);
      g.fillStyle = "#f4ead2"; g.beginPath(); g.arc(w * 0.78, h * 0.2, 13, 0, 7); g.fill();
    } else {
      const sun = g.createRadialGradient(w * 0.78, h * 0.22, 4, w * 0.78, h * 0.22, 60);
      sun.addColorStop(0, "rgba(255,246,214,.95)"); sun.addColorStop(1, "rgba(255,246,214,0)");
      g.fillStyle = sun; g.fillRect(0, 0, w, h);
    }
  }, 512, 256);
}

function buildFurniture(type, rw, rd) {
  const g = new THREE.Group();
  const mat = (c, opts = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.82, metalness: 0.03, ...opts });
  const box = (w, h, d, c, x = 0, y = 0, z = 0, role = "wood", o) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c, o)); m.position.set(x, y + h / 2, z); m.castShadow = true; m.userData = { role, base: c }; g.add(m); return m; };
  const cyl = (r1, r2, h, c, x = 0, y = 0, z = 0, role = "wood", o) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, 20), mat(c, o)); m.position.set(x, y + h / 2, z); m.castShadow = true; m.userData = { role, base: c }; g.add(m); return m; };
  switch (type) {
    case "sofa": box(2.0, 0.42, 0.85, "#8FA0BC", 0, 0, -rd / 2 + 0.62, "fabric"); box(2.0, 0.52, 0.2, "#7C8DAA", 0, 0.42, -rd / 2 + 0.3, "fabric"); box(0.22, 0.5, 0.85, "#7C8DAA", -1.0, 0.1, -rd / 2 + 0.62, "fabric"); box(0.22, 0.5, 0.85, "#7C8DAA", 1.0, 0.1, -rd / 2 + 0.62, "fabric"); box(0.5, 0.12, 0.4, "#EAEFF6", -0.4, 0.44, -rd / 2 + 0.58, "accent"); box(0.5, 0.12, 0.4, "#DCE4F0", 0.42, 0.44, -rd / 2 + 0.58, "accent"); break;
    case "coffee": box(0.95, 0.06, 0.52, "#B79B77", 0, 0.26, -0.1, "wood"); [[-0.4, -0.2], [0.4, -0.2], [-0.4, 0.2], [0.4, 0.2]].forEach(([x, z]) => box(0.05, 0.26, 0.05, "#8C7454", x, 0, z - 0.1, "wood")); box(0.3, 0.03, 0.2, "#C8D4E4", 0.1, 0.32, -0.1, "accent"); break;
    case "rug": box(2.5, 0.02, 1.6, "#C7BEA8", 0, 0, 0, "fabric"); box(2.2, 0.021, 1.3, "#D6CDb8".replace("b","B"), 0, 0.002, 0, "fabric"); break;
    case "tv": box(1.25, 0.42, 0.34, "#9A9FA8", 0, 0, rd / 2 - 0.36, "wood"); box(1.35, 0.78, 0.06, "#14171C", 0, 0.55, rd / 2 - 0.3, "screen", { roughness: 0.35 }); break;
    case "plant": cyl(0.15, 0.11, 0.28, "#B0714F", rw / 2 - 0.45, 0, rd / 2 - 0.45, "wood"); cyl(0.02, 0.02, 0.35, "#5E7A52", rw / 2 - 0.45, 0.28, rd / 2 - 0.45, "leaf"); ["#4F8A5B", "#5E9A68", "#447D50"].forEach((c, i) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.16 - i * 0.02, 12, 10), mat(c)); m.position.set(rw / 2 - 0.45 + (i - 1) * 0.09, 0.72 + i * 0.1, rd / 2 - 0.45 + (i - 1) * 0.05); m.castShadow = true; m.userData = { role: "leaf", base: c }; g.add(m); }); break;
    case "art": box(0.95, 0.7, 0.05, "#FFFFFF", -0.6, 1.05, -rd / 2 + 0.1, "accent"); box(0.82, 0.57, 0.055, "#7FA0CE", -0.6, 1.115, -rd / 2 + 0.1, "art"); break;
    case "counter": box(rw - 1.0, 0.52, 0.55, "#D8CBB0", 0, 0, rd / 2 - 0.4, "wood"); box(rw - 1.0, 0.07, 0.62, "#B9A886", 0, 0.52, rd / 2 - 0.4, "accent"); box(0.5, 0.4, 0.5, "#C9CFD8", -rw / 4, 0.6, rd / 2 - 0.4, "metal", { metalness: 0.4, roughness: 0.45 }); break;
    case "island": box(1.45, 0.55, 0.72, "#C9B79A", 0, 0, 0, "wood"); box(1.55, 0.06, 0.82, "#EDE7DA", 0, 0.55, 0, "accent"); break;
    case "stool": cyl(0.17, 0.15, 0.1, "#C9B79A", -0.4, 0.5, 0.62, "wood"); cyl(0.03, 0.03, 0.5, "#8C7454", -0.4, 0, 0.62, "wood"); cyl(0.17, 0.15, 0.1, "#C9B79A", 0.4, 0.5, 0.62, "wood"); cyl(0.03, 0.03, 0.5, "#8C7454", 0.4, 0, 0.62, "wood"); break;
    case "bed": box(1.6, 0.32, 2.0, "#9AA6BC", 0, 0.12, 0, "fabric"); box(1.66, 0.14, 2.06, "#C8B79A", 0, 0, 0, "wood"); box(1.6, 0.6, 0.14, "#7E8AA2", 0, 0.3, -0.98, "wood"); box(0.62, 0.15, 0.42, "#EAEFF6", -0.42, 0.44, -0.68, "accent"); box(0.62, 0.15, 0.42, "#EAEFF6", 0.42, 0.44, -0.68, "accent"); box(1.6, 0.06, 0.8, "#B9C6D8", 0, 0.44, 0.55, "fabric"); break;
    case "bedS": box(1.1, 0.3, 1.9, "#A6A0BC", 0, 0.1, 0, "fabric"); box(1.16, 0.12, 1.96, "#C8B79A", 0, 0, 0, "wood"); box(1.1, 0.52, 0.13, "#8B85A6", 0, 0.28, -0.92, "wood"); box(0.55, 0.14, 0.38, "#EFF2F8", 0, 0.4, -0.62, "accent"); break;
    case "night": box(0.45, 0.42, 0.4, "#B7A98C", 0, 0, 0, "wood"); cyl(0.09, 0.11, 0.06, "#E8DFC8", 0, 0.42, 0, "accent"); cyl(0.015, 0.015, 0.16, "#8C7454", 0, 0.48, 0, "wood"); cyl(0.11, 0.13, 0.14, "#F2E9D2", 0, 0.62, 0, "lamp", { emissive: "#f5e6bd", emissiveIntensity: 0.15 }); break;
    case "tub": box(1.5, 0.5, 0.72, "#E7EFEA", 0, 0, 0, "fixture", { roughness: 0.35 }); box(1.3, 0.05, 0.52, "#CFE0EA", 0, 0.42, 0, "fixture", { roughness: 0.2 }); break;
    case "vanity": box(0.82, 0.55, 0.46, "#CBD6D0", 0, 0, 0, "wood"); box(0.86, 0.05, 0.5, "#EDF2F0", 0, 0.55, 0, "fixture"); break;
    case "mirror": box(0.62, 0.82, 0.04, "#DCE9F2", 0.7, 1.0, -rd / 2 + 0.09, "fixture", { roughness: 0.15, metalness: 0.25 }); break;
    case "table": box(1.5, 0.07, 0.92, "#B79B77", 0, 0.62, 0, "wood"); [[-0.66, -0.4], [0.66, -0.4], [-0.66, 0.4], [0.66, 0.4]].forEach(([x, z]) => box(0.07, 0.62, 0.07, "#8C7454", x, 0, z, "wood")); box(0.34, 0.05, 0.34, "#DCE4F0", 0, 0.69, 0, "accent"); break;
    case "chair": box(0.45, 0.45, 0.45, "#9BB0A2", -0.5, 0, 0, "fabric"); box(0.45, 0.42, 0.1, "#89A092", -0.5, 0.45, -0.18, "fabric"); break;
    case "chair2": box(0.45, 0.45, 0.45, "#9BB0A2", 0.5, 0, 0, "fabric"); box(0.45, 0.42, 0.1, "#89A092", 0.5, 0.45, -0.18, "fabric"); break;
    case "car": box(1.7, 0.55, 3.7, "#7E8794", 0, 0.18, 0, "metal", { metalness: 0.5, roughness: 0.4 }); box(1.5, 0.5, 1.9, "#99A2AF", 0, 0.7, -0.2, "metal", { metalness: 0.5, roughness: 0.35 }); [[-0.78, 1.2], [0.78, 1.2], [-0.78, -1.2], [0.78, -1.2]].forEach(([x, z]) => { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.16, 16), mat("#23262B", { roughness: 0.9 })); w.rotation.z = Math.PI / 2; w.position.set(x, 0.26, z); w.userData = { role: "metal", base: "#23262B" }; g.add(w); }); break;
    case "pool": { const rim = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.55, 26), mat("#B9C2CC")); rim.position.y = 0.275; rim.userData = { role: "metal", base: "#B9C2CC" }; g.add(rim); const w = new THREE.Mesh(new THREE.CylinderGeometry(1.36, 1.36, 0.08, 26), mat("#5FA9C9", { roughness: 0.15, metalness: 0.1 })); w.position.y = 0.54; w.userData = { role: "water", base: "#5FA9C9" }; g.add(w); break; }
    case "shed": box(1.6, 1.3, 1.4, "#B7A98C", rw / 2 - 1.2, 0, -rd / 2 + 1.0, "wood"); box(1.8, 0.28, 1.6, "#8C7454", rw / 2 - 1.2, 1.3, -rd / 2 + 1.0, "wood"); break;
    default: break;
  }
  g.userData = { shopKey: type };
  return g;
}

/* ---- Theme application (shared by effect + before/after capture) ---- */
function applyThemeToScene(s, themeKey) {
  const th = THEMES[themeKey] || THEMES.classique;
  s.scene.traverse((o) => {
    if (!o.isMesh || !o.userData || !o.userData.role) return;
    const role = o.userData.role;
    if (role === "floor" || role === "leaf" || role === "water" || role === "screen" || role === "lamp" || role === "trunk") return;
    const target = themeKey === "classique" ? o.userData.base : (th[role] || (role === "art" ? th.accent : null) || o.userData.base);
    if (o.material && o.material.color) o.material.color.set(target);
  });
  if (s.wallMat) s.wallMat.color.set(themeKey === "classique" ? "#F1F3F7" : th.wall);
}

function makeTree(kind) {
  const g = new THREE.Group();
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.95, ...o });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 1.0, 8), mat("#7a5c40"));
  trunk.position.y = 0.5; trunk.castShadow = true; trunk.userData = { role: "trunk", base: "#7a5c40" }; g.add(trunk);
  const leaves = [];
  if (kind === "spruce") {
    ["#2F6B4F", "#38795A", "#2A5E45"].forEach((c, i) => {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.9 - i * 0.22, 1.1, 10), mat(c));
      cone.position.y = 1.2 + i * 0.7; cone.castShadow = true; cone.userData = { role: "leaf", base: c };
      g.add(cone); leaves.push(cone);
    });
  } else {
    [[0, 1.5, 0, 0.72], [-0.4, 1.25, 0.15, 0.5], [0.42, 1.3, -0.1, 0.52]].forEach(([x, y, z, r], i) => {
      const c = ["#6FA36B", "#7FB279", "#639661"][i];
      const s2 = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), mat(c));
      s2.position.set(x, y, z); s2.castShadow = true; s2.userData = { role: "leaf", base: c };
      g.add(s2); leaves.push(s2);
    });
  }
  g.userData.leaves = leaves;
  return g;
}

function HouseTour3D({ listing, lang, onEvent, theme = "classique", onThemeChange, onDesigner }) {
  const mountRef = useRef(null);
  const S = useRef({});
  const [room, setRoom] = useState(0);
  const [mode, setMode] = useState("orbit");
  const [tod, setTod] = useState("day");
  const [autoplay, setAutoplay] = useState(!prefersReduced);
  const [furnished, setFurnished] = useState(true);
  const [ready, setReady] = useState(false);
  const [planOverride, setPlanOverride] = useState(null);
  const [genOpen, setGenOpen] = useState(false);
  const [shop, setShop] = useState(null);
  const [cmp, setCmp] = useState(null);
  const [cmpPos, setCmpPos] = useState(50);
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const plan = planOverride ? planOverride.plan : listing.plan;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const width = mount.clientWidth, height = 360;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 260);
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.06;
    mount.appendChild(renderer.domElement);
    renderer.domElement.className = "tour-canvas";
    renderer.domElement.style.borderRadius = "12px";
    renderer.domElement.style.cursor = "grab";

    // bounds
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    plan.forEach((r) => { minX = Math.min(minX, r.x); maxX = Math.max(maxX, r.x + r.w); minZ = Math.min(minZ, r.z); maxZ = Math.max(maxZ, r.z + r.d); });
    const ox = (minX + maxX) / 2, oz = (minZ + maxZ) / 2;
    const spanX = maxX - minX, spanZ = maxZ - minZ;
    const diag = Math.sqrt(spanX * spanX + spanZ * spanZ);
    const W2 = (v) => v - ox, D2 = (v) => v - oz;

    // sky + ground
    const sky = new THREE.Mesh(new THREE.SphereGeometry(110, 24, 16), new THREE.MeshBasicMaterial({ map: texSky("day"), side: THREE.BackSide }));
    scene.add(sky);
    const groundMat = new THREE.MeshStandardMaterial({ map: texGrass(), color: "#ffffff", roughness: 1 });
    const ground = new THREE.Mesh(new THREE.CircleGeometry(70, 48), groundMat);
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; ground.receiveShadow = true; scene.add(ground);
    // terrasse pad under the house
    const pad = new THREE.Mesh(new THREE.BoxGeometry(spanX + 1.6, 0.08, spanZ + 1.6), new THREE.MeshStandardMaterial({ color: "#D8DCE2", roughness: 0.95 }));
    pad.position.y = -0.04; pad.receiveShadow = true; scene.add(pad);

    const furnGroups = [], roomLights = [], bulbs = [];
    const wallMat = new THREE.MeshStandardMaterial({ color: "#F1F3F7", roughness: 0.95 });
    const plankTex = texPlank(), deckTex = texDeck();
    plan.forEach((r) => {
      const cx = W2(r.x + r.w / 2), cz = D2(r.z + r.d / 2);
      const fmat = new THREE.MeshStandardMaterial({ map: r.open ? deckTex : plankTex, color: r.col, roughness: 0.9 });
      const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, 0.07, r.d), fmat);
      floor.position.set(cx, 0.035, cz); floor.receiveShadow = true; floor.userData = { role: "floor", base: r.col }; scene.add(floor);
      if (!r.open) {
        const wh = 1.32, tk = 0.09;
        const seg = (w, d, x, z) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, wh, d), wallMat); m.position.set(x, wh / 2, z); m.castShadow = true; m.receiveShadow = true; scene.add(m); const cap = new THREE.Mesh(new THREE.BoxGeometry(w + 0.02, 0.045, d + 0.02), new THREE.MeshStandardMaterial({ color: "#D7DCE4", roughness: 0.9 })); cap.position.set(x, wh + 0.02, z); scene.add(cap); };
        seg(r.w, tk, cx, cz - r.d / 2); seg(r.w, tk, cx, cz + r.d / 2);
        seg(tk, r.d, cx - r.w / 2, cz); seg(tk, r.d, cx + r.w / 2, cz);
        // suspension + lumière chaude (crépuscule)
        const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.8, 6), new THREE.MeshStandardMaterial({ color: "#3a3f48" }));
        cord.position.set(cx, 2.15, cz); scene.add(cord);
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), new THREE.MeshStandardMaterial({ color: "#f7ecd4", emissive: "#ffd9a0", emissiveIntensity: 0.12 }));
        bulb.position.set(cx, 1.72, cz); scene.add(bulb); bulbs.push(bulb);
        const pl = new THREE.PointLight("#ffd9a0", 0, 7, 2); pl.position.set(cx, 1.7, cz); scene.add(pl); roomLights.push(pl);
      } else {
        const rail = new THREE.MeshStandardMaterial({ color: "#C4CCD8" });
        for (let i = 0; i <= 4; i++) { const pp = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.7, 0.06), rail); pp.position.set(cx - r.w / 2 + (i / 4) * r.w, 0.35, cz + r.d / 2); scene.add(pp); }
        const bar = new THREE.Mesh(new THREE.BoxGeometry(r.w + 0.06, 0.05, 0.06), rail); bar.position.set(cx, 0.72, cz + r.d / 2); scene.add(bar);
      }
      const fg = new THREE.Group();
      (r.furn || []).forEach((ft) => fg.add(buildFurniture(ft, r.w, r.d)));
      fg.position.set(cx, 0.07, cz);
      scene.add(fg); furnGroups.push(fg);
    });

    // arbres autour
    const trees = [];
    const ringR = Math.max(spanX, spanZ) / 2 + 3.2;
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + 0.35;
      const tr = makeTree(i % 3 === 0 ? "leafy" : "spruce");
      const rr = ringR + (i % 2) * 1.6;
      tr.position.set(Math.cos(a) * rr, 0, Math.sin(a) * rr);
      const sc = 0.85 + (i % 3) * 0.2; tr.scale.set(sc, sc, sc);
      scene.add(tr); trees.push(tr);
    }

    // lumières
    const hemi = new THREE.HemisphereLight("#ffffff", "#7d8695", 0.85);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight("#fff2dc", 1.0);
    sun.position.set(9, 15, 7); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 70;
    sun.shadow.camera.left = -22; sun.shadow.camera.right = 22; sun.shadow.camera.top = 22; sun.shadow.camera.bottom = -22;
    scene.add(sun);
    const fill = new THREE.DirectionalLight("#dfe9f5", 0.25); fill.position.set(-8, 6, -6); scene.add(fill);

    const waypoints = plan.map((r) => new THREE.Vector3(W2(r.x + r.w / 2), 1.45, D2(r.z + r.d / 2)));
    const camPos = new THREE.Vector3(diag * 0.9 + 2, diag * 0.55 + 1.5, diag * 0.9 + 2);
    camera.position.copy(camPos);

    S.current = { scene, camera, renderer, waypoints, camPos, hemi, sun, fill, sky, groundMat, furnGroups, roomLights, bulbs, trees, wallMat, diag,
      yaw: 0.8, pitch: -0.1, targetIdx: 0, mode: "orbit", autoplay: !prefersReduced, dragging: false, moved: 0, downT: 0, lastX: 0, lastY: 0, frames: 0, raf: 0, mount };

    const el = renderer.domElement;
    const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
    const down = (e) => { const p = e.touches ? e.touches[0] : e; S.current.dragging = true; S.current.moved = 0; S.current.downT = Date.now(); S.current.lastX = p.clientX; S.current.lastY = p.clientY; el.style.cursor = "grabbing"; };
    const move = (e) => { if (!S.current.dragging) return; const p = e.touches ? e.touches[0] : e; const dx = p.clientX - S.current.lastX, dy = p.clientY - S.current.lastY; S.current.moved += Math.abs(dx) + Math.abs(dy); if (S.current.moved > 6 && S.current.autoplay) { S.current.autoplay = false; setAutoplay(false); } S.current.yaw -= dx * 0.005; S.current.pitch = Math.max(-0.65, Math.min(0.4, S.current.pitch - dy * 0.005)); S.current.lastX = p.clientX; S.current.lastY = p.clientY; };
    const up = (e) => {
      const s = S.current; const wasTap = s.dragging && s.moved < 7 && Date.now() - s.downT < 500;
      s.dragging = false; el.style.cursor = "grab";
      if (!wasTap) return;
      const r = el.getBoundingClientRect();
      const cx2 = e.changedTouches ? e.changedTouches[0].clientX : e.clientX, cy2 = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
      if (cx2 < r.left || cx2 > r.right || cy2 < r.top || cy2 > r.bottom) return;
      ndc.set(((cx2 - r.left) / r.width) * 2 - 1, -((cy2 - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, s.camera);
      const hits = ray.intersectObjects(s.scene.children, true);
      for (const h of hits) {
        let o = h.object;
        while (o && !(o.userData && o.userData.shopKey)) o = o.parent;
        if (o && SHOP_CATALOG[o.userData.shopKey]) { setShop(o.userData.shopKey); onEvent && onEvent("shop_item", { item: o.userData.shopKey }); return; }
      }
      setShop(null);
    };
    el.addEventListener("pointerdown", down); window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);

    const animate = () => {
      const s = S.current; s.frames++;
      // arbres qui respirent
      if (!prefersReduced && s.frames % 2 === 0) s.trees.forEach((tr, i) => { tr.rotation.z = Math.sin(s.frames * 0.008 + i * 1.7) * 0.016; });
      if (s.mode === "orbit") {
        if (s.autoplay && !s.dragging) s.yaw += 0.0032;
        const hF = Math.max(0.22, Math.min(1.05, 0.5 - s.pitch));
        const R = s.diag * 0.92 + 2.2;
        const target = new THREE.Vector3(Math.sin(s.yaw) * R, s.diag * hF + 1.2, Math.cos(s.yaw) * R);
        s.camPos.lerp(target, 0.06);
        s.camera.position.copy(s.camPos);
        s.camera.lookAt(0, 0.5, 0);
      } else {
        if (s.autoplay && !s.dragging) {
          s.yaw += 0.0018;
          if (s.frames % 300 === 0) { s.targetIdx = (s.targetIdx + 1) % s.waypoints.length; setRoom(s.targetIdx); }
        }
        const target = s.waypoints[s.targetIdx];
        s.camPos.lerp(target, 0.03);
        const dirX = Math.sin(s.yaw) * Math.cos(s.pitch), dirY = Math.sin(s.pitch), dirZ = Math.cos(s.yaw) * Math.cos(s.pitch);
        s.camera.position.copy(s.camPos);
        s.camera.lookAt(s.camPos.x + dirX, s.camPos.y + dirY, s.camPos.z + dirZ);
      }
      s.renderer.render(s.scene, s.camera);
      s.raf = requestAnimationFrame(animate);
    };
    animate();
    setReady(true);

    const ro = new ResizeObserver(() => {
      const wq = mount.clientWidth; renderer.setSize(wq, height); camera.aspect = wq / height; camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(S.current.raf); ro.disconnect();
      el.removeEventListener("pointerdown", down); window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up);
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { const m = o.material; (Array.isArray(m) ? m : [m]).forEach((x) => x.dispose()); } });
      renderer.dispose(); if (el.parentNode) el.parentNode.removeChild(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listing.id, planOverride]);

  useEffect(() => { if (S.current.waypoints) S.current.targetIdx = room; }, [room]);
  useEffect(() => { S.current.autoplay = autoplay; }, [autoplay]);
  useEffect(() => { S.current.mode = mode; }, [mode]);
  useEffect(() => {
    const s = S.current; if (!s.sun || !ready) return;
    const dusk = tod === "dusk";
    s.sky.material.map = texSky(dusk ? "dusk" : "day"); s.sky.material.needsUpdate = true;
    s.hemi.intensity = dusk ? 0.35 : 0.85; s.hemi.color.set(dusk ? "#c9d2ef" : "#ffffff");
    s.sun.color.set(dusk ? "#ff9a5a" : "#fff2dc"); s.sun.intensity = dusk ? 0.5 : 1.0;
    s.sun.position.set(dusk ? -11 : 9, dusk ? 4.5 : 15, dusk ? 5 : 7);
    s.fill.intensity = dusk ? 0.12 : 0.25;
    s.groundMat.color.set(dusk ? "#8ba081" : "#ffffff");
    s.roomLights.forEach((l) => (l.intensity = dusk ? 0.55 : 0));
    s.bulbs.forEach((b) => (b.material.emissiveIntensity = dusk ? 1.5 : 0.12));
  }, [tod, ready]);
  useEffect(() => { S.current.furnGroups && S.current.furnGroups.forEach((g) => (g.visible = furnished)); }, [furnished, ready]);
  useEffect(() => { const s = S.current; if (!s.scene || !ready) return; applyThemeToScene(s, theme); }, [theme, ready, planOverride]);

  function snapCompare() {
    const s = S.current; if (!s.renderer) return;
    const afterKey = theme === "classique" ? "tranquille" : theme;
    applyThemeToScene(s, "classique"); s.renderer.render(s.scene, s.camera);
    const before = s.renderer.domElement.toDataURL("image/jpeg", 0.85);
    applyThemeToScene(s, afterKey); s.renderer.render(s.scene, s.camera);
    const after = s.renderer.domElement.toDataURL("image/jpeg", 0.85);
    applyThemeToScene(s, theme);
    setCmp({ before, after, afterKey }); setCmpPos(50);
    onEvent && onEvent("restage_compare", { theme: afterKey });
  }

  const Ctrl = ({ active, onClick, icon: Ic, label }) => (
    <button onClick={onClick} className="inline-flex items-center gap-1 rounded-full px-2.5 py-1"
      style={{ background: active ? C.metro : C.paper, color: active ? "#fff" : C.ink, border: `1px solid ${active ? C.metro : C.line}`, fontSize: 12, fontWeight: 600 }}>
      <Ic size={13} /> {label}
    </button>
  );

  return (
    <section className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={Box} title={t("Visite 3D", "3D tour")} note={t("glissez pour regarder · touchez les meubles", "drag to look · tap furnishings")} />
      <div className="relative rounded-xl overflow-hidden" style={{ background: "#cfe0f2" }}>
        <div ref={mountRef} style={{ width: "100%", height: 360 }} onPointerDown={() => onEvent && onEvent("tour_view")} />
        <div className="absolute top-2 left-2"><Disclosure text={planOverride ? t(`3D générée de la fiche nº ${planOverride.no} — indicative`, `3D generated from sheet nº ${planOverride.no} — indicative`) : t("Reconstitution 3D par IA — indicative", "AI 3D reconstruction — indicative")} /></div>
        <button onClick={() => setAutoplay((a) => !a)} aria-label={autoplay ? "Pause" : "Play"}
          className="absolute bottom-2 right-2 rounded-full p-2" style={{ background: "rgba(17,27,46,.7)", color: "#fff" }}>
          {autoplay ? <Pause size={15} /> : <Play size={15} />}
        </button>
        {shop && SHOP_CATALOG[shop] && (
          <div className="absolute left-2 right-2 bottom-2 rounded-xl p-3 fade-up" style={{ background: "rgba(255,255,255,.97)", border: `1px solid ${C.line}`, boxShadow: "0 8px 24px rgba(17,27,46,.18)" }}>
            <div className="flex items-start justify-between gap-2">
              <div className="inline-flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 800, color: C.ink }}>
                <ShoppingBag size={14} style={{ color: C.metro }} /> {lang === "fr" ? SHOP_CATALOG[shop].fr : SHOP_CATALOG[shop].en}
              </div>
              <button onClick={() => setShop(null)} aria-label={t("Fermer", "Close")} style={{ color: C.sub }}><X size={15} /></button>
            </div>
            <div style={{ fontFamily: F.mono, fontSize: 12, color: C.ink, marginTop: 2 }}>{SHOP_CATALOG[shop].price}</div>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {SHOP_CATALOG[shop].stores.map((st) => <Pill key={st} tone="blue">{st}</Pill>)}
              <Pill tone="amber">{t("liens partenaires — démo", "partner links — demo")}</Pill>
            </div>
            <button onClick={() => { setShop(null); onDesigner && onDesigner(); }} className="mt-2 w-full rounded-lg py-2" style={{ background: C.ink, color: "#fff", fontSize: 12.5, fontWeight: 700 }}>
              {t("Confier ça à un·e designer", "Hand this to a designer")}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2.5">
        <Ctrl active={mode === "orbit"} onClick={() => setMode("orbit")} icon={Box} label={t("Maquette", "Dollhouse")} />
        <Ctrl active={mode === "walk"} onClick={() => setMode("walk")} icon={Eye} label={t("Intérieur", "Interior")} />
        <Ctrl active={tod === "day"} onClick={() => setTod("day")} icon={Sun} label={t("Jour", "Day")} />
        <Ctrl active={tod === "dusk"} onClick={() => setTod("dusk")} icon={Moon} label={t("Crépuscule", "Dusk")} />
        <Ctrl active={furnished} onClick={() => setFurnished((v) => !v)} icon={Sofa} label={furnished ? t("Meublé", "Furnished") : t("Vide", "Empty")} />
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {plan.map((r, i) => (
          <button key={r.key} onClick={() => { setMode("walk"); setRoom(i); setAutoplay(false); onEvent && onEvent("tour_room", { room: r.key }); }}
            className="rounded-full px-2.5 py-1" style={{ background: mode === "walk" && room === i ? C.metroSoft : C.snow, color: mode === "walk" && room === i ? C.metro : C.sub, border: `1px solid ${mode === "walk" && room === i ? "#C9D9F2" : C.line}`, fontSize: 11.5, fontWeight: 600 }}>
            {lang === "fr" ? r.fr : r.en}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mt-2">
        <Palette size={14} style={{ color: C.sub }} />
        {Object.entries(THEMES).map(([k, v]) => (
          <button key={k} onClick={() => onThemeChange && onThemeChange(k)} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{ background: theme === k ? C.ink : C.paper, color: theme === k ? "#fff" : C.ink, border: `1px solid ${theme === k ? C.ink : C.line}`, fontSize: 11.5, fontWeight: 700 }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: v.dot, border: "1px solid rgba(0,0,0,.12)" }} /> {lang === "fr" ? v.fr : v.en}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        <button onClick={snapCompare} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: C.ink, color: "#fff", fontSize: 11.5, fontWeight: 700 }}>
          <Eye size={13} /> {t("Avant / Après IA", "AI Before / After")}
        </button>
        <button onClick={() => setGenOpen(true)} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: C.metroSoft, color: C.metro, border: "1px solid #C9D9F2", fontSize: 11.5, fontWeight: 700 }}>
          <Wand2 size={13} /> {t("Générer depuis une fiche Centris", "Generate from a Centris sheet")}
        </button>
        {planOverride && (
          <button onClick={() => { setPlanOverride(null); setRoom(0); }} className="inline-flex items-center gap-1 rounded-full px-2.5 py-1" style={{ background: C.spruceSoft, color: C.spruce, border: "1px solid #C4E0D2", fontSize: 11.5, fontWeight: 700 }}>
            {t(`Plan de la fiche nº ${planOverride.no}`, `Sheet nº ${planOverride.no} plan`)} <X size={12} />
          </button>
        )}
      </div>
      <div className="mt-2 flex items-start gap-1.5" style={{ fontSize: 10.5, color: C.sub }}>
        <ShieldCheck size={12} style={{ marginTop: 1, flexShrink: 0 }} />
        {t("Modèle 3D, mise en scène et ameublement virtuel générés par IA à partir du plan et des photos — dimensions approximatives, à titre indicatif. « Jour/crépuscule » simule l’ensoleillement.",
           "3D model, staging and virtual furnishing are AI-generated from the floor plan and photos — approximate dimensions, indicative only. “Day/dusk” simulates natural light.")}
      </div>
      {genOpen && (
        <Modal onClose={() => setGenOpen(false)} label={t("Générer depuis la fiche", "Generate from the sheet")}>
          <GenFromFiche lang={lang} defaultNo={"14106527"} onGenerate={(no, rooms) => {
            setPlanOverride({ no, plan: layoutPlan(rooms) }); setRoom(0); setGenOpen(false);
            onEvent && onEvent("plan_generate", { centris: no, rooms: rooms.length });
          }} />
        </Modal>
      )}
      {cmp && (
        <Modal onClose={() => setCmp(null)} label={t("Avant / Après", "Before / After")}>
          <div style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 19, color: C.ink }}>{t("Restylage virtuel — avant / après", "Virtual restyle — before / after")}</div>
          <div style={{ fontSize: 11.5, color: C.sub, margin: "4px 0 10px" }}>{t("Glissez le curseur pour comparer.", "Drag the slider to compare.")}</div>
          <div className="relative rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
            <img src={cmp.after} alt={t("Après", "After")} style={{ width: "100%", display: "block" }} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${cmpPos}%` }}>
              <img src={cmp.before} alt={t("Avant", "Before")} style={{ width: `${10000 / Math.max(cmpPos, 1)}%`, maxWidth: "none", display: "block" }} />
            </div>
            <div className="absolute top-0 bottom-0" style={{ left: `${cmpPos}%`, width: 2, background: "#fff", boxShadow: "0 0 6px rgba(0,0,0,.4)" }} />
            <div className="absolute top-2 left-2"><Disclosure text={t("Original — reconstitution 3D", "Original — 3D reconstruction")} /></div>
            <div className="absolute top-2 right-2"><Disclosure text={`${t("Ameublement virtuel", "Virtually staged")} · ${lang === "fr" ? THEMES[cmp.afterKey].fr : THEMES[cmp.afterKey].en} — IA`} /></div>
          </div>
          <input type="range" min={0} max={100} value={cmpPos} onChange={(e) => setCmpPos(Number(e.target.value))} className="w-full mt-2" />
          <div className="mt-1 flex items-start gap-1.5" style={{ fontSize: 10.5, color: C.sub }}>
            <ShieldCheck size={12} style={{ marginTop: 1, flexShrink: 0 }} />
            {t("Ameublement virtuel : visuel modifié par IA et identifié comme tel. Les éléments permanents (murs, planchers, structure) ne sont pas modifiés et l’original demeure accessible.",
               "Virtual staging: AI-modified visual, labelled as such. Permanent elements (walls, floors, structure) are unchanged and the original remains accessible.")}
          </div>
        </Modal>
      )}
    </section>
  );
}

/* ================================================================== */
/*  Prospect sections                                                  */
/* ================================================================== */
function CostSection({ l, lang, log, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [downPct, setDownPct] = useState(20), [rate, setRate] = useState(4.39), [amort, setAmort] = useState(25);
  const touched = useRef(new Set());
  const mark = (f) => { if (!touched.current.size) log("calc_use"); if (!touched.current.has(f)) { touched.current.add(f); log("calc_adjust", { field: f }); } };
  const down = Math.round((downPct / 100) * l.price), baseLoan = l.price - down, prem = Math.round(baseLoan * cmhcRate(downPct)), loan = baseLoan + prem;
  const mtg = Math.round(mortgageMonthly(loan, rate, amort)), taxes = Math.round((l.taxesMun + l.taxesScol) / 12), energy = Math.round((l.sqft * HEAT[l.heating].perSqft) / 12);
  const total = mtg + taxes + l.condoFees + energy + l.insuranceEst, wtax = welcomeTax(l.price, l.muni), cashNeeded = down + wtax + 1500 + 650;
  const parts = [
    { v: mtg, color: C.metro, label: t("Hypothèque", "Mortgage") }, { v: taxes, color: C.ink, label: t("Taxes", "Taxes") },
    { v: l.condoFees, color: C.ochre, label: t("Copropriété", "Condo") }, { v: energy, color: C.spruce, label: t("Énergie*", "Energy*") },
    { v: l.insuranceEst, color: "#9AA6B8", label: t("Assurance*", "Insurance*") },
  ];
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={Calculator} title={t("Coût mensuel réel", "True monthly cost")} note={t("ajustez les hypothèses", "adjust assumptions")} />
      <div className="flex items-end gap-2 mb-2">
        <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 34, color: C.ink, lineHeight: 1 }}>{fmt$(total, lang)}</div>
        <div style={{ fontSize: 13, color: C.sub, paddingBottom: 3 }}>{t("/ mois, tout compris", "/ month, all-in")}</div>
      </div>
      <div className="flex w-full rounded-full overflow-hidden" style={{ height: 14, background: C.snow, border: `1px solid ${C.line}` }}>
        {parts.filter((p) => p.v > 0).map((p, i) => <div key={i} style={{ width: `${(p.v / total) * 100}%`, background: p.color }} title={p.label} />)}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {parts.filter((p) => p.v > 0).map((p, i) => (
          <span key={i} className="inline-flex items-center gap-1.5" style={{ fontSize: 12, color: C.sub }}>
            <span style={{ width: 9, height: 9, borderRadius: 3, background: p.color }} /> {p.label} <b style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(p.v, lang)}</b>
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <SliderRow label={t("Mise de fonds", "Down payment")} val={downPct} set={setDownPct} min={5} max={35} step={1} suffix=" %" field="down" mark={mark} />
        <SliderRow label={t("Taux (5 ans fixe)", "Rate (5-yr fixed)")} val={rate} set={setRate} min={2.5} max={7} step={0.05} suffix=" %" field="rate" mark={mark} />
        <SliderRow label={t("Amortissement", "Amortization")} val={amort} set={setAmort} min={15} max={30} step={5} suffix={t(" ans", " yrs")} field="amort" mark={mark} />
      </div>
      {prem > 0 && <div className="mt-2" style={{ fontSize: 12, color: C.sub }}>{t("Prime SCHL ajoutée :", "CMHC premium added:")} <b style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(prem, lang)}</b></div>}
      <div className="mt-4 rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
        <div className="flex items-center gap-1.5 mb-1" style={{ fontSize: 13, fontWeight: 700, color: C.ink }}><Landmark size={14} style={{ color: C.metro }} /> {t("Liquidités à l’achat", "Cash at purchase")}</div>
        <div className="grid grid-cols-2 gap-x-3" style={{ fontSize: 12.5, color: C.sub }}>
          <span>{t("Mise de fonds", "Down payment")}</span><span className="text-right" style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(down, lang)}</span>
          <span>{t("« Taxe de bienvenue »", "Welcome tax")}</span><span className="text-right" style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(wtax, lang)}</span>
          <span>{t("Notaire + inspection (est.)", "Notary + inspection (est.)")}</span><span className="text-right" style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(2150, lang)}</span>
          <span style={{ fontWeight: 700, color: C.ink }}>{t("Total", "Total")}</span><span className="text-right" style={{ fontFamily: F.mono, fontWeight: 700, color: C.metro }}>{fmt$(cashNeeded, lang)}</span>
        </div>
        <div className="mt-1.5" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono }}>{lang === "fr" ? MUTATION[l.muni].labelFr : MUTATION[l.muni].labelEn} · *{t("estimations — ", "estimates — ")}{lang === "fr" ? HEAT[l.heating].fr : HEAT[l.heating].en}</div>
      </div>
    </section>
  );
}

const DRIVER_ICON = { transit: TrainFront, zoning: Building2, commercial: ShoppingCart, risk: AlertTriangle };
function ForecastSection({ l, lang, log, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [extra, setExtra] = useState([]), [note, setNote] = useState(""), [busy, setBusy] = useState(false), [err, setErr] = useState(false);
  useEffect(() => { log("forecast_view"); /* eslint-disable-next-line */ }, []);
  const drivers = useMemo(() => [...l.forecast.drivers, ...extra], [l, extra]);
  const rows = useMemo(() => projectPrices(l.price, drivers, 6, l.forecast.organic), [l, drivers]);
  const last = rows[rows.length - 1], upliftMid = Math.round(((last.mid - l.price) / l.price) * 100);
  async function refresh() {
    setBusy(true); setErr(false);
    try { const r = await refreshForecast(l, lang); setExtra(r.drivers); setNote(lang === "fr" ? r.noteFr : r.noteEn); log("forecast_refresh"); }
    catch { setErr(true); } finally { setBusy(false); }
  }
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={TrendingUp} title={t("Prévision de valeur", "Value forecast")} note={t("modèle — non garanti", "model — not guaranteed")} />
      <div className="flex items-end justify-between gap-2 mb-1">
        <div>
          <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 26, color: C.ink }}>{fmt$(last.mid, lang)}</div>
          <div style={{ fontSize: 12, color: C.sub }}>{t(`scénario médian ${last.yr}`, `median scenario ${last.yr}`)} · <b style={{ color: upliftMid >= 0 ? C.spruce : C.danger }}>{upliftMid >= 0 ? "+" : ""}{upliftMid}%</b></div>
        </div>
        <Pill tone="blue">{fmt$(rows[rows.length - 1].low, lang)} – {fmt$(rows[rows.length - 1].high, lang)}</Pill>
      </div>
      <BandChart rows={rows} lang={lang} />
      <div className="mt-3 space-y-2">
        <div style={{ fontSize: 11.5, fontWeight: 700, color: C.sub, textTransform: "uppercase", letterSpacing: ".06em" }}>{t("Facteurs pris en compte", "Drivers considered")}</div>
        {drivers.map((d, i) => {
          const Ic = DRIVER_ICON[d.kind] || Building2; const neg = d.hi <= 0;
          return (
            <div key={i} className="flex items-start gap-2.5 rounded-xl p-2.5" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
              <Ic size={15} style={{ color: neg ? C.danger : C.metro, marginTop: 2, flexShrink: 0 }} />
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>{lang === "fr" ? d.fr : d.en} {d.live && <Pill tone="green">{t("actualité", "live")}</Pill>}</div>
                <div style={{ fontSize: 11.5, color: C.sub }}>{d.dist !== "—" ? `${d.dist} · ` : ""}{t("échéance", "by")} {d.year} · {lang === "fr" ? d.srcFr : d.srcEn}</div>
              </div>
              <span style={{ fontFamily: F.mono, fontSize: 12, fontWeight: 600, color: neg ? C.danger : C.spruce, whiteSpace: "nowrap" }}>{d.lo >= 0 ? "+" : ""}{d.lo}…{d.hi >= 0 ? "+" : ""}{d.hi}%</span>
            </div>
          );
        })}
      </div>
      <button onClick={refresh} disabled={busy} className="mt-3 w-full rounded-xl py-2.5 flex items-center justify-center gap-2"
        style={{ background: busy ? C.line : C.ink, color: "#fff", fontWeight: 700, fontSize: 13.5 }}>
        {busy ? <Sparkles size={15} /> : <Navigation size={15} />} {busy ? t("Recherche dans l’actualité…", "Searching the news…") : t("Actualiser depuis l’actualité", "Refresh from the news")}
      </button>
      {err && <div className="mt-2" style={{ fontSize: 12, color: C.danger }}>{t("La recherche n’a pas abouti. Réessayez.", "The search didn’t complete. Try again.")}</div>}
      {note && <div className="mt-2" style={{ fontSize: 12, color: C.sub, fontStyle: "italic" }}>{note}</div>}
      <div className="mt-2 flex items-start gap-1.5" style={{ fontSize: 10.5, color: C.sub }}>
        <ShieldCheck size={12} style={{ marginTop: 1, flexShrink: 0 }} />
        {t("Projection illustrative fondée sur une croissance historique et des projets annoncés. Ce n’est pas un avis d’évaluation ni une garantie de rendement.",
           "Illustrative projection based on historical growth and announced projects. Not an appraisal or a guarantee of return.")}
      </div>
    </section>
  );
}

const RISK_META = {
  flood: { icon: Waves, fr: "Inondation", en: "Flood" }, radon: { icon: Wind, fr: "Radon", en: "Radon" },
  pyrite: { icon: Mountain, fr: "Pyrite", en: "Pyrite" }, oil: { icon: Droplets, fr: "Réservoir d’huile", en: "Oil tank" },
  heat: { icon: Thermometer, fr: "Îlot de chaleur", en: "Heat island" }, noise: { icon: Volume2, fr: "Bruit", en: "Noise" },
};
const LEVEL = { none: { tone: "green", fr: "Aucun", en: "None" }, low: { tone: "green", fr: "Faible", en: "Low" }, moderate: { tone: "amber", fr: "Modéré", en: "Moderate" }, elevated: { tone: "red", fr: "Élevé", en: "Elevated" } };
function RiskSection({ l, lang, log, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  useEffect(() => { log("risk_view"); /* eslint-disable-next-line */ }, []);
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={ShieldCheck} title={t("Couche de risques", "Risk layer")} note={t("à vérifier à l’adresse", "verify at address")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {l.risks.map((r, i) => {
          const meta = RISK_META[r.kind], lv = LEVEL[r.level], Ic = meta.icon;
          return (
            <div key={i} className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
              <div className="flex items-center justify-between mb-1">
                <span className="inline-flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 700, color: C.ink }}><Ic size={14} style={{ color: C.metro }} /> {lang === "fr" ? meta.fr : meta.en}</span>
                <Pill tone={lv.tone}>{lang === "fr" ? lv.fr : lv.en}</Pill>
              </div>
              <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.4 }}>{lang === "fr" ? r.fr : r.en}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-2" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono }}>
        {t("Démo — production : zones inondables (CMM/Ville), potentiel radon (SPLQ), registres pyrite/sols contaminés.", "Demo — production: flood maps (CMM/City), radon potential, pyrite/contaminated-soil registries.")}
      </div>
    </section>
  );
}

const AMEN_META = {
  resto: { icon: UtensilsCrossed, fr: "Restaurants", en: "Restaurants" }, cafe: { icon: Coffee, fr: "Cafés", en: "Cafés" },
  cinema: { icon: Film, fr: "Cinémas", en: "Cinemas" }, grocery: { icon: ShoppingCart, fr: "Épicerie", en: "Groceries" },
  park: { icon: Trees, fr: "Parcs", en: "Parks" }, gym: { icon: Dumbbell, fr: "Gyms", en: "Gyms" }, pharma: { icon: Cross, fr: "Pharmacie", en: "Pharmacy" },
};
const walkMin = (m) => Math.max(1, Math.round(m / 80)); // ~4.8 km/h
function AmenitiesSection({ l, lang, log, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [dayType, setDayType] = useState("weekday"), [dest, setDest] = useState(l.commute.dest), [factor, setFactor] = useState(1);
  useEffect(() => { log("amenity_view"); /* eslint-disable-next-line */ }, []);
  const cm = l.commute[dayType];
  const series = [
    { name: t("Auto", "Car"), color: C.metro, values: cm.car.map((v) => Math.round(v * factor)) },
    { name: t("Transport", "Transit"), color: C.spruce, values: cm.transit.map((v) => Math.round(v * factor)) },
    { name: t("Vélo", "Bike"), color: C.ochre, values: cm.bike.map((v) => Math.round(v * factor)) },
  ];
  const peakCar = Math.max(...series[0].values);
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={MapPin} title={t("Commodités & trajets", "Amenities & commute")} note={t("données démo", "sample data")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {l.amenities.map((cat) => {
          const meta = AMEN_META[cat.type], Ic = meta.icon;
          return (
            <div key={cat.type} className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
              <div className="flex items-center gap-1.5 mb-1.5" style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}><Ic size={14} style={{ color: C.metro }} /> {lang === "fr" ? meta.fr : meta.en}</div>
              <div className="space-y-1">
                {cat.items.map(([name, dist], i) => (
                  <div key={i} className="flex items-center justify-between" style={{ fontSize: 12, color: C.sub }}>
                    <span className="truncate" style={{ color: C.ink }}>{name}</span>
                    <span style={{ fontFamily: F.mono, whiteSpace: "nowrap", marginLeft: 8 }}>{dist < 1000 ? `${dist} m` : `${(dist / 1000).toFixed(1)} km`} · {walkMin(dist)} {t("min", "min")}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
        <div className="flex items-center gap-1.5 mb-2" style={{ fontSize: 13, fontWeight: 700, color: C.ink }}><Route size={15} style={{ color: C.metro }} /> {t("Temps de trajet vers", "Commute time to")} {dest}</div>
        <div className="flex gap-2 mb-2">
          <input type="text" value={dest} onChange={(e) => setDest(e.target.value)} placeholder={t("Destination…", "Destination…")}
            className="flex-1 rounded-lg px-2.5 py-1.5" style={{ border: `1.5px solid ${C.line}`, fontSize: 13, background: C.paper, color: C.ink }} />
          <button onClick={() => { setFactor(0.85 + Math.random() * 0.5); log("commute_calc", { dest }); }} className="rounded-lg px-3" style={{ background: C.metro, color: "#fff", fontSize: 12.5, fontWeight: 700 }}>{t("Estimer", "Estimate")}</button>
        </div>
        <div className="flex gap-1.5 mb-2">
          {[["weekday", t("Semaine", "Weekday")], ["weekend", t("Fin de semaine", "Weekend")]].map(([k, label]) => (
            <button key={k} onClick={() => setDayType(k)} className="rounded-full px-3 py-1" style={{ background: dayType === k ? C.metroSoft : C.paper, color: dayType === k ? C.metro : C.sub, border: `1px solid ${dayType === k ? "#C9D9F2" : C.line}`, fontSize: 12, fontWeight: 600 }}>{label}</button>
          ))}
        </div>
        <CommuteChart hours={l.commute.hours} series={series} lang={lang} />
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
          {series.map((s, i) => <span key={i} className="inline-flex items-center gap-1" style={{ fontSize: 11, color: C.sub }}><span style={{ width: 8, height: 8, borderRadius: 2, background: s.color }} /> {s.name}</span>)}
        </div>
        <div className="mt-1.5" style={{ fontSize: 11.5, color: C.sub }}>{t("Pointe auto :", "Car peak:")} <b style={{ fontFamily: F.mono, color: C.ink }}>{peakCar} min</b> · {t("estimations, non routées en temps réel", "estimates, not real-time routed")}</div>
      </div>
    </section>
  );
}

function HoodSection({ l, lang, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const h = l.hood, d = h.demo;
  const Score = ({ icon: Ic, label, v }) => (
    <div className="flex-1 rounded-xl p-3 text-center" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
      <Ic size={16} style={{ color: C.metro, margin: "0 auto 4px" }} />
      <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 22, color: C.ink }}>{v}</div>
      <div style={{ fontSize: 11, color: C.sub }}>{label}</div>
    </div>
  );
  const incomeSeg = d.incomeBands.map(([lab, pct], i) => ({ label: lab, pct, color: ["#C9D8EE", "#7FA0CE", "#3D6DB4", "#1C4A8F"][i] }));
  const ageSeg = d.ageBands.map(([lab, pct], i) => ({ label: lab, pct, color: ["#E4F1EA", "#A9D3BD", "#5FA987", "#2F7D5C", "#1E5740"][i] }));
  const langSeg = d.langs.map(([lab, pct], i) => ({ label: lab, pct, color: ["#1656B4", "#E8A33D", "#9AA6B8"][i] }));
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={Users} title={t("Le quartier, en chiffres", "The neighbourhood, in numbers")} note={t("données démo", "sample data")} />
      <div className="flex gap-2 mb-3">
        <Score icon={Footprints} label="Walk Score" v={h.walk} /><Score icon={TrainFront} label={t("Transit", "Transit")} v={h.transit} /><Score icon={Bike} label={t("Vélo", "Bike")} v={h.bike} />
      </div>
      <div className="space-y-1.5 mb-4" style={{ fontSize: 13.5, color: C.ink }}>
        <div className="flex items-center gap-2"><TrainFront size={14} style={{ color: C.sub }} />{lang === "fr" ? h.metroFr : h.metroEn}{h.bixi > 0 && <Pill tone="blue">{h.bixi} BIXI</Pill>}</div>
        <div className="flex items-center gap-2"><Building2 size={14} style={{ color: C.sub }} />{lang === "fr" ? h.schoolsFr : h.schoolsEn}</div>
      </div>

      <div className="space-y-3">
        <div className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1.5" style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}><DollarSign size={13} style={{ color: C.metro }} /> {t("Revenu des ménages", "Household income")}</span>
            <span style={{ fontFamily: F.mono, fontSize: 12, color: C.ink }}>{t("médian", "median")} {fmt$(d.incomeMed, lang)}</span>
          </div>
          <StackBar segments={incomeSeg} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
            <div className="mb-1.5" style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}>{t("Âge", "Age")}</div>
            <StackBar segments={ageSeg} />
          </div>
          <div className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
            <div className="inline-flex items-center gap-1.5 mb-1.5" style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}><Languages size={13} style={{ color: C.metro }} /> {t("Langues parlées", "Languages spoken")}</div>
            <StackBar segments={langSeg} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}>{t("Ménages", "Households")}</div>
            <div className="mt-1" style={{ fontSize: 12.5, color: C.sub }}>{t("Familles", "Families")} <b style={{ fontFamily: F.mono, color: C.ink }}>{d.fam}%</b> · {t("Locataires", "Renters")} <b style={{ fontFamily: F.mono, color: C.ink }}>{d.rent}%</b></div>
          </div>
          <div className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}>{t("Criminalité", "Crime")}</span>
              <span className="inline-flex items-center gap-1" style={{ fontSize: 12, color: C.spruce, fontWeight: 700 }}><TrendingDown size={12} /> {h.crimeDelta}%</span>
            </div>
            <Sparkline data={h.crime} color={C.spruce} w={110} h={30} />
            <div className="space-y-0.5">
              {h.incidents.map(([fr, en, dl], i) => (
                <div key={i} className="flex items-center justify-between" style={{ fontSize: 11, color: C.sub }}>
                  <span>{lang === "fr" ? fr : en}</span>
                  <span style={{ fontFamily: F.mono, color: dl <= 0 ? C.spruce : C.danger }}>{dl > 0 ? "+" : ""}{dl}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono }}>
        {t("Démo — production : StatCan (recensement), données ouvertes SPVM/SPAL, Walk Score API.", "Demo — production: StatCan (census), SPVM/SPAL open data, Walk Score API.")}
      </div>
    </section>
  );
}

function FundSection({ l, lang }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  if (!l.fund) return null;
  const f = l.fund, perUnit = Math.round(f.balance / f.units);
  // crude adequacy heuristic for an indicative flag only
  const adequacy = perUnit >= 12000 ? "strong" : perUnit >= 7000 ? "adequate" : "thin";
  const meta = { strong: { tone: "green", fr: "Solide", en: "Strong" }, adequate: { tone: "amber", fr: "Correct", en: "Adequate" }, thin: { tone: "red", fr: "Mince", en: "Thin" } }[adequacy];
  return (
    <section className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={Landmark} title={t("Santé du fonds de prévoyance", "Contingency fund health")} note={t("indicatif", "indicative")} />
      <div className="flex items-end justify-between">
        <div><div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 26, color: C.ink }}>{fmt$(f.balance, lang)}</div>
          <div style={{ fontSize: 12, color: C.sub }}>{fmt$(perUnit, lang)} {t("par unité", "per unit")} · {f.units} {t("unités", "units")} · {t("étude", "study")} {f.studyYear}</div></div>
        <Pill tone={meta.tone}>{lang === "fr" ? meta.fr : meta.en}</Pill>
      </div>
      <div className="mt-2 rounded-xl p-2.5" style={{ background: f.special ? C.dangerSoft : C.spruceSoft, border: `1px solid ${f.special ? "#E7C3B4" : "#C4E0D2"}`, fontSize: 12.5, color: C.ink }}>
        {f.special ? t("⚠ Cotisation spéciale votée ou annoncée — à examiner.", "⚠ Special assessment voted or announced — review needed.") : t("✓ Aucune cotisation spéciale votée ni annoncée (selon DV D14).", "✓ No special assessment voted or announced (per DV D14).")}
      </div>
      <div className="mt-2" style={{ fontSize: 10.5, color: C.sub }}>{t("Repère indicatif seulement — l’adéquation réelle dépend de l’étude du fonds et de l’état de l’immeuble. Faites examiner les documents de copropriété.", "Indicative benchmark only — true adequacy depends on the fund study and building condition. Have the co-ownership documents reviewed.")}</div>
    </section>
  );
}

function CompsSection({ l, lang }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const ppsf = (p, s) => Math.round(p / s);
  const askPpsf = ppsf(l.price, l.sqft);
  return (
    <section className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={FileText} title={t("Ventes comparables", "Comparable sales")} note={t("style Registre foncier", "land-registry style")} />
      <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 8 }}>{t("Demandé :", "Asking:")} <b style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(l.price, lang)}</b> · <b style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(askPpsf, lang)}/pi²</b></div>
      <div className="space-y-1.5">
        {l.soldComps.map(([addr, price, date, sqft], i) => (
          <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: C.snow, border: `1px solid ${C.line}`, fontSize: 12.5 }}>
            <span className="truncate" style={{ color: C.ink }}>{addr}</span>
            <span className="flex items-center gap-2 flex-shrink-0" style={{ marginLeft: 8 }}>
              <span style={{ fontFamily: F.mono, color: C.ink }}>{fmt$(price, lang)}</span>
              <span style={{ fontFamily: F.mono, color: C.sub }}>{fmt$(ppsf(price, sqft), lang)}/pi²</span>
              <span style={{ fontFamily: F.mono, fontSize: 11, color: C.sub }}>{date}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono }}>{t("Démo — production : Registre foncier du Québec / JLR. Ne constitue pas une AMC.", "Demo — production: Québec land registry / JLR. Not a CMA.")}</div>
    </section>
  );
}

function ChatSection({ l, lang, log, chat, setChat, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [input, setInput] = useState(""), [busy, setBusy] = useState(false), [err, setErr] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ block: "nearest" }); }, [chat, busy]);
  const chips = lang === "fr"
    ? ["Le toit a quel âge ?", "Des dégâts d’eau déclarés ?", "Frais de condo et taxes ?", "Puis-je visiter samedi ?"]
    : ["How old is the roof?", "Any declared water damage?", "Condo fees and taxes?", "Can I visit Saturday?"];
  async function send(text) {
    const q = (text ?? input).trim(); if (!q || busy) return;
    setErr(false); setInput(""); const next = [...chat, { role: "user", text: q }]; setChat(next);
    log("chat_message", { q: q.slice(0, 80) }); setBusy(true);
    try {
      const { reply, escalate, topics } = await askConcierge(l, lang, chat, q);
      topics.forEach((tp) => log("chat_topic", { topic: tp }));
      const add = [{ role: "assistant", text: reply }];
      if (escalate) { log("chat_escalation", { q: q.slice(0, 80) }); add.push({ role: "note", text: t(`→ Transmis à ${BROKER.name} — réponse à suivre.`, `→ Sent to ${BROKER.name} — answer to follow.`) }); }
      setChat([...next, ...add]);
    } catch { setErr(true); setChat(next); } finally { setBusy(false); }
  }
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={MessageCircle} title={t("Questions sur la propriété", "Questions about the property")} note={t("réponses tirées des documents", "answers from the documents")} />
      <div className="rounded-xl p-3 mb-3 overflow-y-auto" style={{ background: C.snow, border: `1px solid ${C.line}`, height: 240 }}>
        {chat.length === 0 && (
          <div style={{ fontSize: 13, color: C.sub }}><Sparkles size={14} style={{ display: "inline", color: C.ochre, marginRight: 4 }} />
            {t("Je réponds à partir de la fiche et des déclarations du vendeur — et je cite ma source. Ce que je ne sais pas, je le transmets à ", "I answer from the listing sheet and seller’s declarations — with sources. What I don’t know, I flag to ")}{BROKER.name}.</div>
        )}
        {chat.map((m, i) => m.role === "note" ? (
          <div key={i} className="my-2 text-center" style={{ fontSize: 11.5, color: C.metro, fontFamily: F.mono }}>{m.text}</div>
        ) : (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} my-1.5`}>
            <div className="max-w-[85%] rounded-2xl px-3 py-2" style={{ background: m.role === "user" ? C.metro : C.paper, color: m.role === "user" ? "#fff" : C.ink, border: m.role === "user" ? "none" : `1px solid ${C.line}`, fontSize: 13.5, lineHeight: 1.45 }}>{m.text}</div>
          </div>
        ))}
        {busy && <div style={{ fontSize: 12.5, color: C.sub, fontFamily: F.mono }} className="my-1.5">{t("consulte les documents…", "checking the documents…")}</div>}
        {err && <div style={{ fontSize: 12.5, color: C.danger }} className="my-1.5">{t("Le service ne répond pas. Réessayez.", "The service didn’t respond. Try again.")}</div>}
        <div ref={bottomRef} />
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        {chips.map((c) => <button key={c} onClick={() => send(c)} className="rounded-full px-2.5 py-1" style={{ background: C.metroSoft, color: C.metro, fontSize: 12, fontWeight: 600, border: "1px solid #C9D9F2" }}>{c}</button>)}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          placeholder={t("Posez votre question…", "Ask your question…")} className="flex-1 rounded-xl px-3 py-2.5" style={{ border: `1.5px solid ${C.line}`, fontSize: 14, background: C.paper, color: C.ink }} />
        <button onClick={() => send()} disabled={busy} aria-label={t("Envoyer", "Send")} className="rounded-xl px-3.5" style={{ background: C.metro, color: "#fff", opacity: busy ? 0.6 : 1 }}><Send size={17} /></button>
      </div>
      <div className="mt-2 flex items-start gap-1.5" style={{ fontSize: 10.5, color: C.sub }}>
        <ShieldCheck size={12} style={{ marginTop: 1, flexShrink: 0 }} />
        {t("Assistant IA. Ne fournit pas de conseils juridiques, fiscaux ou sur le prix d’offre. Les renseignements ne remplacent pas la vérification diligente.", "AI assistant. Does not provide legal, tax, or offer-price advice. Information does not replace due diligence.")}
      </div>
    </section>
  );
}

function BrokerDMSection({ l, lang, log, dm, setDm, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ block: "nearest" }); }, [dm]);
  function send() {
    const q = input.trim(); if (!q) return; setInput("");
    const mine = { who: "prospect", text: q, ts: Date.now() };
    const next = [...dm, mine, { who: "receipt", text: t("Remis à Julie Fortin", "Delivered to Julie Fortin"), ts: Date.now() }];
    setDm(next); log("broker_message", { text: q.slice(0, 120) });
    // one simulated broker acknowledgement so the thread feels live in the demo
    if (!dm.some((m) => m.who === "broker")) {
      setTimeout(() => setDm((cur) => [...cur, { who: "broker", sim: true, ts: Date.now(),
        text: t("Bonjour! Merci pour votre message, je regarde ça et je vous reviens rapidement. Souhaitez-vous que je vous propose des plages de visite?",
                "Hi! Thanks for your message — I’ll look into it and get back to you shortly. Would you like me to suggest a few showing times?") }]), 1600);
    }
  }
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={MessageSquare} title={t("Écrire à la courtière", "Message the broker")} note={t("ligne directe", "direct line")} />
      <div className="flex items-center gap-2 mb-3 rounded-xl p-2.5" style={{ background: C.metroSoft, border: "1px solid #C9D9F2" }}>
        <div className="rounded-full flex items-center justify-center" style={{ width: 34, height: 34, background: C.metro, color: "#fff", fontWeight: 700, fontFamily: F.disp }}>JF</div>
        <div><div style={{ fontSize: 13.5, fontWeight: 700, color: C.ink }}>{BROKER.name}</div><div style={{ fontSize: 11.5, color: C.sub }}>{lang === "fr" ? BROKER.title_fr : BROKER.title_en} · {BROKER.agency}</div></div>
      </div>
      <div className="rounded-xl p-3 mb-3 overflow-y-auto" style={{ background: C.snow, border: `1px solid ${C.line}`, height: 200 }}>
        {dm.length === 0 && <div style={{ fontSize: 13, color: C.sub }}>{t("Une question précise, une contre-proposition, une disponibilité? Écrivez directement à Julie — c’est une ligne privée, distincte de l’assistant.", "A specific question, a counter-proposal, your availability? Message Julie directly — this is a private line, separate from the assistant.")}</div>}
        {dm.map((m, i) => m.who === "receipt" ? (
          <div key={i} className="text-right my-1" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono }}>✓ {m.text}</div>
        ) : (
          <div key={i} className={`flex ${m.who === "prospect" ? "justify-end" : "justify-start"} my-1.5`}>
            <div className="max-w-[85%] rounded-2xl px-3 py-2" style={{ background: m.who === "prospect" ? C.ink : C.paper, color: m.who === "prospect" ? "#fff" : C.ink, border: m.who === "prospect" ? "none" : `1px solid ${C.line}`, fontSize: 13.5, lineHeight: 1.45 }}>
              {m.text}{m.sim && <div style={{ fontSize: 9.5, color: C.sub, fontFamily: F.mono, marginTop: 3 }}>{t("réponse simulée (démo)", "simulated reply (demo)")}</div>}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          placeholder={t("Votre message à Julie…", "Your message to Julie…")} className="flex-1 rounded-xl px-3 py-2.5" style={{ border: `1.5px solid ${C.line}`, fontSize: 14, background: C.paper, color: C.ink }} />
        <button onClick={send} aria-label={t("Envoyer", "Send")} className="rounded-xl px-3.5" style={{ background: C.ink, color: "#fff" }}><Send size={17} /></button>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Modals                                                             */
/* ================================================================== */
function BookingModal({ l, lang, log, onClose }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [day, setDay] = useState(null), [time, setTime] = useState(null), [done, setDone] = useState(false);
  const days = useMemo(() => Array.from({ length: 5 }, (_, i) => new Date(Date.now() + i * 864e5).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", { weekday: "short", day: "numeric", month: "short" })), [lang]);
  const times = ["10:00", "11:30", "13:00", "15:30", "17:00", "18:30"];
  const ChipBtn = ({ v, cur, set }) => (
    <button onClick={() => set(v)} className="rounded-lg px-2.5 py-1.5" style={{ border: `1.5px solid ${cur === v ? C.metro : C.line}`, background: cur === v ? C.metroSoft : C.paper, color: cur === v ? C.metro : C.ink, fontSize: 13, fontWeight: 600 }}>{v}</button>
  );
  return (
    <Modal onClose={onClose} label={t("Planifier une visite", "Book a showing")}>
      {done ? (
        <div className="text-center pb-4">
          <CalendarCheck size={34} style={{ color: C.spruce, margin: "0 auto 8px" }} />
          <div style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 19, color: C.ink }}>{t("Demande envoyée", "Request sent")}</div>
          <div style={{ fontSize: 13.5, color: C.sub, marginTop: 4 }}>{BROKER.name} {t("vous confirme sous 2 h ouvrables —", "will confirm within 2 business hours —")} {day} · {time}</div>
        </div>
      ) : (
        <div className="pb-2">
          <div style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 19, color: C.ink }}>{t("Planifier une visite", "Book a showing")}</div>
          <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 12 }}>{l.addr}</div>
          <div className="flex flex-wrap gap-1.5 mb-3">{days.map((d) => <ChipBtn key={d} v={d} cur={day} set={setDay} />)}</div>
          <div className="flex flex-wrap gap-1.5 mb-4">{times.map((h) => <ChipBtn key={h} v={h} cur={time} set={setTime} />)}</div>
          <button disabled={!day || !time} onClick={() => { log("booking_request", { when: `${day} ${time}` }); setDone(true); }} className="w-full rounded-xl py-3" style={{ background: !day || !time ? C.line : C.metro, color: "#fff", fontWeight: 700, fontSize: 15 }}>{t("Demander cette plage", "Request this slot")}</button>
        </div>
      )}
    </Modal>
  );
}
function PassModal({ lang, log, onClose, onDone }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const opts = [["prix", t("Prix trop élevé", "Price too high")], ["emplacement", t("Emplacement", "Location")], ["travaux", t("Trop de rénovations", "Too many renovations")], ["taille", t("Taille", "Size")], ["stationnement", t("Stationnement", "Parking")], ["autre", t("Autre", "Other")]];
  const [sel, setSel] = useState([]);
  const toggle = (k) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));
  return (
    <Modal onClose={onClose} label={t("Pas pour moi", "Not for me")}>
      <div style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 19, color: C.ink }}>{t("Qu’est-ce qui n’allait pas ?", "What didn’t work?")}</div>
      <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 12 }}>{t("Vos prochaines alertes s’ajusteront.", "Your next alerts will adjust.")}</div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {opts.map(([k, label]) => <button key={k} onClick={() => toggle(k)} className="rounded-full px-3 py-1.5" style={{ border: `1.5px solid ${sel.includes(k) ? C.metro : C.line}`, background: sel.includes(k) ? C.metroSoft : C.paper, color: sel.includes(k) ? C.metro : C.ink, fontSize: 13, fontWeight: 600 }}>{label}</button>)}
      </div>
      <button onClick={() => { log("reaction_pass", { reasons: sel }); onDone(); }} className="w-full rounded-xl py-3" style={{ background: C.ink, color: "#fff", fontWeight: 700, fontSize: 15 }}>{t("Envoyer", "Send")}</button>
    </Modal>
  );
}

/* ================================================================== */
/*  Compare view (Tier 1 — side-by-side)                               */
/* ================================================================== */
function CompareView({ lang, onEvent }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  useEffect(() => { onEvent && onEvent("compare_view"); /* eslint-disable-next-line */ }, []);
  const est = (l) => Math.round(mortgageMonthly(l.price * 0.8, 4.39, 25) + (l.taxesMun + l.taxesScol) / 12 + l.condoFees + (l.sqft * HEAT[l.heating].perSqft) / 12 + l.insuranceEst);
  const fc = (l) => { const r = projectPrices(l.price, l.forecast.drivers, 6, l.forecast.organic); return Math.round(((r[r.length - 1].mid - l.price) / l.price) * 100); };
  const rows = [
    [t("Prix", "Price"), (l) => fmt$(l.price, lang)],
    [t("Prix / pi²", "Price / sqft"), (l) => fmt$(Math.round(l.price / l.sqft), lang)],
    [t("Coût mensuel est.", "Est. monthly cost"), (l) => fmt$(est(l), lang)],
    [t("Superficie", "Area"), (l) => `${fmtN(l.sqft, lang)} pi²`],
    [t("Ch. / sdb", "Beds / baths"), (l) => `${l.beds} / ${l.baths}`],
    [t("Taxes / an", "Taxes / yr"), (l) => fmt$(l.taxesMun + l.taxesScol, lang)],
    [t("Copropriété / mois", "Condo / mo"), (l) => (l.condoFees ? fmt$(l.condoFees, lang) : "—")],
    ["Walk / Transit / " + t("Vélo", "Bike"), (l) => `${l.hood.walk} / ${l.hood.transit} / ${l.hood.bike}`],
    [t("Prévision médiane 6 ans", "6-yr median forecast"), (l) => { const v = fc(l); return (v >= 0 ? "+" : "") + v + "%"; }],
    [t("Criminalité (tendance)", "Crime (trend)"), (l) => `${l.hood.crimeDelta}%`],
  ];
  return (
    <div className="max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16">
      <Eyebrow>{t("Comparaison", "Comparison")}</Eyebrow>
      <h1 style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 26, color: C.ink, margin: "4px 0 14px" }}>{t("Côte à côte", "Side by side")}</h1>
      <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
        <div style={{ background: C.snow }} />
        {LISTINGS.map((l) => (
          <div key={l.id} className="p-3" style={{ background: C.ink, color: "#fff" }}>
            <div style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 14, lineHeight: 1.15 }}>{l.addr}</div>
            <div style={{ fontSize: 11, color: "#9FB2D6" }}>{l.area.split(",")[0]}</div>
          </div>
        ))}
        {rows.map(([label, fn], ri) => (
          <React.Fragment key={ri}>
            <div className="p-2.5" style={{ background: ri % 2 ? C.paper : C.snow, fontSize: 11.5, fontWeight: 600, color: C.sub, borderTop: `1px solid ${C.line}` }}>{label}</div>
            {LISTINGS.map((l) => (
              <div key={l.id} className="p-2.5" style={{ background: ri % 2 ? C.paper : C.snow, fontFamily: F.mono, fontSize: 12.5, color: C.ink, borderTop: `1px solid ${C.line}`, borderLeft: `1px solid ${C.line}` }}>{fn(l)}</div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-3" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono }}>{t("Coûts et prévisions = estimations du modèle, non garanties.", "Costs and forecasts = model estimates, not guaranteed.")}</div>
    </div>
  );
}

/* ================================================================== */
/*  Personal notes — per listing, saved to the portal (private)        */
/* ================================================================== */
function NotesSection({ lang, log, myNotes, setNote, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [draft, setDraft] = useState("");
  const add = () => {
    const txt = draft.trim();
    if (!txt) return;
    setNote([...myNotes, { id: `n-${Date.now()}`, txt, ts: Date.now() }]);
    setDraft("");
    // Only the fact that a note was written is signalled — never its content.
    log("note_saved", { chars: txt.length });
  };
  const del = (id) => setNote(myNotes.filter((n) => n.id !== id));
  const when = (ts) => new Date(ts).toLocaleString(lang === "fr" ? "fr-CA" : "en-CA", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={FileText} title={t("Mes notes", "My notes")} note={t("privées — enregistrées dans votre portail", "private — saved to your portal")} />
      <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={3}
        placeholder={t("Vos impressions sur cette propriété — questions pour la visite, points à vérifier…", "Your impressions of this property — questions for the visit, things to double-check…")}
        className="w-full rounded-lg px-2.5 py-2" style={{ border: `1.5px solid ${C.line}`, fontFamily: F.body, fontSize: 13.5, color: C.ink, resize: "vertical" }} />
      <button onClick={add} disabled={!draft.trim()}
        className="mt-2 rounded-xl px-4 py-2 inline-flex items-center gap-1.5"
        style={{ background: draft.trim() ? C.metro : C.line, color: "#fff", fontWeight: 700, fontSize: 13 }}>
        <Send size={13} /> {t("Enregistrer la note", "Save note")}
      </button>
      {myNotes.length > 0 && (
        <div className="mt-3 space-y-2">
          {myNotes.slice().reverse().map((n) => (
            <div key={n.id} className="rounded-xl p-3 flex items-start gap-2" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
              <div className="min-w-0 flex-1">
                <div style={{ fontSize: 13.5, color: C.ink, lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{n.txt}</div>
                <div style={{ fontFamily: F.mono, fontSize: 10.5, color: C.sub, marginTop: 4 }}>{when(n.ts)}</div>
              </div>
              <button onClick={() => del(n.id)} aria-label={t("Supprimer la note", "Delete note")} className="p-1 rounded-md" style={{ color: C.sub }}><X size={14} /></button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-2" style={{ fontSize: 10.5, color: C.sub }}>
        {t("Vos notes vous suivent d’un appareil à l’autre. Leur contenu reste privé — seul le fait que vous prenez des notes est visible par votre courtière.",
           "Your notes follow you across devices. Their content stays private — your broker only sees that you are taking notes.")}
      </div>
    </section>
  );
}

/* ================================================================== */
/*  Prospect view                                                      */
/* ================================================================== */
function ProspectView({ l, lang, log, reaction, setReaction, chat, setChat, dm, setDm, myNotes, setNote, onCompare, onBack }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [booking, setBooking] = useState(false), [passing, setPassing] = useState(false), [toast, setToast] = useState(null), [theme, setTheme] = useState("classique");
  const refs = { tour: useRef(null), design: useRef(null), cout: useRef(null), prev: useRef(null), quartier: useRef(null), commodites: useRef(null), risques: useRef(null), notes: useRef(null), questions: useRef(null), messages: useRef(null) };
  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2400); };
  const goto = (k) => { log("section_view", { s: k }); refs[k].current?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const heroTotal = useMemo(() => Math.round(mortgageMonthly(l.price * 0.8, 4.39, 25) + (l.taxesMun + l.taxesScol) / 12 + l.condoFees + (l.sqft * HEAT[l.heating].perSqft) / 12 + l.insuranceEst), [l]);
  const nav = [["tour", "3D"], ["design", "Design"], ["cout", t("Coût", "Cost")], ["prev", t("Prévision", "Forecast")], ["quartier", t("Quartier", "Area")], ["commodites", t("Commodités", "Amenities")], ["risques", t("Risques", "Risks")], ["notes", t("Notes", "Notes")], ["questions", "Questions"], ["messages", "Messages"]];

  return (
    // [radar-platform] patch (g): microsite fills the page — max-w-6xl + a
    // two-column section grid on lg screens (was a single max-w-2xl column).
    <div className="max-w-6xl mx-auto px-3 sm:px-4 pb-28">
      <div className="pt-5 pb-4 fade-up">
        <button onClick={onBack} className="inline-flex items-center gap-1 mb-2.5 rounded-full px-2.5 py-1" style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 11.5, fontWeight: 700, color: C.sub }}>← {t("Inscriptions", "Listings")}</button>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Eyebrow>Centris nº {l.id} · {l.area}</Eyebrow>
          <span className="inline-flex gap-1.5">
            {/* the tracked link from the client's own Matrix alert — clicking it
                registers the visit on Centris (Matrix « visiteurs récents ») */}
            {l.centrisUrl && <a href={l.centrisUrl} target="_blank" rel="noreferrer"
              onClick={() => log("centris_click", { url: l.centrisUrl })}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1"
              style={{ background: C.metro, color: "#fff", fontSize: 11.5, fontWeight: 700 }}>{t("Voir sur Centris ↗", "View on Centris ↗")}</a>}
            <button onClick={onCompare} className="inline-flex items-center gap-1 rounded-full px-2.5 py-1" style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 11.5, fontWeight: 700, color: C.metro }}><GitCompare size={12} /> {t("Comparer", "Compare")}</button>
          </span>
        </div>
        <h1 style={{ fontFamily: F.disp, fontWeight: 800, fontSize: "clamp(26px,6vw,36px)", color: C.ink, lineHeight: 1.08, margin: "6px 0 4px" }}>{l.addr}</h1>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 22, color: C.metro }}>{fmt$(l.price, lang)}</span>
          <span style={{ fontSize: 12.5, color: C.sub }}>{t("Éval. municipale", "Municipal eval.")} {fmt$(l.evalMun, lang)}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          <Pill tone="blue">{lang === "fr" ? l.typeFr : l.typeEn}</Pill><Pill>{l.beds} {t("ch.", "bd")} · {l.baths} {t("sdb", "ba")}</Pill><Pill>{fmtN(l.sqft, lang)} pi²</Pill><Pill>{l.year}</Pill>
        </div>
        <button onClick={() => goto("cout")} className="mt-4 w-full text-left rounded-2xl p-4" style={{ background: C.ink, color: "#fff" }}>
          <div className="flex items-center justify-between">
            <div>
              <div style={{ fontFamily: F.mono, fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#9FB2D6" }}>{t("Coût mensuel réel — estimé", "True monthly cost — estimated")}</div>
              <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 30, lineHeight: 1.15 }}>{fmt$(heroTotal, lang)}<span style={{ fontSize: 14, color: "#9FB2D6" }}> /{t("mois", "mo")}</span></div>
              <div style={{ fontSize: 11.5, color: "#9FB2D6" }}>{t("hypothèque + taxes + copro + énergie + assurance", "mortgage + taxes + condo + energy + insurance")}</div>
            </div>
            <ChevronRight size={22} style={{ color: C.ochre }} />
          </div>
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3">
        {l.rooms.map((r, i) => { const Ic = r.icon; return (
          <div key={i} className="flex-shrink-0 rounded-xl relative overflow-hidden" style={{ width: i === 0 ? 210 : 150, height: 120, background: `linear-gradient(150deg, ${r.g[0]}, ${r.g[1]})` }}>
            <Ic size={26} style={{ color: "rgba(255,255,255,.85)", position: "absolute", top: 10, left: 10 }} />
            <div className="absolute bottom-0 left-0 right-0 px-2.5 py-1.5" style={{ background: "linear-gradient(transparent, rgba(17,27,46,.72))" }}>
              <div style={{ color: "#fff", fontSize: 12.5, fontWeight: 700 }}>{lang === "fr" ? r.fr : r.en}</div>
              <div style={{ color: "rgba(255,255,255,.75)", fontSize: 10.5, fontFamily: F.mono }}>{r.d}</div>
            </div>
          </div>
        ); })}
      </div>

      <div className="sticky top-0 z-30 -mx-3 px-3 py-2" style={{ background: "rgba(246,248,250,.94)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${C.line}` }}>
        <div className="flex gap-1.5 overflow-x-auto">
          {nav.map(([k, label]) => <button key={k} onClick={() => goto(k)} className="rounded-full px-3 py-1.5 flex-shrink-0" style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 12.5, fontWeight: 700, color: C.ink }}>{label}</button>)}
        </div>
      </div>

      {/* patch (g): sections flow into two columns on desktop; the 3D tour
          and the design studio keep the full width */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        <div ref={refs.tour} className="lg:col-span-2"><HouseTour3D listing={l} lang={lang} onEvent={log} theme={theme} onThemeChange={(k) => { setTheme(k); log("theme_change", { theme: k }); }} onDesigner={() => refs.design.current?.scrollIntoView({ behavior: "smooth", block: "start" })} /></div>
        <div className="lg:col-span-2"><DesignSection lang={lang} log={log} theme={theme} setTheme={setTheme} refEl={refs.design} /></div>
        <CostSection l={l} lang={lang} log={log} refEl={refs.cout} />
        <ForecastSection l={l} lang={lang} log={log} refEl={refs.prev} />
        <HoodSection l={l} lang={lang} refEl={refs.quartier} />
        <AmenitiesSection l={l} lang={lang} log={log} refEl={refs.commodites} />
        <RiskSection l={l} lang={lang} log={log} refEl={refs.risques} />
        {l.fund && <FundSection l={l} lang={lang} />}
        <CompsSection l={l} lang={lang} />
        <section className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
          <SectionHead icon={FileText} title={t("Déclarations du vendeur", "Seller’s declarations")} note={t("extraits vérifiables", "verifiable extracts")} />
          <div className="space-y-2.5">
            {l.dv.map((d) => (
              <div key={d.s} className="flex gap-2.5">
                <span style={{ fontFamily: F.mono, fontSize: 11, fontWeight: 600, color: C.metro, background: C.metroSoft, borderRadius: 6, padding: "2px 6px", height: "fit-content" }}>{d.s}</span>
                <div><div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>{lang === "fr" ? d.qFr : d.qEn}</div><div style={{ fontSize: 13, color: C.sub, lineHeight: 1.45 }}>{lang === "fr" ? d.aFr : d.aEn}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-3" style={{ fontSize: 12.5, color: C.ink }}><b>{t("Inclusions :", "Inclusions:")}</b> {lang === "fr" ? l.inclFr : l.inclEn} · <b>{t("Stationnement :", "Parking:")}</b> {lang === "fr" ? l.parkFr : l.parkEn}</div>
        </section>
        <NotesSection lang={lang} log={log} myNotes={myNotes} setNote={setNote} refEl={refs.notes} />
        <ChatSection l={l} lang={lang} log={log} chat={chat} setChat={setChat} refEl={refs.questions} />
        <BrokerDMSection l={l} lang={lang} log={log} dm={dm} setDm={setDm} refEl={refs.messages} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2" style={{ background: "linear-gradient(transparent, rgba(246,248,250,.96) 34%)" }}>
        <div className="max-w-2xl mx-auto flex gap-2">
          <button onClick={() => { if (reaction === "interested") return; log("reaction_interested"); setReaction("interested"); flash(t("Noté — Julie le sait.", "Noted — Julie knows.")); }}
            className="flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5" style={{ background: reaction === "interested" ? C.spruce : C.paper, color: reaction === "interested" ? "#fff" : C.ink, border: `1.5px solid ${reaction === "interested" ? C.spruce : C.line}`, fontWeight: 700, fontSize: 14 }}><Heart size={16} /> {t("Intéressé·e", "Interested")}</button>
          <button onClick={() => setPassing(true)} className="rounded-xl px-4 flex items-center justify-center gap-1.5" style={{ background: reaction === "pass" ? C.ink : C.paper, color: reaction === "pass" ? "#fff" : C.sub, border: `1.5px solid ${C.line}`, fontWeight: 700, fontSize: 14 }}><ThumbsDown size={15} /> {t("Pas pour moi", "Not for me")}</button>
          <button onClick={() => setBooking(true)} className="flex-1 rounded-xl py-3 flex items-center justify-center gap-1.5" style={{ background: C.metro, color: "#fff", fontWeight: 700, fontSize: 14 }}><CalendarCheck size={16} /> {t("Visiter", "Visit")}</button>
        </div>
      </div>

      {toast && <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 fade-up" style={{ background: C.ink, color: "#fff", fontSize: 13, fontWeight: 600 }}>{toast}</div>}
      {booking && <BookingModal l={l} lang={lang} log={log} onClose={() => setBooking(false)} />}
      {passing && <PassModal lang={lang} log={log} onClose={() => setPassing(false)} onDone={() => { setReaction("pass"); setPassing(false); flash(t("Merci — alertes ajustées.", "Thanks — alerts adjusted.")); }} />}
    </div>
  );
}

/* ================================================================== */
/*  PART 8 — Realtor profile & App shell                              */
/* ================================================================== */

const REALTOR = {
  ...BROKER,
  initials: "JF",
  phone: "514 555-0142",
  email: "julie.fortin@remaxducartier.ca",
  years: 12,
  deals: 180,
  rating: 4.9,
  reviewCount: 87,
  areas_fr: "Rosemont · Ahuntsic · Villeray",
  areas_en: "Rosemont · Ahuntsic · Villeray",
  story: {
    fr: "Julie accompagne acheteurs et vendeurs sur l’île de Montréal depuis plus de dix ans. Ancienne conseillère en aménagement, elle lit un quartier autant qu’une fiche : écoles, transport, projets à venir. Sa promesse est simple — des réponses franches, des chiffres vérifiables, et jamais de pression. Chaque Vitrine que vous recevez est préparée à la main, à partir de ce qu’elle sait vraiment de la propriété et du secteur.",
    en: "Julie has guided buyers and sellers across the island of Montréal for over a decade. A former urban-planning advisor, she reads a neighbourhood as closely as a listing sheet: schools, transit, what’s being built next. Her promise is simple — straight answers, numbers you can check, and never any pressure. Every Vitrine you receive is prepared by hand, from what she genuinely knows about the property and the area.",
  },
  reviews: [
    { name: "Marc & Sophie L.", area_fr: "Acheteurs — Rosemont", area_en: "Buyers — Rosemont", rating: 5,
      fr: "Julie a repéré un problème de drainage que deux autres courtiers avaient manqué. Honnête jusqu’au bout.",
      en: "Julie caught a drainage issue two other agents had missed. Honest to the end." },
    { name: "Amélie D.", area_fr: "Vendeuse — Villeray", area_en: "Seller — Villeray", rating: 5,
      fr: "Vendu en neuf jours, au-dessus du prix demandé, sans jamais me sentir bousculée. Ses données de quartier ont fait la différence.",
      en: "Sold in nine days, over asking, and never once felt rushed. Her neighbourhood data made the difference." },
    { name: "Karim B.", area_fr: "Acheteur — Ahuntsic", area_en: "Buyer — Ahuntsic", rating: 4,
      fr: "Patiente avec un premier acheteur nerveux. Elle a expliqué chaque chiffre, taxe de bienvenue incluse.",
      en: "Patient with a nervous first-time buyer. She walked me through every number, welcome tax included." },
  ],
};

function Stars({ n, size = 13 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${n}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} strokeWidth={2}
          fill={i <= n ? C.ochre : "none"} color={i <= n ? C.ochre : C.line} />
      ))}
    </span>
  );
}

function RealtorProfile({ lang }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const R = REALTOR;
  return (
    <div className="max-w-2xl mx-auto px-3 sm:px-4 pb-16">
      <div className="pt-5 fade-up"><Eyebrow>{t("Votre courtière", "Your broker")}</Eyebrow></div>

      {/* Identity card */}
      <div className="mt-3 rounded-2xl p-4 sm:p-5 fade-up" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
        <div className="flex items-center gap-3.5">
          <span style={{ width: 60, height: 60, borderRadius: 999, background: C.metroSoft, color: C.metro, display: "grid", placeItems: "center", fontFamily: F.disp, fontWeight: 800, fontSize: 22, flexShrink: 0 }}>{R.initials}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 20, color: C.ink }}>{R.name}</span>
              <Pill tone="green"><ShieldCheck size={11} /> {t("Vérifiée OACIQ", "OACIQ-licensed")}</Pill>
            </div>
            <div style={{ fontSize: 13, color: C.sub, marginTop: 2 }}>{lang === "fr" ? R.title_fr : R.title_en}</div>
            <div style={{ fontSize: 12.5, color: C.sub, fontFamily: F.mono }}>{R.agency} · {lang === "fr" ? R.areas_fr : R.areas_en}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { icon: Star, v: R.rating.toFixed(1), l: t(`${R.reviewCount} avis`, `${R.reviewCount} reviews`), c: "#8A5A12", bg: C.ochreSoft },
            { icon: Award, v: `${R.years}`, l: t("ans d’expérience", "years experience"), c: C.metro, bg: C.metroSoft },
            { icon: Home, v: `${R.deals}+`, l: t("transactions", "closings"), c: C.spruce, bg: C.spruceSoft },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-2.5 text-center" style={{ background: s.bg, border: `1px solid ${C.line}` }}>
              <s.icon size={15} style={{ color: s.c, margin: "0 auto" }} />
              <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 20, color: C.ink, lineHeight: 1.1, marginTop: 3 }}>{s.v}</div>
              <div style={{ fontSize: 10.5, color: C.sub, fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a href={`tel:${R.phone.replace(/\s/g, "")}`} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5" style={{ background: C.metro, color: "#fff", fontWeight: 700, fontSize: 13.5 }}><Phone size={15} /> {R.phone}</a>
          <a href={`mailto:${R.email}`} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5" style={{ background: C.paper, color: C.metro, border: `1px solid ${C.line}`, fontWeight: 700, fontSize: 13.5 }}><Mail size={15} /> {t("Écrire un courriel", "Send an email")}</a>
        </div>
      </div>

      {/* Story */}
      <div className="mt-5 rounded-2xl p-4 sm:p-5 fade-up" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
        <SectionHead icon={Sparkles} title={t("Son histoire", "Her story")} note={t("à propos", "about")} />
        <p style={{ fontSize: 14, color: C.ink, lineHeight: 1.6, margin: 0 }}>{lang === "fr" ? R.story.fr : R.story.en}</p>
      </div>

      {/* Reviews */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <SectionHead icon={MessageSquare} title={t("Avis clients", "Client reviews")} note={t("vérifiés", "verified")} />
          <div className="inline-flex items-center gap-1.5 shrink-0" style={{ fontSize: 12.5, color: C.sub }}>
            <Stars n={Math.round(R.rating)} /> <span style={{ fontFamily: F.mono }}>{R.rating.toFixed(1)}/5</span>
          </div>
        </div>
        <div className="space-y-2.5">
          {R.reviews.map((rv, i) => (
            <div key={i} className="rounded-2xl p-3.5 fade-up" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
              <div className="flex items-center justify-between gap-2">
                <div style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 14.5, color: C.ink }}>{rv.name}</div>
                <Stars n={rv.rating} />
              </div>
              <div style={{ fontSize: 11.5, color: C.sub, marginTop: 1 }}>{lang === "fr" ? rv.area_fr : rv.area_en}</div>
              <p style={{ fontSize: 13.5, color: C.ink, lineHeight: 1.5, margin: "8px 0 0" }}>« {lang === "fr" ? rv.fr : rv.en} »</p>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-1.5 px-1 mt-3" style={{ fontSize: 10.5, color: C.sub }}>
          <ShieldCheck size={12} style={{ marginTop: 1, flexShrink: 0 }} />
          {t("Profil et avis fournis à titre de démonstration — à remplacer par le profil réel du courtier et ses avis vérifiés.", "Profile and reviews shown for demonstration — replace with the broker’s real profile and verified reviews.")}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- App shell ---------------------------- */
function App() {
  const [lang, setLang] = useState("fr");
  const [view, setView] = useState("listings");
  const [listingId, setListingId] = useState(LISTINGS[0].id);
  const [events, setEvents] = useState([]);
  const [reactions, setReactions] = useState({});
  const [chats, setChats] = useState({});
  const [dms, setDms] = useState({});
  const [notes, setNotes] = useState({});
  const [ready, setReady] = useState(false);
  const t = (fr, en) => (lang === "fr" ? fr : en);

  useEffect(() => {
    (async () => {
      let ev = await store.get(K.events, null);
      if (!ev || !Array.isArray(ev) || ev.length === 0) { ev = seedEvents(); await store.set(K.events, ev); }
      setEvents(ev);
      setReactions((await store.get(K.reactions, {})) || {});
      setChats((await store.get(K.chats, {})) || {});
      setDms((await store.get(K.dms, {})) || {});
      setNotes((await store.get(K.notes, {})) || {});
      setReady(true);
    })();
  }, []);

  const listing = LISTINGS.find((l) => l.id === listingId) || LISTINGS[0];

  function log(type, meta, lid) {
    const e = { id: `${DEMO_PROSPECT.id}-${type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, pid: DEMO_PROSPECT.id, pname: DEMO_PROSPECT.name, lid: lid || listingId, type, ts: Date.now(), meta: meta || null };
    setEvents((prev) => { const next = [...prev, e]; store.set(K.events, next); return next; });
  }
  function openListing(id) {
    setListingId(id); setView("prospect");
    resetScroll(); // patch (f): the microsite must open at the very top
    const e = { id: `${DEMO_PROSPECT.id}-visit-${Date.now()}`, pid: DEMO_PROSPECT.id, pname: DEMO_PROSPECT.name, lid: id, type: "visit", ts: Date.now(), meta: null };
    setEvents((prev) => { const next = [...prev, e]; store.set(K.events, next); return next; });
  }
  // [radar-platform] patch (e): tracked alert-email clicks land on
  // /portail/<token>?listing=<no> — the bridge stashes it, we open it once.
  useEffect(() => {
    if (!ready || typeof window === "undefined" || !window.__VITRINE_OPEN__) return;
    const id = window.__VITRINE_OPEN__;
    delete window.__VITRINE_OPEN__;
    if (LISTINGS.some((l) => String(l.id) === String(id))) openListing(id);
  }, [ready]);
  // [radar-platform] patch (f): every view change starts at the top — without
  // this, opening a microsite kept the listings-grid scroll offset and the
  // page appeared to load mid-way down. Reset synchronously on click AND
  // after render (rAF) so late-mounting content can't restore the old offset.
  function resetScroll() {
    if (typeof window === "undefined") return;
    const up = () => { window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0; };
    up();
    if (window.requestAnimationFrame) window.requestAnimationFrame(up);
  }
  useEffect(() => { resetScroll(); }, [view, listingId]);
  const setReaction = (r) => setReactions((prev) => { const next = { ...prev, [listingId]: r }; store.set(K.reactions, next); return next; });
  const setChat = (arr) => setChats((prev) => { const next = { ...prev, [listingId]: arr }; store.set(K.chats, next); return next; });
  const setDm = (arr) => setDms((prev) => { const next = { ...prev, [listingId]: arr }; store.set(K.dms, next); return next; });
  const setNote = (arr) => setNotes((prev) => { const next = { ...prev, [listingId]: arr }; store.set(K.notes, next); return next; });

  async function resetDemo() {
    const seeded = seedEvents();
    await store.set(K.events, seeded); await store.del(K.reactions); await store.del(K.chats); await store.del(K.dms);
    setEvents(seeded); setReactions({}); setChats({}); setDms({}); setView("broker");
  }

  if (!ready) {
    return (
      <div style={{ background: C.snow, minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: F.body }}>
        <style>{FONT_CSS}</style>
        <div style={{ textAlign: "center", color: C.sub }}>
          <Building2 size={26} style={{ color: C.metro, margin: "0 auto 8px" }} />
          <div style={{ fontFamily: F.mono, fontSize: 12.5 }}>Vitrine…</div>
        </div>
      </div>
    );
  }

  const views = [["listings", List, t("Inscriptions", "Listings")], ["alerts", Bell, t("Alertes", "Alerts")], ["broker", User, t("Votre courtière", "Your broker")]];

  return (
    <div style={{ background: C.snow, minHeight: "100vh", fontFamily: F.body, color: C.ink }}>
      <style>{FONT_CSS}</style>

      <header className="sticky top-0 z-40" style={{ background: "rgba(246,248,250,.86)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.line}` }}>
        {/* [radar-platform] patch (d): header widened to match patch (c) */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-2">
              <span style={{ width: 28, height: 28, borderRadius: 8, background: C.ink, color: "#fff", display: "grid", placeItems: "center", fontFamily: F.disp, fontWeight: 800, fontSize: 15 }}>V</span>
              <div style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 17, color: C.ink, letterSpacing: "-.01em" }}>Vitrine</div>
            </div>
            <button onClick={() => setLang((x) => (x === "fr" ? "en" : "fr"))} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5" style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 12, fontWeight: 700, color: C.ink }}>
              <Globe size={13} /> {lang === "fr" ? "FR" : "EN"}
            </button>
          </div>
          <div className="flex gap-1 pb-2">
            {views.map(([k, Icon, label]) => (
              <button key={k} onClick={() => setView(k)} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg py-2" style={{ background: view === k ? C.ink : C.paper, color: view === k ? "#fff" : C.sub, border: `1px solid ${view === k ? C.ink : C.line}`, fontWeight: 700, fontSize: 12.5 }}>
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>
          
        </div>
      </header>

      <main>
        {view === "listings" && <ListingsView lang={lang} onOpen={openListing} log={log} />}
        {view === "prospect" && (
          <ProspectView key={listingId} l={listing} lang={lang} log={log}
            reaction={reactions[listingId]} setReaction={setReaction}
            chat={chats[listingId] || []} setChat={setChat}
            dm={dms[listingId] || []} setDm={setDm}
            myNotes={notes[listingId] || []} setNote={setNote}
            onCompare={() => setView("compare")} onBack={() => setView("listings")} />
        )}
        {view === "alerts" && <PrefsView lang={lang} log={log} />}
        {view === "broker" && <RealtorProfile lang={lang} />}
        {view === "compare" && <CompareView lang={lang} onEvent={log} />}
      </main>

      {view !== "prospect" && (
        <footer className="max-w-2xl mx-auto px-4 py-6" style={{ borderTop: `1px solid ${C.line}`, marginTop: 8 }}>
          <div className="flex items-start gap-2" style={{ fontSize: 10.5, color: C.sub, lineHeight: 1.55 }}>
            <ShieldCheck size={13} style={{ marginTop: 1, flexShrink: 0, color: C.sub }} />
            <div>
              {t(
                "Démo Vitrine — données d’inscription fictives. Visites 3D reconstituées et générées par IA (illustratives). Prévisions de prix illustratives, non une évaluation agréée. Estimations de trajet non routées en temps réel. Ameublement virtuel identifié comme tel. L’assistant IA ne donne pas de conseils juridiques, fiscaux ou sur le prix d’offre. Conforme par conception : LCAP, Loi 25, Loi 96, conditions Centris, OACIQ.",
                "Vitrine demo — fictional listing data. 3D tours are AI-generated reconstructions (illustrative). Price forecasts are illustrative, not a certified appraisal. Commute estimates are not real-time routed. Virtual staging is labelled as such. The AI assistant does not give legal, tax, or offer-price advice. Compliant by design: CASL, Law 25, Bill 96, Centris terms, OACIQ."
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

/* ================================================================== */
/*  PART 9 — Ambiances, magasinage, fiche→3D, designers, préférences   */
/* ================================================================== */
const THEMES = {
  classique: { fr: "Classique", en: "Classic", wall: "#EEF1F6", dot: "#8FA0BC" },
  tranquille: { fr: "Tranquille", en: "Tranquil", wall: "#F1EFE6", dot: "#B9C6B4", fabric: "#B9C6B4", wood: "#B8A98F", metal: "#8E9AA0", accent: "#EAE3D2", fixture: "#EDF2EE" },
  moderne: { fr: "Moderne", en: "Modern", wall: "#E9EBEF", dot: "#3C4048", fabric: "#5C6470", wood: "#3C4048", metal: "#20242B", accent: "#D9DDE3", fixture: "#F2F4F6" },
  scandinave: { fr: "Scandinave", en: "Scandi", wall: "#F7F6F2", dot: "#E4D5BC", fabric: "#D8E0E8", wood: "#E4D5BC", metal: "#B9C2CC", accent: "#FFFFFF", fixture: "#F6F8F9" },
};
const SHOP_CATALOG = {
  sofa: { fr: "Sofa 3 places", en: "3-seat sofa", price: "899 – 2 399 $", stores: ["Structube", "EQ3", "Article"] },
  coffee: { fr: "Table basse", en: "Coffee table", price: "199 – 699 $", stores: ["Structube", "IKEA"] },
  rug: { fr: "Tapis", en: "Area rug", price: "149 – 899 $", stores: ["EQ3", "HomeSense"] },
  counter: { fr: "Cuisine sur mesure", en: "Custom kitchen", price: "Sur devis", stores: ["Ébéniste local", "Cuisines Action"] },
  island: { fr: "Îlot de cuisine", en: "Kitchen island", price: "Sur devis", stores: ["Ébéniste local", "IKEA"] },
  bed: { fr: "Lit grand format + tête de lit", en: "Queen bed + headboard", price: "649 – 1 899 $", stores: ["Structube", "Mobilia", "IKEA"] },
  bedS: { fr: "Lit simple / double", en: "Twin / double bed", price: "449 – 1 199 $", stores: ["Structube", "IKEA"] },
  night: { fr: "Table de chevet", en: "Nightstand", price: "129 – 399 $", stores: ["IKEA", "Structube"] },
  tub: { fr: "Bain & robinetterie", en: "Tub & fixtures", price: "Sur devis", stores: ["Bain Dépôt", "Plombier partenaire"] },
  vanity: { fr: "Meuble-lavabo", en: "Vanity", price: "399 – 1 299 $", stores: ["Rona", "Bain Dépôt"] },
  table: { fr: "Table à manger", en: "Dining table", price: "499 – 1 599 $", stores: ["Article", "Maison Corbeil"] },
  chair: { fr: "Chaises d’extérieur", en: "Outdoor chairs", price: "89 – 349 $ / ch.", stores: ["Canadian Tire", "IKEA"] },
  chair2: { fr: "Chaises d’extérieur", en: "Outdoor chairs", price: "89 – 349 $ / ch.", stores: ["Canadian Tire", "IKEA"] },
  pool: { fr: "Piscine hors terre", en: "Above-ground pool", price: "3 500 – 9 000 $", stores: ["Trévi", "Club Piscine"] },
  shed: { fr: "Cabanon", en: "Shed", price: "1 200 – 4 500 $", stores: ["Rona", "Home Depot"] },
  tv: { fr: "Téléviseur + meuble", en: "TV + media unit", price: "649 – 1 999 $", stores: ["Best Buy", "Structube"] },
  plant: { fr: "Plante d’intérieur + pot", en: "Indoor plant + pot", price: "39 – 149 $", stores: ["Folia Design", "IKEA"] },
  art: { fr: "Œuvre encadrée", en: "Framed art", price: "89 – 450 $", stores: ["Artiste local", "Simons Maison"] },
  stool: { fr: "Tabourets d’îlot (×2)", en: "Island stools (×2)", price: "158 – 498 $", stores: ["Structube", "EQ3"] },
  mirror: { fr: "Miroir de salle de bain", en: "Bathroom mirror", price: "99 – 349 $", stores: ["Rona", "Bain Dépôt"] },
};

/* ---- Fiche Centris → plan 3D (déterministe) ---- */
const SAMPLE_FICHE = `Salon 4,9 x 3,7
Cuisine 3,4 x 3,0
Chambre principale 3,6 x 3,3
Chambre 2,9 x 2,6
Salle de bain 2,4 x 1,5
Véranda 3,0 x 2,4`;
function parseFicheRooms(text) {
  const rooms = [];
  for (const raw of (text || "").split("\n")) {
    const line = raw.trim(); if (!line) continue;
    const m = line.match(/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)/i);
    if (!m) continue;
    const w = parseFloat(m[2].replace(",", ".")), d = parseFloat(m[3].replace(",", "."));
    if (w > 0.5 && d > 0.5 && w < 30 && d < 30) rooms.push({ name: m[1].trim(), w, d });
  }
  return rooms;
}
const ROOM_KIND = [
  [/salon|s[ée]jour|living/i, { col: "#C9D8EE", furn: ["sofa", "coffee", "rug", "tv", "plant", "art"] }],
  [/cuisine|kitchen/i, { col: "#EDE6D6", furn: ["counter", "island", "stool"] }],
  [/manger|dinette|dining/i, { col: "#E8E2D6", furn: ["table", "art"] }],
  [/principale|ma[îi]tres|primary|master/i, { col: "#DCE2EE", furn: ["bed", "night", "plant"] }],
  [/chambre|bedroom|\bch\b/i, { col: "#E6E1EE", furn: ["bedS", "night"] }],
  [/bain|sdb|salle d.eau|bath/i, { col: "#DCEAE4", furn: ["tub", "vanity", "mirror"] }],
  [/garage/i, { col: "#DADEE4", furn: ["car"] }],
  [/cour|terrain|balcon|patio|v[ée]randa|yard|deck/i, { col: "#CFE2D6", furn: ["chair", "chair2"], open: true }],
];
function layoutPlan(rooms) {
  const totalArea = rooms.reduce((s, r) => s + r.w * r.d, 0);
  const targetW = Math.max(Math.max(...rooms.map((r) => r.w)) + 0.2, Math.sqrt(totalArea) * 1.35);
  const plan = []; let x = 0, z = 0, rowD = 0;
  rooms.forEach((r, i) => {
    if (x > 0 && x + r.w > targetW) { x = 0; z += rowD + 0.2; rowD = 0; }
    const kind = (ROOM_KIND.find(([rx]) => rx.test(r.name)) || [null, { col: "#E3E6EC", furn: [] }])[1];
    plan.push({ key: `r${i}`, fr: r.name, en: r.name, x, z, w: r.w, d: r.d, col: kind.col, furn: kind.furn || [], open: !!kind.open });
    x += r.w + 0.2; rowD = Math.max(rowD, r.d);
  });
  return plan;
}
function GenFromFiche({ lang, defaultNo, onGenerate }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [no, setNo] = useState(defaultNo);
  const [txt, setTxt] = useState(SAMPLE_FICHE);
  const [err, setErr] = useState(false);
  return (
    <div className="pb-2">
      <div style={{ fontFamily: F.disp, fontWeight: 700, fontSize: 19, color: C.ink }}>{t("Fiche Centris → plan 3D", "Centris sheet → 3D plan")}</div>
      <div style={{ fontSize: 12, color: C.sub, margin: "4px 0 10px", lineHeight: 1.5 }}>
        {t("En production, le nº Centris récupère la fiche via le canal du courtier et les dimensions des pièces sont extraites automatiquement (voir la spec d’ingestion). Ici, collez le tableau des pièces — nom + dimensions en mètres.",
           "In production, the Centris nº pulls the sheet through the broker’s channel and room dimensions are extracted automatically (see the ingestion spec). Here, paste the room table — name + dimensions in metres.")}
      </div>
      <label style={{ fontSize: 12, color: C.sub }}>{t("Nº Centris", "Centris nº")}</label>
      <input value={no} onChange={(e) => setNo(e.target.value)} className="w-full rounded-lg px-2.5 py-2 mb-2" style={{ border: `1.5px solid ${C.line}`, fontFamily: F.mono, fontSize: 14, color: C.ink }} />
      <label style={{ fontSize: 12, color: C.sub }}>{t("Pièces (une par ligne)", "Rooms (one per line)")}</label>
      <textarea value={txt} onChange={(e) => setTxt(e.target.value)} rows={7} className="w-full rounded-lg px-2.5 py-2" style={{ border: `1.5px solid ${C.line}`, fontFamily: F.mono, fontSize: 12.5, color: C.ink, resize: "vertical" }} />
      {err && <div style={{ fontSize: 12, color: C.danger, marginTop: 4 }}>{t("Aucune pièce reconnue — format attendu : « Salon 4,9 x 3,7 ».", "No rooms recognized — expected format: “Living 4.9 x 3.7”.")}</div>}
      <button onClick={() => { const rooms = parseFicheRooms(txt); if (!rooms.length) { setErr(true); return; } onGenerate((no || "").trim() || "—", rooms); }}
        className="mt-3 w-full rounded-xl py-3 inline-flex items-center justify-center gap-2" style={{ background: C.metro, color: "#fff", fontWeight: 700, fontSize: 14.5 }}>
        <Wand2 size={16} /> {t("Générer le plan 3D", "Generate the 3D plan")}
      </button>
    </div>
  );
}

/* ---- Réseau de designers ---- */
const DESIGNERS = [
  { id: "camille", name: "Camille Bérubé", cityFr: "Mile End, Montréal", cityEn: "Mile End, Montreal", style: "tranquille",
    tagsFr: ["Ambiance tranquille", "Matériaux naturels", "Petits espaces"], tagsEn: ["Tranquil mood", "Natural materials", "Small spaces"], rate: "95 $/h" },
  { id: "marco", name: "Marc-Olivier Tessier", cityFr: "Griffintown, Montréal", cityEn: "Griffintown, Montreal", style: "moderne",
    tagsFr: ["Moderne épuré", "Rénos condo", "Éclairage"], tagsEn: ["Clean modern", "Condo renos", "Lighting"], rate: "120 $/h" },
  { id: "noor", name: "Noor Haddad", cityFr: "Vieux-Longueuil", cityEn: "Old Longueuil", style: "scandinave",
    tagsFr: ["Scandinave chaleureux", "Familles", "Budget malin"], tagsEn: ["Warm Scandi", "Families", "Smart budgets"], rate: "85 $/h" },
];
function DesignSection({ lang, log, theme, setTheme, refEl }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [booked, setBooked] = useState({});
  const shopKeys = ["sofa", "table", "coffee", "rug"];
  return (
    <section ref={refEl} className="rounded-2xl p-4 sm:p-5" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
      <SectionHead icon={Brush} title={t("Designers & ambiances", "Designers & moods")} note={t("réseau partenaire — démo", "partner network — demo")} />
      <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 10 }}>
        {t("Prévisualisez le style d’un·e designer directement dans la visite 3D, puis réservez une consultation.", "Preview a designer’s style right in the 3D tour, then book a consultation.")}
      </div>
      <div className="space-y-2.5">
        {DESIGNERS.map((d) => {
          const th = THEMES[d.style]; const active = theme === d.style;
          return (
            <div key={d.id} className="rounded-xl p-3" style={{ background: C.snow, border: `1px solid ${active ? "#C9D9F2" : C.line}` }}>
              <div className="flex items-center gap-2.5">
                <span style={{ width: 38, height: 38, borderRadius: 12, background: th.dot, color: "#fff", display: "grid", placeItems: "center", fontFamily: F.disp, fontWeight: 800, fontSize: 14 }}>{d.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</span>
                <div className="min-w-0 flex-1">
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.ink }}>{d.name}</div>
                  <div style={{ fontSize: 11.5, color: C.sub }}>{lang === "fr" ? d.cityFr : d.cityEn} · {d.rate}</div>
                </div>
                <Pill tone="blue">{lang === "fr" ? th.fr : th.en}</Pill>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">{(lang === "fr" ? d.tagsFr : d.tagsEn).map((tg) => <Pill key={tg}>{tg}</Pill>)}</div>
              <div className="flex gap-2 mt-2.5">
                <button onClick={() => { setTheme(d.style); log("theme_change", { theme: d.style, via: d.id }); }}
                  className="flex-1 rounded-lg py-2 inline-flex items-center justify-center gap-1.5"
                  style={{ background: active ? C.metro : C.paper, color: active ? "#fff" : C.metro, border: `1.5px solid ${active ? C.metro : "#C9D9F2"}`, fontSize: 12.5, fontWeight: 700 }}>
                  <Palette size={13} /> {active ? t("Ambiance appliquée ✓", "Mood applied ✓") : t("Prévisualiser en 3D", "Preview in 3D")}
                </button>
                <button onClick={() => { if (!booked[d.id]) { setBooked((b) => ({ ...b, [d.id]: true })); log("designer_request", { designer: d.id }); } }}
                  className="flex-1 rounded-lg py-2" style={{ background: booked[d.id] ? C.spruceSoft : C.ink, color: booked[d.id] ? C.spruce : "#fff", fontSize: 12.5, fontWeight: 700 }}>
                  {booked[d.id] ? t("Demande envoyée ✓", "Request sent ✓") : t("Consultation 30 min", "30-min consult")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 rounded-xl p-3" style={{ background: C.ochreSoft, border: "1px solid #EBD3A0" }}>
        <div className="inline-flex items-center gap-1.5 mb-1.5" style={{ fontSize: 12.5, fontWeight: 800, color: C.ink }}>
          <ShoppingBag size={14} style={{ color: "#8A5A12" }} /> {t("Magasiner l’ambiance", "Shop the mood")} — {lang === "fr" ? THEMES[theme].fr : THEMES[theme].en}
        </div>
        <div className="space-y-1">
          {shopKeys.map((k) => (
            <button key={k} onClick={() => log("shop_item", { item: k, via: "design_section" })} className="w-full flex items-center justify-between rounded-lg px-2.5 py-1.5" style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 12 }}>
              <span style={{ color: C.ink, fontWeight: 600 }}>{lang === "fr" ? SHOP_CATALOG[k].fr : SHOP_CATALOG[k].en}</span>
              <span style={{ fontFamily: F.mono, color: C.sub }}>{SHOP_CATALOG[k].price} · {SHOP_CATALOG[k].stores[0]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-start gap-1.5" style={{ fontSize: 10.5, color: C.sub }}>
        <ShieldCheck size={12} style={{ marginTop: 1, flexShrink: 0 }} />
        {t("Liens marchands = partenaires (commission possible), identifiés comme tels et distincts du courtage immobilier. Vos coordonnées ne sont partagées à un·e designer qu’après votre confirmation (Loi 25).",
           "Merchant links are partner links (commission possible), labelled as such and separate from the brokerage. Your contact info is shared with a designer only after you confirm (Law 25).")}
      </div>
    </section>
  );
}

/* ---- Préférences de recherche (Alertes) ---- */
const AREAS_ALL = ["Le Plateau-Mont-Royal", "Vieux-Longueuil", "Mont-Tremblant", "Sainte-Agathe-des-Monts", "Sainte-Adèle", "Sainte-Marguerite–Lac-Masson", "Saint-Sauveur", "Val-David"];
const TYPES_ALL = [["detache", "Détaché", "Detached"], ["condo", "Condo", "Condo"], ["plex", "Plex", "Plex"], ["mobile", "Maison mobile", "Mobile home"]];
const DEFAULT_PREFS = { pmin: 250000, pmax: 650000, beds: 2, baths: 1, lot: 0, types: ["detache", "condo"], must: { piscine: false, garage: false, foyer: false }, areas: ["Le Plateau-Mont-Royal", "Vieux-Longueuil"] };
function PrefsView({ lang, log }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [p, setP] = useState(DEFAULT_PREFS);
  const [status, setStatus] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { (async () => { const saved = await store.get(K.prefs, null); if (saved && saved.p) { setP({ ...DEFAULT_PREFS, ...saved.p }); setStatus(saved.status || null); } setLoaded(true); })(); }, []);
  const up = (patch) => setP((c) => ({ ...c, ...patch }));
  const toggleArr = (key, v) => up({ [key]: p[key].includes(v) ? p[key].filter((x) => x !== v) : [...p[key], v] });
  const setAll = (key, values) => up({ [key]: values });
  const AllNone = ({ k, all }) => (
    <span className="inline-flex gap-1" style={{ marginLeft: "auto" }}>
      <button onClick={() => setAll(k, [...all])} disabled={p[k].length === all.length}
        style={{ background: "transparent", border: 0, fontSize: 11, fontWeight: 700, color: p[k].length === all.length ? C.line : C.metro }}>
        ✓ {t("Tout", "All")}
      </button>
      <button onClick={() => setAll(k, [])} disabled={p[k].length === 0}
        style={{ background: "transparent", border: 0, fontSize: 11, fontWeight: 700, color: p[k].length === 0 ? C.line : C.sub }}>
        ✕ {t("Aucun", "None")}
      </button>
    </span>
  );
  const matches = LISTINGS.filter((l) => {
    const typeOk = p.types.includes(l.condoFees > 0 ? "condo" : "detache");
    const priceOk = l.price >= p.pmin && l.price <= p.pmax;
    const bedsOk = l.beds >= p.beds, bathsOk = l.baths >= p.baths;
    const poolOk = !p.must.piscine || /piscine/i.test(l.inclFr);
    const garOk = !p.must.garage || /garage/i.test(l.parkFr);
    const areaOk = p.areas.length === 0 || p.areas.some((a) => l.area.includes(a));
    return typeOk && priceOk && bedsOk && bathsOk && poolOk && garOk && areaOk;
  }).length;
  async function save() {
    setStatus("vitrine");
    await store.set(K.prefs, { p, status: "vitrine" });
    log("criteria_update", { summary: `${fmtK(p.pmin, lang)}–${fmtK(p.pmax, lang)} · ${p.beds}+ ch · ${p.areas.length} secteurs` });
    setTimeout(async () => { setStatus("sent"); await store.set(K.prefs, { p, status: "sent" }); }, 600);
    setTimeout(async () => { setStatus("synced"); await store.set(K.prefs, { p, status: "synced" }); }, 3200);
  }
  const Chip = ({ on, onClick, children }) => (
    <button onClick={onClick} className="rounded-full px-3 py-1.5" style={{ background: on ? C.metroSoft : C.paper, color: on ? C.metro : C.sub, border: `1.5px solid ${on ? "#C9D9F2" : C.line}`, fontSize: 12.5, fontWeight: 700 }}>{children}</button>
  );
  const steps = [
    { fr: "Appliqué à vos alertes Vitrine", en: "Applied to your Vitrine alerts", sfr: "immédiat", sen: "instant" },
    { fr: `Transmis à ${BROKER.name}`, en: `Sent to ${BROKER.name}`, sfr: "mise à jour de la recherche Matrix — 1 clic de son côté", sen: "Matrix search update — 1 click on her side" },
    { fr: "Confirmé côté Centris par la courtière", en: "Confirmed on Centris by the broker", sfr: "simulé pour la démo", sen: "simulated for the demo" },
  ];
  const rank = { vitrine: 0, sent: 1, synced: 2 }[status] ?? -1;
  if (!loaded) return null;
  return (
    <div className="max-w-2xl mx-auto px-3 sm:px-4 pt-5 pb-16">
      <Eyebrow>{t("Critères de recherche", "Search criteria")}</Eyebrow>
      <h1 style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 26, color: C.ink, margin: "4px 0 4px" }}>{t("Mes alertes", "My alerts")}</h1>
      <div style={{ fontSize: 12.5, color: C.sub, marginBottom: 14 }}>{t("Ajustez ici — vos prochains microsites suivront immédiatement. Julie met la recherche Centris à niveau de son côté.", "Adjust here — your next microsites follow instantly. Julie brings the Centris search up to date on her side.")}</div>

      <div className="space-y-3">
        <section className="rounded-2xl p-4" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
          <SectionHead icon={DollarSign} title={t("Prix", "Price")} note={`${fmt$(p.pmin, lang)} – ${fmt$(p.pmax, lang)}`} />
          <SliderRow label={t("Minimum", "Minimum")} val={p.pmin} set={(v) => up({ pmin: Math.min(v, p.pmax - 25000) })} min={100000} max={875000} step={25000} suffix=" $" field="pmin" />
          <div className="mt-2"><SliderRow label={t("Maximum", "Maximum")} val={p.pmax} set={(v) => up({ pmax: Math.max(v, p.pmin + 25000) })} min={125000} max={900000} step={25000} suffix=" $" field="pmax" /></div>
        </section>

        <section className="rounded-2xl p-4" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
          <SectionHead icon={Home} title={t("La propriété", "The property")} note={t("mêmes champs que l’alerte Matrix", "same fields as the Matrix alert")} />
          <div style={{ fontSize: 12, color: C.sub, marginBottom: 4 }}>{t("Chambres (min)", "Bedrooms (min)")}</div>
          <div className="flex gap-1.5 mb-3">{[1, 2, 3, 4].map((n) => <Chip key={n} on={p.beds === n} onClick={() => up({ beds: n })}>{n}+</Chip>)}</div>
          <div style={{ fontSize: 12, color: C.sub, marginBottom: 4 }}>{t("Salles de bain (min)", "Bathrooms (min)")}</div>
          <div className="flex gap-1.5 mb-3">{[1, 1.5, 2].map((n) => <Chip key={n} on={p.baths === n} onClick={() => up({ baths: n })}>{n}+</Chip>)}</div>
          <div className="mb-3"><SliderRow label={t("Terrain (min, pi²)", "Lot area (min, sq ft)")} val={p.lot} set={(v) => up({ lot: v })} min={0} max={30000} step={2500} suffix=" pi²" field="lot" /></div>
          <div className="flex items-center" style={{ fontSize: 12, color: C.sub, marginBottom: 4 }}>{t("Types de bâtiment", "Building types")}<AllNone k="types" all={TYPES_ALL.map(([k]) => k)} /></div>
          <div className="flex flex-wrap gap-1.5 mb-3">{TYPES_ALL.map(([k, fr, en]) => <Chip key={k} on={p.types.includes(k)} onClick={() => toggleArr("types", k)}>{lang === "fr" ? fr : en}</Chip>)}</div>
          <div style={{ fontSize: 12, color: C.sub, marginBottom: 4 }}>{t("Indispensables", "Must-haves")}</div>
          <div className="flex flex-wrap gap-1.5">
            {[["piscine", t("Piscine", "Pool")], ["garage", "Garage"], ["foyer", t("Foyer-poêle", "Fireplace-stove")]].map(([k, label]) => (
              <Chip key={k} on={p.must[k]} onClick={() => up({ must: { ...p.must, [k]: !p.must[k] } })}>{label}</Chip>
            ))}
          </div>
        </section>

        <section className="rounded-2xl p-4" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
          <div className="flex items-center"><SectionHead icon={MapPin} title={t("Secteurs", "Areas")} note={`${p.areas.length} ${t("choisis", "selected")}`} /><AllNone k="areas" all={AREAS_ALL} /></div>
          <div className="flex flex-wrap gap-1.5">{AREAS_ALL.map((a) => <Chip key={a} on={p.areas.includes(a)} onClick={() => toggleArr("areas", a)}>{a}</Chip>)}</div>
        </section>

        <div className="rounded-2xl p-4" style={{ background: C.ink }}>
          <div style={{ color: "#9FB2D6", fontFamily: F.mono, fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".12em" }}>{t("Aperçu immédiat", "Instant preview")}</div>
          <div style={{ color: "#fff", fontSize: 14, marginTop: 2 }}>{t(`${matches} des ${LISTINGS.length} inscriptions démo correspondent à ces critères.`, `${matches} of ${LISTINGS.length} demo listings match these criteria.`)}</div>
          <button onClick={save} className="mt-3 w-full rounded-xl py-3" style={{ background: C.ochre, color: C.ink, fontWeight: 800, fontSize: 14.5 }}>
            {status ? t("Mettre à jour mes critères", "Update my criteria") : t("Enregistrer mes critères", "Save my criteria")}
          </button>
        </div>

        {status && (
          <section className="rounded-2xl p-4 fade-up" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
            <SectionHead icon={ShieldCheck} title={t("Synchronisation", "Sync")} note={t("en direct", "live")} />
            <div className="space-y-2.5">
              {steps.map((s, i) => {
                const done = rank >= i;
                return (
                  <div key={i} className="flex items-start gap-2.5">
                    <span style={{ width: 22, height: 22, borderRadius: 999, display: "grid", placeItems: "center", background: done ? C.spruceSoft : C.snow, color: done ? C.spruce : C.sub, border: `1px solid ${done ? "#C4E0D2" : C.line}`, flexShrink: 0 }}>
                      {done ? <Check size={13} /> : <Clock size={12} />}
                    </span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: done ? C.ink : C.sub }}>{lang === "fr" ? s.fr : s.en}</div>
                      <div style={{ fontSize: 11, color: C.sub }}>{lang === "fr" ? s.sfr : s.sen}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="rounded-xl p-3" style={{ background: C.metroSoft, border: "1px solid #C9D9F2", fontSize: 11.5, color: C.ink, lineHeight: 1.55 }}>
          {t("Pourquoi deux étapes ? Centris/Matrix n’offre pas d’API publique d’écriture des recherches sauvegardées — seul le compte Matrix de la courtière peut modifier la recherche automatique. Vitrine applique donc vos critères immédiatement à ses propres alertes et crée une tâche « 1 clic » pour Julie. Chaque changement de critères est aussi un signal d’intention visible à son tableau de bord.",
             "Why two steps? Centris/Matrix has no public write API for saved searches — only the broker’s Matrix account can edit the auto-search. So Vitrine applies your criteria to its own alerts instantly and creates a one-click task for Julie. Each criteria change is also an intent signal on her dashboard.")}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  PART 10 — Inscriptions : vue liste + vue carte (à la Matrix)       */
/* ================================================================== */
const BROWSE_META = {
  "28374619": { badge: "new", dateSent: "2026-07-05", rooms: 7, lot: null, fire: false, xy: [63, 70] },
  "19052833": { badge: null, dateSent: "2026-07-03", rooms: 9, lot: "5 200 pi²", fire: true, xy: [72, 78] },
};
const EXTRA_LISTINGS = [
  { id: "14106527", addr: "3, rue des Geais-Bleus", area: "Mont-Tremblant (Saint-Jovite)",
    typeFr: "Maison mobile — 1990", typeEn: "Mobile home — 1990", price: 124900, beds: 2, bathsStr: "1+0",
    heatFr: "Électricité", heatEn: "Electricity", rooms: 6, lot: null, garage: false, fire: false, pool: true,
    badge: "new", dateSent: "2026-07-06", g: ["#5E7F5A", "#8FAE7E"], xy: [24, 18] },
  { id: "25995203", addr: "122-126, ch. Guénette", area: "Sainte-Marguerite-du-Lac-Masson",
    typeFr: "À étages — 1945", typeEn: "Two or more storey — 1945", price: 399000, beds: 4, bathsStr: "2+1",
    heatFr: "Électricité", heatEn: "Electricity", rooms: 13, lot: "27 630 pi² / 2 567 m²", garage: false, fire: true, pool: true,
    badge: "price", dateSent: "2026-07-04", g: ["#3E5E52", "#7FA08F"], xy: [45, 30] },
];
// Vidéos héro générées par IA (Higgsfield). Coller l'URL MP4 du job terminé pour activer le lecteur.
const HERO_VIDEOS = {
  "25995203": "https://d8j0ntlcm91z4.cloudfront.net/user_3GGcnlb30w4rwInWPmkZocDwJ0x/hf_20260709_132918_005475da-f23e-4a96-b425-8ef81c306833.mp4", // drone → orbite 360° → porte d'entrée (job 005475da…) + intérieur (365a3ee4…)
};
function browseRows(lang) {
  const full = LISTINGS.map((l) => {
    const m = BROWSE_META[l.id] || {};
    const pr = l.baths % 1 ? 1 : 0;
    return {
      id: l.id, addr: l.addr, area: l.area, typeStr: (lang === "fr" ? l.typeFr : l.typeEn) + ` — ${l.year}`,
      price: l.price, beds: l.beds, bathsStr: `${Math.floor(l.baths)}+${pr}`,
      heatStr: lang === "fr" ? HEAT[l.heating].fr : HEAT[l.heating].en,
      rooms: m.rooms, lot: m.lot, garage: /garage/i.test(l.parkFr), fire: !!m.fire, pool: /piscine/i.test(l.inclFr),
      badge: m.badge, dateSent: m.dateSent, g: l.accent, xy: m.xy, full: true, condo: l.condoFees > 0, video: HERO_VIDEOS[l.id] || null,
      centrisUrl: l.centrisUrl || "",
    };
  });
  const extra = EXTRA_LISTINGS.map((e) => ({
    ...e, typeStr: lang === "fr" ? e.typeFr : e.typeEn, heatStr: lang === "fr" ? e.heatFr : e.heatEn, full: false, condo: false, video: HERO_VIDEOS[e.id] || null,
  }));
  return [...extra.slice(0, 1), ...full, ...extra.slice(1)];
}
const BADGE = {
  new: { fr: "Nouvelle inscription", en: "New Listing", bg: "#2F7D5C", fg: "#fff" },
  price: { fr: "Nouveau prix", en: "New Price", bg: "#E8A33D", fg: "#3A2A08" },
};

function ListingsView({ lang, onOpen, log }) {
  const t = (fr, en) => (lang === "fr" ? fr : en);
  const [vm, setVm] = useState("list");
  const [sel, setSel] = useState(null);
  const rows = useMemo(() => browseRows(lang), [lang]);
  // Centris-field filters (sectors) — all on by default, individually
  // toggleable, with one-tap select-all / deselect-all.
  const allAreas = useMemo(() => [...new Set(rows.map((r) => r.area))], [rows]);
  const [offAreas, setOffAreas] = useState([]);
  const toggleArea = (a) => setOffAreas((cur) =>
    cur.includes(a) ? cur.filter((x) => x !== a) : [...cur, a]);
  const shown = rows.filter((r) => !offAreas.includes(r.area));
  const selRow = shown.find((r) => r.id === sel) || null;

  const Row = ({ label, value }) => (
    <div className="flex items-start justify-between gap-3" style={{ fontSize: 12.5, padding: "3px 0" }}>
      <span style={{ fontWeight: 700, color: C.ink }}>{label}</span>
      <span className="text-right" style={{ color: C.sub }}>{value}</span>
    </div>
  );
  const yn = (b) => (b ? t("Oui", "Yes") : t("Non", "No"));

  const OpenBtn = ({ r, small }) => r.full ? (
    <div className="flex gap-2">
      <button onClick={() => onOpen(r.id)} className={`flex-1 rounded-xl ${small ? "py-2" : "py-2.5"} inline-flex items-center justify-center gap-1.5`} style={{ background: C.metro, color: "#fff", fontWeight: 800, fontSize: small ? 12.5 : 13.5 }}>
        {t("Ouvrir le microsite", "Open the microsite")} <ChevronRight size={14} />
      </button>
      {/* tracked Matrix-alert link → the click shows up on Centris' side
          (Matrix « visiteurs récents ») and in the engagement score */}
      {r.centrisUrl && (
        <a href={r.centrisUrl} target="_blank" rel="noreferrer"
          onClick={() => log && log("centris_click", { url: r.centrisUrl }, r.id)}
          className={`rounded-xl px-3 ${small ? "py-2" : "py-2.5"} inline-flex items-center justify-center`}
          style={{ background: C.paper, border: `1.5px solid ${C.line}`, color: C.metro, fontWeight: 800, fontSize: small ? 12.5 : 13.5, whiteSpace: "nowrap" }}>
          Centris ↗
        </a>
      )}
    </div>
  ) : (
    <div className={`w-full rounded-xl ${small ? "py-2" : "py-2.5"} text-center`} style={{ background: C.snow, border: `1.5px dashed ${C.line}`, color: C.sub, fontWeight: 700, fontSize: small ? 11.5 : 12.5 }}>
      {t("Fiche complète — bientôt · tirée de votre alerte Matrix", "Full sheet — soon · from your Matrix alert")}
    </div>
  );

  return (
    // [radar-platform] patch (c): listings fill the page — wide container +
    // responsive card grid below (mobile stays single column)
    <div className="max-w-6xl mx-auto px-3 sm:px-4 pt-5 pb-16">
      <div className="flex items-end justify-between gap-3">
        <div>
          <Eyebrow>{t("Vos alertes", "Your alerts")} · {BROKER.name}</Eyebrow>
          <h1 style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 26, color: C.ink, margin: "4px 0 2px" }}>{t("Inscriptions", "Listings")}</h1>
          <div style={{ fontSize: 12, color: C.sub }}>{shown.length}{offAreas.length ? ` / ${rows.length}` : ""} {t("inscriptions · mêmes données que l’alerte Matrix, meilleure surface", "listings · same data as the Matrix alert, better surface")}</div>
        </div>
        <div className="flex gap-1 p-1 rounded-xl shrink-0" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
          {[["list", List, t("Liste", "List")], ["map", Map, t("Carte", "Map")]].map(([k, Ic, label]) => (
            <button key={k} onClick={() => setVm(k)} className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5" style={{ background: vm === k ? C.ink : "transparent", color: vm === k ? "#fff" : C.sub, fontWeight: 700, fontSize: 12 }}>
              <Ic size={13} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* sector filters (Centris fields) + select-all / deselect-all */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: C.sub, marginRight: 2 }}>{t("Secteurs", "Areas")}</span>
        {allAreas.map((a) => {
          const on = !offAreas.includes(a);
          return (
            <button key={a} onClick={() => toggleArea(a)} aria-pressed={on} className="rounded-full px-3 py-1.5"
              style={{ background: on ? C.metroSoft : C.paper, color: on ? C.metro : C.sub, border: `1.5px solid ${on ? "#C9D9F2" : C.line}`, fontSize: 12, fontWeight: 700 }}>
              {a}
            </button>
          );
        })}
        <span className="inline-flex gap-1" style={{ marginLeft: 4 }}>
          <button onClick={() => setOffAreas([])} disabled={!offAreas.length} className="rounded-full px-2.5 py-1.5"
            style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 11.5, fontWeight: 700, color: offAreas.length ? C.metro : C.line }}>
            ✓ {t("Tout sélectionner", "Select all")}
          </button>
          <button onClick={() => setOffAreas(allAreas)} disabled={offAreas.length === allAreas.length} className="rounded-full px-2.5 py-1.5"
            style={{ background: C.paper, border: `1px solid ${C.line}`, fontSize: 11.5, fontWeight: 700, color: offAreas.length === allAreas.length ? C.line : C.sub }}>
            ✕ {t("Tout désélectionner", "Deselect all")}
          </button>
        </span>
      </div>
      {shown.length === 0 && (
        <div className="mt-6 rounded-2xl p-6 text-center" style={{ background: C.paper, border: `1.5px dashed ${C.line}`, color: C.sub, fontSize: 13 }}>
          {t("Aucun secteur sélectionné — réactivez un filtre pour voir les inscriptions.", "No area selected — turn a filter back on to see the listings.")}
        </div>
      )}

      {vm === "list" && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 items-start">
          {shown.map((r) => (
            <div key={r.id} className="rounded-2xl overflow-hidden fade-up" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
              {r.video ? (
                <div className="relative" style={{ background: "#0B0F17" }}>
                  <video src={r.video} controls playsInline muted loop preload="metadata" style={{ width: "100%", display: "block", maxHeight: 260 }} />
                  <div className="absolute top-2 left-2" style={{ pointerEvents: "none" }}><Disclosure text={lang === "fr" ? "Vidéo générée par IA — indicative" : "AI-generated video — indicative"} /></div>
                  {r.badge && (
                    <span className="absolute" style={{ top: 12, right: 12, background: BADGE[r.badge].bg, color: BADGE[r.badge].fg, borderRadius: 999, padding: "4px 10px", fontSize: 11, fontWeight: 800, pointerEvents: "none" }}>
                      {lang === "fr" ? BADGE[r.badge].fr : BADGE[r.badge].en}
                    </span>
                  )}
                </div>
              ) : (
              <div className="relative" style={{ height: 130, background: `linear-gradient(140deg, ${r.g[0]}, ${r.g[1]})` }}>
                {r.condo ? <Building2 size={34} style={{ color: "rgba(255,255,255,.9)", position: "absolute", top: 14, left: 14 }} /> : <Home size={34} style={{ color: "rgba(255,255,255,.9)", position: "absolute", top: 14, left: 14 }} />}
                {r.badge && (
                  <span className="absolute" style={{ top: 12, right: 12, background: BADGE[r.badge].bg, color: BADGE[r.badge].fg, borderRadius: 999, padding: "4px 10px", fontSize: 11, fontWeight: 800 }}>
                    {lang === "fr" ? BADGE[r.badge].fr : BADGE[r.badge].en}
                  </span>
                )}
                <Heart size={18} style={{ color: "rgba(255,255,255,.85)", position: "absolute", bottom: 12, right: 14 }} />
                <div className="absolute bottom-0 left-0 right-0 px-3.5 py-2" style={{ background: "linear-gradient(transparent, rgba(17,27,46,.65))" }}>
                  <div style={{ color: "#fff", fontFamily: F.disp, fontWeight: 800, fontSize: 17, lineHeight: 1.1 }}>{r.addr}</div>
                  <div style={{ color: "rgba(255,255,255,.85)", fontSize: 11.5 }}>{r.area}</div>
                </div>
              </div>
              )}
              <div className="p-3.5">
                <div className="flex items-baseline justify-between gap-2">
                  <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 22, color: C.metro }}>{fmt$(r.price, lang)}</div>
                  <div style={{ fontSize: 11.5, color: C.sub }}>{r.typeStr}</div>
                </div>
                <div className="mt-2 rounded-xl px-3 py-1.5" style={{ background: C.snow, border: `1px solid ${C.line}` }}>
                  <Row label={t("Type de bâtiment", "Building Type")} value={t("Détaché", "Detached")} />
                  <Row label={t("Pièces", "Rooms")} value={r.rooms} />
                  {r.lot && <Row label={t("Terrain", "Lot Area")} value={r.lot} />}
                  <Row label={t("Chambres", "Bedrooms")} value={`${r.beds}+0`} />
                  <Row label={t("Énergie/Chauffage", "Energy/Heating")} value={r.heatStr} />
                  <Row label={t("SDB + salle d’eau", "Bath + PR")} value={r.bathsStr} />
                  <Row label="Garage" value={yn(r.garage)} />
                  <Row label={t("Foyer-poêle", "Fireplace-Stove")} value={yn(r.fire)} />
                  <Row label={t("Piscine", "Pool")} value={yn(r.pool)} />
                </div>
                <div className="mt-2 flex items-center justify-between" style={{ fontFamily: F.mono, fontSize: 10.5, color: C.sub }}>
                  <span>Centris nº {r.id}</span><span>{t("Reçue le", "Sent")} {r.dateSent}</span>
                </div>
                <div className="mt-2.5"><OpenBtn r={r} /></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {vm === "map" && (
        <div className="mt-4">
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}`, background: "#E8F1E4" }}>
            <svg viewBox="0 0 100 92" width="100%" style={{ display: "block" }} role="img" aria-label={t("Carte des inscriptions", "Listings map")}>
              <rect width="100" height="92" fill="#E8F1E4" />
              <path d="M0 0 L100 0 L100 26 C80 34 66 30 52 40 C38 50 24 44 10 52 L0 56 Z" fill="#DCEBD0" />
              {[[16, 10], [30, 8], [40, 16], [22, 24], [52, 22]].map(([x, y], i) => (
                <ellipse key={i} cx={x} cy={y} rx={3.4} ry={1.7} fill="#B9D8EF" />
              ))}
              <path d="M100 50 L70 62 L38 80 L26 92 L46 92 L76 72 L100 60 Z" fill="#A9CFEA" />
              <ellipse cx="60" cy="70" rx="9" ry="4.2" fill="#D6E4CE" />
              <polyline points="30,4 40,26 52,52 60,90" fill="none" stroke="#C6CEDA" strokeWidth="1.4" />
              <polyline points="6,66 40,62 62,64 96,58" fill="none" stroke="#CBD3DE" strokeWidth="1.1" />
              <polyline points="24,18 36,30 48,40" fill="none" stroke="#D2D9E2" strokeWidth="0.9" />
              {[["Mont-Tremblant", 18, 14.5], ["Sainte-Adèle", 47, 39.5], ["Montréal", 57, 69], ["Longueuil", 76, 82.5]].map(([lb, x, y]) => (
                <text key={lb} x={x} y={y} style={{ font: `600 3.1px ${F.body}`, fill: "#5A6577" }}>{lb}</text>
              ))}
              {shown.map((r) => {
                const active = sel === r.id;
                return (
                  <g key={r.id} transform={`translate(${r.xy[0]}, ${r.xy[1]})`} onClick={() => setSel(r.id)} style={{ cursor: "pointer" }}>
                    {active && <circle cy="-5.4" r="4.6" fill="none" stroke={r.g[0]} strokeWidth="0.7" opacity="0.7" />}
                    <rect x="-9.5" y="-16.5" width="19" height="5.4" rx="2.7" fill="#111B2E" />
                    <text x="0" y="-12.6" textAnchor="middle" style={{ font: `600 3px ${F.mono}`, fill: "#fff" }}>{fmtK(r.price, lang)}</text>
                    <path d="M0 0 C -3.4 -4.6 -3.4 -8.4 0 -8.4 C 3.4 -8.4 3.4 -4.6 0 0 Z" fill={r.g[0]} stroke="#fff" strokeWidth="0.6" />
                    <circle cy="-5.6" r="1.5" fill="#fff" />
                  </g>
                );
              })}
            </svg>
          </div>
          {selRow ? (
            <div className="mt-3 rounded-2xl p-3.5 fade-up" style={{ background: C.paper, border: `1px solid ${C.line}` }}>
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontFamily: F.disp, fontWeight: 800, fontSize: 15, color: C.ink }}>{selRow.addr}</span>
                    {selRow.badge && <Pill tone={selRow.badge === "new" ? "green" : "amber"}>{lang === "fr" ? BADGE[selRow.badge].fr : BADGE[selRow.badge].en}</Pill>}
                  </div>
                  <div style={{ fontSize: 11.5, color: C.sub }}>{selRow.area} · {selRow.beds} {t("ch.", "bd")} · {selRow.bathsStr} {t("sdb", "ba")} · Centris {selRow.id}</div>
                </div>
                <div style={{ fontFamily: F.mono, fontWeight: 600, fontSize: 18, color: C.metro, whiteSpace: "nowrap" }}>{fmt$(selRow.price, lang)}</div>
              </div>
              <div className="mt-2.5"><OpenBtn r={selRow} small /></div>
            </div>
          ) : (
            <div className="mt-3 text-center" style={{ fontSize: 12, color: C.sub }}>{t("Touchez une épingle pour voir l’inscription.", "Tap a pin to see the listing.")}</div>
          )}
          <div className="mt-2" style={{ fontSize: 10.5, color: C.sub, fontFamily: F.mono, textAlign: "center" }}>
            {t("Carte stylisée (démo) — production : tuiles cartographiques + géocodage des adresses.", "Stylized map (demo) — production: map tiles + address geocoding.")}
          </div>
        </div>
      )}
    </div>
  );
}
