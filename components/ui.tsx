import type { ReactNode } from "react";
import { TrackedLink } from "@/components/analytics";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-lime-300">{children}</p>
  );
}

export function SectionHeading({ children, align = "left" }: { children: ReactNode; align?: "left" | "center" }) {
  return (
    <h2
      className={[
        "bg-gradient-to-r from-white via-white to-lime-200 bg-clip-text text-3xl font-black tracking-[-0.04em] text-transparent sm:text-4xl lg:text-5xl",
        align === "center" ? "text-center" : "text-left",
      ].join(" ")}
    >
      {children}
    </h2>
  );
}

export function SectionParagraph({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={[
      "max-w-2xl text-base leading-7 text-slate-300 sm:text-lg",
      center ? "mx-auto text-center" : "",
    ].join(" ")}>{children}</p>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const className = variant === "primary"
    ? "inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(210,255,77,0.24)] transition hover:-translate-y-0.5 hover:bg-lime-200"
    : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-lime-300/40 hover:bg-lime-300/10";

  return (
    <TrackedLink
      href={href}
      className={className}
      eventName={variant === "primary" ? "primary_cta_click" : undefined}
      eventParameters={{
        cta_location: href,
        cta_variant: variant,
      }}
    >
      {children}
    </TrackedLink>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/15 bg-[linear-gradient(145deg,rgba(35,38,44,0.95),rgba(18,20,24,0.96))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_45px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-lime-300/30 hover:shadow-[0_18px_45px_rgba(210,255,77,0.1)] ${className}`}>
      {children}
    </div>
  );
}
