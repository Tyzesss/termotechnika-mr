import type { SitePreset } from "./types";

const siteCity = "Bolesławiec i okolice";
const cityLocative = "w Bolesławcu";
const siteName = "TERMOTECHNIKA";

export const termotechnikaMrPreset: SitePreset = {
  id: "termotechnika-mr",
  label: "Termotechnika MR — Bolesławiec",
  siteName,
  companyLegalName: "Termotechnika MR sp.j. Mirosław Jaśkiewicz, Ryszard Janczak",
  siteCity,
  cityLocative,
  siteDefaultUrl: "http://www.termotechnika-mr.pl",
  email: "t_mr@poczta.onet.pl",
  phoneDisplay: "75 732 62 52",
  phoneE164: "+48757326252",
  address: "ul. Łasicka 54, 59-700 Bolesławiec",
  addressStreet: "ul. Łasicka 54",
  addressCity: "Bolesławiec",
  addressPostal: "59-700",
  serviceArea: "Bolesławiec i okolice, dojazd do klienta",
  mapsQuery: "Termotechnika MR Bolesławiec Łasicka 54",
  mapsUrl: "https://maps.app.goo.gl/4aCS6mPvr7WhzYZT7",
  googleReviewsUrl: "https://maps.app.goo.gl/4aCS6mPvr7WhzYZT7",
  nip: "612-100-23-72",
  regon: "230236575",
  hours: "Pn–Pt: 8:00–16:00 (przerwa 14:00–14:30)",
  logoUrl: "/logo.png",
  logoIncludesName: false,
  faviconUrl: "/favicon.png",
  heroImage: "/gallery/hero.webp",
  siteTitle: `Instalacje grzewcze Bolesławiec | ${siteName}`,
  siteKeywords:
    "instalacje grzewcze, kotłownie, serwis kotłów, Viessmann, Immergas, wentylacja, klimatyzacja, Bolesławiec, instalacje CO",
  siteDescription: `Montaż i serwis instalacji grzewczych, kotłowni, wentylacji i klimatyzacji ${cityLocative} i okolicach. Autoryzowany partner Viessmann i Immergas. Zadzwoń: 75 732 62 52.`,
  ogImage: "/gallery/hero.webp",
  googleRating: 4.4,
  googleReviewCount: 55,
  partners: ["Viessmann", "Immergas", "Termet", "Unical", "Nibe-Biawar"],
  gallery: [
    {
      image: "/gallery/stock-1.webp",
      alt: "Kocioł gazowy kondensacyjny, montaż Bolesławiec",
      caption: "Kotłownia gazowa",
    },
    {
      image: "/gallery/stock-2.webp",
      alt: "Montaż pompy ciepła, Bolesławiec i okolice",
      caption: "Pompa ciepła",
    },
    {
      image: "/gallery/stock-3.webp",
      alt: "Instalacja pompy ciepła w domu jednorodzinnym",
      caption: "Instalacja pompy ciepła",
    },
    {
      image: "/gallery/stock-4.webp",
      alt: "Urządzenia grzewcze Termet, serwis i montaż",
      caption: "Urządzenia grzewcze",
    },
    {
      image: "/gallery/stock-5.webp",
      alt: "Serwis i regulacja pompy ciepła, Bolesławiec",
      caption: "Serwis pompy ciepła",
    },
    {
      image: "/gallery/stock-6.webp",
      alt: "Montaż instalacji grzewczej, realizacja lokalna",
      caption: "Instalacja grzewcza",
    },
  ],
  reviews: [
    {
      name: "A. R.",
      text: "Doskonali fachowcy. Bardzo dobre doradztwo. Punktualni.",
      source: "google",
      rating: 5,
      relativeTime: "rok temu",
    },
    {
      name: "j. k.",
      text: "Od ponad 20 lat korzystam z wiedzy i doświadczenia Firmy Termotechnika... nigdy nie zawiedli... zawsze mają czas dla klienta... polecam",
      source: "google",
      rating: 5,
      relativeTime: "2 lata temu",
    },
    {
      name: "M. W.",
      text: "Za wykonanie instalacji przepływowego ogrzewacza wody nie znajduję słów, aby wyrazić swe podziękowanie za fantastyczną organizację i przebieg montażu zgodnie z zamówioną usługą.",
      source: "google",
      rating: 5,
      relativeTime: "3 lata temu",
    },
    {
      name: "D. G.",
      text: "Zaufana firma godna polecenia. Fachowe doradztwo i profesjonalizm. Cieszę się na dalszą współpracę.",
      source: "google",
      rating: 5,
      relativeTime: "rok temu",
    },
    {
      name: "M. C.",
      text: "Ta firma zajmuje się sprzedażą i montażem całej gamy produktów i usług związanych z ogrzewaniem.",
      source: "google",
      rating: 4,
      relativeTime: "2 lata temu",
    },
  ],
  heroHeadline: "Montaż i serwis ogrzewania",
  heroBullets: [
    "Autoryzowany partner Viessmann, Immergas, Termet i Nibe-Biawar. Działamy od 1992 roku.",
    "Instalacje CO, wod-kan, kotłownie, wentylacja i klimatyzacja. Punkt na Łasickiej 54.",
  ],
  footerTagline: "Instalacje grzewcze, kotłownie i serwis HVAC",
  servicesSectionSubtitle:
    "Kompleksowe instalacje grzewcze i sanitarne, kotłownie, serwis autoryzowany oraz wentylacja i klimatyzacja.",
  gallerySectionSubtitle: "Realizacje instalacji grzewczych i sanitarnych w Bolesławcu i okolicach.",
  services: [
    {
      icon: "check-circle",
      title: "Instalacje CO i wod-kan",
      desc: "Projekt i montaż instalacji centralnego ogrzewania oraz wodno-kanalizacyjnych w domach i budynkach.",
    },
    {
      icon: "flame",
      title: "Kotłownie i ogrzewanie",
      desc: "Dobór i montaż kotłowni oraz urządzeń grzewczych dopasowanych do potrzeb budynku.",
    },
    {
      icon: "wrench",
      title: "Serwis autoryzowany kotłów",
      desc: "Serwis gwarancyjny i pogwarancyjny Viessmann, Immergas, Termet, Unical i Nibe-Biawar.",
    },
    {
      icon: "zap",
      title: "Systemy wentylacji",
      desc: "Montaż i serwis instalacji wentylacyjnych oraz cyrkulacji powietrza w budynkach.",
    },
    {
      icon: "check-circle",
      title: "Montaż klimatyzacji",
      desc: "Dobór i montaż klimatyzacji dla komfortowej temperatury w pomieszczeniach.",
    },
    {
      icon: "flame",
      title: "Grzejniki i solary",
      desc: "Dobór grzejników oraz instalacje kolektorów słonecznych do pozyskiwania energii cieplnej.",
    },
  ],
  faqs: [
    {
      q: "Czy montujecie instalacje centralnego ogrzewania?",
      a: `Tak. Wykonujemy instalacje CO i wodno-kanalizacyjne na terenie ${siteCity.toLowerCase()}.`,
    },
    {
      q: "Czy jesteście autoryzowanym serwisem Viessmann i Immergas?",
      a: "Tak. Jesteśmy autoryzowanym partnerem i wykonujemy serwis gwarancyjny oraz pogwarancyjny tych marek.",
    },
    {
      q: "Ile kosztuje serwis kotła?",
      a: "Koszt zależy od marki, zakresu prac i stanu urządzenia. Dokładną wycenę podamy po rozmowie lub oględzinach.",
    },
    {
      q: "Czy montujecie klimatyzację i wentylację?",
      a: `Tak. Oferujemy montaż klimatyzacji oraz systemów wentylacji ${cityLocative} i okolicach.`,
    },
    {
      q: "Czy dojeżdżacie do klienta?",
      a: `Tak. Obsługujemy ${siteCity.toLowerCase()}. Mamy też punkt stacjonarny przy ul. Łasickiej 54 w Bolesławcu.`,
    },
  ],
  serviceOptionGroups: [
    {
      label: "Ogrzewanie",
      options: [
        "Instalacja centralnego ogrzewania",
        "Montaż kotłowni",
        "Dobór i montaż grzejników",
      ],
    },
    {
      label: "Serwis",
      options: [
        "Serwis gwarancyjny kotła",
        "Serwis pogwarancyjny",
        "Przegląd i konserwacja",
      ],
    },
    {
      label: "Wentylacja i klima",
      options: ["Montaż wentylacji", "Montaż klimatyzacji", "Instalacja solarna"],
    },
    {
      label: "Inne",
      options: ["Instalacja wodno-kanalizacyjna", "Potrzebuję doradztwa"],
    },
  ],
};
