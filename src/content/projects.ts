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
    slug: "llm-evaluation-platform",
    title: "LLM Evaluation & Monitoring Platform",
    timeframe: "2025",
    categories: ["GenAI", "MLOps", "Data"],
    stack: ["Python", "Postgres", "OpenTelemetry", "Kubernetes", "Dashboards"],
    role: "Tech lead",
    summary:
      "Created an evaluation platform to measure quality, safety, and regressions for LLM features across releases.",
    highlights: [
      "Defined a rubric and golden sets to track quality over time",
      "Built automated regression checks and release gates",
      "Integrated online monitoring to detect drift and incident patterns",
    ],
    metrics: ["-60% evaluation cycle time", "Fewer regressions reaching production"],
    links: [{ label: "Case study", href: "/projects/llm-evaluation-platform" }],
    featured: true,
  },
  {
    slug: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant for Internal Docs",
    timeframe: "2024",
    categories: ["GenAI", "Systems"],
    stack: ["Python", "Vector DB", "Search", "Caching", "Kubernetes"],
    role: "Senior engineer",
    summary:
      "Shipped a grounded knowledge assistant with hybrid retrieval, citations, and robust fallback behaviors.",
    highlights: [
      "Implemented hybrid retrieval (lexical + vector) with tuning workflow",
      "Added caching and query rewriting for latency and quality",
      "Shipped citation UX and safe fallbacks for low-confidence answers",
    ],
    metrics: ["p95 answer latency under 1.2s", "+15% task success rate"],
    links: [{ label: "Case study", href: "/projects/rag-knowledge-assistant" }],
    featured: true,
  },
  {
    slug: "real-time-feature-store",
    title: "Real-time Feature Store & Serving Layer",
    timeframe: "2023",
    categories: ["MLOps", "Systems", "Data"],
    stack: ["Kafka", "Redis", "Postgres", "Terraform", "Kubernetes"],
    role: "Lead engineer",
    summary:
      "Built a real-time feature serving layer to support personalization and fraud/risk models with strong SLAs.",
    highlights: [
      "Designed low-latency online feature APIs with consistency guarantees",
      "Added lineage, backfills, and data quality checks for reliability",
      "Standardized deployment and alerting across feature services",
    ],
    metrics: ["p95 < 20ms for feature fetch", "Improved training/serving parity"],
    links: [{ label: "Case study", href: "/projects/real-time-feature-store" }],
    featured: true,
  },
  {
    slug: "model-serving-optimization",
    title: "Model Serving Optimization (Latency & Cost)",
    timeframe: "2023",
    categories: ["MLOps", "Systems"],
    stack: ["ONNX", "Triton", "Quantization", "Autoscaling"],
    role: "Senior engineer",
    summary:
      "Optimized model serving with batching, compilation, and autoscaling to reduce cost and improve latency.",
    highlights: [
      "Implemented dynamic batching and concurrency controls",
      "Introduced quantization and compilation for hot models",
      "Hardened rollouts with canaries, dashboards, and SLOs",
    ],
    metrics: ["-35% p95 latency", "-30% infra cost"],
    links: [{ label: "Case study", href: "/projects/model-serving-optimization" }],
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

