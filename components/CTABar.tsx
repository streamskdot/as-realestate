"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function CTABar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-l-4 border-gold-primary bg-bg-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3">
        <p className="hidden font-serif-jp text-sm text-text-secondary sm:block">
          お気軽にお問い合わせください。
        </p>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-4 sm:gap-6">
          <a
            href={`tel:${SITE.telIntl}`}
            className="flex items-center gap-2 text-gold-primary"
          >
            <Phone className="h-5 w-5" aria-hidden />
            <span className="text-lg font-medium tracking-wide">{SITE.tel}</span>
          </a>
          <span className="hidden text-xs text-text-muted md:block">
            受付時間 10:00-19:00［土日・祝日除く］
          </span>
          <Link
            href="/contact"
            style={{ backgroundImage: "var(--gold-gradient)" }}
            className="group flex items-center gap-1 rounded-sm px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-transform duration-200 hover:scale-[1.03]"
          >
            お問い合わせはこちら
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
