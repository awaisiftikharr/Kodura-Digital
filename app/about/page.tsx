import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ButtonLink, Card, SectionEyebrow, SectionHeading, SectionParagraph } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Kodura Digital",
  description:
    "Learn how Kodura Digital blends digital marketing, SEO, development, AI, and automation to help businesses grow with connected digital systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>ABOUT</SectionEyebrow>
        <SectionHeading level={1}>Technology Is Useful.</SectionHeading>
        <SectionHeading>Business Results Are the Point.</SectionHeading>
        <div className="mt-8 max-w-4xl space-y-5">
          <SectionParagraph>
            Kodura Digital is a global digital services company helping businesses turn ideas and opportunities into practical digital solutions.
          </SectionParagraph>
          <SectionParagraph>
            We combine digital marketing, SEO, lead generation, development, AI, and automation to create connected solutions around real business goals.
          </SectionParagraph>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Mission", "Create connected digital systems that help businesses attract attention and convert opportunity into measurable growth."],
            ["Approach", "Blend strategy, technology, and creative execution around real business needs and audience behavior."],
            ["Capabilities", "Digital strategy, SEO, web experiences, lead generation systems, app thinking, and practical AI workflows."],
            ["Global delivery", "Work with businesses across international markets with clear communication, focused execution, and measurable thinking."],
          ].map(([title, text]) => (
            <Card key={title} className="h-full">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#081226] p-8 md:p-12">
          <SectionEyebrow>WHY BUSINESSES WORK WITH KODURA</SectionEyebrow>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Connected thinking", "We design around the whole growth system instead of isolated tactics."],
              ["Business-first approach", "Technology exists to support real business goals, not to add unnecessary complexity."],
              ["Clear implementation", "Strategy and execution are planned together so ideas become usable, scalable systems."],
            ].map(([title, text]) => (
              <Card key={title} className="h-full">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <ButtonLink href="/contact">Start a Conversation</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
