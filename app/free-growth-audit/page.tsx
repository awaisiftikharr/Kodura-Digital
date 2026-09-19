import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { ConversionTracker } from "@/components/conversion-tracker";

export const metadata: Metadata = {
  title: "Free Growth Audit",
  description: "Request a free growth audit from Kodura Digital to review your website, SEO, lead generation, conversion points, and digital growth opportunities.",
  alternates: { canonical: "/free-growth-audit" },
};

export default async function FreeGrowthAuditPage({ searchParams }: { searchParams: Promise<{ submitted?: string; form?: string }> }) {
  const { submitted, form } = await searchParams;

  return (
    <PageShell>
      {submitted === "1" && form === "growth_audit" && (
        <ConversionTracker
          eventName="growth_audit_submit"
          eventParameters={{ form_location: "free_growth_audit_page" }}
          storageKey="ga-growth-audit-submit"
        />
      )}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>FREE GROWTH AUDIT</SectionEyebrow>
        <SectionHeading>Find Where Your Digital Growth Is Being Lost.</SectionHeading>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          Kodura can review your website, SEO, search visibility, lead capture, conversion, digital presence, customer journey, and growth opportunities to uncover the gaps that are limiting performance.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <h2 className="text-2xl font-bold text-white">What we review</h2>
            <ul className="mt-6 space-y-3 text-slate-200">
              {[
                "Website",
                "SEO",
                "Search visibility",
                "Lead capture",
                "Conversion",
                "Digital presence",
                "Customer journey",
                "Growth opportunities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <form action="/api/contact" method="post" className="grid gap-5 md:grid-cols-2">
              <input type="hidden" name="form_type" value="growth_audit" />
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Name
                <input name="name" required className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Email
                <input type="email" name="email" required className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Service
                <select name="service" required defaultValue="" className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white">
                  <option value="" disabled>Select a service</option>
                  <option>Digital marketing</option>
                  <option>SEO</option>
                  <option>Lead generation</option>
                  <option>Web development</option>
                  <option>App development</option>
                  <option>AI and automation</option>
                  <option>Other service</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Budget
                <select name="budget" required defaultValue="" className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white">
                  <option value="" disabled>Select a budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $7,500</option>
                  <option>$7,500+</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300 md:col-span-2">
                Message
                <textarea name="message" required rows={5} className="rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white" />
              </label>
              <button type="submit" className="md:col-span-2 inline-flex justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400">
                Request My Free Growth Audit
              </button>
            </form>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
