import type { SignUpData } from "@/src/types/auth";
import type { CreatedUserResponse } from "@/src/types/auth";
import { post, type ResponseCallbacks } from "@/src/helpers/http";

interface SignUpOptions extends ResponseCallbacks<CreatedUserResponse> {
  data: SignUpData;
}

export function signup({ data,...rest }: SignUpOptions) {
  post<CreatedUserResponse>({ path: "/auth/sign-up", body: data, ...rest });
}
