import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "お問い合わせ | Contact AS Real Estate Tokyo",
  description:
    "株式会社ASへのお問い合わせはこちら。不動産のご相談、物件のご紹介など、お気軽にご連絡ください。Contact our Tokyo real estate team today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        titleJa="お問い合わせ"
        titleEn="Contact Us"
        crumbs={[{ label: "HOME", href: "/" }, { label: "お問い合わせ" }]}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="font-serif-jp leading-loose text-text-secondary">
            弊社に興味をお持ちいただきありがとうございます。いただいたお問い合わせは、プライバシーポリシーに沿って管理し、お客様の同意なく第三者に開示することはございません。
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-sm border border-border-gold bg-bg-card p-6">
            <h2 className="font-display text-xl text-gold-primary">Office</h2>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-primary" aria-hidden />
                <span className="font-serif-jp leading-relaxed">
                  {SITE.postalCode} {SITE.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-primary" aria-hidden />
                <a href={`tel:${SITE.telIntl}`} className="text-gold-primary">
                  {SITE.tel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-primary" aria-hidden />
                <span className="font-serif-jp leading-relaxed">
                  受付時間 {SITE.hours}
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
