import { httpFetch } from "./fetchHelper";
import type { HttpFetchOptions } from "@/src/types/http";

export async function post<T>({
  path,
  body,
}: Omit<HttpFetchOptions, "method">) {
  return httpFetch<T>({ path, body, method: "post" });
}
