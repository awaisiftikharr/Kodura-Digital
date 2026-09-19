import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ButtonLink, Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { workItems } from "@/lib/site-data";
import { StructuredData } from "@/components/structured-data";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = workItems.find((entry) => entry.slug === slug);
    if (!item) return { title: "Concept project" };
    return {
      title: `${item.title} | Concept Work`,
      description: item.summary,
      alternates: { canonical: `/work/${item.slug}` },
    };
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = workItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://koduradigital.org/" },
          { "@type": "ListItem", position: 2, name: "Work", item: "https://koduradigital.org/work" },
          { "@type": "ListItem", position: 3, name: item.title, item: `https://koduradigital.org/work/${item.slug}` },
        ],
      }} />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white">Work</Link>
            <span>/</span>
            <span className="text-slate-200">{item.title}</span>
          </div>
        </nav>
        <SectionEyebrow>{item.type}</SectionEyebrow>
        <SectionHeading>{item.title}</SectionHeading>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">{item.summary}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-white">Challenge</h2>
            <p className="mt-4 text-slate-300">{item.problem}</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-white">Strategy</h2>
            <p className="mt-4 text-slate-300">{item.solution}</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-bold text-white">Solution</h3>
            <p className="mt-4 text-slate-300">{item.solution}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-white">Design</h3>
            <p className="mt-4 text-slate-300">A premium digital interface built around trust, clarity, and conversion-focused product experience.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-white">Technology</h3>
            <p className="mt-4 text-slate-300">Modern front-end architecture designed for responsive user journeys and conversion performance.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-48 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(67,143,255,0.24),_transparent_35%),linear-gradient(135deg,#081226,#0A1428)]" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#081226] p-8 md:p-12">
          <h2 className="text-3xl font-black tracking-tight text-white">Intended outcome</h2>
          <p className="mt-4 text-slate-300">A stronger acquisition experience that reduces friction, builds trust, and turns attention into qualified demand.</p>
          <div className="mt-8">
            <ButtonLink href="/contact">Build Your Next Digital Growth Project</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
