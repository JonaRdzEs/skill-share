"use client";

import { API_BASE_URL } from "@/src/constants";
import { ServerErrorResponse } from "@/src/types/http";
import { LoginResponse } from "@/src/types/auth";

interface LoginBody {
  email: string;
  password: string;
}

export async function login(body: LoginBody) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { user } = parsedResponse as LoginResponse;
    return { user };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
