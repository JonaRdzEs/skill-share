"use client";

import { clientApiFetch } from "@/src/lib/api-client";
import { SearchSkillsResponse } from "@/src/types/skills";

export async function searchSkills(name: string) {
  return clientApiFetch<SearchSkillsResponse>({
    path: "/skills/search",
    method: "get",
    queryParams: { name },
    useProxy: true,
  });
}
