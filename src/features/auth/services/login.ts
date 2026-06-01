"use client";

import { ServerErrorResponse } from "@/src/types/http";
import { UserInfo } from "@/src/types/users";

interface LoginOptions {
  data: {
    email: string;
    password: string;
  };
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: string) => void;
}

export async function login({
  data,
  onSuccess = () => {},
  onError = () => {},
}: LoginOptions) {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    onSuccess(parsedResponse as UserInfo);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    onError(msg);
  }
}
