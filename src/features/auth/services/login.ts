"use client";

import { ResponseCallbacks } from "@/src/helpers/http";
import { ServerErrorResponse } from "@/src/types/http";
import { UserInfo } from "@/src/types/users";

interface LoginOptions extends ResponseCallbacks<UserInfo> {
  data: {
    email: string;
    password: string;
  };
}

export async function login({
  data,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
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
  } finally {
    onSettled();
  }
}
