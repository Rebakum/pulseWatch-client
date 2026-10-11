import { env } from '@/config/env';

export interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data?: T;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors: string[];
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export const REQUEST_TIMEOUT_MS = 10_000;
export const NETWORK_ERROR_STATUS = 0;

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors: string[];

  constructor(statusCode: number, message: string, errors: string[] = []) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  timeoutMs?: number;
  signal?: AbortSignal;
}

const readPayload = async (response: Response): Promise<ApiResponse<unknown> | null> => {
  const text = await response.text();
  if (text.length === 0) {
    return null;
  }

  try {
    return JSON.parse(text) as ApiResponse<unknown>;
  } catch {
    return null;
  }
};

const request = async <T>(path: string, options: RequestOptions = {}): Promise<T> => {
  const {
    method = 'GET',
    body,
    headers = {},
    timeoutMs = REQUEST_TIMEOUT_MS,
    signal,
  } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  if (signal) {
    signal.addEventListener('abort', () => controller.abort(), { once: true });
  }

  try {
    const response = await fetch(`${env.NEXT_PUBLIC_API_URL}${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const payload = await readPayload(response);

    if (!response.ok) {
      throw new ApiError(
        response.status,
        payload && !payload.success ? payload.message : 'Request failed',
        payload && !payload.success ? payload.errors : [],
      );
    }

    if (payload && !payload.success) {
      throw new ApiError(
        response.status,
        payload.message,
        payload.errors,
      );
    }

    return (payload && payload.success ? payload.data : undefined) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError(NETWORK_ERROR_STATUS, 'Request timed out');
    }

    throw new ApiError(
      NETWORK_ERROR_STATUS,
      error instanceof Error ? error.message : 'Network request failed',
    );
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * Central API client: single place for base URL, headers, timeouts and
 * error handling. Components never build URLs or call fetch directly.
 */
export const apiClient = {
  get: <T>(path: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> =>
    request<T>(path, { ...options, method: 'GET' }),

  post: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> =>
    request<T>(path, { ...options, method: 'POST', body }),

  put: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> =>
    request<T>(path, { ...options, method: 'PUT', body }),

  patch: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> =>
    request<T>(path, { ...options, method: 'PATCH', body }),

  delete: <T>(path: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> =>
    request<T>(path, { ...options, method: 'DELETE' }),
};
