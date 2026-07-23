import { cookies } from "next/headers";
import { ServerErrorResponse } from "@/src/types/http";
import { GetTeacherByIdResponse } from "@/src/types/users";
import { API_BASE_URL } from "@/src/constants";

export async function getTeacherById(id: string) {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("access_token")?.value;

  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}?role=teacher`, {
      headers: {
        Cookie: `access_token=${token}`,
      }
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { teacher } = parsedResponse as GetTeacherByIdResponse;
    return { teacher };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
