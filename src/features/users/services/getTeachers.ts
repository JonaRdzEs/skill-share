import { cookies } from "next/headers";
import { ServerErrorResponse } from "@/src/types/http";
import { API_BASE_URL } from "@/src/constants";

export async function getTeachers() {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("access_token")?.value;

  try {
    const response = await fetch(`${API_BASE_URL}/users/teachers/top-rated`, {
      headers: {
        Cookie: `access_token=${token}`,
      },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    const { teachers } = parsedResponse as {
      teachers: {
        photoUrl: string | null;
        skills: string[];
        id: string;
        bio: string | null;
        name: string;
      }[];
    };
    return { teachers };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Something went wrong";
    return { error: msg };
  }
}
