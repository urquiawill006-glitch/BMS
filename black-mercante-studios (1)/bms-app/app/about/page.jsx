import { COLORS, display } from "@/lib/theme";

export const metadata = {
  title: "About — Black Mercante Studios",
};

export default function AboutPage() {
  return (
    <section className="px-5 md:px-10 py-14 md:py-20" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15 }}>
        About
      </div>
      <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        Black Mercante Studios is a Baltimore-based label built on small-batch
        runs, heavyweight fabrics, and a fit that holds up past the first
        wash. No filler drops — every piece is made to be worn, not just
        photographed.
      </p>
      <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        More of our story is coming soon.
      </p>
    </section>
  );
}
