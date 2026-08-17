"use client";

import { clientApiFetch } from "@/src/lib/api-client";

export async function logout() {
  return await clientApiFetch<{ message: string }>({
    path: "/auth/logout",
    method: "post",
    useProxy: true,
  });
}
