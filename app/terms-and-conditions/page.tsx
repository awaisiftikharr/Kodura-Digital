import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Card, SectionEyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms that apply when you use the Kodura Digital website or enquire about its digital services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>LEGAL</SectionEyebrow>
        <SectionHeading level={1}>Terms &amp; Conditions</SectionHeading>
        <Card className="mt-10">
          <div className="prose space-y-5 text-slate-300">
            <p>These terms and conditions govern the use of the Kodura Digital website and any services described or provided through it. By accessing or using our website, you agree to the terms set out here.</p>
            <p>All content on the website is provided for informational purposes and should not be treated as legal, financial, or professional advice unless explicitly stated. We aim to provide useful information and recommendations, but final decisions remain the responsibility of the client or business using the information.</p>
            <p>We reserve the right to update, modify, or remove site content at any time without notice. Some future service engagements may include separate contractual terms, scope definitions, and project-specific requirements.</p>
            <p>Users must not misuse our website or attempt to compromise its security, access protected areas, or violate applicable laws. We do not guarantee uninterrupted access to the website or the availability of any service described.</p>
            <p>Any third-party links presented on the site are provided for convenience only. Kodura Digital is not responsible for the content or practices of those external websites.</p>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
