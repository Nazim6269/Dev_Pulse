import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@devpulse/backend-database';
import { User } from '../domain/user.entity';
import { UsersRepository } from '../domain/users.repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  private readonly logger = new Logger(PrismaUsersRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      this.logger.error('Failed to fetch users', error);
      throw error;
    }
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: any): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
