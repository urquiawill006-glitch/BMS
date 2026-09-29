"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(product, size) {
    if (product.soldOut) return;
    const chosenSize = size || product.sizes[0];
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === chosenSize);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.size === chosenSize ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, size: chosenSize, qty: 1, img: product.img },
      ];
    });
    setCartOpen(true);
  }

  function changeQty(id, size, delta) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id && i.size === size ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, cartOpen, setCartOpen, addToCart, changeQty, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
