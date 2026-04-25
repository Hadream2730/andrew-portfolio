export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Andrew Greenhut",
  role: "Senior AI Engineer",
  location: "City, Country",
  tagline: "I build and ship reliable AI systems with measurable impact.",
  summary:
    "Senior AI Engineer specializing in LLM applications, evaluation, and production ML systems. I partner with product and engineering to deliver outcomes: higher quality, lower latency, and lower cost.",
  ctas: {
    primary: { label: "Contact", href: "/contact" },
    secondary: { label: "View Projects", href: "/projects" },
  },
  contact: {
    calendly: "https://calendly.com/clientsuccess-bsdata/30min",
  },
  socials: [] satisfies SocialLink[],
  seo: {
    title: "Senior AI Engineer | Portfolio",
    description:
      "Senior AI Engineer portfolio featuring AI systems, LLM applications, MLOps, and measurable outcomes.",
    url: "https://your-domain.com",
  },
} as const;

