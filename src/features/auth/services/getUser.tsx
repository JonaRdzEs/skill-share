import { get } from "@/src/helpers/http";

export function getUser() {
  return get({ path: "/users/me", authenticated: true });
}