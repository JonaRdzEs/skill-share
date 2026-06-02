import { get, ResponseCallbacks } from "@/src/helpers/http";
import { UserInfo } from "@/src/types/users";

type Options = ResponseCallbacks<UserInfo>;

export function getLoggedUser(options?: Options) {
  get<UserInfo>({ path: "/users/me", authenticated: true, ...options });
}