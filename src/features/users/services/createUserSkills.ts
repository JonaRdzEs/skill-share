"use client";

import { AddedUserSkillsResponse } from "@/src/types/users";
import { clientApiFetch } from "@/src/lib/api-client";

export async function createUserSkills(skillIds: number[]) {
  return clientApiFetch<AddedUserSkillsResponse>({
    path: "/users/me/skills",
    method: "post",
    body: JSON.stringify({ skillIds }),
    useProxy: true,
  });
}
