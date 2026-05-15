import { IHttpClient } from "../http-clients";
import { logger } from "../logger";
import { tokenStore } from "../token-store";

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthUser {
  id: string;
  email: string;
}
export interface IAuthService {
  login(credentials: LoginCredentials): Promise<AuthUser>;
  refreshToken(): Promise<string | null>;
}
export class AuthService implements IAuthService {
  private refreshPromise?: Promise<string | null> | null = null;

  constructor(private readonly http: IHttpClient) {}
// user login

  async login(credentials: LoginCredentials): Promise<AuthUser> {
    const { data } = await this.http.post<AuthTokens>(
      "/auth/login",
      credentials,
      { _skipAuth: true } as never,
    );
    tokenStore.setAccessToken(data.accessToken);
    this.scheduleRefreshToken(data.refreshToken);
  
  }

  // silent refresh
  async refreshToken(): Promise<string | null> {
    if (this.refreshPromise) return this.refreshPromise;
    this.refreshPromise = this.http
      .post<AuthTokens>("/auth/refresh", undefined, {
        _skipAuth: true,
      } as never)
      .then((data) => {
        tokenStore.setAccessToken(data.accessToken);
        this.scheduleRefreshToken(data.expiresIn);
        return data.accessToken;
      })
      .catch((error) => {
        logger.error("Silent refresh failed", error);
        tokenStore.clearAccessToken();
        return null;
      })
      .finally(() => {
        this.refreshPromise = null;
      });

    return this.refreshPromise;
  }

  // schedule refresh token
  private scheduleRefreshToken(expiresIn: number) {
    const delay = (expiresIn - 60) * 1000;
    if (delay <= 0) return;

    setTimeout(() => this.refreshToken(), delay);
  }
}
