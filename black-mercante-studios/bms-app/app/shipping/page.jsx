import { COLORS, display } from "@/lib/theme";
import { SHIPPING_TEXT } from "@/lib/products";

export const metadata = {
  title: "Shipping — Black Mercante Studios",
};

export default function ShippingPage() {
  return (
    <section className="px-5 md:px-10 py-14 md:py-20" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15 }}>
        Shipping
      </div>
      <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>{SHIPPING_TEXT}</p>
      <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        Orders are made in small batches and typically ship within a few business days. You'll get a confirmation
        email with tracking information as soon as your order ships.
      </p>
    </section>
  );
}
