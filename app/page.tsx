import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink, Card, SectionEyebrow, SectionHeading } from "@/components/ui";
import { services, workItems } from "@/lib/site-data";
import { StructuredData } from "@/components/structured-data";
import { TrackedLink } from "@/components/analytics";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Kodura Digital",
      url: "https://koduradigital.org",
      email: "koduradigital@gmail.com",
      telephone: "+923414612698",
      sameAs: ["https://instagram.com/koduradigital"],
      description: "Kodura Digital helps businesses worldwide solve digital problems with strategy, design, technology, and growth execution.",
      areaServed: ["United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Europe"],
      knowsAbout: ["Digital marketing", "SEO", "Lead generation", "Web development", "App development", "AI automation"],
    },
    {
      "@type": "ProfessionalService",
      name: "Kodura Digital",
      url: "https://koduradigital.org",
      email: "koduradigital@gmail.com",
      telephone: "+923414612698",
      areaServed: ["Worldwide", "United States", "United Kingdom", "Canada", "Australia", "United Arab Emirates", "Europe"],
      priceRange: "$$",
      serviceType: ["Digital marketing", "SEO", "Lead generation", "Web development", "App development", "AI automation"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "koduradigital@gmail.com",
        telephone: "+923414612698",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      name: "Kodura Digital",
      url: "https://koduradigital.org",
      publisher: { "@type": "Organization", name: "Kodura Digital" },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <PageShell>
      <StructuredData data={homepageSchema} />
      <section className="hero-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(22,119,255,0.35),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(67,143,255,0.22),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(15,118,110,0.12),_transparent_24%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-100">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                KODURA DIGITAL • GLOBAL DIGITAL GROWTH PARTNER
              </div>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                Turn digital problems into your next source of growth.
              </h1>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/free-growth-audit">Get a Free Growth Audit</ButtonLink>
                <ButtonLink href="/work" variant="secondary">Explore Our Work</ButtonLink>
              </div>
            </div>

            <div className="relative mx-auto h-[430px] w-full max-w-[520px] [perspective:1200px]">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-3xl" />
              <div className="absolute inset-8 rounded-[2.5rem] border border-white/30 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_30px_80px_rgba(22,119,255,0.28)] [transform:rotateX(10deg)_rotateY(-16deg)_rotateZ(4deg)] [transform-style:preserve-3d]" />
              <div className="float-slow absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#d9f5ff,#61b5ff_32%,#1261e8_68%,#07143d)] shadow-[inset_-18px_-22px_45px_rgba(2,16,70,0.55),inset_14px_12px_30px_rgba(255,255,255,0.55),0_0_80px_rgba(59,140,255,0.55)] [transform:translateZ(60px)]">
                <BrandMark className="h-28 w-28 rounded-[2rem] shadow-2xl" compact />
              </div>
              <div className="absolute left-2 top-16 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 text-slate-950 shadow-xl [transform:translateZ(100px)_rotate(-7deg)]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Get found</div>
                <div className="mt-1 text-xl font-black">+ visibility</div>
              </div>
              <div className="absolute bottom-14 right-1 rounded-2xl border border-white/30 bg-[#10234c]/90 px-4 py-3 text-white shadow-xl [transform:translateZ(120px)_rotate(7deg)]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">Get moving</div>
                <div className="mt-1 text-xl font-black">+ growth</div>
              </div>
              <div className="absolute right-10 top-4 h-5 w-5 rounded-full bg-cyan-200 shadow-[0_0_30px_10px_rgba(103,232,249,0.55)]" />
              <div className="absolute bottom-20 left-16 h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_25px_8px_rgba(96,165,250,0.65)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <SectionEyebrow>START WITH THE PROBLEM</SectionEyebrow>
            <SectionHeading>What are you trying to fix?</SectionHeading>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">Choose the situation that sounds most like your business. We will take it from there.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["I need more leads", "Lead generation", "/services/lead-generation"],
              ["Nobody can find me", "SEO and marketing", "/services/seo"],
              ["My website feels outdated", "Web development", "/services/web-development"],
              ["Too much manual work", "AI and automation", "/services/ai-automation"],
            ].map(([problem, service, href]) => (
              <Link key={problem} href={href} className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-5 transition hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300 hover:text-slate-950">
                <span>
                  <span className="block text-base font-bold">{problem}</span>
                  <span className="mt-1 block text-xs text-slate-400 group-hover:text-slate-700">{service}</span>
                </span>
                <span className="text-xl transition group-hover:translate-x-1">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>01 / WHAT WE DO</SectionEyebrow>
        <SectionHeading>Everything your growth needs.</SectionHeading>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-blue-200">
                    Service
                  </span>
                </div>
                <p className="text-base leading-7 text-slate-300">{service.short}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {service.bullets.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200">
                {service.cta} →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>02 / SELECTED WORK</SectionEyebrow>
        <SectionHeading>Selected Concept Work</SectionHeading>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">
          {workItems.map((item) => (
            <Card key={item.slug} className="group h-full">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-blue-300">{item.type}</span>
                <span className="text-xs text-slate-400">{item.title}</span>
              </div>
              <div className="mb-6 h-40 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(67,143,255,0.26),_transparent_35%),linear-gradient(135deg,#081226,#0A1428)]" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>
              <Link href={`/work/${item.slug}`} className="mt-5 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">
                View concept →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/15 bg-[#17191e] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.24)] md:p-12">
          <SectionEyebrow>03 / REPRESENTATIVE CLIENT VOICE</SectionEyebrow>
          <SectionHeading>Good work travels.</SectionHeading>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">Illustrative perspectives showing the kind of outcomes Kodura is built to create.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["United Kingdom", "Web development", "“Kodura gave our new digital presence the clarity and confidence we were missing.”", "— Amelia R."],
              ["United Arab Emirates", "Lead generation", "“The process was focused, practical, and built around the enquiries we actually needed.”", "— Omar H."],
              ["Canada", "SEO and digital marketing", "“We finally have a growth system that makes sense to the whole team.”", "— Sofia M."],
            ].map(([country, service, quote, name]) => (
              <Card key={country} className="h-full border-white/10 bg-[#22252b]">
                <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-lime-300">
                  <span>{country}</span>
                  <span className="text-slate-400">{service}</span>
                </div>
                <p className="mt-8 text-lg font-semibold leading-8 text-white">{quote}</p>
                <p className="mt-6 text-sm text-slate-400">{name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionEyebrow>04 / ABOUT KODURA</SectionEyebrow>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading>We make digital work feel simpler.</SectionHeading>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>Kodura Digital is a global digital growth partner for businesses that want a clearer presence, stronger customer journeys, and better commercial momentum. We bring strategy, creative thinking, development, marketing, and automation into one focused partnership.</p>
              <p>Our work starts with the business problem, not a trend or a tool. We listen, find the friction, and build practical digital solutions that help teams become easier to find, easier to trust, and easier to choose.</p>
              <p>From first conversation to ongoing optimisation, we work with ambition, clarity, and care. The result is digital work that looks distinctive, performs with purpose, and gives our clients a stronger foundation for what comes next.</p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about">Learn More About Kodura</ButtonLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(145deg,#282c31,#15171b)] p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.24)] md:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300">The Kodura standard</span>
                <span className="text-xs font-semibold text-slate-500">01 — 04</span>
              </div>
              <div className="mt-7 space-y-0">
                {[
                  ["Business first", "Every recommendation starts with the problem behind the brief."],
                  ["One clear partner", "Strategy, creative, development, and growth in one focused team."],
                  ["Built for momentum", "Work that gives your business a stronger next step, not more noise."],
                  ["Global perspective", "A practical partner for ambitious teams working across markets."],
                ].map(([title, text], index) => (
                  <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/10 py-5 last:border-0 last:pb-0">
                    <span className="pt-1 text-xs font-black text-lime-300">0{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-500/20 bg-[linear-gradient(135deg,rgba(22,119,255,0.18),rgba(8,18,38,0.95))] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <SectionEyebrow>05 / FREE GROWTH AUDIT</SectionEyebrow>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Find Where Your Digital Growth Is Being Lost.
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-200">
                A quick, practical look at what is slowing your growth.
              </p>
            </div>
            <ButtonLink href="/free-growth-audit">Request My Free Growth Audit</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionEyebrow>06 / CONTACT</SectionEyebrow>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white">Have a Growth Goal?</h2>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-white">Let&apos;s Build It.</h2>
            <div className="mt-8 space-y-3 text-slate-300">
              <p><strong className="text-white">Email:</strong> <TrackedLink href="mailto:koduradigital@gmail.com" className="text-blue-300 hover:text-blue-200" eventName="email_click" eventParameters={{ link_location: "homepage_contact" }}>koduradigital@gmail.com</TrackedLink></p>
              <p><strong className="text-white">WhatsApp:</strong> <a href="tel:+923414612698" className="text-blue-300 hover:text-blue-200">+92 341 4612698</a></p>
            </div>
            <div className="mt-6">
              <TrackedLink href="https://wa.me/923414612698" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400" eventName="whatsapp_click" eventParameters={{ link_location: "homepage_contact" }}>Chat on WhatsApp</TrackedLink>
            </div>
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
