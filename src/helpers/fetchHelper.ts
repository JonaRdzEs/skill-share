import type {
  ErrorResponse,
  HttpFetchOptions,
  ServerErrorResponse,
  SuccessResponse,
} from "@/src/types/http";

export async function httpFetch<T>({
  path,
  method,
  body,
  authenticated = false,
  options = {},
}: HttpFetchOptions): Promise<SuccessResponse<T> | ErrorResponse> {
  try {
    const resp = await fetch(`http://localhost:3001${path}`, {
      method,
      credentials: authenticated ? "include" : "omit",
      headers: {
        "Content-Type": "application/json",
      },
      ...((method === "post" || method === "put") && body
        ? { body: JSON.stringify(body) }
        : {}),
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
