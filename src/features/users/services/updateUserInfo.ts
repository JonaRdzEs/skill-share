"use client";

import { ServerErrorResponse } from "@/src/types/http";
import { UpdatedUserResponse } from "@/src/types/users";

interface UserInfoBody {
  username: string;
  location?: string | null;
  bio?: string | null;
  role?: "student" | "teacher";
}

export async function updateUserInfo(body: UserInfoBody) {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "PUT",
      body: JSON.stringify(body),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { user } = parsedResponse as UpdatedUserResponse;
    return { user };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
