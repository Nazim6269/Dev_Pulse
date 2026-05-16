import { logger } from "@/features/logger";
import { transformUser } from "./user.transformer";
import { parseError } from "@/features/api-errors";
import { User, UserDTO } from "./user.type";
export interface IUserRepository {
  findById(id: string): Promise<UserDTO>;
}
export class UserService {
  constructor(private readonly repo: IUserRepository) {}

  async getUser(id: string): Promise<User> {
    try {
      const dto = await this.repo.findById(id);
      return transformUser(dto);
    } catch (error) {
      logger.error("error ", error);
      throw parseError(error);
    }
  }
}
