// Keeping the same key names as before (black/white/etc.) so every
// component that already references COLORS.black / COLORS.white keeps
// working — only the values changed, from a dark streetwear palette to a
// warm, light, restrained one. "black" is the site's dominant (now light)
// background; "white" is the dominant (now dark ink) foreground/text.
export const COLORS = {
  black: "#F7F2E9", // dominant background — warm ivory
  panel: "#EFE7D8", // slightly deeper cream, used for cart/drawer surfaces
  panelRaised: "#E8DECB",
  white: "#211D18", // dominant foreground — soft ink, not pure black
  dim: "#8A8071", // muted warm taupe for secondary text
  red: "#6E2A34", // deep oxblood accent, used sparingly
  line: "#DED2BC", // soft hairline border
};

export const display = { fontFamily: "'Fraunces', serif" };
export const body = { fontFamily: "'Inter', sans-serif" };

// Grain texture retained for anywhere it's still referenced, but no longer
// used on the hero or placeholder art — a raw grunge texture works against
// a refined look.
export const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>`
  );
