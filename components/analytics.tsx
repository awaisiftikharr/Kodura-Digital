"use client";

import Script from "next/script";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-ZJ1PQJS4GL";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  const event = ["event", eventName, parameters];
  if (window.gtag) {
    window.gtag(...event);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function TrackedLink({
  href,
  children,
  eventName,
  eventParameters,
  ...props
}: React.ComponentProps<typeof Link> & {
  eventName?: string;
  eventParameters?: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        props.onClick?.(event);
        if (!event.defaultPrevented && eventName) {
          trackEvent(eventName, {
            link_destination: typeof href === "string" ? href : undefined,
            link_text: typeof children === "string" ? children : undefined,
            ...eventParameters,
          });
        }
      }}
    >
      {children}
    </Link>
  );
}

export function Analytics() {
  const pathname = usePathname();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    trackEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
