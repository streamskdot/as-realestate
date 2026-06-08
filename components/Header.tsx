"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/site-data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-gold bg-bg-black/90 backdrop-blur-md"
          : "border-b border-transparent bg-linear-to-b from-bg-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="株式会社AS ホーム" className="relative z-50">
          <Image
            src="/logo.jpeg"
            alt="株式会社AS ロゴ"
            width={112}
            height={112}
            priority
            className="h-14 w-14 rounded-sm object-contain"
          />
        </Link>

        {/* Desktop nav + theme toggle */}
        <div className="hidden items-center gap-8 lg:flex">
        <nav
          aria-label="メインナビゲーション"
          className="flex items-center gap-8"
        >
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex flex-col items-center transition-colors ${
                  isActive(item.href)
                    ? "text-gold-primary"
                    : "text-text-primary hover:text-gold-primary"
                }`}
              >
                <span className="font-serif-jp text-[10px] tracking-widest text-gold-primary">
                  {item.labelJa}
                </span>
                <span className="flex items-center gap-1 text-[13px] tracking-wide">
                  {item.labelEn}
                  {item.children && (
                    <ChevronDown className="h-3 w-3" aria-hidden />
                  )}
                </span>
                <span
                  className={`mt-1 h-px w-full origin-center bg-gold-primary transition-transform duration-300 ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-sm border border-border-gold bg-bg-dark shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block border-b border-border-subtle px-5 py-3 font-serif-jp text-sm text-text-secondary transition-colors last:border-0 hover:bg-bg-card-hover hover:text-gold-primary"
                      >
                        {child.labelJa}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-50 text-gold-primary"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-bg-black/98 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          aria-label="モバイルナビゲーション"
          className="mt-24 flex flex-col gap-1 px-8"
        >
          {NAV.map((item) => (
            <div key={item.href} className="border-b border-border-subtle py-4">
              <Link
                href={item.href}
                onClick={closeMobile}
                className={`flex items-baseline gap-3 ${
                  isActive(item.href) ? "text-gold-primary" : "text-text-primary"
                }`}
              >
                <span className="font-serif-jp text-base">{item.labelJa}</span>
                <span className="text-xs tracking-widest text-text-secondary">
                  {item.labelEn}
                </span>
              </Link>
              {item.children && (
                <div className="mt-3 flex flex-col gap-2 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className="font-serif-jp text-sm text-text-secondary transition-colors hover:text-gold-primary"
                    >
                      ― {child.labelJa}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
