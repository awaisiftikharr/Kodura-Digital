import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#111318]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 rounded-[2rem] border border-lime-300/20 bg-lime-300 p-7 text-slate-950 shadow-[0_20px_60px_rgba(210,255,77,0.08)] md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-700">Ready when you are</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">Have a digital problem to solve?</h2>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
            Start a conversation <span className="ml-2 text-lime-300">↗</span>
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <BrandMark className="h-10 w-10 rounded-2xl" compact />
              <div>
                <div className="text-sm font-semibold tracking-[0.22em] text-white">KODURA</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">DIGITAL</div>
              </div>
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-300">Digital strategy, creative, and technology for businesses ready to move forward.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/services/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
              <li><Link href="/services/seo" className="hover:text-white">SEO</Link></li>
              <li><Link href="/services/lead-generation" className="hover:text-white">Lead Generation</Link></li>
              <li><Link href="/services/web-development" className="hover:text-white">Web Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-white">App Development</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-white">AI &amp; Automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/work" className="hover:text-white">Our Work</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="mailto:koduradigital@gmail.com" className="hover:text-white">koduradigital@gmail.com</a></li>
              <li><a href="tel:+923414612698" className="hover:text-white">+92 341 4612698</a></li>
              <li><a href="https://instagram.com/koduradigital" target="_blank" rel="noreferrer" className="hover:text-white">@koduradigital</a></li>
              <li className="pt-2 text-slate-400">Global digital growth partner</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kodura Digital. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
