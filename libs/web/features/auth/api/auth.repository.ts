import { IHttpClient } from "@/features/http-clients";
import { LoginParams, RegisterParams } from "../model/auth.types";

export class AuthRepository {
  constructor(private readonly http: IHttpClient) {}

  login<T = unknown>(params: LoginParams) {
    return this.http.post<T>('/api/v1/auth/login', params);
  }

  register<T = unknown>(params: RegisterParams) {
    return this.http.post<T>('/api/v1/auth/register', params);
  }

  me<T = unknown>() {
    return this.http.get<T>('/api/v1/auth/me');
  }

  refresh<T = unknown>() {
    return this.http.post<T>('/api/v1/auth/refresh', {}, { _skipAuth: true } as any);
  }

  logout<T = unknown>() {
    return this.http.post<T>('/api/v1/auth/logout', {});
  }
}
