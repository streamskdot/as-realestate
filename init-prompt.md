# Devin Prompt — 株式会社AS Real Estate Website (Next.js SSR)

---

## Project Overview

Build a **modern, luxury real estate website** for **株式会社AS (Kabushiki Kaisha AS)**, a Tokyo-based real estate company. The site must be fully **Server-Side Rendered (SSR) with Next.js** for maximum SEO performance — the goal is to rank on Google Japan for searches like "best real estate in Japan", "Tokyo real estate agency", "東京 不動産", "日本 不動産会社" etc.

The **structural DNA** of the site is inspired by the Fishtail株式会社 website (https://fishtail.jp), which uses:
- A bilingual label nav pattern (Japanese label above, English label below, e.g. ホーム / HOME)
- A clear 5-page structure: Home · Service · Company · Information · Contact
- A persistent bottom CTA bar with phone number and hours
- A sidebar menu on interior pages listing sub-pages
- Footer with address, social links, copyright

However, **aesthetically** this site must be completely different — a **luxury, modern, dark-gold real estate brand** matching the attached logo (gold metallic "AS" lettermark with building/home motif, text "株式会社AS" in spaced gold kanji beneath a curved rule).

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Rendering**: SSR (`export const dynamic = 'force-dynamic'` or `generateMetadata` per page) — NO static export, every page must be server-rendered for live SEO metadata
- **Styling**: Tailwind CSS + custom CSS variables for the gold/dark palette
- **Fonts**: Import via `next/font` — use **Cormorant Garamond** (display/headings) + **Noto Serif JP** (Japanese text) + **DM Sans** (body/UI)
- **Images**: `next/image` with proper `alt` tags (SEO critical)
- **Icons**: `lucide-react`
- **Animations**: Framer Motion (subtle scroll reveals, header fade, card hovers)
- **Language**: Bilingual — Japanese primary, English secondary (same pattern as Fishtail nav)

---

## SEO Requirements (CRITICAL)

Every page must have server-generated metadata via `generateMetadata()`:

```ts
// Example for Home page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '株式会社AS | 東京・日本最高の不動産会社 | Best Real Estate in Tokyo Japan',
    description: '株式会社ASは東京を拠点とする高級不動産会社です。住宅・商業物件の売買・賃貸をサポート。AS Real Estate — Tokyo\'s premier luxury property agency for buying, selling & renting homes across Japan.',
    keywords: ['real estate Japan', 'Tokyo real estate', '東京 不動産', '日本 不動産', 'buy property Tokyo', 'rent apartment Tokyo', '株式会社AS', 'luxury real estate Japan'],
    alternates: { canonical: 'https://as-realestate.jp' },
    openGraph: {
      title: '株式会社AS | 東京・日本最高の不動産会社',
      description: 'Premium real estate services in Tokyo & across Japan.',
      url: 'https://as-realestate.jp',
      siteName: '株式会社AS',
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    robots: { index: true, follow: true },
  }
}
```

Also add:
- `<link rel="alternate" hreflang="ja" href="...">` tags
- JSON-LD structured data (LocalBusiness schema) in `layout.tsx`
- Semantic HTML throughout (`<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<h1>`–`<h3>` hierarchy)
- Descriptive `alt` on every `<Image>`

---

## Design System

### Color Palette (CSS variables in `globals.css`)

```css
:root {
  --gold-primary:   #C9A84C;
  --gold-light:     #E8C97A;
  --gold-dark:      #8B6914;
  --gold-gradient:  linear-gradient(135deg, #C9A84C 0%, #E8C97A 40%, #C9A84C 70%, #8B6914 100%);
  --bg-black:       #0A0A0A;
  --bg-dark:        #111111;
  --bg-card:        #161616;
  --bg-card-hover:  #1E1E1E;
  --text-primary:   #F5F0E8;
  --text-secondary: #A89880;
  --text-muted:     #666666;
  --border-gold:    rgba(201, 168, 76, 0.25);
  --border-subtle:  rgba(255,255,255,0.06);
  --shadow-gold:    0 4px 40px rgba(201, 168, 76, 0.12);
}
```

### Typography

```css
/* Headings (EN display) */
font-family: 'Cormorant Garamond', serif;  /* weight 300, 400, 600 */

/* Japanese text */
font-family: 'Noto Serif JP', serif;        /* weight 300, 400 */

/* Body / UI */
font-family: 'DM Sans', sans-serif;         /* weight 300, 400, 500 */
```

### Logo Usage

The logo image file is located at `public/logo-as.png` (you must copy it there). Use it in the header as `<Image src="/logo-as.png" alt="株式会社AS ロゴ" width={160} height={80} />`. On dark backgrounds the white-space disappears — the gold logo reads perfectly.

---

## Site Architecture

```
/                     → Home (ホーム / HOME)
/service              → Service (サービス案内 / Service)
  /service/flow       → Service Flow (サービスの流れ)
  /service/faq        → FAQ (よくあるご質問)
/company              → Company (会社案内 / Company)
  /company/outline    → Company Profile (会社概要)
/information          → News & Updates (更新情報 / Information)
/contact              → Contact (お問い合わせ / Contact)
/privacy              → Privacy Policy (プライバシーポリシー)
```

---

## Component Architecture

```
src/
  app/
    layout.tsx              ← Root layout: fonts, metadata, JSON-LD, Header, Footer, CTABar
    page.tsx                ← Home
    service/
      page.tsx
      flow/page.tsx
      faq/page.tsx
    company/
      page.tsx
      outline/page.tsx
    information/page.tsx
    contact/page.tsx
    privacy/page.tsx
    globals.css
  components/
    Header.tsx              ← Sticky header with logo + bilingual nav
    Footer.tsx              ← Address, socials, sitemap links, copyright
    CTABar.tsx              ← Fixed bottom bar: phone + hours + contact button
    Breadcrumb.tsx          ← Hierarchical breadcrumb (SEO)
    PageHero.tsx            ← Interior page hero with title + breadcrumb
    PropertyCard.tsx        ← Real estate listing card
    ServiceCard.tsx         ← Service feature card
    NewsCard.tsx            ← Information/news post card
    ContactForm.tsx         ← SSR-compatible contact form
    ScrollReveal.tsx        ← Framer Motion wrapper for scroll animations
    GoldDivider.tsx         ← Decorative gold rule / diamond motif
    StatCounter.tsx         ← Animated number counter (properties, years, clients)
```

---

## Page-by-Page Specifications

---

### 1. Root `layout.tsx`

- Dark background (`bg-black`), gold accents
- Load fonts via `next/font/google`
- Inject JSON-LD LocalBusiness schema:

```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "株式会社AS",
  "alternateName": "Kabushiki Kaisha AS",
  "url": "https://as-realestate.jp",
  "logo": "https://as-realestate.jp/logo-as.png",
  "image": "https://as-realestate.jp/og-image.jpg",
  "description": "東京を拠点とした高級不動産会社。住宅・商業用不動産の売買・賃貸サービス。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "新宿区西新宿2丁目8番1号",
    "addressLocality": "新宿区",
    "addressRegion": "東京都",
    "postalCode": "160-0023",
    "addressCountry": "JP"
  },
  "telephone": "+81-3-6228-8800",
  "openingHours": "Mo-Fr 10:00-19:00",
  "priceRange": "¥¥¥",
  "areaServed": ["Tokyo", "Osaka", "Yokohama", "Kyoto", "Japan"]
}
```

- Render `<Header />`, `<main>{children}</main>`, `<CTABar />`, `<Footer />`

---

### 2. `Header.tsx`

**Structure (mirror Fishtail's pattern, luxury dark treatment):**

```
[LOGO]   ホーム  サービス案内  会社案内  更新情報  お問い合わせ
         HOME    Service      Company  Information  Contact
                  ↕ dropdown   ↕ dropdown
```

- Sticky with `backdrop-blur` + subtle gold bottom border on scroll
- Logo left, nav right
- Each nav item: small Japanese label above (Noto Serif JP, 10px, gold), larger English below (DM Sans, 13px, white)
- Active state: gold underline + gold text
- Hover: gold color transition 300ms
- Dropdowns for Service (サービスの流れ / よくあるご質問) and Company (会社概要)
- Mobile: hamburger → full-screen slide-in menu
- `<nav aria-label="メインナビゲーション">` for accessibility/SEO

---

### 3. `Footer.tsx`

**Mirror Fishtail structure, luxury styling:**

- Left column: Logo + address block:
  ```
  〒160-0023
  東京都新宿区西新宿2丁目8番1号
  新宿住友ビル28階
  TEL : 03-6228-8800
  FAX : 03-6228-8801
  ```
- Middle column: Quick links (Privacy Policy · Sitemap · Service · Company · Information · Contact)
- Right column: Social icons (Facebook, Instagram, LINE, X/Twitter) + newsletter signup input
- Bottom bar: `Copyright © 株式会社AS All Rights Reserved.` + "PAGE TOP ↑" link
- Gold top border rule
- Background: `#0D0D0D`

---

### 4. `CTABar.tsx`

Fixed bottom (z-50), mirrors Fishtail's CTA bar:

```
お気軽にお問い合わせください。  📞 03-6228-8800  受付時間 10:00-19:00 [土日・祝日除く]   [お問い合わせはこちら →]
```

- Dark background with gold left border accent
- Phone number in gold
- CTA button: gold gradient background, dark text, hover scales 1.02
- Hides on Contact page (`usePathname`)

---

### 5. Home Page (`/`)

#### Hero Section
- Full-viewport height
- Background: dark gradient overlaying a high-quality Tokyo skyline SVG pattern (geometric building silhouettes in very dark gold lines, `opacity: 0.15`) — NO external images, use CSS/SVG
- Centered content:
  - Eyebrow: `プレミアム不動産` (small caps, gold, letter-spacing 6px)
  - H1: `東京の高級不動産、`  
         `あなたの理想の住まいへ。` (Cormorant Garamond, 72px, white, line-height 1.1)
  - Subtext: `Luxury Real Estate in Tokyo & Japan — Buying, Selling, Renting` (DM Sans, 16px, muted)
  - Two CTAs: [物件を探す / Find Properties →] (gold filled) · [お問い合わせ / Contact Us] (outlined gold)
- Scroll indicator: animated gold chevron down

#### Stats Bar
Four numbers with animated count-up on scroll:
```
500+             15年             98%             12区
取扱物件数        業界経験          顧客満足度        対応エリア
Properties       Years Exp.       Satisfaction     Districts
```
Dark card row with gold number text.

#### Featured Properties Section
```
注目物件
Featured Properties
```
Grid of 6 `PropertyCard` components with dummy data:

| # | Name | Area | Price | Type | Beds |
|---|------|-------|-------|------|------|
| 1 | Shinjuku Towers Residence | 新宿区 | ¥85,000,000 | 分譲マンション | 3LDK |
| 2 | Minato Prestige Apartment | 港区 | ¥320,000/月 | 賃貸 | 2LDK |
| 3 | Shibuya Modern Penthouse | 渋谷区 | ¥210,000,000 | 高級マンション | 4LDK |
| 4 | Harajuku Boutique Studio | 原宿 | ¥185,000/月 | 賃貸 | 1K |
| 5 | Roppongi Hills Executive | 六本木 | ¥650,000/月 | 賃貸 | 3LDK |
| 6 | Setagaya Family Home | 世田谷区 | ¥125,000,000 | 一戸建て | 4SLDK |

Each `PropertyCard`:
- Dark card background, gold top-border on hover
- Top: colored tag (賃貸=blue, 分譲=gold, 高級=purple)
- Property icon/illustration placeholder (gradient rectangle with building icon)
- Name (Cormorant Garamond, 20px)
- Area + type (small gold text)
- Price (large, gold, bold)
- Bed/bath/size specs in a row
- "詳細を見る / View Details →" link in gold

#### Services Highlights Section
```
サービス案内
Our Services
```
Three cards with icon + title + description:
- 🏠 **売買仲介 / Buy & Sell** — 東京・首都圏の住宅・商業物件の売買を全面サポート
- 🏢 **賃貸仲介 / Rental** — 短期・長期賃貸、外国人対応、多言語サービス
- 📋 **コンサルティング / Consulting** — 不動産投資・資産運用の専門アドバイス

Each with a "続きを読む →" link in gold.

#### CEO Message Section (mirrors Fishtail's company greeting)
Two-column: left = decorative gold geometric pattern / monogram, right = text:
```
代表挨拶
Message from CEO

株式会社ASは、お客様一人ひとりの夢と生活を
最優先に考える不動産会社です。

「理想の住まいとの出会い」をサポートするため、
東京を中心に日本全国の優良物件を厳選してご提案します。

株式会社AS
代表取締役社長 ARYAL SANJAY
```

#### News Section (latest 3 from Information)
```
更新情報
Latest News
```
3 `NewsCard` components with dummy posts (see Information page data).
"すべての記事を見る / View All News →" gold link.

#### Contact CTA Section
Full-width dark section with gold border:
```
お問い合わせ
Ready to Find Your Dream Property?

[お問い合わせフォームへ / Contact Us →]   📞 03-6228-8800
```

---

### 6. Service Page (`/service`)

#### PageHero
- Title: `サービス案内` / `Our Services`
- Breadcrumb: HOME > サービス案内

#### Content (mirror Fishtail service page structure)

**Intro block:**
```
多言語 × 不動産コンサルティング
Multilingual Real Estate Consulting

株式会社ASは、日本語・英語・ネパール語・ヒンドゥー語をはじめ、
複数言語に対応したスタッフが常駐しています。
外国籍のお客様も安心してご相談いただけます。
```

**"All In One Solution" block** — bold gold highlight box:
```
「All In One Solution」
物件探しから契約・入居後のサポートまで、
すべてワンストップで対応いたします。
```

**Service List** (icon grid, 6 items):
1. 外国人専門の不動産売買仲介
2. 外国人専門のシェアハウス仲介・管理
3. 家具・家電のレンタル・販売
4. 不動産投資コンサルティング
5. 多言語サポート事業（翻訳・通訳）
6. ビザ・法務関連書類サポート

**Sub-page link cards** (mirrors Fishtail's):
- [サービスの流れ] — お問い合わせから入居まで
- [よくあるご質問] — よくいただくご質問

**Sidebar** (right rail on desktop):
- サービス案内
  - サービスの流れ
  - よくあるご質問
- お問い合わせ (gold button)

---

### 7. Service Flow Page (`/service/flow`)

Step-by-step timeline (vertical, gold connector line):

```
STEP 1  お問い合わせ / Inquiry
        フォームまたはお電話でお気軽にご連絡ください。

STEP 2  ヒアリング / Consultation
        ご希望・ご予算・エリアなどをお伺いします。

STEP 3  物件のご提案 / Property Proposal
        条件に合った物件を厳選してご紹介します。

STEP 4  内覧 / Property Viewing
        実際に物件をご覧いただきます。

STEP 5  契約手続き / Contract
        各種書類の手続きをサポートします。

STEP 6  引渡し・入居 / Move-in
        鍵のお渡しから入居後のサポートまで。
```

---

### 8. FAQ Page (`/service/faq`)

Accordion-style FAQ with 8 questions:

1. **外国人でも物件を借りられますか？** — はい、可能です。保証人・保証会社のサポートもご案内します。
2. **日本語が話せなくても大丈夫ですか？** — 英語・ネパール語・ヒンドゥー語など多言語スタッフが対応します。
3. **初期費用の目安は？** — 賃貸の場合、家賃の3〜5ヶ月分が一般的です。
4. **どのエリアの物件を取り扱っていますか？** — 東京都内全域および首都圏を中心に対応しています。
5. **オンライン内覧は可能ですか？** — はい、ビデオ通話による内覧にも対応しています。
6. **投資物件の相談もできますか？** — はい、不動産投資コンサルティングも承っています。
7. **ペット可の物件はありますか？** — ペット相談可の物件も多数ございます。お気軽にご相談ください。
8. **契約から入居まで何日かかりますか？** — 通常2〜4週間程度です。状況によって異なります。

---

### 9. Company Page (`/company`)

#### Greeting Section (mirror Fishtail)

Left: Decorative element (gold monogram "AS" large, watermark style)
Right:
```
代表挨拶
Greeting from the CEO

株式会社ASは「お客様第一主義」を企業理念として掲げています。
不動産という人生の大切な決断に、誠実かつ丁寧に向き合うことを
創業以来変わらぬ使命としています。

東京を拠点に、外国籍のお客様を含む多様なお客様に寄り添い、
理想の住まいと出会うお手伝いをしてまいります。

株式会社AS
代表取締役社長 ARYAL SANJAY
```

Sub-page link card: [会社概要 / Company Profile]

---

### 10. Company Outline Page (`/company/outline`)

Table layout (mirrors typical Japanese company 会社概要):

| 項目 | 内容 |
|------|------|
| 会社名 | 株式会社AS |
| 英語社名 | Kabushiki Kaisha AS |
| 設立 | 2018年4月1日 |
| 代表取締役 | ARYAL SANJAY |
| 資本金 | 1,000万円 |
| 所在地 | 〒160-0023 東京都新宿区西新宿2丁目8番1号 新宿住友ビル28階 |
| TEL | 03-6228-8800 |
| FAX | 03-6228-8801 |
| 営業時間 | 10:00〜19:00（土日・祝日除く） |
| 事業内容 | 不動産売買仲介・賃貸仲介・シェアハウス管理・コンサルティング |
| 宅地建物取引業免許 | 東京都知事（1）第000001号 |
| 加盟団体 | 公益社団法人 東京都宅地建物取引業協会 |

Styled as alternating dark/darker rows, gold left border on header cells.

---

### 11. Information Page (`/information`)

News grid — 6 dummy posts:

```
1. 2026年5月15日 — 渋谷区の新築マンション「SHIBUYA PRIME」の取り扱いを開始しました。
2. 2026年4月28日 — 春の不動産フェア開催のお知らせ（4月29日〜5月5日）
3. 2026年03月10日 — 外国人向け無料相談会を毎月第一土曜日に開催します。
4. 2026年02月20日 — ホームページを全面リニューアルしました。
5. 2025年12月25日 — 年末年始休業のお知らせ（12月28日〜1月5日）
6. 2025年11月01日 — 不動産投資セミナーを開催しました。ご参加ありがとうございました。
```

Each `NewsCard`:
- Date (gold, small)
- Category tag (お知らせ / イベント / 物件情報)
- Title (Noto Serif JP)
- "続きを読む →"

Sidebar: Category list (お知らせ / イベント / 物件情報), Archive by year/month.

---

### 12. Contact Page (`/contact`)

Intro text:
```
お問い合わせ
Contact Us

弊社に興味をお持ちいただきありがとうございます。
いただいたお問い合わせは、プライバシーポリシーに沿って
管理し、お客様の同意なく第三者に開示することはございません。
```

**Contact Form** (SSR-compatible, `<form>` with POST action or server action):

Fields:
- お名前（必須） / Full Name *
- ふりがな（必須） / Furigana *
- メールアドレス（必須） / Email *
- 御社名 / Company Name
- 電話番号（必須） / Phone *
- お問い合わせ内容（必須） / Message * (textarea)
- 確認チェック: 「上記内容に同意して送信する」

Submit button: gold gradient, full-width on mobile.

Also show:
```
📍 〒160-0023 東京都新宿区西新宿2丁目8番1号 新宿住友ビル28階
📞 03-6228-8800
🕐 受付時間 10:00〜19:00（土日・祝日除く）
```

---

## Design Implementation Details

### Gold Gradient Text (headings)
```css
.gold-text {
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Gold Divider Component
```jsx
// GoldDivider.tsx
<div className="flex items-center gap-4 my-8">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-primary opacity-40" />
  <div className="w-2 h-2 rotate-45 bg-gold-primary" />
  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-primary opacity-40" />
</div>
```

### Card Hover Effect
```css
.property-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border: 1px solid var(--border-subtle);
}
.property-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-gold);
  border-color: var(--gold-primary);
}
```

### Scroll Reveal (Framer Motion)
```jsx
// ScrollReveal.tsx
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
// Use whileInView with viewport: { once: true, margin: '-100px' }
```

### PageHero Pattern
```
[Full-width dark section, 280px height]
[Thin gold line top]
[Eyebrow EN label, tiny, gold, letter-spacing]
[H1: Japanese page title, Cormorant 56px, white]
[GoldDivider]
[Breadcrumb: HOME > Current Page (gold separator)]
[Geometric dot pattern overlay on right half, very subtle]
```

---

## SEO Page-Specific Metadata

### `/` (Home)
- title: `株式会社AS | 東京・日本の高級不動産 | Luxury Real Estate Tokyo Japan`
- description: `株式会社ASは東京を拠点とする不動産会社。住宅・マンション・商業物件の売買・賃貸を多言語でサポート。Best real estate agency in Tokyo Japan — buying, selling & renting.`

### `/service`
- title: `サービス案内 | 不動産売買・賃貸・コンサルティング | 株式会社AS`
- description: `外国人専門の不動産仲介・シェアハウス管理・多言語コンサルティングサービス。Real estate services in Tokyo: buying, renting, consulting — multilingual support.`

### `/company`
- title: `会社案内 | 株式会社ASについて | Tokyo Real Estate Company`
- description: `株式会社ASの会社概要・代表挨拶。東京の不動産会社として、外国籍のお客様を含む多様なお客様をサポートしています。`

### `/information`
- title: `更新情報・お知らせ | 株式会社AS Real Estate News`
- description: `株式会社ASからの最新情報、物件情報、イベント・セミナーのお知らせ。`

### `/contact`
- title: `お問い合わせ | 株式会社AS | Contact AS Real Estate Tokyo`
- description: `株式会社ASへのお問い合わせはこちら。不動産のご相談、物件のご紹介など、お気軽にご連絡ください。Contact our Tokyo real estate team today.`

---

## File & Folder Structure to Create

```
/
├── public/
│   └── logo-as.png               ← Copy from uploads
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── service/
│   │   │   ├── page.tsx
│   │   │   ├── flow/page.tsx
│   │   │   └── faq/page.tsx
│   │   ├── company/
│   │   │   ├── page.tsx
│   │   │   └── outline/page.tsx
│   │   ├── information/page.tsx
│   │   ├── contact/page.tsx
│   │   └── privacy/page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── CTABar.tsx
│       ├── Breadcrumb.tsx
│       ├── PageHero.tsx
│       ├── PropertyCard.tsx
│       ├── ServiceCard.tsx
│       ├── NewsCard.tsx
│       ├── ContactForm.tsx
│       ├── ScrollReveal.tsx
│       ├── GoldDivider.tsx
│       └── StatCounter.tsx
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Additional Notes for Devin

1. **No static export** — use `next.config.js` with no `output: 'export'` so all pages are SSR
2. **`generateMetadata`** on every `page.tsx` — unique title/description per page
3. **Sitemap** — generate `/sitemap.xml` using `app/sitemap.ts` with all page URLs
4. **robots.txt** — generate `app/robots.ts` allowing all crawlers
5. **`<html lang="ja">`** in layout — critical for Japanese SEO
6. The logo file from uploads (`WhatsApp_Image_2026-05-29_at_2_34_58_PM.jpeg`) should be copied to `public/logo-as.png` and used throughout
7. All dummy phone numbers, addresses, and license numbers are fictional — label them clearly in code comments
8. Use `"use client"` directive only for interactive components (Header mobile menu, FAQ accordion, Contact form, CTABar pathname check, StatCounter animation) — keep all pages as Server Components
9. Framer Motion: import from `'framer-motion'` — install if not present (`npm install framer-motion`)
10. The aesthetic goal: when someone opens this site, they should feel like they are visiting a **premium Tokyo real estate brand** — dark, gold, refined, trustworthy

---

*Prompt prepared for Devin Desktop (Claude Opus 4.6) — 株式会社AS Real Estate Next.js SSR Website*
