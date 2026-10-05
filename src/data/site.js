
export const CATALOGUE_BASE = "/";

export const company = {
  name: "Cape Decor",
  legalName: "Cape Grade Decor",
  poweredBy: "Cybertricksmedia Pvt Ltd",
  tagline: "Doors, Windows, Window Blinds & Printed Wallpapers",
  founded: 2011,
  address: {
    line1: "Khasra No. 192/3",
    line2: "Main Rohtak Road, Mundka Village",
    line3: "New Delhi – 110041, India",
    landmark: "Near Metro Pillar No. 531",
  },
  phones: ["+91 99109 56666", "+91 88269 12666"],
  emails: ["info@capedecor.com", "info.capedecor@gmail.com"],
  whatsapp: "918826912666",
  social: {
    facebook: "https://www.facebook.com/capedecor/",
    instagram: "https://instagram.com/cape_decor",
    youtube: "https://www.youtube.com/@CapeDecor",
  },
  maps: {
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.223570487959!2d77.02695431508367!3d28.682958082397963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0563e3110edf%3A0xa540be72a121050b!2sSohams%20Shades!5e0!3m2!1sen!2sin!4v1628700180094!5m2!1sen!2sin",
    link: "https://maps.google.com/?q=Sohams+Shades+Mundka+New+Delhi",
  },
};

export const telHref = (phone) => `tel:${phone.replace(/\s/g, "")}`;

export const whatsappHref = (text = "Hello Cape Decor, I'd like to know more about your products.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

const img = (name) => `/products/${name}`;

// Turns a PDF file name into a clean, title-cased label,
// e.g. "casanova_collection_Roller_blind.pdf" → "Casanova Collection Roller Blind".
const catalogueLabel = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.pdf$/i, "")
    .replace(/-min$/i, "")
    .replace(/^VERTICAL_E-CATALOG\((.*)\)$/i, "$1")
    .replace(/[_,-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/(^|\s)([a-z])/g, (_, sp, ch) => sp + ch.toUpperCase())
    .replace(/\bCustomized\b/g, "Customised");

// `options.label` overrides the name. Taking an options object (not a plain
// second argument) keeps `.map(catalogue)` safe, since map passes the index.
const catalogue = (path, options) => ({
  label: options?.label ?? catalogueLabel(path),
  href: encodeURI(CATALOGUE_BASE + path),
});

// ---------------------------------------------------------------------------
// Home page hero — a still background image with a headline whose last words
// type themselves out in turn. Change the image or the words here.
// ---------------------------------------------------------------------------
export const hero = {
  image: "/products/home-interior.jpg",
  lead: "Cape Decor for",
  words: ["Homes", "Apartments", "Offices", "Villas", "Plazas"],
  intro: "Our experience ensures that your projects will be done right and with the utmost professionalism.",
};

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------
const doorsWindowsCatalogue = catalogue("catalogues/doors-windows/uPVC_Aluminium_Doors_Windows_Catalogue.pdf", {
  label: "uPVC & Aluminium Doors & Windows",
});

export const categories = [
  {
    id: "aluminium",
    name: "Aluminium System Doors & Windows",
    short: "Aluminium System Doors & Windows",
    tagline: "Slim sightlines, big views",
    intro:
      "Premium aluminium systems with slim profiles, large spans and single or multipoint locking — finished in powder coat, wood grain or anodizing.",
    cover: img("aluminium-sliding-door.jpg"),
    hero: img("home-glass-house.jpg"),
    catalogues: [doorsWindowsCatalogue],
  },
  {
    id: "upvc",
    name: "uPVC Doors & Windows",
    short: "uPVC Doors & Windows",
    tagline: "Quiet, warm & weather-tight",
    intro:
      "Energy-efficient uPVC profiles with G.I. reinforcement, double-glazing options and up to 25 dB sound insulation — backed by a 20-year warranty.",
    cover: img("upvc-tilt-turn-window.jpg"),
    hero: img("home-interior.jpg"),
    catalogues: [doorsWindowsCatalogue],
  },
  {
    id: "blinds",
    name: "Window Blinds",
    short: "Window Blinds",
    tagline: "Light, privacy & style",
    intro:
      "Sixteen made-to-measure systems — from roller, Roman and combi blinds to cellular shades, mosquito mesh and industrial strip curtains.",
    cover: img("Roman4.jpg"),
    hero: img("Roller6.jpg"),
    catalogues: [],
  },
  {
    id: "wallpapers",
    name: "Printed Wallpapers",
    short: "Printed Wallpapers",
    tagline: "Walls with a story",
    intro: "Digitally printed wallpapers made to your wall's exact size — from subtle textures to one-of-a-kind murals.",
    cover: img("wallpaper-7.jpg"),
    hero: img("wallpaper-4.jpg"),
    catalogues: [],
  },
];

export const getCategory = (id) => categories.find((c) => c.id === id);

// ---------------------------------------------------------------------------
// Technical specifications (from the CAPE uPVC & Aluminium catalogue)
// Each spec table: { columns: [...], rows: [[label, ...values]] }
// ---------------------------------------------------------------------------
const upvcCommon = (dimensions, extra = []) => ({
  columns: ["Specification"],
  rows: [
    ["Profile wall thickness", "2.2 mm ± 0.2 mm"],
    ...dimensions,
    ["G.I. reinforcement thickness", "1.2 mm – 2.2 mm"],
    ["Glass thickness", "4 mm – 24 mm"],
    ...extra,
    ["Sound insulation", "Single glazed 10–20 dB · Double glazed 20–25 dB"],
    ["U-value", "0.63 – 1.6 W/m²K"],
    ["Warranty", "20 years"],
  ],
});

const aluCasementWindow = {
  columns: ["40 mm series", "50 mm series"],
  rows: [
    ["Outer frame height", "39.40 mm", "46 mm"],
    ["Shutter section height", "53.8 mm", "81.87 mm"],
    ["Locking system", "Single point / Multipoint", "Single point / Multipoint"],
    ["Glass range", "5 mm – 24 mm", "5 mm – 32 mm"],
    ["Sash height (max.)", "1500 mm", "1500 mm"],
    ["Sash width (max.)", "900 mm", "1200 mm"],
    ["Finishes", "Powder / Wood / Anodizing", "Powder / Wood / Anodizing"],
  ],
};

const aluCasementDoor = {
  columns: ["40 mm series", "50 mm series"],
  rows: [
    ["Outer frame height", "39.40 mm", "46 mm"],
    ["Shutter section height", "70.40 mm", "93 mm"],
    ["Locking system", "Single point / Multipoint", "Single point / Multipoint"],
    ["Glass range", "5 mm – 24 mm", "5 mm – 32 mm"],
    ["Sash height (max.)", "2400 mm", "3650 mm"],
    ["Sash width (max.)", "900 mm", "1200 mm"],
    ["Finishes", "Powder / Wood / Anodizing", "Powder / Wood / Anodizing"],
  ],
};

const aluSliding = {
  columns: ["29 mm series", "40 mm series"],
  rows: [
    ["Outer frame height", "51 mm", "44 mm"],
    ["2-track outer frame width", "65 mm", "73 mm"],
    ["3-track outer frame width", "100.60 mm", "130 mm"],
    ["Interlock sightline", "25 mm", "25 mm"],
    ["Glass range", "5 mm – 22 mm", "6 mm – 34 mm"],
    ["Sash height (max.)", "2400 mm", "3500 mm"],
    ["Sash width (max.)", "1200 mm", "1500 mm"],
    ["Finishes", "Powder / Wood / Anodizing", "Powder / Wood / Anodizing"],
  ],
};

// ---------------------------------------------------------------------------
// Products
// `images: []` shows a drawn illustration until photos are added — put the
// files in /public/products/ and list them here (the first one is the cover,
// unless `cover` is set).
// `art` picks that illustration: fixed, casement, french, sliding, tophung,
// tiltturn, bifold (add `door: true` for doors), or blind, mesh, strip.
// ---------------------------------------------------------------------------
const aluminium = [
  {
    slug: "aluminium-casement-windows",
    name: "Aluminium Casement Windows",
    art: "casement",
    short: "Side-hinged aluminium sashes that open wide for full ventilation.",
    images: ["aluminium-casement-window.jpg"].map(img),
    description: [
      "Casement windows are hinged at the side and open outward like a door, giving an unobstructed opening and excellent ventilation. Our aluminium casements pair slim, strong profiles with a tight seal when closed.",
      "Available in 40 mm and 50 mm series with single-point or multipoint locking, they suit bedrooms, living rooms and kitchens alike — in powder-coated, wood-grain or anodized finishes.",
    ],
    options: ["40 mm & 50 mm series", "Single point / Multipoint locking", "Glass 5 – 32 mm", "Powder / Wood / Anodizing"],
    specs: aluCasementWindow,
  },
  {
    slug: "aluminium-french-windows",
    name: "Aluminium French Windows",
    art: "french",
    short: "Twin sashes that open from the centre for a wide, elegant opening.",
    images: ["aluminium-french-window.jpg"].map(img),
    description: [
      "French windows have two sashes that meet in the middle with no fixed mullion, so both open fully for a wide, uninterrupted view and maximum airflow.",
      "Built on the same robust 40 mm and 50 mm aluminium systems as our casements, they bring a classic look to modern homes.",
    ],
    options: ["40 mm & 50 mm series", "Centre-opening twin sashes", "Single point / Multipoint locking", "Powder / Wood / Anodizing"],
    specs: aluCasementWindow,
  },
  {
    slug: "aluminium-fixed-windows",
    name: "Aluminium Fixed Windows",
    art: "fixed",
    short: "Large, non-opening glazing that frames the view with minimal frame.",
    images: ["aluminium-fixed-window.jpg"].map(img),
    description: [
      "Fixed windows don't open — which lets them be larger, slimmer and more airtight than any other type. They are ideal for bringing daylight and views into a room, alone or combined with opening sashes.",
      "Our aluminium fixed windows go up to 3000 × 3000 mm with glass from 5 mm to 32 mm thick.",
    ],
    options: ["Up to 3000 × 3000 mm", "Glass 5 – 32 mm", "Profile wall 1.5 mm", "Powder / Wood / Anodizing"],
    specs: {
      columns: ["Specification"],
      rows: [
        ["Profile wall thickness", "1.5 mm"],
        ["Maximum dimension", "3000 mm × 3000 mm"],
        ["Glass range", "5 mm – 32 mm"],
        ["Finishes", "Powder / Wood / Anodizing"],
      ],
    },
  },
  {
    slug: "aluminium-sliding-windows",
    name: "Aluminium Sliding Windows",
    art: "sliding",
    short: "Space-saving sashes that glide smoothly on 2- or 3-track frames.",
    images: ["aluminium-sliding-window.jpg"].map(img),
    description: [
      "Sliding windows open sideways along a track, so they never swing into the room — perfect over kitchen counters, on balconies and wherever space is tight.",
      "Choose from 29 mm and 40 mm series in 2-track or 3-track frames, with a slim 25 mm interlock for a clean sightline.",
    ],
    options: ["29 mm & 40 mm series", "2-track & 3-track", "25 mm interlock sightline", "Powder / Wood / Anodizing"],
    specs: aluSliding,
  },
  {
    slug: "aluminium-top-hung-windows",
    name: "Aluminium Top Hung Windows",
    art: "tophung",
    short: "Hinged at the top to open outward — ventilation even in the rain.",
    images: [],
    description: [
      "Top hung windows are hinged along the top edge and open outward from the bottom. The sash acts like a canopy, so you can keep the window open for fresh air even during light rain.",
      "They are a popular choice for bathrooms, kitchens and high windows, and combine well with fixed panes.",
    ],
    options: ["40 mm & 50 mm series", "Single point / Multipoint locking", "Glass 5 – 32 mm", "Powder / Wood / Anodizing"],
    specs: aluCasementWindow,
  },
  {
    slug: "aluminium-tilt-turn-windows",
    name: "Aluminium Tilt 'n' Turn Windows",
    art: "tiltturn",
    short: "One handle, two ways to open — tilt for air, turn for a full opening.",
    images: [],
    description: [
      "Tilt 'n' turn windows open two ways from a single handle: tilt the top inward for secure, draught-free ventilation, or turn the sash fully inward like a door for cleaning and wide airflow.",
      "Because they open into the room, they are easy to clean from inside — ideal for apartments and upper floors.",
    ],
    options: ["Tilt & turn from one handle", "Secure ventilation", "Easy inside cleaning", "Powder / Wood / Anodizing"],
    specs: aluCasementWindow,
  },
  {
    slug: "aluminium-casement-doors",
    name: "Aluminium Casement Doors",
    art: "casement",
    door: true,
    short: "Strong, slim-framed hinged doors for entrances, balconies and patios.",
    images: ["aluminium-casement-door.jpg"].map(img),
    description: [
      "Aluminium casement doors are side-hinged and open like a traditional door, with a slim frame that lets in far more light than timber.",
      "In 40 mm and 50 mm series with sash heights up to 3650 mm and multipoint locking for security.",
    ],
    options: ["40 mm & 50 mm series", "Sash height up to 3650 mm", "Single point / Multipoint locking", "Powder / Wood / Anodizing"],
    specs: aluCasementDoor,
  },
  {
    slug: "aluminium-french-doors",
    name: "Aluminium French Doors",
    art: "french",
    door: true,
    short: "Double doors that open from the centre onto gardens and terraces.",
    images: ["aluminium-french-door.jpg"].map(img),
    description: [
      "French doors are a pair of doors that open from the centre with no fixed post, creating a wide, elegant opening between inside and out.",
      "Built on our 40 mm and 50 mm casement door systems for strength, security and a refined, slim look.",
    ],
    options: ["40 mm & 50 mm series", "Centre-opening pair", "Single point / Multipoint locking", "Powder / Wood / Anodizing"],
    specs: aluCasementDoor,
  },
  {
    slug: "aluminium-sliding-doors",
    name: "Aluminium Sliding Doors",
    art: "sliding",
    door: true,
    short: "Floor-to-ceiling glass panels that glide open on a slim track.",
    images: ["aluminium-sliding-door.jpg"].map(img),
    description: [
      "Sliding doors run along a track instead of swinging open, so they save space while giving you huge glass panels and wide openings to balconies and gardens.",
      "With sash heights up to 3500 mm and a slim 25 mm interlock, our aluminium sliding doors make the most of every view.",
    ],
    options: ["29 mm & 40 mm series", "Sash height up to 3500 mm", "2-track & 3-track", "Powder / Wood / Anodizing"],
    specs: aluSliding,
  },
  {
    slug: "aluminium-bi-fold-doors",
    name: "Aluminium Bi-Fold Doors",
    art: "bifold",
    door: true,
    short: "Panels that fold and stack to one side, opening the whole wall.",
    images: [],
    description: [
      "Bi-fold doors are made of several panels hinged together that fold concertina-style and stack neatly to one or both sides — opening almost the entire width of the wall.",
      "They are ideal for connecting living spaces with patios, terraces and gardens, and look just as good closed as a wall of glass.",
    ],
    options: ["Folds to one or both sides", "Near full-width opening", "Multipoint locking", "Powder / Wood / Anodizing"],
  },
].map((p) => ({ ...p, category: "aluminium" }));

const upvc = [
  {
    slug: "upvc-casement-windows",
    name: "uPVC Casement Windows",
    art: "casement",
    short: "Side-hinged uPVC windows with a tight seal against noise and dust.",
    images: ["upvc-casement-window.jpg"].map(img),
    description: [
      "Casement windows are hinged at the side and open outward for full ventilation. When closed, multi-chamber profiles and gaskets seal tight against noise, dust and rain.",
      "G.I. reinforcement keeps them rigid, and double glazing can cut outside noise by up to 25 dB.",
    ],
    options: ["60 mm profile", "G.I. reinforced", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 400 × 400 · Max 700 × 1700 mm"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-french-windows",
    name: "uPVC French Windows",
    art: "french",
    short: "Twin uPVC sashes opening from the centre for a wide, bright opening.",
    images: ["upvc-french-window.jpg"].map(img),
    description: [
      "French windows have two sashes that meet in the middle and open fully outward, giving a wide, uninterrupted view and plenty of fresh air.",
      "In insulated uPVC they stay quiet, draught-free and low-maintenance for years.",
    ],
    options: ["Centre-opening twin sashes", "60 mm profile", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 400 × 400 · Max 700 × 1700 mm"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-fixed-windows",
    name: "uPVC Fixed Windows",
    art: "fixed",
    short: "Non-opening uPVC glazing for light, views and excellent insulation.",
    images: ["upvc-fixed-window.jpg"].map(img),
    description: [
      "Fixed windows don't open, which makes them the most airtight and energy-efficient choice — perfect for letting in daylight and framing a view.",
      "Combine them with casement or sliding sashes to build larger window walls.",
    ],
    options: ["Most airtight option", "60 mm profile", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 330 × 450 (ratio 1:2) · Max ratio 1:2/3"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-sliding-windows",
    name: "uPVC Sliding Windows",
    art: "sliding",
    short: "2- and 4-panel sliding uPVC windows that save space and seal well.",
    images: ["upvc-sliding-window.jpg"].map(img),
    description: [
      "Sliding windows open sideways along a track, so nothing swings into the room — a practical choice for balconies, bedrooms and wide openings.",
      "Our uPVC sliders come in 2- and 4-panel configurations up to 4600 mm wide, rated for wind loads of 1.5 – 1.8 kPa.",
    ],
    options: ["2-panel & 4-panel", "Up to 4600 mm wide", "Wind load 1.5 – 1.8 kPa", "20-year warranty"],
    specs: upvcCommon(
      [
        ["Minimum dimensions", "2-panel 800 × 550 · 4-panel 2000 × 550 mm"],
        ["Maximum dimensions", "2-panel 2400 × 1600 · 4-panel 4600 × 1600 mm"],
      ],
      [
        ["Wind load", "1.5 – 1.8 kPa"],
        ["Profile width", "60 mm – 112 mm"],
      ]
    ),
  },
  {
    slug: "upvc-top-hung-windows",
    name: "uPVC Top Hung Windows",
    art: "tophung",
    short: "Top-hinged uPVC windows that ventilate even in light rain.",
    images: [],
    description: [
      "Top hung windows are hinged along the top and open outward from the bottom, so they can stay open for fresh air even in light rain.",
      "A smart choice for bathrooms, kitchens and high-level windows.",
    ],
    options: ["60 mm profile", "G.I. reinforced", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 400 × 400 · Max 700 × 1700 mm"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-tilt-turn-windows",
    name: "uPVC Tilt 'n' Turn Windows",
    art: "tiltturn",
    short: "Tilt for secure ventilation, turn to open fully — one handle does both.",
    images: ["upvc-tilt-turn-window.jpg"].map(img),
    description: [
      "Tilt 'n' turn windows open two ways from a single handle: tilt the top inward for secure ventilation, or turn the sash fully inward for cleaning and maximum airflow.",
      "Opening into the room makes them easy to clean from inside — ideal for apartments and upper floors.",
    ],
    options: ["Tilt & turn from one handle", "60 mm profile", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 400 × 400 · Max 700 × 1700 mm"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-casement-doors",
    name: "uPVC Casement Doors",
    art: "casement",
    door: true,
    short: "Hinged uPVC doors that keep out noise, dust and draughts.",
    images: ["upvc-casement-door.jpg"].map(img),
    description: [
      "Casement doors are side-hinged and open like a traditional door, with insulated multi-chamber profiles that keep rooms quiet and comfortable.",
      "Available up to 1050 × 2680 mm with single or double glazing.",
    ],
    options: ["Up to 1050 × 2680 mm", "G.I. reinforced", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 650 × 1800 · Max 1050 × 2680 mm"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-french-doors",
    name: "uPVC French Doors",
    art: "french",
    door: true,
    short: "A pair of uPVC doors opening from the centre onto balconies and gardens.",
    images: ["upvc-french-door.jpg"].map(img),
    description: [
      "French doors are two doors that open from the centre with no fixed post, creating a generous opening to terraces, balconies and gardens.",
      "In uPVC they are warm, quiet and weather-tight, in sizes up to 1600 × 2680 mm.",
    ],
    options: ["Up to 1600 × 2680 mm", "Centre-opening pair", "Single or double glazing", "20-year warranty"],
    specs: upvcCommon([["Dimensions", "Min 900 × 1800 · Max 1600 × 2680 mm"]], [["Profile width", "60 mm"]]),
  },
  {
    slug: "upvc-sliding-doors",
    name: "uPVC Sliding Doors",
    art: "sliding",
    door: true,
    short: "Wide uPVC sliding doors — up to 5 metres — for balconies and patios.",
    images: ["upvc-sliding-door.jpg"].map(img),
    description: [
      "Sliding doors glide sideways on a track, saving floor space while opening wide to the outdoors.",
      "Our uPVC sliding doors come in 2- and 4-panel versions up to 5000 mm wide and 2550 mm tall, rated for wind loads of 1.5 – 1.8 kPa.",
    ],
    options: ["2-panel & 4-panel", "Up to 5000 mm wide", "Wind load 1.5 – 1.8 kPa", "20-year warranty"],
    specs: upvcCommon(
      [
        ["Minimum dimensions", "2-panel 1200 × 1800 · 4-panel 2100 × 1800 / 1200 × 2000 mm"],
        ["Maximum dimensions", "2-panel 2550 × 2550 · 4-panel 5000 × 2550 / 2700 × 2700 mm"],
      ],
      [
        ["Wind load", "1.5 – 1.8 kPa"],
        ["Profile width", "60 mm – 112 mm"],
      ]
    ),
  },
  {
    slug: "upvc-bi-fold-doors",
    name: "uPVC Bi-Fold Doors",
    art: "bifold",
    door: true,
    short: "Folding uPVC panels that stack aside to open up the whole wall.",
    images: [],
    description: [
      "Bi-fold doors are a series of hinged panels that fold concertina-style and stack to the side, opening almost the full width of the wall.",
      "They connect indoor and outdoor spaces beautifully, while insulated uPVC keeps the room comfortable when they are closed.",
    ],
    options: ["Folds to one or both sides", "Near full-width opening", "Single or double glazing", "Low maintenance"],
  },
].map((p) => ({ ...p, category: "upvc" }));

const blinds = [
  {
    slug: "vertical-blinds",
    name: "Vertical Blinds",
    short: "Functional, stylish slats with optimum light control for homes and offices.",
    cover: img("vertical1.jpg"),
    images: ["vertical3.jpg", "vertical2.jpg", "vertical1.jpg", "vertical4.jpg", "vertical5.jpg", "vertical6.jpg"].map(img),
    description: [
      "Our Vertical Blinds are functional and stylish, ideal for home or office, offering optimum light control for any space. Take your pick from our choice of fabric colours and patterns — an extremely adaptable product, suitable for any space.",
      "Vertical Blinds are recommended for windows, conservatories and patio doors. They are popular in living rooms, dining rooms and bedrooms, and a firm favourite in offices, hospitals and schools.",
    ],
    highlight: {
      title: "Mix different vertical slats",
      text: "Create a unique combination by mixing two or three different fabric slats. Stick to the same fabric texture for a professional edge — or replace every other slat to add a pop of colour to your existing blind.",
    },
    options: ["Wide fabric range", "Mix & match slats", "Ideal for large windows", "Home & commercial"],
    catalogues: [
      "catalogues/VERTICAL_E-CATALOG(Cocktail_Collection).pdf",
      "catalogues/VERTICAL_E-CATALOG(ELEGANCE-Collection).pdf",
      "catalogues/Customized_Vertical_Blinds.pdf",
    ].map(catalogue),
  },
  {
    slug: "dream-curtains",
    name: "Dream Curtains",
    art: "blind",
    short: "Soft sheer vanes that combine the drape of a curtain with blind control.",
    images: [],
    description: [
      "Dream Curtains bring together the softness of a sheer curtain and the control of a vertical blind. Fabric vanes hang from a sleek track and can be rotated to let light in or turned for privacy.",
      "They draw aside smoothly like curtains, making them a graceful choice for living rooms, bedrooms and large glass doors.",
    ],
    options: ["Sheer fabric vanes", "Rotate for privacy", "Draws like a curtain", "Motorised options"],
  },
  {
    slug: "roller-blinds",
    name: "Roller Blinds",
    short: "A single sweep of fabric — the quickest way to transform a room.",
    cover: img("Roller3.jpg"),
    images: ["Roller2.jpg", "Roller1.jpg", "Roller3.jpg", "Roller4.jpg", "Roller5.jpg", "Roller6.jpg"].map(img),
    description: [
      "A Roller Blind is a single piece of fabric that wraps around a casing and fits into the top of your window frame, within or outside the recess. It is operated by a chain mechanism, with motorised controls available to open and close your blinds effortlessly.",
      "Trendy and chic, Roller Blinds breathe fresh life into a room with new colours and textures. Choose coordinating shades that already exist in the room, or contrasting ones that make it bright and beautiful — use them alone or with curtains, on any window.",
      "One of the most versatile blind types, they come in blackout, moisture-resistant and flame-retardant finishes, and in hundreds of colours, designs and fabrics.",
    ],
    options: ["Classic Style", "Decorated Fascia Style", "Wireless motorised", "Blackout", "Moisture-resistant", "Flame-retardant"],
    catalogues: [
      "catalogues/DREAM'Z_COMMERCIAL_COLLECTION.pdf",
      "catalogues/Chimera_Collection.pdf",
      "catalogues/Classic_Solids_Collection.pdf",
      "catalogues/Sunshadow_&_Resort_Collection.pdf",
      "catalogues/Solitaire_Collection_PART_1.pdf",
      "catalogues/Solitaire_Collection_PART_2.pdf",
      "catalogues/Arctica_Collection_Roller_Blind.pdf",
      "catalogues/casanova_collection_Roller_blind.pdf",
      "catalogues/Versatile_Collection_Roller_Blinds.pdf",
      "catalogues/Signature_Collection_Roller_Blinds.pdf",
      "catalogues/Roseate_Collection_Roller_Blinds.pdf",
      "catalogues/Moroccan_Collection_Roller_Blinds.pdf",
      "catalogues/Art_Deco_Roller_Blinds.pdf",
      "catalogues/Customized_Roller_Blinds.pdf",
    ].map(catalogue),
  },
  {
    slug: "roman-blinds",
    name: "Roman Blinds",
    short: "Soft, evenly stacking folds that give any window a classy makeover.",
    images: ["Roman2.jpg", "Roman3.jpg", "Roman4.jpg", "Roman5.jpg", "Roman6.jpg", "Roman7.jpg"].map(img),
    description: [
      "Give your home a classy makeover with Roman Blinds. Trendy and technologically innovative, they come in a wide range of colours, prints and fabrics — treat each window of your home differently, and automate them to open and close at the press of a button.",
      "Unlike standard blinds, Roman Blinds stack up evenly when opened and stay visibly smooth when closed — never bumpy or ribbed. Cords run through evenly spaced stiffener rods on the back of the fabric, so the lowered portion remains smooth while the top stacks neatly.",
      "A top-down/bottom-up mechanism lets only the top of the fabric come down, giving privacy while still letting in natural light.",
    ],
    options: ["Classic Style", "Fascia Style", "Chain/Cord operation", "Wireless motorised"],
    catalogues: [
      "catalogues/roman_blind/DREAM'Z_COMMERCIAL_COLLECTION.pdf",
      "catalogues/Classic_Solids_Collection.pdf",
      "catalogues/roman_blind/Sunshadow_&,_Resort_Collection.pdf",
      "catalogues/Solitaire_Collection_PART_1.pdf",
      "catalogues/Solitaire_Collection_PART_2.pdf",
      "catalogues/roman_blind/Arctica_Collection_Roman_Blinds.pdf",
      "catalogues/roman_blind/Casanova_Collection_Roman_Blinds.pdf",
      "catalogues/roman_blind/Versatile_Collection_Roman_Blinds.pdf",
      "catalogues/roman_blind/Signature_Collection_Roman_Blinds.pdf",
      "catalogues/roman_blind/Roseate_Collection_Roman_Blinds.pdf",
      "catalogues/roman_blind/Moroccan_Collection_Roman_Blinds.pdf",
      "catalogues/roman_blind/Art_Deco_Roman_Blinds.pdf",
      "catalogues/roman_blind/Customized_Roman_Blinds.pdf",
    ].map(catalogue),
  },
  {
    slug: "panel-blinds",
    name: "Panel Blinds",
    short: "Wide gliding panels for large windows, patio doors and room dividers.",
    images: ["panel5.jpg", "panel1.jpg", "panel2.jpg", "panel3.jpg", "panel4.jpg", "panel7-min.jpg"].map(img),
    description: [
      "Panel Blinds are a modern variation of vertical blinds that use wide fabric panels sliding across a multichannel track, each with a weighted bottom bar for a smooth appearance. When fully open they stack behind one another, letting in maximum light.",
      "Ideal for larger windows and patio doors, they give complete control over privacy and light — and double as partitions or room dividers, adding a contemporary oriental atmosphere to any home. Also known as Japanese blinds, sliding panel blinds or panel glide systems.",
    ],
    options: ["3-Way / 4-Way / 5-Way", "Single Side Opening / Centre Opening", " Ideal for big windows or partitions"],
    catalogues: [
      "catalogues/DREAM'Z_COMMERCIAL_COLLECTION.pdf",
      "catalogues/Chimera_Collection.pdf",
      "catalogues/Classic_Solids_Collection.pdf",
      "catalogues/Sunshadow_&_Resort_Collection.pdf",
      "catalogues/Solitaire_Collection_PART_1.pdf",
      "catalogues/Solitaire_Collection_PART_2.pdf",
      "catalogues/panel_blind/Arctica_Collection_Panel_Blind.pdf",
      "catalogues/panel_blind/Casanova_Collection_Panel _Blinds.pdf",
      "catalogues/panel_blind/Versatile_Collection_Panel_Blinds.pdf",
      "catalogues/panel_blind/Signature_Collection_Panel_Blinds.pdf",
      "catalogues/panel_blind/Roseate_Collection_Panel_Blinds.pdf",
      "catalogues/panel_blind/Art_Deco_Panel_Blinds.pdf",
      "catalogues/panel_blind/Moroccan_Collection_Roman_Blinds.pdf",
      "catalogues/panel_blind/Customized_Panel_Blinds.pdf",
    ].map(catalogue),
  },
  {
    slug: "combi-blinds",
    name: "Combi Blinds",
    short: "Sheer and solid bands that shift from sunlit to private in seconds.",
    images: ["combi2.jpg", "combi1.jpg", "combi3.jpg", "combi4.jpg", "combi6.jpg", "combi7.jpg"].map(img),
    description: [
      "Combi Blinds combine sheer sunscreen and solid weave fabric. When the solid strips overlap, sunlight is blocked; when the sheer strips overlap, light is let in — transitioning from a sunlit room to a darker, private space in seconds.",
      "A very modern alternative to horizontal blinds, they operate like roller blinds via a matching side chain, and can be cracked open slightly to let in just a little light. Also known as layered, dual, zebra or banded blinds — a perfect amalgamation of beauty and function.",
    ],
    options: ["Fascia Style", "Light Filtering / Blackout", "Chain/Cord operation", "Wireless Motorised"],
    catalogues: [
      "catalogues/combi_blind/DREAM'Z_COMMERCIAL_COLLECTION.pdf",
      "catalogues/combi_blind/D'signer_Collection.pdf",
      "catalogues/combi_blind/Arctica_Collection_Combi_Blinds.pdf",
      "catalogues/combi_blind/Casanova_Collection_Combi_Blinds.pdf",
      "catalogues/combi_blind/Versatile_Collection_Combi_Blinds.pdf",
      "catalogues/combi_blind/Signature_Collection_Combi_Blinds.pdf",
      "catalogues/combi_blind/Roseate_Collection_Combi_Blinds.pdf",
      "catalogues/combi_blind/Moroccan_Collection_Combi_Blinds.pdf",
      "catalogues/combi_blind/Art_Deco_Combi_Blinds.pdf",
      "catalogues/combi_blind/Customized_Combi_Blinds.pdf",
    ].map(catalogue),
  },
  {
    slug: "trinity-blinds",
    name: "Trinity Blinds",
    short: "Two blinds in one — fabric vanes floating between sheer facings.",
    images: ["Trinity1.jpg", "Trinity2.jpg", "Trinity4.jpg", "Trinity5.jpeg", "Trinity7.jpeg", "Trinity8.jpeg"].map(img),
    description: [
      "Trinity Blinds close the gap between Venetian blinds and curtains: fabric slats suspended between two sheer facings give complete light control and privacy. Open them for a soft view, close them for full privacy, or tilt them for flexible light.",
      "The unique S-slat softens and diffuses sunlight around the room, protecting your furniture and maximising daylight so lights can stay off. No cords run through the fabric, and the antistatic material is durable and easy to clean.",
    ],
    options: ["High UV reduction", "Antistatic fabric", "Cordless fabric face", "Wireless motorised"],
  },
  {
    slug: "open-roman-blinds",
    name: "Open Roman Blinds",
    art: "blind",
    short: "Relaxed, softly draping Roman folds for an easy, elegant look.",
    images: [],
    description: [
      "Open Roman Blinds are a softer take on the classic Roman blind: instead of crisp, rod-stiffened pleats, the fabric falls in loose, relaxed folds when raised.",
      "They suit sheer and lightweight fabrics beautifully and bring a gentle, lived-in elegance to bedrooms and living rooms.",
    ],
    options: ["Soft, relaxed folds", "Sheer & light fabrics", "Cord or chain operation", "Motorised options"],
  },
  {
    slug: "wooden-venetian-blinds",
    name: "Wooden Venetian Blinds",
    short: "Seasoned wood slats that bring natural warmth to every season.",
    images: ["wooden4.jpg", "wooden1.jpg", "wooden2.jpg", "wooden3.jpg", "wooden8.jpg", "wooden9.jpeg"].map(img),
    description: [
      "Horizontal wooden slats joined by corded pulleys either gather at the top of the window to reveal the view, or simply angle to let light through while retaining privacy.",
      "Crafted from seasoned wood, they withstand weather changes and stay sturdy through all seasons. Especially effective in neutral and traditional decors, where the natural hue and grain enhance the look effortlessly.",
    ],
    options: ["50 mm slats", "Easy Rise System", "Wireless Motorised"],
  },
  {
    slug: "aluminium-venetian-blinds",
    name: "Aluminium Venetian Blinds",
    art: "blind",
    short: "Slim, durable metal slats — ideal for kitchens, bathrooms and offices.",
    images: [],
    description: [
      "Aluminium Venetian Blinds use thin horizontal metal slats that tilt to control light and privacy precisely, or raise fully to clear the window.",
      "Moisture-resistant and easy to wipe clean, they are a practical, long-lasting choice for kitchens, bathrooms and offices, in a wide range of colours.",
    ],
    options: ["Tilt for light control", "Moisture-resistant", "Easy to clean", "Wireless Motorised"],
  },
  {
    slug: "cellular-blinds",
    name: "Cellular Blinds",
    short: "Honeycomb cells that insulate your windows and cut energy costs.",
    images: ["cellular1.jpg", "cellular2.jpg", "cellular3.jpg", "cellular4.jpg", "cellular5.jpg", "cellular6.jpg"].map(img),
    description: [
      "Cellular — or Honeycomb — Blinds block or filter light and insulate windows. Their cells trap air, creating a barrier between the glass and the room that reduces heat loss in winter and unwanted heat in summer, helping lower energy costs.",
      "They offer room darkening or blackout for sleeping, child-safe operation, and a top-down/bottom-up option that lowers the top of the shade or raises the bottom.",
    ],
    options: ["Classic Style", "Top-Down / Bottom-Up", "Day & Night", "Cord clutch", "Cord lock", "Wireless motorised"],
  },
  {
    slug: "honeycomb-skylight-blinds",
    name: "Honeycomb Skylight Blinds",
    short: "Insulating honeycomb shades that tame harsh skylight sun and glare.",
    images: ["Skylight5.jpg", "Skylight1.jpg", "Skylight2.jpg", "Skylight3.jpg", "Skylight4.jpg", "Skylight6.jpeg"].map(img),
    description: [
      "Skylights make rooms brighter and airier, but they also let in harsh summer rays, winter cold and glare. Honeycomb Skylight Blinds sit neatly within the skylight frame and control all three.",
      "Their honeycomb cells trap air to insulate against heat and cold, reduce glare while still letting light in, and protect from UV without sacrificing the view. Motorised versions can be operated by remote or smartphone.",
    ],
    options: ["Classic Style", "Wireless motorised"],
  },
  {
    slug: "vertical-cellular-shutters",
    name: "Vertical Cellular Shutters",
    art: "blind",
    short: "Honeycomb insulation that glides sideways across wide windows and doors.",
    images: [],
    description: [
      "Vertical Cellular Shutters bring the insulating honeycomb structure of cellular blinds to a sideways-gliding format, making them ideal for tall windows, wide openings and sliding doors.",
      "They draw across smoothly, stack compactly, and help keep rooms cooler in summer and warmer in winter.",
    ],
    options: ["Honeycomb insulation", "Side-gliding", "For wide openings & doors", "Light filtering or blackout"],
  },
  {
    slug: "mosquito-mesh",
    name: "Mosquito Mesh",
    art: "mesh",
    short: "Sliding and pleated insect screens that keep bugs out and air flowing.",
    images: [],
    description: [
      "Our Mosquito Mesh keeps insects out while letting fresh air and light in. Sliding and pleated versions glide open when you need them and tuck away when you don't.",
      "Made to measure for windows and doors of every size — a simple, healthy upgrade for any home.",
    ],
    options: ["Sliding mesh", "Pleated mesh", "Windows & doors", "Made to measure"],
  },
  {
    slug: "industrial-strip-curtains",
    name: "Industrial Strip Curtains",
    art: "strip",
    short: "Overlapping PVC strips that hold temperature and keep out dust and insects.",
    images: [],
    description: [
      "Industrial Strip Curtains are overlapping flexible PVC strips hung across doorways. People, trolleys and forklifts pass through easily, while the strips help hold temperature and keep dust, fumes and insects out.",
      "They are widely used in cold rooms, warehouses, factories, kitchens and loading bays.",
    ],
    options: ["Flexible PVC strips", "Cold rooms & warehouses", "Dust & insect control", "Made to measure"],
  },
  {
    slug: "magnetic-strip-curtains",
    name: "Magnetic Strip Curtains",
    art: "strip",
    short: "PVC strips with magnets that close back together behind you.",
    images: [],
    description: [
      "Magnetic Strip Curtains work like standard strip curtains, but magnets along the strip edges pull them back together after each pass — for a neater, tighter seal.",
      "A hands-free solution for kitchens, shops, clinics and air-conditioned spaces that need frequent access.",
    ],
    options: ["Self-closing magnets", "Hands-free access", "Keeps AC in", "Made to measure"],
  },
].map((p) => ({ ...p, category: "blinds" }));

const wallpapers = [
  {
    slug: "customised-printed-wallpapers",
    name: "Printed Wallpapers",
    short: "Digitally printed walls — from subtle textures to one-of-a-kind murals.",
    images: ["wallpaper-7.jpg", "wallpaper-4.jpg", "wallpaper-2.jpg", "wallpaper-3.jpg", "wallpaper-5.jpg", "wallpaper-1.jpg"].map(img),
    description: [
      "Wallpapers decorate the interior walls of homes and public buildings — plain, textured, with repeating patterns, or as a single large design carried across a set of sheets.",
      "Using digital printing with UV-cured inks, we produce customised wallpapers in very small runs — even a single wall. Your photographs or digital art are printed onto wallpaper material, giving you the exact look and feel you want for living rooms, bedrooms, lobbies, restaurants and offices.",
    ],
    options: ["Custom murals", "Your own photos & art", "UV-cured inks", "Single-wall runs", "Residential & commercial"],
  },
].map((p) => ({ ...p, category: "wallpapers" }));

export const products = [...aluminium, ...upvc, ...blinds, ...wallpapers].map((p) => ({
  catalogues: [],
  ...p,
  cover: p.cover ?? p.images[0] ?? null,
}));

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const productsIn = (categoryId) => products.filter((p) => p.category === categoryId);

// Partner brands for doors & windows (from the catalogue)
export const partners = [
  { name: "WinVista", role: "Premium uPVC profiles", logo: "/partners/winvista.webp" },
  { name: "iALUSYS", role: "Premium aluminium profiles", logo: "/partners/ialusys.webp" },
  { name: "Insta", role: "Door & window hardware", logo: "/partners/insta.webp" },
  { name: "G-U Gretsch-Unitas", role: "Door & window hardware", logo: "/partners/gu.webp" },
];

export const testimonials = [
  { name: "Rakesh Arora", city: "Delhi", text: "I have had the pleasure of working with Cape Décor for over 6–7 years. Their staff is very experienced and delivers inspired, sophisticated products." },
  { name: "Vishal Khubwani", city: "Bilaspur", text: "We have worked with them on multiple projects and each time both the design and the attention to detail have exceeded our expectations." },
  { name: "Deepak Dharmwani", city: "Raipur", text: "My experience with Cape Décor has been phenomenal. I was impressed with the entire team and their willingness to answer any questions I had." },
  { name: "Amit Arora", city: "Delhi", text: "Cape Décor has impeccable taste and knowledge of all things design. When complications arose, the company dealt with them promptly and professionally." },
  { name: "Angad Kalra", city: "Ludhiana", text: "We have had amazing feedback on the beauty of each of the products, down to every detail. They are very professional and supportive." },
  { name: "Pawan Chhabada", city: "Raipur", text: "I am extremely impressed with the depth and breadth of service and expertise by the entire team at Cape Décor." },
  { name: "Anil Saraf", city: "Jaipur", text: "Their products are of supreme quality — they draw every eye in the room." },
  { name: "Anuj Dalmia", city: "Nepal", text: "Working with Cape Décor has been a pleasure and a positive experience. The staff went above and beyond the call of duty." },
  { name: "Anupam Garg", city: "Gurgaon", text: "Wonderful people. From our very first conversation to date, everything went exactly as promised." },
];

export const team = [
  { name: "Mr. Ashok Gupta", role: "Founder", photo: "/team/founder.jpeg" },
  { name: "Mr. Ramit Gupta", role: "CEO", photo: "/team/ceo.jpeg" },
  { name: "Mr. Jatin Gupta", role: "CEO", photo: "/team/ceo1.jpg" },
];

// "What does your space need?" selector on the home page
export const needs = [
  { id: "quiet", label: "Quiet & insulated", text: "Shut out traffic noise, heat and dust.", slugs: ["upvc-sliding-windows", "upvc-casement-windows", "cellular-blinds"] },
  { id: "views", label: "Big views & wide openings", text: "Floor-to-ceiling glass and openings that disappear.", slugs: ["aluminium-sliding-doors", "aluminium-fixed-windows", "panel-blinds"] },
  { id: "privacy", label: "Privacy", text: "Keep the view in, prying eyes out.", slugs: ["combi-blinds", "trinity-blinds", "roman-blinds"] },
  { id: "light", label: "Soft light control", text: "Filter harsh sun into a gentle glow.", slugs: ["trinity-blinds", "vertical-blinds", "wooden-venetian-blinds"] },
  { id: "blackout", label: "Blackout & sleep", text: "Deep darkness for bedrooms and media rooms.", slugs: ["roller-blinds", "roman-blinds", "cellular-blinds"] },
  { id: "statement", label: "A designer look", text: "Make walls and openings part of the design story.", slugs: ["customised-printed-wallpapers", "aluminium-french-doors", "roman-blinds"] },
  { id: "commercial", label: "Commercial & industrial", text: "Durable solutions for offices, shops and warehouses.", slugs: ["industrial-strip-curtains", "vertical-blinds", "aluminium-casement-doors"] },
];

export const stats = [
  { value: "30,000+", label: "Happy clients" },
  { value: "15+", label: "Years of experience" },
  { value: String([...aluminium, ...upvc, ...blinds, ...wallpapers].length), label: "Products" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/downloads", label: "Catalogues" },
  { href: "/sales-partner", label: "Become a Partner" },
  { href: "/contact", label: "Contact" },
];
