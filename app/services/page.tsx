import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ButtonLink, Card, SectionEyebrow, SectionHeading, SectionParagraph } from "@/components/ui";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Growth Services",
  description:
    "Explore Kodura Digital services for digital marketing, SEO, lead generation, web development, app development, and AI automation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>02 / WHAT WE DO</SectionEyebrow>
        <SectionHeading level={1}>One Partner.</SectionHeading>
        <SectionHeading>Every Digital Layer.</SectionHeading>
        <div className="mt-8 max-w-3xl">
          <SectionParagraph>
            Kodura Digital brings strategy, technology, creative execution, and performance thinking together so every digital channel supports business growth.
          </SectionParagraph>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="h-full flex flex-col">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-200">
                  Growth
                </span>
              </div>
              <p className="text-base leading-7 text-slate-300">{service.short}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">
                {service.cta} →
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-14">
          <ButtonLink href="/free-growth-audit">Request My Free Growth Audit</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
