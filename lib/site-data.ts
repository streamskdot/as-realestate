// 株式会社AS — shared site data.
// NOTE: All phone numbers, addresses, license numbers and listings below are
// FICTIONAL placeholder/dummy data for demonstration purposes only.

export const BASE_PATH = "/as-realestate";

export const SITE = {
  nameJa: "株式会社AS",
  nameEn: "Kabushiki Kaisha AS",
  url: "https://streamskdot.github.io/as-realestate",
  tel: "03-6205-5836",
  telIntl: "+81-3-6205-5836",
  fax: "",
  hours: "10:00〜19:00（土日・祝日除く）",
  postalCode: "〒160-0022",
  address: "東京都新宿区新宿7-27-16-103",
  ceo: "Thapa Ashok",
};

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}

export type NavItem = {
  labelJa: string;
  labelEn: string;
  href: string;
  children?: { labelJa: string; href: string }[];
};

export const NAV: NavItem[] = [
  { labelJa: "ホーム", labelEn: "HOME", href: "/" },
  {
    labelJa: "サービス案内",
    labelEn: "Service",
    href: "/service",
    children: [
      { labelJa: "サービスの流れ", href: "/service/flow" },
      { labelJa: "よくあるご質問", href: "/service/faq" },
    ],
  },
  {
    labelJa: "会社案内",
    labelEn: "Company",
    href: "/company",
    children: [{ labelJa: "会社概要", href: "/company/outline" }],
  },
  { labelJa: "ギャラリー", labelEn: "Gallery", href: "/information" },
  { labelJa: "お問い合わせ", labelEn: "Contact", href: "/contact" },
];

export type PropertyTag = "賃貸" | "分譲" | "高級";

export type Property = {
  id: number;
  name: string;
  area: string;
  price: string;
  type: string;
  beds: string;
  size: string;
  tag: PropertyTag;
};

export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Shinjuku Towers Residence",
    area: "新宿区",
    price: "¥85,000,000",
    type: "分譲マンション",
    beds: "3LDK",
    size: "82.4㎡",
    tag: "分譲",
  },
  {
    id: 2,
    name: "Minato Prestige Apartment",
    area: "港区",
    price: "¥320,000/月",
    type: "賃貸",
    beds: "2LDK",
    size: "64.0㎡",
    tag: "賃貸",
  },
  {
    id: 3,
    name: "Shibuya Modern Penthouse",
    area: "渋谷区",
    price: "¥210,000,000",
    type: "高級マンション",
    beds: "4LDK",
    size: "128.6㎡",
    tag: "高級",
  },
  {
    id: 4,
    name: "Harajuku Boutique Studio",
    area: "原宿",
    price: "¥185,000/月",
    type: "賃貸",
    beds: "1K",
    size: "28.5㎡",
    tag: "賃貸",
  },
  {
    id: 5,
    name: "Roppongi Hills Executive",
    area: "六本木",
    price: "¥650,000/月",
    type: "賃貸",
    beds: "3LDK",
    size: "98.0㎡",
    tag: "賃貸",
  },
  {
    id: 6,
    name: "Setagaya Family Home",
    area: "世田谷区",
    price: "¥125,000,000",
    type: "一戸建て",
    beds: "4SLDK",
    size: "112.3㎡",
    tag: "分譲",
  },
];

export type NewsCategory = "お知らせ" | "イベント" | "物件情報";

export type NewsPost = {
  id: number;
  date: string;
  category: NewsCategory;
  title: string;
};

export const NEWS: NewsPost[] = [
  {
    id: 1,
    date: "2026年5月15日",
    category: "物件情報",
    title:
      "渋谷区の新築マンション「SHIBUYA PRIME」の取り扱いを開始しました。",
  },
  {
    id: 2,
    date: "2026年4月28日",
    category: "イベント",
    title: "春の不動産フェア開催のお知らせ（4月29日〜5月5日）",
  },
  {
    id: 3,
    date: "2026年3月10日",
    category: "お知らせ",
    title: "外国人向け無料相談会を毎月第一土曜日に開催します。",
  },
  {
    id: 4,
    date: "2026年2月20日",
    category: "お知らせ",
    title: "ホームページを全面リニューアルしました。",
  },
  {
    id: 5,
    date: "2025年12月25日",
    category: "お知らせ",
    title: "年末年始休業のお知らせ（12月28日〜1月5日）",
  },
  {
    id: 6,
    date: "2025年11月1日",
    category: "イベント",
    title:
      "不動産投資セミナーを開催しました。ご参加ありがとうございました。",
  },
];

export const FAQS = [
  {
    q: "外国人でも物件を借りられますか？",
    a: "はい、可能です。保証人・保証会社のサポートもご案内します。",
  },
  {
    q: "日本語が話せなくても大丈夫ですか？",
    a: "英語・ネパール語・ヒンドゥー語など多言語スタッフが対応します。",
  },
  {
    q: "初期費用の目安は？",
    a: "賃貸の場合、家賃の3〜5ヶ月分が一般的です。",
  },
  {
    q: "どのエリアの物件を取り扱っていますか？",
    a: "東京都内全域および首都圏を中心に対応しています。",
  },
  {
    q: "オンライン内覧は可能ですか？",
    a: "はい、ビデオ通話による内覧にも対応しています。",
  },
  {
    q: "投資物件の相談もできますか？",
    a: "はい、不動産投資コンサルティングも承っています。",
  },
  {
    q: "ペット可の物件はありますか？",
    a: "ペット相談可の物件も多数ございます。お気軽にご相談ください。",
  },
  {
    q: "契約から入居まで何日かかりますか？",
    a: "通常2〜4週間程度です。状況によって異なります。",
  },
];

export const SERVICE_FLOW = [
  {
    step: 1,
    titleJa: "お問い合わせ",
    titleEn: "Inquiry",
    desc: "フォームまたはお電話でお気軽にご連絡ください。",
  },
  {
    step: 2,
    titleJa: "ヒアリング",
    titleEn: "Consultation",
    desc: "ご希望・ご予算・エリアなどをお伺いします。",
  },
  {
    step: 3,
    titleJa: "物件のご提案",
    titleEn: "Property Proposal",
    desc: "条件に合った物件を厳選してご紹介します。",
  },
  {
    step: 4,
    titleJa: "内覧",
    titleEn: "Property Viewing",
    desc: "実際に物件をご覧いただきます。",
  },
  {
    step: 5,
    titleJa: "契約手続き",
    titleEn: "Contract",
    desc: "各種書類の手続きをサポートします。",
  },
  {
    step: 6,
    titleJa: "引渡し・入居",
    titleEn: "Move-in",
    desc: "鍵のお渡しから入居後のサポートまで。",
  },
];

export const COMPANY_OUTLINE: { label: string; value: string }[] = [
  { label: "法人番号 / Corporate Legal Entity Number", value: "0111-01-111050" },
  {
    label: "会社名（商号） / Company Name (Trade Name)",
    value: "AS Co., Ltd. (株式会社AS)",
  },
  {
    label: "設立 / Date of Incorporation",
    value: "March 14, Reiwa 7 (2025) / 令和7年3月14日",
  },
  {
    label: "代表取締役 / Representative Director",
    value: "Thapa Ashok",
  },
  { label: "資本金 / Capital", value: "1,000万円" },
  {
    label: "本店所在地 / Head Office Address",
    value:
      "〒160-0022 東京都新宿区新宿7-27-16-103\n103, Dai-ichi Shimizu Building, 27-16, Shinjuku 7-chome, Shinjuku-ku, Tokyo",
  },
  { label: "TEL / 電話", value: "03-6205-5836" },
  {
    label: "営業時間 / Business Hours",
    value: "10:00〜19:00（土日・祝日除く）",
  },
  {
    label: "事業内容 / Business Description",
    value: "不動産売買仲介・賃貸仲介・シェアハウス管理・コンサルティング",
  },
  {
    label: "公告方法 / Method of Public Notice",
    value: "Published in the Official Gazette (官報)",
  },
  // {
  //   label: "宅地建物取引業免許 / Real Estate License",
  //   value: "東京都知事（1）第000001号",
  // },
  {
    label: "加盟団体 / Affiliation",
    value: "公益社団法人 東京都宅地建物取引業協会",
  },
];
