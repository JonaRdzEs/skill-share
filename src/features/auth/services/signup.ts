"use client";

import type { SignUpData } from "@/src/types/auth";
import type { CreatedUserResponse } from "@/src/types/auth";
import { clientApiFetch } from "@/src/lib/api-client";

export async function signup(body: SignUpData) {
  return clientApiFetch<CreatedUserResponse>({
    path: "/auth/sign-up",
    method: "post",
    body: JSON.stringify(body),
    options: {
      headers: {
        "Content-Type": "application/json",
      }
    }
  });
}
