import { User } from './user.entity';

export interface UsersRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: Partial<User>): Promise<User>;
}

export const USERS_REPOSITORY = Symbol('USERS_REPOSITORY');
