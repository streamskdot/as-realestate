import Link from "next/link";

const links = [
  { label: "サービス案内", href: "/service" },
  { label: "サービスの流れ", href: "/service/flow", indent: true },
  { label: "よくあるご質問", href: "/service/faq", indent: true },
];

export default function ServiceSidebar() {
  return (
    <aside className="space-y-6">
      <nav aria-label="サービスメニュー" className="rounded-sm border border-border-gold bg-bg-card">
        <h2 className="font-serif-jp border-b border-border-gold px-5 py-4 text-sm text-gold-primary">
          サービス案内
        </h2>
        <ul>
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-serif-jp block border-b border-border-subtle px-5 py-3.5 text-sm text-text-secondary transition-colors last:border-0 hover:bg-bg-card-hover hover:text-gold-primary"
              >
                ― {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href="/contact"
        style={{ backgroundImage: "var(--gold-gradient)" }}
        className="block rounded-sm px-5 py-4 text-center text-sm font-medium text-[#0a0a0a] transition-transform duration-200 hover:scale-[1.02]"
      >
        お問い合わせ
      </Link>
    </aside>
  );
}
