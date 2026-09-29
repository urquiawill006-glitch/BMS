// Product catalog for Black Mercante Studios.
//
// This is a plain data file for now — swap it for a CMS or e-commerce
// backend later without touching any component code, as long as the
// shape (id, name, season, price, sizes, soldOut, img, description) stays the same.

// Copy shared across every product's Size & Fit, Care, and Shipping &
// Returns accordion sections. Edit here to change it site-wide; give a
// specific product its own `fit` field (see PRODUCTS below) to override
// just that one.
export const DEFAULT_FIT_TEXT =
  "Relaxed, unisex fit through the body. Sizes run true to size — size up for a looser, more oversized silhouette.";

export const CARE_TEXT =
  "Machine wash cold, inside out, with like colors on a gentle cycle. Do not bleach. Hang dry. Do not tumble dry or iron directly over graphics or distressed areas.";

export const SHIPPING_TEXT =
  "Free shipping on orders over $150. Returns accepted within 14 days of delivery, unworn with tags attached.";

export const SEASONS = [
  { id: "s03", label: "SEASON 03" },
  { id: "s02", label: "SEASON 02" },
  { id: "s01", label: "SEASON 01" },
];

export const PRODUCTS = [
  {
    id: "bm-101",
    name: "Blinded Nights Tee",
    season: "s03",
    price: 65,
    sizes: ["S", "M", "L", "XL"],
    soldOut: false,
    img: "/images/product-img-1.png",
    description:
      "One-of-One Art Tee. Blinded Nights is an original graphic piece built on a vintage-style T-shirt. The design explores themes of nightlife, anonymity, memory, and visual overload through a fragmented collage of photographic imagery, distressed typography, and layered graphic elements.\n\nGarment: LA Apparel vintage-style T-shirt\nFabric: 100% cotton\nColor: White\nFit: Unisex / relaxed\nGraphic: Original Blinded Nights artwork\nFinish: Distressed / hand-finished aesthetic\nEdition: One of one",
  },
  {
    id: "bm-102",
    name: "Mercante Ruin Things Tee",
    season: "s03",
    price: 75,
    sizes: ["S", "M", "L"],
    soldOut: false,
    img: "/images/product-img-2.png",
    description: "",
  },
  {
    id: "bm-105",
    name: "After Hour Signal Shorts",
    season: "s03",
    price: 40,
    sizes: ["S", "M", "L", "XL"],
    soldOut: false,
    img: "/images/product-img-3.png",
    description:
      "One-of-One Art Shorts. After Hour Signal is an original graphic short built around the visual language of communication, digital signals, and underground nightlife. The piece combines bold retro-futurist imagery, halftone textures, and layered graphic elements to create a worn, archival aesthetic. Together, the two graphics create a contrast between human connection and machine-driven communication.\n\nFabric: 100% U.S. cotton\nWeight: 14 oz heavyweight fleece\nColor: Black\nFit: Unisex / relaxed\nWaist: Elastic waistband with adjustable drawcord\nGraphic: Original After Hour Signal artwork\nEdition: One of one",
  },
  {
    id: "bm-106",
    name: "Midnight Madness Shorts",
    season: "s03",
    price: 55,
    sizes: ["S", "M", "L", "XL"],
    soldOut: false,
    img: "/images/product-img-4.png",
    description:
      "One-of-One Vintage Art Shorts. Midnight Market is an original graphic short built on a vintage heavyweight fleece base shorts. The piece draws from the atmosphere of late-night street markets, after-hours trading, and underground city culture. The heavy fleece construction gives the shorts a substantial hand-feel, while the elastic waistband and adjustable drawcord keep the silhouette comfortable and functional.\n\nGarment: Los Angeles Apparel Heavy Fleece Shorts\nFabric: 100% U.S. cotton\nWeight: 14 oz heavyweight fleece\nColor: Vintage black / black\nFit: Unisex / relaxed\nWaist: Elastic waistband with adjustable drawcord\nFinish: Garment-dyed / vintage-washed appearance\nGraphic: Original Midnight Market artwork\nEdition: One of one",
  },
  {
    id: "bm-108",
    name: "Mercante Signature Beanie",
    season: "s02",
    price: 30,
    sizes: ["One Size"],
    soldOut: true,
    img: "/images/product-img-s2-3.png",
    description: "",
  },
  {
    id: "bm-109",
    name: "Redacted History Sweatpants",
    season: "s02",
    price: 100,
    sizes: ["S", "M", "L", "XL"],
    soldOut: true,
    img: "/images/product-img-s2-1.png",
    description: "",
  },
  {
    id: "bm-110",
    name: "Face The Noise Longsleeve",
    season: "s02",
    price: 80,
    sizes: ["S", "M", "L", "XL"],
    soldOut: true,
    img: "/images/product-img-s2-2.png",
    description: "",
  },
  {
    id: "bm-113",
    name: "Summer on Mercante Blvd Tee",
    season: "s01",
    price: 65,
    sizes: ["S", "M", "L", "XL"],
    soldOut: false,
    img: "/images/product-img-s1-1.png",
    description: "",
  },
];

export const LOOKBOOK_IMAGES = [
  { src: "/images/lookbook-img-1.jpg", alt: "Black Mercante lookbook — corner store" },
  { src: "/images/lookbook-img-2.jpg", alt: "Black Mercante lookbook — corner store detail" },
  { src: "/images/lookbook-img-3.jpg", alt: "Black Mercante lookbook — studio" },
  { src: "/images/lookbook-img-4.jpg", alt: "Black Mercante lookbook — full look" },
  { src: "/images/lookbook-img-5.jpg", alt: "Black Mercante lookbook — studio side profile" },
  { src: "/images/lookbook-img-6.jpg", alt: "Black Mercante lookbook — Mercante Ruin Things Tee seated" },
  { src: "/images/lookbook-img-7.jpg", alt: "Black Mercante lookbook — Blinded Nights Tee detail" },
  { src: "/images/lookbook-img-8.jpg", alt: "Black Mercante lookbook — Mercante Ruin Things Tee detail" },
  { src: "/images/hero-season-03.jpg", alt: "Black Mercante lookbook — corner store fisheye" },
  { src: "/images/hero-season-03-2.jpg", alt: "Black Mercante lookbook — chest detail fisheye" },
  { src: "/images/hero-season-03-3.jpg", alt: "Black Mercante lookbook — shorts detail" },
];
