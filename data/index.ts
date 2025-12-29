import portfolioData from "./portfolio.json";

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  icon: string;
  color: string;
  badge?: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export type OpenSourceStat = {
  icon: string;
  label: string;
  value: string;
};

export type Highlight = {
  icon: string;
  title: string;
  description: string;
};

export type NavLink = {
  name: string;
  href: string;
};

export type PortfolioData = typeof portfolioData;

export const data = portfolioData;
export default portfolioData;