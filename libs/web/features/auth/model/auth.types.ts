export interface UserDto {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponseDto {
  access_token: string;
  user: UserDto;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}

export interface LoginParams {
  email: string;
  password?: string;
}

export interface RegisterParams {
  email: string;
  password?: string;
  githubUsername?: string;
  confirmPassword?: string;
}
