"use client";

import { LoginResponse } from "@/src/types/auth";
import { clientApiFetch } from "@/src/lib/api-client";

interface LoginBody {
  email: string;
  password: string;
}

export async function login(body: LoginBody) {
  return clientApiFetch<LoginResponse>({
    path: "/auth/login",
    method: "post",
    body: JSON.stringify(body),
    useProxy: true,
  });
}
