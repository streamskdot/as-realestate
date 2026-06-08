import Breadcrumb, { type Crumb } from "@/components/Breadcrumb";
import GoldDivider from "@/components/GoldDivider";

export default function PageHero({
  titleJa,
  titleEn,
  crumbs,
}: {
  titleJa: string;
  titleEn: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border-gold bg-bg-dark">
      {/* Geometric dot pattern overlay, right half */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-primary to-transparent" />
      <div className="relative mx-auto flex min-h-[280px] max-w-7xl flex-col justify-center px-6 py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-gold-primary">
          {titleEn}
        </p>
        <h1 className="font-serif-jp mt-3 text-4xl font-light text-text-primary sm:text-5xl">
          {titleJa}
        </h1>
        <GoldDivider className="max-w-xs my-6!" />
        <Breadcrumb items={crumbs} />
      </div>
    </section>
  );
}
