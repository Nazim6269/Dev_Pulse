export interface RefreshTokenRepository {
  create(data: { token: string; userId: string; expiresAt: Date }): Promise<any>;
  findByToken(token: string): Promise<any>;
  delete(id: string): Promise<void>;
  deleteByToken(token: string): Promise<void>;
  deleteAllForUser(userId: string): Promise<void>;
  findValidTokensByUserId(userId: string): Promise<any[]>;
}

export const REFRESH_TOKEN_REPOSITORY = Symbol('REFRESH_TOKEN_REPOSITORY');
