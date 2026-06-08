"use client";

import Link from "next/link";
import Image from "next/image";
import { Share2, AtSign, MessageCircle, Globe, ArrowUp } from "lucide-react";
import { SITE } from "@/lib/site-data";

const quickLinks = [
  { label: "サービス案内", href: "/service" },
  { label: "会社案内", href: "/company" },
  { label: "更新情報", href: "/information" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

const socials = [
  { Icon: Share2, label: "Facebook", href: "#" },
  { Icon: AtSign, label: "Instagram", href: "#" },
  { Icon: MessageCircle, label: "LINE", href: "#" },
  { Icon: Globe, label: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-gold bg-bg-dark pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Address */}
        <div>
          <Image
            src="/logo.jpeg"
            alt="株式会社AS ロゴ"
            width={128}
            height={128}
            className="h-20 w-20 rounded-sm object-contain"
          />
          <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-text-secondary">
            <p>{SITE.postalCode}</p>
            <p>{SITE.address}</p>
            <p className="pt-2">TEL : {SITE.tel}</p>
          </address>
        </div>

        {/* Quick links */}
        <nav aria-label="フッターナビゲーション">
          <h2 className="font-display text-lg text-gold-primary">Sitemap</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-serif-jp text-text-secondary transition-colors hover:text-gold-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials + newsletter */}
        <div>
          <h2 className="font-display text-lg text-gold-primary">Follow Us</h2>
          <div className="mt-5 flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-gold text-text-secondary transition-colors hover:border-gold-primary hover:text-gold-primary"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>

          <h3 className="mt-8 font-serif-jp text-sm text-text-primary">
            ニュースレター登録
          </h3>
          <form
            className="mt-3 flex"
            onSubmit={(e) => e.preventDefault()}
            aria-label="ニュースレター登録"
          >
            <input
              type="email"
              required
              placeholder="メールアドレス"
              className="min-w-0 flex-1 rounded-l-sm border border-border-gold bg-bg-black px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-gold-primary"
            />
            <button
              type="submit"
              style={{ backgroundImage: "var(--gold-gradient)" }}
              className="rounded-r-sm px-4 text-sm font-medium text-[#0a0a0a]"
            >
              登録
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-xs tracking-wide text-text-muted">
            Copyright © {SITE.nameJa} All Rights Reserved.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1 text-xs tracking-widest text-gold-primary transition-colors hover:text-gold-light"
          >
            PAGE TOP <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
