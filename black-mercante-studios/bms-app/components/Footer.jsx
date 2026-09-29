import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/lib/theme";

const linkStyle = { color: COLORS.dim };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: COLORS.black }}>
      <div className="flex justify-center py-16 md:py-20">
        <Image src="/images/logo-black.png" alt="Black Mercante Studios" height={48} width={188} style={{ height: 48, width: "auto" }} />
      </div>
      <div style={{ borderTop: `1px solid ${COLORS.line}` }}>
        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-3 px-5 md:px-10 py-6"
          style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.dim }}
        >
          <span>Made in Baltimore</span>
          <a href="mailto:blackmercantestudios@gmail.com" style={linkStyle}>
            blackmercantestudios@gmail.com
          </a>
          <Link href="/about" style={linkStyle}>
            About
          </Link>
          <Link href="/returns" style={linkStyle}>
            Returns &amp; Refunds
          </Link>
          <Link href="/shipping" style={linkStyle}>
            Shipping
          </Link>
          <Link href="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={linkStyle}>
            Terms of Service
          </Link>
          <span className="ml-auto flex items-center gap-2" style={{ whiteSpace: "nowrap" }}>
            © {year} Black Mercante Studios —{" "}
            <a href="https://www.instagram.com/blackmercantestudios" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Instagram
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

