import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export default function ServiceCard({
  Icon,
  titleJa,
  titleEn,
  description,
  href = "/service",
}: {
  Icon: LucideIcon;
  titleJa: string;
  titleEn: string;
  description: string;
  href?: string;
}) {
  return (
    <article className="lux-card group flex flex-col rounded-sm p-8">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm border border-border-gold bg-bg-black text-gold-primary">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <h3 className="font-display text-2xl text-text-primary">{titleEn}</h3>
      <p className="font-serif-jp mt-1 text-sm text-gold-primary">{titleJa}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1 text-sm text-gold-primary transition-colors hover:text-gold-light"
      >
        続きを読む
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
