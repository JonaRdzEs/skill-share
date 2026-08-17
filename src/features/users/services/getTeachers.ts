import { GetTeachersResponse } from "@/src/types/users";
import { serverApiFetch } from "@/src/lib/api-server";

export async function getTeachers({ name = "", limit = 10,  page = 1 }: {
  name?: string;
  limit?: number;
  page?: number,
}) {
  return serverApiFetch<GetTeachersResponse>({
    path: "/users/teachers/top-rated",
    method: "get",
    authenticated: true,
    queryParams: {
      ...(name.trim() && { name }),
      page,
      take: limit,
    },
  });
}
