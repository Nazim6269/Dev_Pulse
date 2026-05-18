import { logger } from '@/features/logger';
import { AuthRepository } from '../api/auth.repository';
import { parseError } from '@/features/api-errors';
import { tokenStore } from '@/features/token-store';
import {
  AuthResponseDto,
  AuthUser,
  UserDto,
  LoginParams,
  RegisterParams,
} from './auth.types';

// ---------------------------------------------------------------------------
// Transformers
// ---------------------------------------------------------------------------

function transformUser(dto: UserDto): AuthUser {
  const displayName = dto.name || dto.email.split('@')[0];
  return {
    id: dto.id,
    email: dto.email,
    name: displayName,
    githubUsername: dto.githubUsername ?? dto.name,
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${dto.email}`,
  };
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export class AuthService {
  private refreshPromise?: Promise<string | null> | null = null;

  constructor(private readonly repo: AuthRepository) {}

  async login(params: LoginParams): Promise<{ token: string; user: AuthUser }> {
    try {
      const { data } = await this.repo.login<AuthResponseDto>(params);
      
      tokenStore.setAccessToken(data.access_token);
      this.scheduleRefreshToken(3600);
      return {
        token: data.access_token,
        user: transformUser(data.user),
      };
    } catch (error) {
      logger.error(String(error), 'Error during login');
      throw parseError(error);
    }
  }

  async register(
    params: RegisterParams,
  ): Promise<{ token: string; user: AuthUser }> {
    try {
      const { data } = await this.repo.register<AuthResponseDto>(params); 
      tokenStore.setAccessToken(data.access_token);
      this.scheduleRefreshToken(3600);
      return {
        token: data.access_token,
        user: transformUser(data.user),
      };
    } catch (error) {
      logger.error(String(error), 'Error during registration');
      throw parseError(error);
    }
  }

  async getCurrentUser(): Promise<AuthUser> {
    try {
      const { data } = await this.repo.me<UserDto>();
      return transformUser(data);
    } catch (error) {
      logger.error(String(error), 'Error fetching current user');
      throw parseError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.repo.logout();
      tokenStore.clearAccessToken();
    } catch (error) {
      logger.error(String(error), 'Error during logout');
      throw parseError(error);
    }
  }

  async refreshToken(): Promise<string | null> {
    if (this.refreshPromise) return this.refreshPromise;

    this.refreshPromise = this.repo
      .refresh<AuthResponseDto>()
      .then(({ data }) => {
        tokenStore.setAccessToken(data.access_token);
        this.scheduleRefreshToken(3600);
        return data.access_token;
      })
      .catch((error) => {
        logger.error('Silent refresh failed', error);
        tokenStore.clearAccessToken();
        return null;
      })
      .finally(() => {
        this.refreshPromise = null;
      });

    return this.refreshPromise;
  }

  private scheduleRefreshToken(expiresIn: number) {
    const delay = (expiresIn - 60) * 1000;
    if (delay <= 0) return;

    setTimeout(() => this.refreshToken(), delay);
  }
}
