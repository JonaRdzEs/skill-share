export interface HttpFetchOptions {
  path: string;
  queryParams?: Record<string, string | number | boolean>;
  method: "get" | "post" | "put" | "delete";
  body?: BodyInit;
  options?: Omit<RequestInit, "method" | "body">;
}

export interface ClientHttpFetchOptions extends HttpFetchOptions {
  useProxy?: boolean; // whether to use route handlers or not
}

export interface ServerHttpFetchOptions extends HttpFetchOptions {
  authenticated?: boolean;
}

export interface ServerErrorResponse {
  code: string;
  message: string;
}

export interface SuccessResponse<T> {
  isOk: true;
  data: T
}

export interface ErrorResponse {
  isOk: false;
  error: string;
}

