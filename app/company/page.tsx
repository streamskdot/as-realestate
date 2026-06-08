import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GoldDivider from "@/components/GoldDivider";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "会社案内 | 株式会社ASについて",
  description:
    "株式会社ASの会社概要・代表挨拶。東京の不動産会社として、外国籍のお客様を含む多様なお客様をサポートしています。",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        titleJa="会社案内"
        titleEn="Company"
        crumbs={[{ label: "HOME", href: "/" }, { label: "会社案内" }]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <ScrollReveal className="flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-sm border border-border-gold bg-bg-card">
              <span className="gold-text font-display text-[10rem] leading-none opacity-90">
                AS
              </span>
              <div aria-hidden className="absolute inset-4 border border-border-gold" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-primary">
              Greeting from the CEO
            </p>
            <h2 className="font-serif-jp mt-2 text-3xl font-light text-text-primary">
              代表挨拶
            </h2>
            <GoldDivider className="max-w-xs" />
            <p className="font-serif-jp leading-loose text-text-secondary">
              株式会社ASは「お客様第一主義」を企業理念として掲げています。不動産という人生の大切な決断に、誠実かつ丁寧に向き合うことを創業以来変わらぬ使命としています。
              <br />
              <br />
              東京を拠点に、外国籍のお客様を含む多様なお客様に寄り添い、理想の住まいと出会うお手伝いをしてまいります。
            </p>
            <p className="font-serif-jp mt-6 text-sm text-text-primary">
              {SITE.nameJa}
              <br />
              代表取締役社長 {SITE.ceo}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16">
          <Link
            href="/company/outline"
            className="lux-card group flex items-center justify-between rounded-sm p-6 sm:max-w-md"
          >
            <span>
              <span className="font-serif-jp block text-lg text-text-primary">
                会社概要
              </span>
              <span className="mt-1 block text-xs text-text-secondary">
                Company Profile
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-gold-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </>
  );
}
