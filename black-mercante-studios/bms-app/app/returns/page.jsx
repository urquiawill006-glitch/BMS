import { COLORS, display } from "@/lib/theme";
import { SHIPPING_TEXT } from "@/lib/products";

export const metadata = {
  title: "Returns & Refunds — Black Mercante Studios",
};

export default function ReturnsPage() {
  return (
    <section className="px-5 md:px-10 py-14 md:py-20" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15 }}>
        Returns &amp; Refunds
      </div>
      <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>{SHIPPING_TEXT}</p>
      <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        To start a return, email us at{" "}
        <a href="mailto:blackmercantestudios@gmail.com" style={{ color: COLORS.white }}>
          blackmercantestudios@gmail.com
        </a>{" "}
        with your order number. Refunds are issued to the original payment method once the return is received and
        inspected.
      </p>
    </section>
  );
}
