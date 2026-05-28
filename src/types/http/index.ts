export interface HttpFetchOptions {
  path: string;
  authenticated?: boolean;
  method: "get" | "post" | "put" | "delete";
  body?: BodyInit | object;
  options?: Omit<RequestInit, "method" | "body" | "headers">;
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

