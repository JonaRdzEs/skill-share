import { httpFetch } from "./fetchHelper";
import type { HttpFetchOptions } from "@/src/types/http";

export interface ResponseCallbacks<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
}

type MutationOptions = Omit<HttpFetchOptions, "method">;

type QueryOptions = Omit<HttpFetchOptions, "method" | "body">;

export function post<T>(options: MutationOptions) {
  return httpFetch<T>({ method: "post", ...options });
}

export function get<T>(options: QueryOptions) {
  return httpFetch<T>({ method: "get", ...options });
}

export function del<T>(options: QueryOptions) {
  return httpFetch<T>({ method: "delete", ...options });
}

export function put<T>(options: MutationOptions) {
  return httpFetch<T>({ method: "put", ...options });
}
