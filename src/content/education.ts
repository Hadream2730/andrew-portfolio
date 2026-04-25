export type EducationItem = {
  school: string;
  degree: string;
  timeframe?: string;
  details?: string[];
};

export const education: EducationItem[] = [
  {
    school: "University Name",
    degree: "M.S. in Computer Science (AI/ML focus)",
    timeframe: "2018 – 2020",
    details: [
      "Thesis: Topic title (optional)",
      "Relevant coursework: ML, NLP, Distributed Systems (optional)",
    ],
  },
  {
    school: "University Name",
    degree: "B.S. in Computer Science",
    timeframe: "2014 – 2018",
  },
];

