import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { workItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore Kodura Digital concept work across healthcare, real estate, SaaS, e-commerce, and AI operations.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>03 / SELECTED WORK</SectionEyebrow>
        <SectionHeading>Selected Concept Work</SectionHeading>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {workItems.map((item) => (
            <Card key={item.slug} className="h-full">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300">{item.type}</span>
                <span className="text-xs text-slate-400">{item.title}</span>
              </div>
              <div className="mb-5 h-44 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(67,143,255,0.24),_transparent_35%),linear-gradient(135deg,#081226,#0A1428)]" />
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.focus.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{tag}</span>
                ))}
              </div>
              <Link href={`/work/${item.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">
                View concept →
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
