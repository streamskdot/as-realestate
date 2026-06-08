import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";
import { SITE } from "@/lib/site-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: ["300", "400"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "株式会社AS | 東京・日本の高級不動産 | Luxury Real Estate Tokyo Japan",
    template: "%s | 株式会社AS",
  },
  description:
    "株式会社ASは東京を拠点とする不動産会社。住宅・マンション・商業物件の売買・賃貸を多言語でサポート。Best real estate agency in Tokyo Japan — buying, selling & renting.",
  keywords: [
    "real estate Japan",
    "Tokyo real estate",
    "東京 不動産",
    "日本 不動産",
    "buy property Tokyo",
    "rent apartment Tokyo",
    "株式会社AS",
    "luxury real estate Japan",
  ],
  alternates: {
    canonical: SITE.url,
    languages: { ja: SITE.url },
  },
  openGraph: {
    title: "株式会社AS | 東京・日本最高の不動産会社",
    description: "Premium real estate services in Tokyo & across Japan.",
    url: SITE.url,
    siteName: SITE.nameJa,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "株式会社AS",
  alternateName: "Kabushiki Kaisha AS",
  url: SITE.url,
  logo: `${SITE.url}/logo.jpeg`,
  image: `${SITE.url}/og-image.jpg`,
  description:
    "東京を拠点とした高級不動産会社。住宅・商業用不動産の売買・賃貸サービス。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "新宿区西新宿2丁目8番1号",
    addressLocality: "新宿区",
    addressRegion: "東京都",
    postalCode: "160-0023",
    addressCountry: "JP",
  },
  telephone: SITE.telIntl,
  openingHours: "Mo-Fr 10:00-19:00",
  priceRange: "¥¥¥",
  areaServed: ["Tokyo", "Osaka", "Yokohama", "Kyoto", "Japan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      id="top"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <head>
        {/* Apply persisted theme before paint to avoid flash. Defaults to light. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <CTABar />
        <Footer />
      </body>
    </html>
  );
}
