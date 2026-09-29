import Image from "next/image";
import { COLORS } from "@/lib/theme";

export default function ProductArt({ img, alt = "" }) {
  if (img) {
    return (
      <div style={{ width: "100%", aspectRatio: "4 / 5", position: "relative" }}>
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "contain", filter: "drop-shadow(0 8px 18px rgba(33,29,24,0.14))" }}
        />
      </div>
    );
  }

  // Placeholder art: swap for a real photo by adding an `img` path to the
  // product entry in lib/products.js.
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 5",
        background: COLORS.panel,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg viewBox="0 0 100 120" style={{ width: "26%", opacity: 0.3 }}>
        <path d="M35 20 L65 20 L74 30 L65 30 L65 105 L35 105 L35 30 L26 30 Z" fill="none" stroke={COLORS.dim} strokeWidth="1.5" />
      </svg>
    </div>
  );
}
