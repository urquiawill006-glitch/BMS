import Image from "next/image";
import Link from "next/link";
import { COLORS, display } from "@/lib/theme";
import { LOOKBOOK_IMAGES } from "@/lib/products";

export const metadata = {
  title: "Lookbook — Black Mercante Studios",
};

export default function LookbookPage() {
  return (
    <section className="px-6 md:px-14 py-14 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div style={{ ...display, fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.1 }}>
          Lookbook
        </div>
        <div style={{ fontSize: 11, color: COLORS.dim, textTransform: "uppercase", letterSpacing: "0.1em" }}>Season 03</div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {LOOKBOOK_IMAGES.map((img, i) => (
            <div key={img.src + i} style={{ aspectRatio: "2 / 3", position: "relative", overflow: "hidden" }}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <Link
          href="/"
          style={{
            border: `1px solid ${COLORS.white}`,
            color: COLORS.white,
            padding: "13px 32px",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
