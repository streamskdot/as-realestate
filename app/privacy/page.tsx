import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "株式会社ASのプライバシーポリシー。個人情報の取り扱い方針についてご説明します。",
};

const sections = [
  {
    h: "1. 個人情報の定義",
    p: "個人情報とは、お客様個人に関する情報であって、氏名・住所・電話番号・メールアドレス等により特定の個人を識別できる情報を指します。",
  },
  {
    h: "2. 個人情報の収集",
    p: "当社は、お問い合わせ・物件のご紹介・契約手続き等に必要な範囲で、適法かつ公正な手段により個人情報を収集します。",
  },
  {
    h: "3. 利用目的",
    p: "収集した個人情報は、お客様へのご連絡、物件のご提案、契約・アフターサポート、各種ご案内のために利用します。",
  },
  {
    h: "4. 第三者への開示",
    p: "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に開示・提供することはありません。",
  },
  {
    h: "5. 安全管理",
    p: "当社は、個人情報の漏えい・滅失・毀損を防止するため、必要かつ適切な安全管理措置を講じます。",
  },
  {
    h: "6. お問い合わせ窓口",
    p: `個人情報の取り扱いに関するお問い合わせは、${SITE.tel} までご連絡ください。`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        titleJa="プライバシーポリシー"
        titleEn="Privacy Policy"
        crumbs={[{ label: "HOME", href: "/" }, { label: "プライバシーポリシー" }]}
      />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-serif-jp leading-loose text-text-secondary">
          {SITE.nameJa}（以下「当社」）は、お客様の個人情報の保護を社会的責務と考え、以下の方針に基づき個人情報の適切な取り扱いに努めます。
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-serif-jp border-l-2 border-l-gold-primary pl-4 text-lg text-text-primary">
                {s.h}
              </h2>
              <p className="font-serif-jp mt-3 pl-4 text-sm leading-loose text-text-secondary">
                {s.p}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-text-muted">制定日：2018年4月1日</p>
      </div>
    </>
  );
}
