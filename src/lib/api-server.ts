import { cookies } from "next/headers";
import {
  ServerErrorResponse,
  SuccessResponse,
  ErrorResponse,
  ServerHttpFetchOptions,
} from "../types/http";
import { buildQueryParams } from "../helpers/buildQueryParams";
import { API_BASE_URL } from "../constants";

export async function serverApiFetch<T>({
  path,
  authenticated = false,
  queryParams = {},
  method,
  body,
  options = {},
}: ServerHttpFetchOptions): Promise<SuccessResponse<T> | ErrorResponse> {
  const cookieStore = await cookies();
  const sanitizedPath = path.startsWith("/") ? path : `/${path}`;
  const params = buildQueryParams(queryParams);
  const { headers, ...restOptions } = options;

  try {
    const fetchResponse = await fetch(
      `${API_BASE_URL}${sanitizedPath}${params}`,
      {
        method,
        ...(body && { body }),
        ...restOptions,
        headers: {
          ...headers,
          ...(authenticated && {
            Cookie: `access_token=${cookieStore.get("access_token")?.value}`,
          }),
        },
      }
    );

    const parsedResponse = await fetchResponse.json();

    if (!fetchResponse.ok) {
      const { message } = parsedResponse as ServerErrorResponse;
      return { isOk: false, error: message };
    }

    const data = parsedResponse as T;

    return {
      isOk: true,
      data,
    };
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "Something went wrong";
    return { isOk: false, error: errorMsg };
  }
}
