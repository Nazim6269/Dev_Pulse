import { User, UserDTO } from "./user.type";

export function transformUser(dto: UserDTO): User {
  console.log(dto, "dto2");
  return {
    id: dto.id,
    username: dto.login,
    avatar: dto.avatar_url,
  };
}
