import { Injectable } from '@nestjs/common';
import { PrismaService } from '@devpulse/backend-database';
import { RefreshTokenRepository } from '../domain/refresh-token.repository';

@Injectable()
export class PrismaRefreshTokenRepository implements RefreshTokenRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { token: string; userId: string; expiresAt: Date }) {
    return this.prisma.refreshToken.create({
      data,
    });
  }

  async findByToken(token: string) {
    return this.prisma.refreshToken.findUnique({
      where: { token },
      include: { user: true },
    });
  }

  async delete(id: string) {
    await this.prisma.refreshToken.delete({
      where: { id },
    });
  }

  async deleteByToken(token: string) {
    await this.prisma.refreshToken.delete({
      where: { token },
    });
  }

  async deleteAllForUser(userId: string) {
    await this.prisma.refreshToken.deleteMany({
      where: { userId },
    });
  }

  async findValidTokensByUserId(userId: string) {
    return this.prisma.refreshToken.findMany({
      where: {
        userId,
        revoked: false,
        expiresAt: {
          gt: new Date(),
        },
      },
    });
  }
}
