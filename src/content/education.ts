export type EducationItem = {
  school: string;
  degree: string;
  timeframe?: string;
  details?: string[];
};

export const education: EducationItem[] = [
  {
    school: "Massachusetts Institute of Technology",
    degree: "Master of Science (MS)",
    timeframe: "2008 – 2010",
  },
  {
    school: "Massachusetts Institute of Technology",
    degree: "Bachelor of Science (BS)",
    timeframe: "2002 – 2006",
  },
];

