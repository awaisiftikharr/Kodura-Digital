import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ButtonLink, Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { industries } from "@/lib/site-data";
import { StructuredData } from "@/components/structured-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const industry = industries.find((entry) => entry.slug === slug);
    if (!industry) return { title: "Industry" };
    return {
      title: `${industry.title} Growth Strategy`,
      description: industry.description,
      alternates: { canonical: `/industries/${industry.slug}` },
    };
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((entry) => entry.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://koduradigital.org/" },
          { "@type": "ListItem", position: 2, name: "Industries", item: "https://koduradigital.org/industries" },
          { "@type": "ListItem", position: 3, name: industry.title, item: `https://koduradigital.org/industries/${industry.slug}` },
        ],
      }} />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span>/</span>
            <span className="text-slate-200">{industry.title}</span>
          </div>
        </nav>
        <SectionEyebrow>INDUSTRY</SectionEyebrow>
        <SectionHeading>{industry.title}</SectionHeading>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">{industry.description}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-white">What this business usually needs</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {industry.focus.map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-white">How Kodura supports it</h2>
            <p className="mt-4 text-slate-300">By aligning messaging, user experience, digital visibility, and conversion systems around the actual buying journey, businesses can improve both acquisition quality and operational efficiency.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#081226] p-8 md:p-12">
          <h2 className="text-3xl font-black tracking-tight text-white">Need a digital growth plan for this market?</h2>
          <div className="mt-8">
            <ButtonLink href="/free-growth-audit">Request My Free Growth Audit</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
