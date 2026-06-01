import { httpFetch } from "./fetchHelper";
import type { HttpFetchOptions } from "@/src/types/http";

export function post<T>({ path, body }: Omit<HttpFetchOptions, "method">) {
  return httpFetch<T>({ path, body, method: "post" });
}

export async function get<T>({
  path,
  authenticated,
}: Omit<HttpFetchOptions, "method" | "body">) {
  return httpFetch<T>({ method: "get", path, authenticated });
}
