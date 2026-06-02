import { httpFetch } from "./fetchHelper";
import type {
  ErrorResponse,
  HttpFetchOptions,
  SuccessResponse,
} from "@/src/types/http";

export interface ResponseCallbacks<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
}

type MutationOptions<T> = Omit<HttpFetchOptions, "method"> &
  ResponseCallbacks<T>;

type QueryOptions<T> = Omit<HttpFetchOptions, "method" | "body"> &
  ResponseCallbacks<T>;

function handleResponse<T>({
  response,
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}: { response: ErrorResponse | SuccessResponse<T> } & ResponseCallbacks<T>) {
  const { isOk } = response;

  if (isOk) {
    onSuccess(response.data);
  } else {
    onError(response.error);
  }

  onSettled();
}

export async function post<T>({
  onSuccess,
  onError,
  onSettled,
  ...options
}: MutationOptions<T>) {
  const response = await httpFetch<T>({ method: "post", ...options });
  handleResponse<T>({ response, onSuccess, onError, onSettled });
}

export async function get<T>({
  onSuccess,
  onError,
  onSettled,
  ...options
}: QueryOptions<T>) {
  const response = await httpFetch<T>({ method: "get", ...options });
  handleResponse<T>({ response, onSuccess, onError, onSettled });
}

export async function del<T>({
  onSuccess,
  onError,
  onSettled,
  ...options
}: QueryOptions<T>) {
  const response = await httpFetch<T>({ method: "delete", ...options });
  handleResponse<T>({ response, onSuccess, onError, onSettled });
}

export async function put<T>({
  onSuccess,
  onError,
  onSettled,
  ...options
}: MutationOptions<T>) {
  const response = await httpFetch<T>({ method: "put", ...options });
  handleResponse<T>({ response, onSuccess, onError, onSettled });
}
