import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries We Support",
  description: "Kodura Digital supports SaaS, healthcare, real estate, e-commerce, professional services, local businesses, startups, and B2B growth goals.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>INDUSTRIES</SectionEyebrow>
        <SectionHeading level={1}>Digital growth is never one-size-fits-all.</SectionHeading>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.slug} className="h-full">
              <h2 className="text-2xl font-bold text-white">{industry.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{industry.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {industry.focus.map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
                ))}
              </ul>
              <Link href={`/industries/${industry.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">
                Explore {industry.title} →
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
