"use client";

import { ServerErrorResponse } from "@/src/types/http";
import { AddedUserSkillsResponse } from "@/src/types/users";

export async function createUserSkills(skillIds: number[]) {
  try {
    const response = await fetch(`/api/users/me/skills`, {
      method: "POST",
      body: JSON.stringify({ skillIds }),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { skills } = parsedResponse as AddedUserSkillsResponse;
    return { skills };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
