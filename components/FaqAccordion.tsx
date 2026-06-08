"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-sm border border-border-gold bg-bg-card"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-serif-jp flex items-start gap-3 text-text-primary">
                <span className="font-display text-gold-primary">Q.</span>
                {faq.q}
              </span>
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-gold-primary" aria-hidden />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-gold-primary" aria-hidden />
              )}
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-serif-jp flex items-start gap-3 border-t border-border-subtle px-6 py-5 text-sm leading-relaxed text-text-secondary">
                  <span className="font-display text-gold-dark">A.</span>
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
