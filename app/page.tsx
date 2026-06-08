import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ChevronDown, Home as HomeIcon, Building, ClipboardList } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import GoldDivider from "@/components/GoldDivider";
import ServiceCard from "@/components/ServiceCard";
import { SITE } from "@/lib/site-data";

const establishDate = new Date(2025, 2, 14); // March 14, 2025
const now = new Date();
const yearsExp =
  now.getFullYear() -
  establishDate.getFullYear() -
  (now < new Date(now.getFullYear(), 2, 14) ? 1 : 0);

const stats = [
  { value: 4, suffix: "+", ja: "多言語対応", en: "Languages" },
  { value: yearsExp, suffix: "年+", ja: "業界経験", en: "Years Exp." },
  { value: 98, suffix: "%", ja: "顧客満足度", en: "Satisfaction" },
  { value: 12, suffix: "区", ja: "対応エリア", en: "Districts" },
];

const services = [
  {
    Icon: HomeIcon,
    titleJa: "売買仲介",
    titleEn: "Buy & Sell",
    description: "東京・首都圏の住宅・商業物件の売買を全面サポート。",
  },
  {
    Icon: Building,
    titleJa: "賃貸仲介",
    titleEn: "Rental",
    description: "短期・長期賃貸、外国人対応、多言語サービス。",
  },
  {
    Icon: ClipboardList,
    titleJa: "コンサルティング",
    titleEn: "Consulting",
    description: "不動産投資・資産運用の専門アドバイス。",
  },
];

function SectionHeading({ ja, en }: { ja: string; en: string }) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-gold-primary">{en}</p>
      <h2 className="font-serif-jp mt-2 text-3xl font-light text-text-primary sm:text-4xl">
        {ja}
      </h2>
      <GoldDivider className="mx-auto max-w-xs" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-b from-bg-black via-bg-dark to-bg-black"
        />
        {/* Tokyo skyline SVG silhouette */}
        <svg
          aria-hidden
          className="absolute bottom-0 left-0 w-full opacity-[0.15]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <g fill="none" stroke="#C9A84C" strokeWidth="1.5">
            <rect x="80" y="160" width="60" height="160" />
            <rect x="160" y="100" width="48" height="220" />
            <rect x="230" y="190" width="70" height="130" />
            <rect x="330" y="60" width="40" height="260" />
            <rect x="390" y="140" width="64" height="180" />
            <rect x="480" y="200" width="56" height="120" />
            <rect x="560" y="90" width="44" height="230" />
            <rect x="630" y="170" width="72" height="150" />
            <rect x="730" y="40" width="38" height="280" />
            <rect x="790" y="150" width="60" height="170" />
            <rect x="880" y="110" width="50" height="210" />
            <rect x="960" y="190" width="68" height="130" />
            <rect x="1050" y="80" width="42" height="240" />
            <rect x="1120" y="160" width="62" height="160" />
            <rect x="1210" y="120" width="48" height="200" />
            <rect x="1290" y="200" width="70" height="120" />
          </g>
        </svg>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.5em] text-gold-primary">
              プレミアム不動産
            </p>
            <h1 className="font-display mt-6 text-5xl font-light leading-[1.1] text-text-primary sm:text-7xl">
              <span className="font-serif-jp block">東京の高級不動産、</span>
              <span className="font-serif-jp block">あなたの理想の住まいへ。</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm text-text-secondary sm:text-base">
              Luxury Real Estate in Tokyo &amp; Japan — Buying, Selling, Renting
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/information"
                style={{ backgroundImage: "var(--gold-gradient)" }}
                className="group flex items-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium text-[#0a0a0a] transition-transform duration-200 hover:scale-[1.03]"
              >
                オフィスを見る / View Office
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm border border-gold-primary px-8 py-3.5 text-sm text-gold-primary transition-colors hover:bg-gold-primary/10"
              >
                お問い合わせ / Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-primary">
          <ChevronDown className="animate-chevron h-7 w-7" aria-hidden />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border-gold bg-bg-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.en} className="text-center">
              <p className="font-display text-4xl text-gold-primary sm:text-5xl">
                <StatCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="font-serif-jp mt-2 text-sm text-text-primary">{s.ja}</p>
              <p className="text-xs uppercase tracking-widest text-text-muted">
                {s.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeading ja="サービス案内" en="Our Services" />
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.titleEn} delay={i * 0.08}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <ScrollReveal className="relative flex items-center justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-sm border border-border-gold bg-bg-card sm:h-80 sm:w-80">
            <span className="gold-text font-display text-9xl">AS</span>
            <div
              aria-hidden
              className="absolute inset-3 border border-border-gold"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-primary">
            Message from CEO
          </p>
          <h2 className="font-serif-jp mt-2 text-3xl font-light text-text-primary">
            代表挨拶
          </h2>
          <GoldDivider className="max-w-xs" />
          <p className="font-serif-jp leading-loose text-text-secondary">
            株式会社ASは、お客様一人ひとりの夢と生活を最優先に考える不動産会社です。
            <br />
            <br />
            「理想の住まいとの出会い」をサポートするため、東京を中心に日本全国の優良物件を厳選してご提案します。
          </p>
          <p className="font-serif-jp mt-6 text-sm text-text-primary">
            {SITE.nameJa}
            <br />
            代表取締役社長 {SITE.ceo}
          </p>
        </ScrollReveal>
      </section>

      {/* Gallery Preview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <ScrollReveal>
          <SectionHeading ja="ギャラリー" en="Gallery" />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "WhatsApp Image 2026-05-29 at 3.34.28 PM (1).jpeg",
            "WhatsApp Image 2026-05-29 at 3.34.29 PM (2).jpeg",
            "WhatsApp Image 2026-05-29 at 3.34.30 PM (1).jpeg",
            "WhatsApp Image 2026-05-29 at 3.34.30 PM (2).jpeg",
          ].map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-sm border border-border-gold">
                <Image
                  src={`/imgs/${encodeURIComponent(src)}`}
                  alt={`Gallery preview ${i + 1}`}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/information"
            className="inline-flex items-center gap-1 text-sm text-gold-primary transition-colors hover:text-gold-light"
          >
            すべての写真を見る / View All Photos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <ScrollReveal className="rounded-sm border border-border-gold bg-bg-card p-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-primary">
            Contact
          </p>
          <h2 className="font-display mt-3 text-3xl text-text-primary sm:text-4xl">
            Ready to Find Your Dream Property?
          </h2>
          <p className="font-serif-jp mt-2 text-text-secondary">お問い合わせ</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              style={{ backgroundImage: "var(--gold-gradient)" }}
              className="group flex items-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium text-[#0a0a0a] transition-transform duration-200 hover:scale-[1.03]"
            >
              お問い合わせフォームへ / Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${SITE.telIntl}`}
              className="flex items-center gap-2 text-lg text-gold-primary"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {SITE.tel}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
