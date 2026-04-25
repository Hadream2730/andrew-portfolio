export type Metric = {
  label: string;
  value: string;
  detail?: string;
};

export const metrics: Metric[] = [
  { label: "Cost", value: "↓ 40%", detail: "Inference cost reduction" },
  { label: "Latency", value: "p95 < 60ms", detail: "Serving optimization" },
  { label: "Quality", value: "↑ 12%", detail: "User satisfaction / accuracy" },
  { label: "Adoption", value: "10k+ users", detail: "Internal / external" },
];

