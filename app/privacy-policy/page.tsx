import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Card, SectionEyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy template for Kodura Digital. Please review before launch.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>LEGAL</SectionEyebrow>
        <SectionHeading>Privacy Policy</SectionHeading>
        <Card className="mt-10">
          <div className="prose space-y-5 text-slate-300">
            <p>Kodura Digital respects the privacy of website visitors and business contacts. This policy explains how information may be collected, used, stored, and protected when you contact us or interact with our website.</p>
            <p>We may collect information such as your name, email address, company name, website, country, message, and other details you provide through forms or direct contact. This information is used to respond to inquiries, assess requirements, provide services, and improve communication.</p>
            <p>We do not sell or share personal information for unrelated marketing purposes. Information may be stored in secure systems and only accessed by authorized team members for legitimate business purposes.</p>
            <p>We may use analytics tools and cookies to understand how visitors use our website and improve the experience. Visitors can control or decline cookies through browser settings where available.</p>
            <p>We review and update this privacy policy periodically. Please review it regularly and check the last updated date if included in future versions.</p>
            <p>This is a general policy template and should be reviewed before launch with legal counsel where required.</p>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
