import { UserSkillsResponse } from "@/src/types/users";
import { serverApiFetch } from "@/src/lib/api-server";

export async function getSkillsByUser(userId: string) {
  return serverApiFetch<UserSkillsResponse>({
    path: `/users/${userId}/skills`,
    method: "get",
    authenticated: true,
  });
}
