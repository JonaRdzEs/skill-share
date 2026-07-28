"use client";

import { clientApiFetch } from "@/src/lib/api-client";

export async function deleteUserSkills(userSkillIds: number[]) {
  return clientApiFetch<{ message: string }>({
    path: "/users/me/skills",
    method: "delete",
    body: JSON.stringify({ userSkillIds }),
    useProxy: true,
  });
}
