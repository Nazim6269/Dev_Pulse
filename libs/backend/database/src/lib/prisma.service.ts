import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  private logger: Logger;

  constructor(configService: ConfigService) {
    const connectionString = configService.get<string>('DATABASE_URL');
    
    if (!connectionString) {
      throw new Error('DATABASE_URL is missing from environment variables');
    }

    const adapter = new PrismaNeon({
      connectionString,
    });

    super({
      adapter,
      log: configService.get('NODE_ENV') === 'development' 
        ? ['query', 'info', 'warn', 'error'] 
        : ['error'],
    });

    this.logger = new Logger(PrismaService.name);
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('Disconnecting Prisma client');
    await this.$disconnect();
  }
}
