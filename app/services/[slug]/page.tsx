import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ButtonLink, Card, SectionEyebrow, SectionParagraph } from "@/components/ui";
import { services } from "@/lib/site-data";
import { StructuredData } from "@/components/structured-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((item) => item.slug === slug);
    if (!service) return { title: "Service" };
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `/services/${service.slug}` },
    };
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Kodura Digital",
          url: "https://www.koduradigital.org",
        },
        areaServed: ["Worldwide", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Europe"],
        url: `https://www.koduradigital.org/services/${service.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.koduradigital.org/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.koduradigital.org/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: `https://www.koduradigital.org/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <StructuredData data={schema} />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-slate-200">{service.title}</span>
          </div>
        </nav>
        <SectionEyebrow>{service.title.toUpperCase()}</SectionEyebrow>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{service.metaTitle}</h1>
        <div className="mt-6 max-w-3xl">
          <SectionParagraph>{service.description}</SectionParagraph>
        </div>
        <div className="mt-8">
          <ButtonLink href="/free-growth-audit">{service.cta}</ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-white">Service details</h2>
            <p className="mt-4 text-slate-300">{service.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-white">Benefits</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {[
                "Clearer positioning and messaging for your business",
                "Better visibility in the channels where your audience is searching",
                "More consistent alignment between brand, funnel, and offers",
                "A more scalable digital foundation for future growth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Process", ["Discover audience goals and business priorities", "Map the right digital channels and systems", "Build and optimize a sustainable growth engine"]],
            ["Use cases", ["Service businesses", "B2B teams", "Startups", "International brands"]],
            ["Frequently asked questions", ["How long does implementation take?", "What business problems do you solve first?", "Do you help with ongoing optimization?"]],
          ].map(([title, items]) => (
            <Card key={title as string} className="h-full">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {(items as string[]).map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">Explore related services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.filter((entry) => entry.slug !== service.slug).slice(0, 3).map((entry) => (
            <Link key={entry.slug} href={`/services/${entry.slug}`} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200 hover:border-blue-300/40 hover:bg-blue-300/10">
              {entry.title}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200 hover:border-blue-300/40 hover:bg-blue-300/10">
            Talk to Kodura
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#081226] p-8 md:p-12">
          <SectionEyebrow>READY TO GROW?</SectionEyebrow>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Let&apos;s design a stronger digital growth system.</h2>
          <div className="mt-8">
            <ButtonLink href="/free-growth-audit">Request My Free Growth Audit</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
