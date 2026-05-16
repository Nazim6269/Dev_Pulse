import { Injectable, Inject, Logger } from '@nestjs/common';
import { USERS_REPOSITORY, UsersRepository } from '../domain/users.repository';
import { User } from '../domain/user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository
  ) {}

  async getAllUsers(): Promise<User[]> {
    this.logger.log('Fetching all users');
    return this.usersRepository.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.usersRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }


  async createUser(
    email: string,
    password: string,
    githubUsername?: string
  ): Promise<User> {
    this.logger.log(`Creating user with email: ${email}`);
    return this.usersRepository.create({
      email,
      password,
      name: githubUsername,
    });
  }
}
