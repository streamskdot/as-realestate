import type { Metadata } from "next";
import Image from "next/image";
import { assetPath } from "@/lib/site-data";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "オフィスギャラリー | AS Real Estate Gallery",
  description:
    "株式会社ASのオフィス・物件・活動のギャラリー。Glimpses of our office, properties and activities.",
};

const images = [
  "WhatsApp Image 2026-05-29 at 3.34.28 PM (1).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.28 PM.jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.29 PM (1).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.29 PM (2).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.29 PM (3).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.29 PM (4).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.29 PM.jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.30 PM (1).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.30 PM (2).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.30 PM (3).jpeg",
  "WhatsApp Image 2026-05-29 at 3.34.30 PM.jpeg",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        titleJa="ギャラリー"
        titleEn="Gallery"
        crumbs={[{ label: "HOME", href: "/" }, { label: "ギャラリー" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gold-primary">
            Our Office &amp; Activities
          </p>
          <h2 className="font-serif-jp mt-2 text-center text-3xl font-light text-text-primary sm:text-4xl">
            オフィスと活動の写真
          </h2>
        </ScrollReveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.06}>
              <div className="group relative mb-5 overflow-hidden rounded-sm border border-border-gold bg-bg-card">
                <Image
                  src={assetPath(`/imgs/${encodeURIComponent(src)}`)}
                  alt={`Gallery image ${i + 1}`}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-gold-primary/40" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
