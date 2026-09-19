import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koduradigital.org"),
  applicationName: "Kodura Digital",
  authors: [{ name: "Kodura Digital" }],
  creator: "Kodura Digital",
  publisher: "Kodura Digital",
  title: {
    default: "Kodura Digital | Digital Marketing, SEO & Web Development Agency",
    template: "%s | Kodura Digital",
  },
  description:
    "Kodura Digital helps businesses worldwide grow through digital marketing, SEO, lead generation, web development, app development, AI and automation.",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  keywords: [
    "digital marketing agency",
    "SEO agency",
    "lead generation agency",
    "web development agency",
    "app development",
    "AI automation",
    "global digital growth partner",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Kodura Digital",
    description:
      "Digital Solutions That Drive Business Growth.",
    url: "https://koduradigital.org",
    siteName: "Kodura Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-kodura.svg",
        width: 1200,
        height: 630,
        alt: "Kodura Digital branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodura Digital",
    description:
      "Digital Solutions That Drive Business Growth.",
    images: ["/og-kodura.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="bg-[#111318] text-white antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
