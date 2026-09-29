"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { COLORS, display } from "@/lib/theme";
import { SEASONS, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import HeroSlideshow from "@/components/HeroSlideshow";

function HomeContent() {
  const searchParams = useSearchParams();
  const seasonFromUrl = searchParams.get("season") || "all";
  const [activeSeason, setActiveSeason] = useState(seasonFromUrl);

  // Keep the filter in sync when the ?season= query param changes via
  // navigation (e.g. clicking a season link in the footer or header)
  // while already on this page.
  useEffect(() => {
    setActiveSeason(seasonFromUrl);
  }, [seasonFromUrl]);

  const filtered = useMemo(
    () => (activeSeason === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.season === activeSeason)),
    [activeSeason]
  );

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", background: COLORS.black }}>
        <div
          style={{
            aspectRatio: "16 / 9",
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
            overflow: "hidden",
          }}
          className="px-6 md:px-14 py-12 md:py-16"
        >
          <HeroSlideshow />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,12,0.05) 0%, rgba(20,16,12,0.18) 55%, rgba(20,16,12,0.62) 100%)" }} />
          <div style={{ position: "relative" }}>
            <div
              style={{
                ...display,
                fontStyle: "italic",
                fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                fontWeight: 400,
                color: "#F7F2E9",
                lineHeight: 1.05,
              }}
            >
              Season 03
            </div>
            <div className="flex items-center gap-6 mt-7">
              <a
                href="#shop-grid"
                style={{
                  border: "1px solid #F7F2E9",
                  color: "#F7F2E9",
                  padding: "12px 32px",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  display: "inline-block",
                }}
              >
                Shop the Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEASON FILTER STRIP */}
      <section
        className="flex items-center gap-9 px-6 md:px-14 py-5 overflow-x-auto"
        style={{ borderBottom: `1px solid ${COLORS.line}`, background: COLORS.black }}
      >
        <button
          onClick={() => setActiveSeason("all")}
          style={{
            whiteSpace: "nowrap",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            paddingBottom: 4,
            color: activeSeason === "all" ? COLORS.white : COLORS.dim,
            borderBottom: activeSeason === "all" ? `1px solid ${COLORS.white}` : "1px solid transparent",
          }}
        >
          All
        </button>
        {SEASONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSeason(s.id)}
            style={{
              whiteSpace: "nowrap",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              paddingBottom: 4,
              color: activeSeason === s.id ? COLORS.white : COLORS.dim,
              borderBottom: activeSeason === s.id ? `1px solid ${COLORS.white}` : "1px solid transparent",
            }}
          >
            {s.label}
          </button>
        ))}
      </section>

      {/* PRODUCT GRID */}
      <section id="shop-grid" className="px-6 md:px-14 py-14 md:py-20" style={{ background: COLORS.black }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
