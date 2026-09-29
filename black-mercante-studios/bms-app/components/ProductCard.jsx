import Link from "next/link";
import { COLORS, display } from "@/lib/theme";
import ProductArt from "./ProductArt";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="flex flex-col group">
      <div style={{ position: "relative" }}>
        <ProductArt img={product.img} alt={product.name} />
        {product.soldOut && (
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: COLORS.black,
              color: COLORS.dim,
              fontSize: 10,
              letterSpacing: "0.08em",
              padding: "4px 9px",
              textTransform: "uppercase",
              border: `1px solid ${COLORS.line}`,
            }}
          >
            Sold Out
          </div>
        )}
      </div>

      <div
        className="group-hover:opacity-60"
        style={{ ...display, fontSize: 15, fontWeight: 400, fontStyle: "italic", marginTop: 16, color: COLORS.white, transition: "opacity 0.2s ease" }}
      >
        {product.name}
      </div>
      <div style={{ fontSize: 12.5, letterSpacing: "0.04em", color: product.soldOut ? COLORS.dim : COLORS.dim, marginTop: 4 }}>
        ${product.price.toFixed(2)}
      </div>
    </Link>
  );
}
