export type ExperienceItem = {
  company: string;
  title: string;
  location?: string;
  timeframe: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "DataRobot",
    title: "Product Director",
    timeframe: "March 2019 – September 2024",
    bullets: [
      "Presented product direction and demos to dozens of customers, resulting in adoption of new features by 60%, and 90% positive recommendations by sales team.",
      "Engaged with customers across segments and technical abilities to understand their needs and challenges, present product direction and demos, and actively listen to feedback on new features.",
      "Produced strategy and product positioning messages by leveraging insights from product marketing, expert teams, analyst reports, market research, usage analytics, and customer engagement.",
      "Led 4 user research studies with 6+ participants and worked closely with GTM teams to translate feedback into a new overall user experience that improved product-market fit.",
      "Published and communicated multi-quarter product roadmaps aligned with the product vision and portfolio, resulting in an 80% increase in product usage.",
      "Successfully planned and executed dozens of features each year.",
    ],
  },
  {
    company: "General Assembly",
    title: "Data Science Instructor",
    timeframe: "February 2016 – April 2016",
    bullets: [
      "Taught a 12-week part-time data science course for professionals.",
      "Prepared teaching materials, advised student projects, and graded work.",
      "Course description: https://generalassemb.ly/education/datascience.",
    ],
  },
  {
    company: "GoTo",
    title: "Staff Data Scientist",
    timeframe: "January 2015 – March 2019",
    bullets: [
      "Developed machine learning models that deliver business value across products and functions (fraud detection, product automation, marketing intelligence, sales scoring).",
      "Integrated models into business operations via API and other deployment mechanisms; measured ROI with feedback loops and uplift tests.",
      "Analyzed user trial data to identify 5 key factors correlated with purchasing and recommended market messaging that increased trial conversions by 15%.",
      "Built custom data enrichment, features, and ETL for an AWS data lake (IP-lookup, usage aggregation, firmographics).",
      "Skills: Python, Keras/TensorFlow, scikit-learn, Pandas, DataRobot, R, Tableau, SQL, Presto/Hive, Spark, AWS.",
      "Awards: 2018 Global Hackathon (2nd place, image classification + augmented reality); 2017 Machine Learning Innovation Award (web classification); 2016 (3rd place, fraud detection).",
    ],
  },
  {
    company: "RTX",
    title: "Project Leader / Senior Engineer",
    timeframe: "June 2010 – January 2015",
    bullets: [
      "Used machine learning, text analytics, data mining, statistics, and visualization to add business value; identified an algorithmic error in company car mileage billing resulting in $1M in annual savings.",
      "Led development for several defense programs and managed enterprise process improvements.",
      "Raytheon Auditor of the Year; Engineering Leadership Program; PMP certified; Certified Internal Auditor.",
    ],
  },
  {
    company: "WaveWater",
    title: "Co-Founder",
    timeframe: "January 2008 – December 2009",
    bullets: [
      "Co-founded a clean energy startup to deliver fresh water using seawater reverse osmosis desalination.",
      "Presented pitch to business partners and investors; Semi-Finalist, MIT $100K Business Plan Competition.",
    ],
  },
];

