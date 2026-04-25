export type ProjectCategory =
  | "GenAI"
  | "NLP"
  | "CV"
  | "MLOps"
  | "Data"
  | "Systems";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  timeframe: string;
  categories: ProjectCategory[];
  stack: string[];
  summary: string;
  role: string;
  highlights: string[];
  metrics: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "llm-support-agent",
    title: "LLM Support Agent with Evaluations & Guardrails",
    timeframe: "2025",
    categories: ["GenAI", "MLOps", "Systems"],
    stack: ["Next.js", "Python", "FastAPI", "Postgres", "Vector DB", "Kubernetes"],
    role: "Tech lead / IC",
    summary:
      "Built a production-grade LLM assistant for support workflows with robust evaluation, monitoring, and safe fallbacks.",
    highlights: [
      "Designed retrieval + tool-use workflow and production serving architecture",
      "Implemented offline eval suite and online quality monitoring",
      "Shipped guardrails, redaction, and human-in-the-loop escalations",
    ],
    metrics: ["-35% average handle time", "+12% CSAT", "-40% inference cost"],
    links: [{ label: "Case study", href: "/projects/llm-support-agent" }],
    featured: true,
  },
  {
    slug: "ranking-ml-platform",
    title: "Ranking & Personalization Platform",
    timeframe: "2024",
    categories: ["NLP", "MLOps", "Data"],
    stack: ["PyTorch", "Spark", "Airflow", "Feature Store", "AWS"],
    role: "Senior engineer",
    summary:
      "Delivered an end-to-end ranking system with reproducible training, feature pipelines, and low-latency inference.",
    highlights: [
      "Built feature pipelines with data quality checks and backfills",
      "Hardened training + deployment with CI, model cards, and rollbacks",
      "Led A/B testing design with product and data science partners",
    ],
    metrics: ["+8% CTR", "+5% conversion", "p95 latency under 60ms"],
    links: [{ label: "Case study", href: "/projects/ranking-ml-platform" }],
    featured: true,
  },
  {
    slug: "vision-quality-inspection",
    title: "Computer Vision Quality Inspection",
    timeframe: "2023",
    categories: ["CV", "Systems"],
    stack: ["PyTorch", "ONNX", "Edge deployment", "Docker"],
    role: "Lead engineer",
    summary:
      "Built a vision pipeline for defect detection with on-device inference and robust calibration.",
    highlights: [
      "Established labeling guidelines and active learning loop",
      "Optimized inference with quantization and model compilation",
      "Implemented drift monitoring and periodic re-training cadence",
    ],
    metrics: ["-50% false negatives", "-20% scrap rate"],
    links: [{ label: "Case study", href: "/projects/vision-quality-inspection" }],
    featured: false,
  },
];

