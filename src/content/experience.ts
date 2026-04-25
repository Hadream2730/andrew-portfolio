export type ExperienceItem = {
  company: string;
  title: string;
  location?: string;
  timeframe: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Company Name",
    title: "Senior AI Engineer",
    timeframe: "2024 – Present",
    bullets: [
      "Led delivery of production AI features end-to-end: problem framing, data, modeling, evaluation, and serving.",
      "Improved quality and reliability through offline evals, canary rollouts, and observability.",
      "Partnered with product, legal, and security to ship compliant AI systems with measurable outcomes.",
    ],
  },
  {
    company: "Previous Company",
    title: "Machine Learning Engineer",
    timeframe: "2021 – 2024",
    bullets: [
      "Built training pipelines and low-latency inference services for personalization and forecasting use cases.",
      "Reduced operational toil by standardizing deployment templates and automated monitoring/alerts.",
    ],
  },
];

