import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { ConversionTracker } from "@/components/conversion-tracker";
import { TrackedLink } from "@/components/analytics";

export const metadata: Metadata = {
  title: "Contact Kodura Digital",
  description: "Get in touch with Kodura Digital for digital marketing, SEO, web development, app development, and AI growth projects.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ submitted?: string; form?: string }> }) {
  const { submitted, form } = await searchParams;

  return (
    <PageShell>
      {submitted === "1" && form === "contact" && (
        <ConversionTracker
          eventName="contact_form_submit"
          eventParameters={{ form_location: "contact_page" }}
          storageKey="ga-contact-form-submit"
        />
      )}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>CONTACT</SectionEyebrow>
        <SectionHeading level={1}>Have a Growth Goal?</SectionHeading>
        <SectionHeading>Let&apos;s Build It.</SectionHeading>
        {submitted === "1" && (
          <div className="mt-6 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-100">
            Thanks. Your message has been delivered to Kodura Digital.
          </div>
        )}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5 text-slate-300">
            <p><strong className="text-white">Email:</strong> <TrackedLink href="mailto:koduradigital@gmail.com" className="text-blue-300 hover:text-blue-200" eventName="email_click" eventParameters={{ link_location: "contact_page" }}>koduradigital@gmail.com</TrackedLink></p>
            <p><strong className="text-white">Phone / WhatsApp:</strong> <a href="tel:+923414612698" className="text-blue-300 hover:text-blue-200">+92 341 4612698</a></p>
            <p><strong className="text-white">Instagram:</strong> <a href="https://instagram.com/koduradigital" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">@koduradigital</a></p>
            <p><strong className="text-white">Website:</strong> <a href="https://www.koduradigital.org" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200">https://www.koduradigital.org</a></p>
            <TrackedLink href="https://wa.me/923414612698" target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400" eventName="whatsapp_click" eventParameters={{ link_location: "contact_page" }}>
              Chat on WhatsApp
            </TrackedLink>
          </div>

          <Card>
            <form action="/api/contact" method="post" className="grid gap-5 md:grid-cols-2">
              <input type="hidden" name="form_type" value="contact" />
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
                Send Project Inquiry
              </button>
            </form>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
