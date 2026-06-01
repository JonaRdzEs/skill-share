import type { SignUpData } from "@/src/types/auth";
import type { CreatedUserResponse } from "@/src/types/auth";
import { post } from "@/src/helpers/http";

interface SignUpOptions {
  data: SignUpData;
  onSuccess?: (data: CreatedUserResponse) => void;
  onError?: (error: string) => void;
}

export async function signup({ data, onSuccess = () => {}, onError = () => {} }: SignUpOptions) {
  const response = await post<CreatedUserResponse>({ path: "/auth/sign-up", body: data });

  if (!response.isOk) {
    onError(response.error);
    return;
  }

  onSuccess(response.data);
}
