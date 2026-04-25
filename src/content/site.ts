export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Your Name",
  role: "Senior AI Engineer",
  location: "City, Country",
  tagline: "I build and ship reliable AI systems with measurable impact.",
  summary:
    "Senior AI Engineer specializing in LLM applications, evaluation, and production ML systems. I partner with product and engineering to deliver outcomes: higher quality, lower latency, and lower cost.",
  ctas: {
    primary: { label: "Download Resume", href: "/resume.pdf" },
    secondary: { label: "View Projects", href: "/projects" },
  },
  contact: {
    email: "you@example.com",
    calendly: "https://calendly.com/",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
  ] satisfies SocialLink[],
  seo: {
    title: "Senior AI Engineer | Portfolio",
    description:
      "Senior AI Engineer portfolio featuring AI systems, LLM applications, MLOps, and measurable outcomes.",
    url: "https://your-domain.com",
  },
} as const;

