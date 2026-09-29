import { COLORS, display } from "@/lib/theme";

export const metadata = {
  title: "Terms of Service — Black Mercante Studios",
};

export default function TermsPage() {
  return (
    <section className="px-5 md:px-10 py-14 md:py-20" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15 }}>
        Terms of Service
      </div>
      <p style={{ marginTop: 24, fontSize: 13, color: COLORS.dim, fontStyle: "italic" }}>
        This is placeholder text — replace it with terms reviewed by a lawyer before taking real orders.
      </p>

      <div style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        <p>
          By using this site or placing an order with Black Mercante Studios, you agree to the following terms.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Orders &amp; Payment
        </h2>
        <p>
          All orders are subject to availability. We reserve the right to cancel or refuse any order. Prices are
          listed in US dollars and are subject to change without notice.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Intellectual Property
        </h2>
        <p>
          All artwork, graphics, logos, and designs on this site and on our products are the property of Black
          Mercante Studios and may not be reproduced without permission.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Limitation of Liability
        </h2>
        <p>
          Black Mercante Studios is not liable for any indirect, incidental, or consequential damages arising from
          the use of this site or our products.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Changes to These Terms
        </h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes means you accept the
          updated terms.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Contact
        </h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:blackmercantestudios@gmail.com" style={{ color: COLORS.white }}>
            blackmercantestudios@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
