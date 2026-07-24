import { cookies } from "next/headers";
import { ServerErrorResponse } from "@/src/types/http";
import { API_BASE_URL } from "@/src/constants";
import { GetTeachersResponse } from "@/src/types/users";

export async function getTeachers({name, limit = 10 }: { name?: string, limit?: number }) {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("access_token")?.value;
  try {
    const response = await fetch(`${API_BASE_URL}/users/teachers/top-rated${name?.trim() ? `?name=${name}&take=${limit}` : `?take=${limit}`}`, {
      headers: {
        Cookie: `access_token=${token}`,
      },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { teachers, totalCount, totalPages } = parsedResponse as GetTeachersResponse;
    return { teachers, totalCount, totalPages };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
