import { Injectable, UnauthorizedException, ConflictException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '@devpulse/backend-users';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(
    email: string,
    password: string,
    confirmPassword: string,
    githubUsername: string
  ) {
    this.logger.log(`Registering user: ${email}`);

    if (password !== confirmPassword) {
      throw new ConflictException('Passwords do not match');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await this.usersService.createUser(
        email,
        hashedPassword,
        githubUsername
      );
      return this.generateToken(user.id, user.email);
    } catch (error) {
      this.logger.error(`Registration failed for ${email}`, error);
      throw new ConflictException('User already exists');
    }
  }

  async login(email: string, password: string) {
    this.logger.log(`Login attempt: ${email}`);
    
    const user = await this.usersService.getUserByEmail(email);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateToken(user.id, user.email);
  }

  private generateToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
