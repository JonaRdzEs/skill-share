"use client";

import { ServerErrorResponse } from "@/src/types/http";

export async function deleteUserSkills(userSkillIds: number[]) {
  try {
    const response = await fetch(`/api/users/me/skills`, {
      method: "DELETE",
      body: JSON.stringify({ userSkillIds }),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }

  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
