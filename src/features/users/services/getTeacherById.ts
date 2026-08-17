import { GetTeacherByIdResponse } from "@/src/types/users";
import { serverApiFetch } from "@/src/lib/api-server";

export async function getTeacherById(id: string) {
  return serverApiFetch<GetTeacherByIdResponse>({
    path: `/users/${id}`,
    method: "get",
    authenticated: true,
    queryParams: {
      role: "teacher",
    },
  });
}
