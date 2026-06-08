export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 my-8 ${className}`}>
      <div className="flex-1 h-px bg-linear-to-r from-transparent to-gold-primary opacity-40" />
      <div className="w-2 h-2 rotate-45 bg-gold-primary" />
      <div className="flex-1 h-px bg-linear-to-l from-transparent to-gold-primary opacity-40" />
    </div>
  );
}
