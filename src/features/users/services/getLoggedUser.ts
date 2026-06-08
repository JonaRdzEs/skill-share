import { get } from "@/src/helpers/http";
import { UserInfo } from "@/src/types/users";

export async function getLoggedUser(token?: string) {
  const response = await get<UserInfo>({ path: "/users/me", token });
  const { isOk } = response;
  
  if(isOk) return { user: response.data.user };

  return { error: response.error };
}