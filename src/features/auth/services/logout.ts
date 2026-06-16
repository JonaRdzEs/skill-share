"use client";

import { ServerErrorResponse } from "@/src/types/http";

export async function logout() {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
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
