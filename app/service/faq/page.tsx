import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "外国人の賃貸・初期費用・多言語対応・オンライン内覧など、株式会社ASによくいただくご質問にお答えします。",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        titleJa="よくあるご質問"
        titleEn="FAQ"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "サービス案内", href: "/service" },
          { label: "よくあるご質問" },
        ]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_300px]">
        <FaqAccordion />
        <ServiceSidebar />
      </div>
    </>
  );
}
