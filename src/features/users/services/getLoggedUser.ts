import { UserInfo } from "@/src/types/users";
import { serverApiFetch } from "@/src/lib/api-server";

export async function getLoggedUser() {
  return serverApiFetch<UserInfo>({
    path: "/users/me",
    method: "get",
    authenticated: true,
  });
}
