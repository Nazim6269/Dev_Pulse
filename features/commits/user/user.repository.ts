import { IHttpClient } from "@/features/http-clients";
import { UserDTO } from "./user.type";

export interface IUserRepository {
  findById(id: string): Promise<UserDTO>;
}
export class UserRepository implements IUserRepository {
  private readonly BASE = "/users";

  constructor(private readonly http: IHttpClient) {}

  async findById(id: string): Promise<UserDTO> {
    const { data } = await this.http.get<UserDTO>(`${this.BASE}/${id}`);
    return data;
  }
}
