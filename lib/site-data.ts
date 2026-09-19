export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  cta: string;
  metaTitle: string;
  metaDescription: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  problem: string;
  solution: string;
  focus: string[];
  tags: string[];
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  focus: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Reach the right audience with strategic campaigns, content, and digital growth programs.",
    description:
      "Kodura Digital develops digital marketing programs that build awareness, attract qualified attention, and move prospects through the funnel toward high-value conversations.",
    bullets: [
      "Digital marketing strategy",
      "Social media marketing",
      "Content marketing",
      "Campaign strategy",
      "Brand growth",
      "Performance marketing",
    ],
    cta: "Grow Your Reach",
    metaTitle: "Digital Marketing Agency | Growth Strategy for Businesses",
    metaDescription:
      "Kodura Digital helps businesses grow through strategic digital marketing programs, content, campaign planning, and measurable brand growth.",
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Build search visibility so the customers looking for your solution can find you.",
    description:
      "Our SEO work combines technical optimization, search intent research, content planning, and authority-building so your business shows up when buyers are looking for solutions.",
    bullets: [
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Local SEO",
      "Keyword research",
      "Content optimization",
      "SEO strategy",
      "Search visibility",
      "AI-search visibility",
    ],
    cta: "Improve Visibility",
    metaTitle: "SEO Agency | Technical SEO and Search Visibility",
    metaDescription:
      "Kodura Digital builds stronger search visibility through technical SEO, content optimization, and strategy designed around buyer intent.",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    short: "Turn attention into qualified opportunities with focused lead capture and conversion systems.",
    description:
      "We design lead generation systems that attract relevant prospects and turn them into purposeful conversations, using pages, funnels, research, and follow-up mechanisms that support sales teams.",
    bullets: [
      "Lead generation",
      "Landing pages",
      "Lead capture",
      "Conversion funnels",
      "Prospect research",
      "Lead qualification",
      "Follow-up systems",
    ],
    cta: "Generate More Leads",
    metaTitle: "Lead Generation Agency | High-Intent Prospect Capture",
    metaDescription:
      "Kodura Digital helps businesses create lead generation systems that attract qualified opportunities and improve conversion from interest to inquiry.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, modern websites and web applications designed around users and business goals.",
    description:
      "We create business websites, marketing sites, custom platforms, and product experiences that are conversion-focused, responsive, and built for growth.",
    bullets: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce",
      "Web applications",
      "Custom platforms",
      "Website redesign",
      "Responsive development",
    ],
    cta: "Build Your Website",
    metaTitle: "Web Development Agency | Business Websites & Web Apps",
    metaDescription:
      "Kodura Digital builds modern websites and web applications that improve user experience, conversion, and business performance.",
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "Custom mobile experiences that turn ideas, workflows, and customer needs into useful products.",
    description:
      "From customer-facing experiences to internal business tools, we create apps that make valuable workflows easier, clearer, and more effective.",
    bullets: [
      "iOS",
      "Android",
      "Cross-platform",
      "Business applications",
      "Customer applications",
      "Custom software",
    ],
    cta: "Build Your App",
    metaTitle: "App Development Company | Business & Customer Applications",
    metaDescription:
      "Kodura Digital designs and builds custom apps and digital products built around usability, workflow efficiency, and clear business value.",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Practical AI and automation solutions that reduce repetitive work and improve business operations.",
    description:
      "We identify repetitive workflows, bottlenecks, and operational overhead to build practical AI and automation systems that improve speed and consistency.",
    bullets: [
      "AI integrations",
      "AI workflows",
      "Business automation",
      "Chatbots",
      "CRM automation",
      "API integrations",
      "AI agents",
      "Workflow automation",
    ],
    cta: "Explore AI Solutions",
    metaTitle: "AI Automation Agency | Workflow & Business Automation",
    metaDescription:
      "Kodura Digital helps businesses use AI and automation to reduce manual work, improve productivity, and strengthen operational performance.",
  },
];

export const workItems: WorkItem[] = [
  {
    slug: "healthcare-growth-experience",
    title: "Healthcare Growth Experience",
    type: "CONCEPT PROJECT",
    summary: "A modern healthcare brand experience designed to improve patient trust, appointment journeys, and lead quality.",
    problem: "A healthcare business needed a cleaner digital presence and better conversion from website visitors to booked consultations.",
    solution: "We developed a conversion-led digital experience with service clarity, trust-building patient pathways, and simplified appointment flows.",
    focus: ["Patient experience", "Website UX", "Lead generation", "Appointment journey"],
    tags: ["Healthcare", "UX", "Lead Generation", "Web Experience"],
  },
  {
    slug: "property-lead-engine",
    title: "Property Lead Engine",
    type: "CONCEPT PROJECT",
    summary: "A premium real-estate experience built around discovery, engagement, and property lead capture.",
    problem: "The business needed a stronger property browsing and inquiry experience that worked beautifully on mobile and encouraged fast action.",
    solution: "We focused on clear property journeys, lead capture flows, and mobile-first discovery that aligned with buyer intent.",
    focus: ["Property discovery", "Lead capture", "Conversion", "Mobile experience"],
    tags: ["Real Estate", "Mobile UX", "CRM", "Lead Capture"],
  },
  {
    slug: "saas-product-launch",
    title: "SaaS Product Launch",
    type: "CONCEPT PROJECT",
    summary: "A product launch experience crafted to explain a software value proposition and support conversion.",
    problem: "The company needed a clear and polished launch experience that translated technical strengths into tangible business outcomes.",
    solution: "We designed a product presentation strategy with messaging, feature storytelling, and conversion-focused landing page structure.",
    focus: ["Product presentation", "Landing page", "Product UX", "Conversion"],
    tags: ["SaaS", "Landing Page", "UX", "Growth"],
  },
  {
    slug: "premium-commerce-experience",
    title: "Premium Commerce Experience",
    type: "CONCEPT PROJECT",
    summary: "A premium digital storefront experience designed around product discovery and frictionless mobile shopping.",
    problem: "The brand needed a more elegant digital shopping experience that improved product engagement and reduced drop-off.",
    solution: "We created a premium commerce journey with stronger product storytelling, cleaner navigation, and mobile-first conversion patterns.",
    focus: ["Product discovery", "UX", "Conversion", "Mobile shopping"],
    tags: ["E-commerce", "UX", "Conversion", "Mobile"],
  },
  {
    slug: "intelligent-operations-system",
    title: "Intelligent Operations System",
    type: "CONCEPT PROJECT",
    summary: "A workflow-driven AI and automation concept for smarter lead management and operational coordination.",
    problem: "The business needed a better way to connect lead intake, nurture workflows, and internal operations without manual bottlenecks.",
    solution: "We designed an AI-assisted operations and lead management concept built around efficient workflows and automation-heavy task handling.",
    focus: ["AI workflows", "Automation", "Lead management", "Business operations"],
    tags: ["AI", "Automation", "Workflow", "Operations"],
  },
];

export const industries: Industry[] = [
  { slug: "saas-technology", title: "SaaS & Technology", description: "Growth systems for software companies, digital products, and technology-led businesses.", focus: ["Product marketing", "Sales funnels", "SEO", "Lifecycle growth"] },
  { slug: "healthcare", title: "Healthcare", description: "Digital experiences, trust systems, and conversion journeys built for healthcare service providers.", focus: ["Lead generation", "Patient journeys", "Website UX", "Local visibility"] },
  { slug: "real-estate", title: "Real Estate", description: "Search visibility, property engagement, and lead capture for agencies and property businesses.", focus: ["Property search", "Lead capture", "Mobile UX", "Marketing funnels"] },
  { slug: "ecommerce", title: "E-commerce", description: "Revenue-focused digital experiences for store growth, product discovery, and repeat customers.", focus: ["Product UX", "Conversion", "Retention", "Shop funnels"] },
  { slug: "professional-services", title: "Professional Services", description: "Digital positioning and conversion systems for advisory, consulting, and service-led companies.", focus: ["Authority building", "Lead capture", "Brand visibility", "Sales support"] },
  { slug: "local-businesses", title: "Local Businesses", description: "Digital growth strategies for local service businesses that want stronger visibility and more qualified leads.", focus: ["Local SEO", "Google visibility", "Contact conversion", "Reputation systems"] },
  { slug: "startups", title: "Startups", description: "Lean digital growth planning for teams that need to move quickly and build traction.", focus: ["Messaging", "Launch positioning", "Web presence", "Growth experiments"] },
  { slug: "b2b-companies", title: "B2B Companies", description: "Digital strategy and lead generation systems designed for complex buyer journeys and slower sales cycles.", focus: ["SEO", "Retention", "Funnel design", "Sales enablement"] },
];

export const blogPosts: BlogPost[] = [
  { slug: "generate-more-qualified-leads-from-your-website", title: "How to Generate More Qualified Leads From Your Website", description: "A practical guide to turning website traffic into better conversations and stronger lead quality.", date: "2026-09-01", category: "Lead Generation", readTime: "7 min read" },
  { slug: "why-your-website-gets-traffic-but-no-customers", title: "Why Your Website Gets Traffic but No Customers", description: "Common reasons high-traffic sites still fail to convert and how to fix the missed opportunities.", date: "2026-08-18", category: "Conversion", readTime: "6 min read" },
  { slug: "technical-seo-checklist-for-growing-businesses", title: "Technical SEO Checklist for Growing Businesses", description: "A structured SEO checklist covering crawlability, content structure, and technical improvements that matter.", date: "2026-08-02", category: "SEO", readTime: "8 min read" },
  { slug: "how-ai-is-changing-search-visibility", title: "How AI Is Changing Search Visibility", description: "A practical look at how AI-driven discovery, answer engines, and content strategies are changing search.", date: "2026-07-22", category: "AI SEO", readTime: "7 min read" },
  { slug: "website-conversion-optimization-practical-guide", title: "Website Conversion Optimization: A Practical Guide", description: "A useful framework for improving conversion without guessing or adding unnecessary friction.", date: "2026-07-08", category: "Web Design", readTime: "9 min read" },
  { slug: "how-small-businesses-can-use-ai-automation", title: "How Small Businesses Can Use AI Automation", description: "Identify where automation creates real return and keep the focus on practical business impact.", date: "2026-06-25", category: "AI & Automation", readTime: "6 min read" },
  { slug: "seo-vs-paid-advertising-what-businesses-should-know", title: "SEO vs Paid Advertising: What Businesses Should Know", description: "When to invest in search visibility, PPC, or a combined strategy to support longer-term growth.", date: "2026-06-12", category: "Marketing", readTime: "7 min read" },
  { slug: "how-to-build-a-lead-generation-funnel", title: "How to Build a Lead Generation Funnel", description: "Build a structured system that moves people from awareness to action in a more consistent way.", date: "2026-05-28", category: "Lead Generation", readTime: "8 min read" },
  { slug: "what-makes-a-business-website-convert-visitors", title: "What Makes a Business Website Convert Visitors", description: "Key traits of high-converting websites: clarity, trust, proof, and strategic UX decisions.", date: "2026-05-11", category: "Web Development", readTime: "6 min read" },
  { slug: "how-to-choose-a-digital-marketing-agency", title: "How to Choose a Digital Marketing Agency", description: "A practical framework for evaluating agencies, service fit, and the kind of partnership your business needs.", date: "2026-04-29", category: "Digital Strategy", readTime: "8 min read" },
];

export const marqueeItems = [
  "DIGITAL MARKETING",
  "SEO",
  "LEAD GENERATION",
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "AI & AUTOMATION",
  "DIGITAL STRATEGY",
];

export const servicePageSummary = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  short: service.short,
}));
