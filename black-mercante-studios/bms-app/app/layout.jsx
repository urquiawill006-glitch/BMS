import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { COLORS } from "@/lib/theme";

export const metadata = {
  title: "Black Mercante Studios",
  description: "Small-batch runs, heavyweight fabrics, built for the street.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: COLORS.black, color: COLORS.white, fontFamily: "'Inter', sans-serif" }}>
        <CartProvider>
          {/* Utility bar */}
          <div
            style={{ background: COLORS.black, color: COLORS.dim, fontSize: 11, letterSpacing: "0.12em", borderBottom: `1px solid ${COLORS.line}` }}
            className="text-center py-2"
          >
            SEASON 03 — NOW LIVE
          </div>

          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
