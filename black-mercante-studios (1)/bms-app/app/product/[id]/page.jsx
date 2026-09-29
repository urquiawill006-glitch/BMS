"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { COLORS, display } from "@/lib/theme";
import { PRODUCTS, DEFAULT_FIT_TEXT, CARE_TEXT, SHIPPING_TEXT } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductArt from "@/components/ProductArt";
import ProductAccordion from "@/components/ProductAccordion";

// Staggered fade/slide-up reveal — each element group appears a little
// after the last, instead of the whole page popping in at once.
function reveal(visible, delayMs) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity 0.5s ease ${delayMs}ms, transform 0.5s ease ${delayMs}ms`,
  };
}

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [size, setSize] = useState(product?.sizes[0]);
  const [visible, setVisible] = useState(false);

  // Reset and replay the reveal every time the product changes (e.g.
  // navigating from one product straight to another).
  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [product?.id]);

  if (!product) return notFound();

  return (
    <section className="px-5 md:px-10 py-10 md:py-14">
      <Link href="/" style={{ fontSize: 12, color: COLORS.dim, letterSpacing: "0.04em", textTransform: "uppercase" }}>
        ← Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-14 mt-6">
        <div style={{ maxWidth: 440, marginLeft: "auto", marginRight: "auto", ...reveal(visible, 0) }}>
          <ProductArt img={product.img} alt={product.name} />
        </div>

        <div className="flex flex-col">
          {product.soldOut && (
            <div
              style={{
                alignSelf: "flex-start",
                color: COLORS.dim,
                fontSize: 11,
                letterSpacing: "0.08em",
                padding: "4px 9px",
                textTransform: "uppercase",
                border: `1px solid ${COLORS.line}`,
                marginBottom: 14,
                ...reveal(visible, 80),
              }}
            >
              Sold Out
            </div>
          )}

          <h1 style={{ ...display, fontStyle: "italic", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 400, lineHeight: 1.15, ...reveal(visible, 80) }}>
            {product.name}
          </h1>
          <div style={{ fontSize: 15, color: COLORS.dim, marginTop: 10, ...reveal(visible, 140) }}>${product.price.toFixed(2)}</div>

          {!product.soldOut && (
            <div className="mt-9" style={reveal(visible, 220)}>
              <div style={{ fontSize: 11, color: COLORS.dim, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                Size
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    style={{
                      fontSize: 13,
                      padding: "9px 18px",
                      border: `1px solid ${size === s ? COLORS.white : COLORS.line}`,
                      background: size === s ? COLORS.white : "transparent",
                      color: size === s ? COLORS.black : COLORS.dim,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(product, size)}
            disabled={product.soldOut}
            style={{
              marginTop: 32,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "16px 0",
              width: "100%",
              maxWidth: 320,
              textAlign: "center",
              background: "transparent",
              color: product.soldOut ? COLORS.dim : COLORS.white,
              border: `1px solid ${product.soldOut ? COLORS.line : COLORS.white}`,
              cursor: product.soldOut ? "not-allowed" : "pointer",
              transition: "background 0.2s ease, color 0.2s ease",
              ...reveal(visible, 280),
            }}
          >
            {product.soldOut ? "Sold Out" : "Add to Bag"}
          </button>

          <div style={reveal(visible, 320)}>
            <ProductAccordion
              sections={[
                {
                  title: "Product Details",
                  content: (
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.dim, whiteSpace: "pre-line" }}>
                      {product.description || "Details coming soon."}
                    </p>
                  ),
                },
                {
                  title: "Size & Fit",
                  content: (
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.dim }}>
                      {product.fit || DEFAULT_FIT_TEXT}
                    </p>
                  ),
                },
                {
                  title: "Care",
                  content: (
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.dim }}>{CARE_TEXT}</p>
                  ),
                },
                {
                  title: "Shipping & Returns",
                  content: (
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.dim }}>{SHIPPING_TEXT}</p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
