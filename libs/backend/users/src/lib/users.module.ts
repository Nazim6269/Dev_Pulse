import { Module } from '@nestjs/common';
import { USERS_REPOSITORY } from './domain/users.repository';
import { PrismaUsersRepository } from './infrastructure/prisma-users.repository';
import { UsersService } from './application/users.service';
import { UsersController } from './presentation/users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: PrismaUsersRepository,
    },
    UsersService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
