"use client";

import { X, Plus, Minus } from "lucide-react";
import { COLORS, display } from "@/lib/theme";
import { useCart } from "@/context/CartContext";
import ProductArt from "./ProductArt";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, changeQty, cartCount, cartTotal } = useCart();

  if (!cartOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.7)" }} onClick={() => setCartOpen(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(400px, 100%)",
          background: COLORS.panel,
          display: "flex",
          flexDirection: "column",
          borderLeft: `1px solid ${COLORS.line}`,
        }}
      >
        <div className="flex items-center justify-between px-5" style={{ height: 64, borderBottom: `1px solid ${COLORS.line}` }}>
          <div style={{ ...display, fontSize: 14, fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: COLORS.white }}>
            Bag ({cartCount})
          </div>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" style={{ color: COLORS.white }}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <p style={{ color: COLORS.dim, fontSize: 13.5, marginTop: 20 }}>Your bag is empty. Add something from Season 03.</p>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3 py-4" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
                <div style={{ width: 64, height: 80, flexShrink: 0 }}>
                  <ProductArt img={item.img} alt={item.name} />
                </div>
                <div className="flex-1 flex flex-col">
                  <div style={{ ...display, fontSize: 14, fontStyle: "italic", fontWeight: 400, color: COLORS.white }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.dim, marginTop: 2 }}>Size {item.size}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2" style={{ color: COLORS.white }}>
                      <button onClick={() => changeQty(item.id, item.size, -1)} aria-label="Decrease quantity">
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: 13 }}>{item.qty}</span>
                      <button onClick={() => changeQty(item.id, item.size, 1)} aria-label="Increase quantity">
                        <Plus size={13} />
                      </button>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.white }}>${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-5 py-5" style={{ borderTop: `1px solid ${COLORS.line}` }}>
            <div className="flex justify-between mb-4" style={{ fontSize: 14, fontWeight: 700, color: COLORS.white }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button
              style={{
                width: "100%",
                background: COLORS.white,
                color: COLORS.black,
                padding: "15px 0",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              Checkout
            </button>
            <p style={{ fontSize: 11, color: COLORS.dim, marginTop: 10, textAlign: "center" }}>
              Payment processing connects here once you're ready to go live.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
