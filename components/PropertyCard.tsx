import { ArrowRight, Building2, BedDouble, Ruler, MapPin } from "lucide-react";
import type { Property } from "@/lib/site-data";

const tagStyles: Record<Property["tag"], string> = {
  賃貸: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  分譲: "bg-gold-primary/15 text-gold-primary border-gold-primary/40",
  高級: "bg-purple-500/15 text-purple-300 border-purple-400/30",
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="lux-card group overflow-hidden rounded-sm">
      {/* Illustration placeholder */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-linear-to-br from-bg-card-hover to-bg-black">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 46%, #C9A84C 47%, #C9A84C 53%, transparent 54%)",
            backgroundSize: "28px 28px",
          }}
        />
        <Building2
          className="h-16 w-16 text-gold-primary/40 transition-transform duration-500 group-hover:scale-110"
          aria-hidden
        />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[11px] tracking-wider ${tagStyles[property.tag]}`}
        >
          {property.tag}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-text-primary">
          {property.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-gold-primary">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {property.area} ・ {property.type}
        </p>

        <p className="mt-4 text-2xl font-medium text-gold-primary">
          {property.price}
        </p>

        <div className="mt-4 flex items-center gap-5 border-t border-border-subtle pt-4 text-xs text-text-secondary">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold-dark" aria-hidden />
            {property.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-gold-dark" aria-hidden />
            {property.size}
          </span>
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm text-gold-primary transition-colors group-hover:text-gold-light">
          詳細を見る / View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
