"use client";

import { ServerErrorResponse } from "@/src/types/http";
import { UpdatedUserResponse } from "@/src/types/users";
import { API_BASE_URL } from "@/src/constants";

interface UserInfoBody {
  username: string;
  location?: string;
  bio?: string;
}

export async function updateUserInfo(body: UserInfoBody) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
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
