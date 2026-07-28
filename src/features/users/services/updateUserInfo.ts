"use client";

import { UpdatedUserResponse } from "@/src/types/users";
import { clientApiFetch } from "@/src/lib/api-client";

interface UserInfoBody {
  username: string;
  location?: string | null;
  bio?: string | null;
  role?: "student" | "teacher";
}

export async function updateUserInfo(body: UserInfoBody) {
  return clientApiFetch<UpdatedUserResponse>({
    path: "/users/me",
    method: "put",
    body: JSON.stringify(body),
    useProxy: true,
  });
}
