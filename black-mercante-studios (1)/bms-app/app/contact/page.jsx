import { COLORS, display } from "@/lib/theme";

export const metadata = {
  title: "Contact — Black Mercante Studios",
};

export default function ContactPage() {
  return (
    <section className="px-5 md:px-10 py-14 md:py-20" style={{ maxWidth: 640, margin: "0 auto" }}>
      <div style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15 }}>
        Contact
      </div>
      <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        Questions about an order, a wholesale inquiry, or anything else —
        reach out and we'll get back to you.
      </p>

      <div className="flex flex-col gap-4 mt-10" style={{ fontSize: 14 }}>
        <div>
          <div style={{ color: COLORS.dim, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>
            Email
          </div>
          <a href="mailto:blackmercantestudios@gmail.com" style={{ color: COLORS.white }}>
            blackmercantestudios@gmail.com
          </a>
        </div>
        <div>
          <div style={{ color: COLORS.dim, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>
            Instagram
          </div>
          <a href="https://www.instagram.com/blackmercantestudios" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.white }}>
            @blackmercantestudios
          </a>
        </div>
        <div>
          <div style={{ color: COLORS.dim, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>
            Based in
          </div>
          <div style={{ color: COLORS.white }}>Baltimore, MD</div>
        </div>
      </div>
    </section>
  );
}
