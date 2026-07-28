"use client";

import { CreateSkillsResponse } from "@/src/types/skills";
import { clientApiFetch } from "@/src/lib/api-client";

export async function createSkills(skillsToAdd: string[]) {
  return clientApiFetch<CreateSkillsResponse>({
    path: "/skills",
    method: "post",
    body: JSON.stringify({ skills: skillsToAdd }),
    useProxy: true,
  });
}
