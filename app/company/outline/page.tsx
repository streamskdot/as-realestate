import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY_OUTLINE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社ASの会社概要。設立・代表取締役・資本金・所在地・事業内容・宅地建物取引業免許など。",
};

export default function CompanyOutlinePage() {
  return (
    <>
      <PageHero
        titleJa="会社概要"
        titleEn="Company Profile"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "会社案内", href: "/company" },
          { label: "会社概要" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal>
          <table className="w-full border border-border-gold text-sm">
            <tbody>
              {COMPANY_OUTLINE.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-bg-card" : "bg-bg-dark"}
                >
                  <th
                    scope="row"
                    className="font-serif-jp w-1/3 border-b border-l-2 border-border-subtle border-l-gold-primary px-5 py-4 text-left align-top font-normal text-gold-primary"
                  >
                    {row.label}
                  </th>
                  <td className="font-serif-jp border-b border-border-subtle px-5 py-4 align-top leading-relaxed text-text-secondary whitespace-pre-line">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
      </div>
    </>
  );
}
