import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsPost } from "@/lib/site-data";

const categoryColor: Record<string, string> = {
  お知らせ: "border-gold-primary text-gold-primary",
  イベント: "border-purple-400/50 text-purple-300",
  物件情報: "border-sky-400/50 text-sky-300",
};

export default function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="lux-card group flex flex-col rounded-sm p-6">
      <div className="flex items-center gap-3">
        <time className="text-xs tracking-wider text-gold-primary">
          {post.date}
        </time>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[10px] tracking-wider ${
            categoryColor[post.category] ?? "border-border-gold text-gold-primary"
          }`}
        >
          {post.category}
        </span>
      </div>
      <h3 className="font-serif-jp mt-3 flex-1 text-base leading-relaxed text-text-primary">
        {post.title}
      </h3>
      <Link
        href="/information"
        className="mt-4 inline-flex items-center gap-1 text-sm text-gold-primary transition-colors hover:text-gold-light"
      >
        続きを読む
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
