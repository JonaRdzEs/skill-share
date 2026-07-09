export interface Skill {
  id: number;
  name: string;
}

export interface SearchSkillsResponse {
  skills: Skill[],
}