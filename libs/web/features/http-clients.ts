export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestConfig {
  url: string;
  method?: HttpMethod;
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
  timeout?: number;
  signal?: AbortSignal;
  responseType?: "json" | "blob" | "arraybuffer" | "text";
  onUploadProgress?: (progress: number) => void;
  onDownloadProgress?: (progress: number) => void;
  _retry?: boolean;
  _skipAuth?: boolean;
}

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  headers: Record<string, string>;
}

export interface IHttpClient {
  get<T>(
    url: string,
    config?: Omit<RequestConfig, "url" | "method" | "data">,
  ): Promise<HttpResponse<T>>;
  post<T>(
    url: string,
    data?: unknown,
    config?: Omit<RequestConfig, "url" | "method" | "data">,
  ): Promise<HttpResponse<T>>;
  put<T>(
    url: string,
    data?: unknown,
    config?: Omit<RequestConfig, "url" | "method" | "data">,
  ): Promise<HttpResponse<T>>;
  patch<T>(
    url: string,
    data?: unknown,
    config?: Omit<RequestConfig, "url" | "method" | "data">,
  ): Promise<HttpResponse<T>>;
  delete<T>(
    url: string,
    config?: Omit<RequestConfig, "url" | "method" | "data">,
  ): Promise<HttpResponse<T>>;
  request<T>(config: RequestConfig): Promise<HttpResponse<T>>;
}
