import type { SignUpData } from "@/src/types/auth";
import type { CreatedUserResponse } from "@/src/types/auth";
import { post } from "@/src/helpers/http";

export async function signup(body: SignUpData) {
  const response = await  post<CreatedUserResponse>({ path: "/auth/sign-up", body });
  const { isOk } = response;
  
  if(isOk) return { user: response.data.user };

  return { error: response.error }
}
