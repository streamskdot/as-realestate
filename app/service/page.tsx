import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Home,
  Sofa,
  TrendingUp,
  Languages,
  FileText,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "サービス案内 | 不動産売買・賃貸・コンサルティング",
  description:
    "外国人専門の不動産仲介・シェアハウス管理・多言語コンサルティングサービス。Real estate services in Tokyo: buying, renting, consulting — multilingual support.",
};

const serviceList = [
  { Icon: Handshake, text: "外国人専門の不動産売買仲介" },
  { Icon: Home, text: "外国人専門のシェアハウス仲介・管理" },
  { Icon: Sofa, text: "家具・家電のレンタル・販売" },
  { Icon: TrendingUp, text: "不動産投資コンサルティング" },
  { Icon: Languages, text: "多言語サポート事業（翻訳・通訳）" },
  { Icon: FileText, text: "ビザ・法務関連書類サポート" },
];

const subPages = [
  {
    href: "/service/flow",
    title: "サービスの流れ",
    desc: "お問い合わせから入居まで",
  },
  {
    href: "/service/faq",
    title: "よくあるご質問",
    desc: "よくいただくご質問",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        titleJa="サービス案内"
        titleEn="Our Services"
        crumbs={[{ label: "HOME", href: "/" }, { label: "サービス案内" }]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_300px]">
        <div className="space-y-14">
          {/* Intro */}
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-primary">
              Multilingual Real Estate Consulting
            </p>
            <h2 className="font-serif-jp mt-2 text-2xl font-light text-text-primary sm:text-3xl">
              多言語 × 不動産コンサルティング
            </h2>
            <p className="font-serif-jp mt-5 leading-loose text-text-secondary">
              株式会社ASは、日本語・英語・ネパール語・ヒンドゥー語をはじめ、複数言語に対応したスタッフが常駐しています。外国籍のお客様も安心してご相談いただけます。
            </p>
          </ScrollReveal>

          {/* All In One Solution */}
          <ScrollReveal>
            <div
              className="rounded-sm border border-gold-primary bg-bg-card p-8 text-center"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <p className="gold-text font-display text-3xl">
                「All In One Solution」
              </p>
              <p className="font-serif-jp mt-4 leading-loose text-text-secondary">
                物件探しから契約・入居後のサポートまで、
                <br />
                すべてワンストップで対応いたします。
              </p>
            </div>
          </ScrollReveal>

          {/* Service list */}
          <ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceList.map(({ Icon, text }, i) => (
                <div
                  key={i}
                  className="lux-card flex items-center gap-4 rounded-sm p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border-gold text-gold-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-serif-jp text-sm text-text-primary">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Sub-page links */}
          <ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {subPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="lux-card group flex items-center justify-between rounded-sm p-6"
                >
                  <span>
                    <span className="font-serif-jp block text-lg text-text-primary">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-xs text-text-secondary">
                      {p.desc}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-gold-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ServiceSidebar />
      </div>
    </>
  );
}
