/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-04T18:38:40.386Z
 * Kundennummer: 55
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Test Auto",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "professionell & zuverlässig",
  adresse: "Musterstraße 2",
  telefon: "02581 0000",
  email: "info@testauto.de",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/55/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/55/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Autowerkstatt — professionell & zuverlässig",
    ueberschriftHighlight: "professionell & zuverlässig",
    untertext: "Ihr Partner für alle Belange rund um Autowerkstatt in Warendorf und Umgebung.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/55/ueber-uns.webp",
    ueberschrift: "Test Auto — Ihr Partner in Warendorf",
    text1: "Als erfahrener Autowerkstatt-Betrieb in Warendorf bieten wir unseren Kunden seit Jahren zuverlässigen Service und kompetente Beratung. Mit Fachkompetenz und modernen Methoden lösen wir Ihre Anliegen effizient und zuverlässig.",
    text2: "Wir setzen auf höchste Qualität, transparente Preise und persönlichen Service — damit Sie rundum zufrieden sind.",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Professionelle Autoglas — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Professionelle Achsvermessung — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Professionelle Bremsen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "klimaservice",
      title: "Klimaservice",
      bild: "https://r2.kuwezu.de/bibliothek/Klimaservice/1777878264706-klimaanlagen-service.webp",
      description: "Professionelle Klimaservice — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    }
  ],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr 8:00–18:00", "Sa 9:00–13:00"],
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
