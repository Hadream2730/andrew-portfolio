export type Capability = {
  title: string;
  description: string;
  tags: string[];
};

export const capabilities: Capability[] = [
  {
    title: "LLM applications & agents",
    description:
      "Tool use, workflow design, safety patterns, and production integration for real business processes.",
    tags: ["Agents", "Tooling", "Guardrails"],
  },
  {
    title: "RAG & search systems",
    description:
      "Retrieval design, chunking, hybrid search, caching, and evaluation for factuality and grounding.",
    tags: ["RAG", "Vector DB", "Search"],
  },
  {
    title: "Evaluation & observability",
    description:
      "Offline eval suites, golden sets, human review loops, and online monitoring for quality and drift.",
    tags: ["Evals", "Monitoring", "A/B tests"],
  },
  {
    title: "Production ML systems",
    description:
      "Reliable pipelines and serving: CI/CD, canaries, rollbacks, model governance, and reproducibility.",
    tags: ["MLOps", "K8s", "CI/CD"],
  },
  {
    title: "Applied ML (NLP/CV)",
    description:
      "End-to-end applied ML with pragmatic modeling choices and strong data discipline.",
    tags: ["NLP", "CV", "Tabular"],
  },
  {
    title: "Data pipelines",
    description:
      "Feature pipelines, data quality checks, backfills, and scalable processing for training and analytics.",
    tags: ["Spark", "Airflow", "Feature stores"],
  },
];

