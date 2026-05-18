import { IsEmail, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsString()
  githubUsername!: string;

  @IsString()
  @MinLength(6)
  confirmPassword!: string;
}

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsOptional()
  @IsBoolean()
  rememberMe?: boolean;
}
