import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト" className="text-xs tracking-wide">
      <ol className="flex flex-wrap items-center gap-1 text-text-secondary">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-gold-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gold-primary" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="h-3 w-3 text-gold-dark" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
