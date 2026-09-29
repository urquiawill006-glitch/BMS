"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { COLORS } from "@/lib/theme";
import { SEASONS } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();

  return (
    <header
      style={{ background: COLORS.black, color: COLORS.white, position: "sticky", top: 0, zIndex: 30, borderBottom: `1px solid ${COLORS.line}` }}
    >
      <div className="flex items-center justify-between px-5 md:px-10" style={{ height: 80 }}>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <Menu size={20} />
        </button>

        <Link href="/" aria-label="Black Mercante Studios home">
          <Image src="/images/logo-black.png" alt="Black Mercante Studios" height={30} width={124} style={{ height: 30, width: "auto" }} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 300 }}>
          <div className="relative" onMouseEnter={() => setShopDropdownOpen(true)} onMouseLeave={() => setShopDropdownOpen(false)}>
            <Link href="/?season=all" className="flex items-center gap-1">
              Shop <ChevronDown size={12} />
            </Link>
            {shopDropdownOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: COLORS.panel, border: `1px solid ${COLORS.line}`, minWidth: 180, paddingTop: 8, paddingBottom: 8 }}>
                <Link href="/?season=all" className="block w-full text-left px-4 py-2" style={{ color: COLORS.white }}>
                  All Products
                </Link>
                {SEASONS.map((s) => (
                  <Link key={s.id} href={`/?season=${s.id}`} className="block w-full text-left px-4 py-2" style={{ color: COLORS.white }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/lookbook" style={{ color: COLORS.white }}>
            Lookbook
          </Link>
          <Link href="/about" style={{ color: COLORS.white }}>
            About
          </Link>
        </nav>

        <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2" aria-label="Open cart">
          <ShoppingBag size={19} />
          <span className="hidden md:inline" style={{ fontSize: 12 }}>
            ({cartCount})
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-5 pb-5 gap-4"
          style={{ fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", borderTop: `1px solid ${COLORS.line}`, paddingTop: 16 }}
        >
          <Link href="/?season=all" onClick={() => setMenuOpen(false)}>
            All Products
          </Link>
          {SEASONS.map((s) => (
            <Link key={s.id} href={`/?season=${s.id}`} onClick={() => setMenuOpen(false)}>
              {s.label}
            </Link>
          ))}
          <Link href="/lookbook" onClick={() => setMenuOpen(false)} style={{ color: COLORS.white }}>
            Lookbook
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: COLORS.white }}>
            About
          </Link>
        </div>
      )}
    </header>
  );
}
