"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COLORS } from "@/lib/theme";

export function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderTop: `1px solid ${COLORS.line}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
        style={{ padding: "16px 0", background: "none", textAlign: "left" }}
      >
        <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: COLORS.white }}>
          {title}
        </span>
        <ChevronDown
          size={15}
          style={{ color: COLORS.dim, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}
        />
      </button>
      {open && <div style={{ paddingBottom: 18 }}>{children}</div>}
    </div>
  );
}

export default function ProductAccordion({ sections }) {
  return (
    <div className="mt-10" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
      {sections.map((s, i) => (
        <AccordionSection key={s.title} title={s.title} defaultOpen={i === 0}>
          {s.content}
        </AccordionSection>
      ))}
    </div>
  );
}
