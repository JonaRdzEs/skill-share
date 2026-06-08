import type {
  ErrorResponse,
  HttpFetchOptions,
  ServerErrorResponse,
  SuccessResponse,
} from "@/src/types/http";
import { API_BASE_URL } from "../constants";

export async function httpFetch<T>({
  path,
  method,
  body,
  token,
  options = {},
}: HttpFetchOptions): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const resp = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: {
        ...(body &&
          typeof body === "object" && { "Content-Type": "application/json" }),
        ...(token && { Cookie: `access_token=${token}` }),
      },
      ...(body && { body: JSON.stringify(body) }),
      ...options,
    });

    const parsedResponse = await resp.json();

    if (!resp.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      throw new Error(message);
    }
    return {
      isOk: true,
      data: parsedResponse as T,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        isOk: false,
        error: error.message,
      };
    }
    return { isOk: false, error: "Something went wrong" };
  }
}
