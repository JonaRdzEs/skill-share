"use client";

import {
  ServerErrorResponse,
  SuccessResponse,
  ErrorResponse,
  ClientHttpFetchOptions,
} from "../types/http";
import { buildQueryParams } from "../helpers/buildQueryParams";
import { API_BASE_URL } from "../constants";

export async function clientApiFetch<T>({
  path,
  useProxy = false,
  queryParams = {},
  method,
  body,
  options,
}: ClientHttpFetchOptions): Promise<SuccessResponse<T> | ErrorResponse> {
  const sanitizedPath = path.startsWith("/") ? path : `/${path}`;
  const params = buildQueryParams(queryParams);

  const baseUrl = useProxy ? "/api" : API_BASE_URL;

  try {
    const fetchResponse = await fetch(`${baseUrl}${sanitizedPath}${params}`, {
      method,
      ...(body && { body }),
      ...options,
    });

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
