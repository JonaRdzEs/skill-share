import { serverApiFetch } from "@/src/lib/api-server";
import { SessionListResponse } from "@/src/types/sessions";

export async function getUserSessions(params?: {
  take?: number;
  page?: number;
}) {
  const { take = 10, page = 1 } = params ?? {};
  return serverApiFetch<SessionListResponse>({
    path: "/users/me/sessions",
    method: "get",
    authenticated: true,
    queryParams: {
      take,
      page,
    },
  });
}
