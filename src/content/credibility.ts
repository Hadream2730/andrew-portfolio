export type CredibilityItem =
  | { kind: "oss"; title: string; href: string }
  | { kind: "talk"; title: string; event?: string; href?: string }
  | { kind: "paper"; title: string; venue?: string; href?: string }
  | { kind: "award"; title: string; org?: string };

export const credibility: CredibilityItem[] = [
  { kind: "oss", title: "Open-source project name", href: "https://github.com/" },
  { kind: "talk", title: "Talk title", event: "Conference / Meetup" },
  { kind: "paper", title: "Paper title", venue: "Venue / Journal" },
  { kind: "award", title: "Award name", org: "Organization" },
];

