"use client";

import { ServerErrorResponse } from "@/src/types/http";
import { API_BASE_URL } from "@/src/constants";
import { SearchSkillsResponse } from "@/src/types/skills";

export async function searchSkills(name: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/search?name=${name}`, {
      credentials: "include",
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { skills } = parsedResponse as SearchSkillsResponse;
    return { skills };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
