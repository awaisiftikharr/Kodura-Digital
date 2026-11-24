import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/web-development", destination: "/services/web-development", permanent: true },
      { source: "/seo", destination: "/services/seo", permanent: true },
      { source: "/lead-generation", destination: "/services/lead-generation", permanent: true },
    ];
  },
};

export default nextConfig;
