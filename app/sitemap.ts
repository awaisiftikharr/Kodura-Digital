import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/contact",
  "/free-growth-audit",
  "/industries",
  "/privacy-policy",
  "/services",
  "/terms-and-conditions",
  "/work",
  "/services/digital-marketing",
  "/services/seo",
  "/services/lead-generation",
  "/services/web-development",
  "/services/app-development",
  "/services/ai-automation",
  "/industries/saas-technology",
  "/industries/healthcare",
  "/industries/real-estate",
  "/industries/ecommerce",
  "/industries/professional-services",
  "/industries/local-businesses",
  "/industries/startups",
  "/industries/b2b-companies",
  "/work/healthcare-growth-experience",
  "/work/property-lead-engine",
  "/work/saas-product-launch",
  "/work/premium-commerce-experience",
  "/work/intelligent-operations-system",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://koduradigital.org${route}`,
    lastModified: "2026-09-19",
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
