import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICE_FLOW } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "サービスの流れ",
  description:
    "お問い合わせから内覧・契約・入居まで、株式会社ASのサービスの流れをご紹介します。",
};

export default function ServiceFlowPage() {
  return (
    <>
      <PageHero
        titleJa="サービスの流れ"
        titleEn="Service Flow"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "サービス案内", href: "/service" },
          { label: "サービスの流れ" },
        ]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_300px]">
        <ol className="relative space-y-10 border-l border-border-gold pl-10">
          {SERVICE_FLOW.map((s) => (
            <ScrollReveal key={s.step}>
              <li className="relative">
                <span
                  className="absolute -left-[3.25rem] flex h-9 w-9 items-center justify-center rounded-full border border-gold-primary bg-bg-black font-display text-sm text-gold-primary"
                  aria-hidden
                >
                  {s.step}
                </span>
                <div className="lux-card rounded-sm p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-primary">
                    Step {s.step} — {s.titleEn}
                  </p>
                  <h3 className="font-serif-jp mt-2 text-xl text-text-primary">
                    {s.titleJa}
                  </h3>
                  <p className="font-serif-jp mt-3 text-sm leading-relaxed text-text-secondary">
                    {s.desc}
                  </p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <ServiceSidebar />
      </div>
    </>
  );
}
