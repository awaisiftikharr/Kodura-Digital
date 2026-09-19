import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111318]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Kodura Digital home">
          <BrandMark className="h-10 w-10 rounded-2xl" compact />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.22em] text-white">KODURA</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">DIGITAL</div>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
          <Link href="/" className="text-sm font-semibold text-slate-300 transition hover:text-white">
            Home
          </Link>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/free-growth-audit"
            className="inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(210,255,77,0.22)] transition hover:bg-lime-200"
          >
            Get a Free Growth Audit
          </Link>
        </div>

        <details className="md:hidden">
          <summary className="list-none cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white">
            Menu
          </summary>
          <div className="absolute left-4 right-4 top-full mt-3 rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="border-b border-white/10 pb-3 text-sm font-semibold text-slate-200 hover:text-white">
                Home
              </Link>
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href} className="text-slate-200 hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/free-growth-audit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-lime-300 px-4 py-2.5 text-sm font-bold text-slate-950"
              >
                Free Growth Audit
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
