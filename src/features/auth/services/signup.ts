import type { SignUpData } from "@/src/types/auth";
import type { CreatedUserResponse } from "@/src/types/auth";
import { post } from "@/src/helpers/http";

export async function signup(body: SignUpData) {
  const resp = await post<CreatedUserResponse>({ path: "/auth/sign-up", body });
  if (resp.isOk) return resp.data;
}
