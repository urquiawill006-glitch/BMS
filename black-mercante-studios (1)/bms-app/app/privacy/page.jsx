import { COLORS, display } from "@/lib/theme";

export const metadata = {
  title: "Privacy Policy — Black Mercante Studios",
};

export default function PrivacyPage() {
  return (
    <section className="px-5 md:px-10 py-14 md:py-20" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ ...display, fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.15 }}>
        Privacy Policy
      </div>
      <p style={{ marginTop: 24, fontSize: 13, color: COLORS.dim, fontStyle: "italic" }}>
        This is placeholder text — replace it with a policy reviewed by a lawyer before taking real orders.
      </p>

      <div style={{ marginTop: 24, fontSize: 15, lineHeight: 1.8, color: COLORS.dim }}>
        <p>
          Black Mercante Studios ("we," "us," or "our") respects your privacy. This policy describes what
          information we collect when you visit or shop with us, and how we use it.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Information We Collect
        </h2>
        <p>
          When you place an order, we collect information such as your name, email address, shipping address, and
          payment details. When you browse our site, we may also collect basic device and usage information.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          How We Use It
        </h2>
        <p>
          We use this information to process and fulfill orders, communicate with you about your order, and improve
          our site and products. We do not sell your personal information to third parties.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Third-Party Services
        </h2>
        <p>
          We may use third-party services (such as a payment processor or shipping carrier) to help operate our
          store. These services only receive the information they need to perform their function.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Your Rights
        </h2>
        <p>
          You can contact us at any time to ask what information we have about you, or to request that it be
          corrected or deleted.
        </p>

        <h2 style={{ color: COLORS.white, fontSize: 15, fontWeight: 700, textTransform: "uppercase", marginTop: 32, marginBottom: 10 }}>
          Contact
        </h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href="mailto:blackmercantestudios@gmail.com" style={{ color: COLORS.white }}>
            blackmercantestudios@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
