export interface Skill {
  category?: string;
  items?: string[];
  name? :string;
  percentage?: number
  icon?:string
}


interface SkillCategory {
  name: string;
  skills: Skill[];
}
