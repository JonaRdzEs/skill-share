"use client";

import { ServerErrorResponse } from "@/src/types/http";
import { API_BASE_URL } from "@/src/constants";
import { CreateSkillsResponse } from "@/src/types/skills";

export async function createSkills(skillsToAdd: string[]) {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skills: skillsToAdd }),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { skills } = parsedResponse as CreateSkillsResponse;
    return { skills };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
