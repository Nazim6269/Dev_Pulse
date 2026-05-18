import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { UsersService } from '@devpulse/backend-users';
import {
  REFRESH_TOKEN_REPOSITORY,
  RefreshTokenRepository,
} from '../domain/refresh-token.repository';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: RefreshTokenRepository,
  ) {}

  async register(
    email: string,
    password: string,
    confirmPassword: string,
    githubUsername: string,
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
        githubUsername,
      );
      const tokens = await this.generateTokens(user?.id, user.email);
      return { ...tokens, user };
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
    console.log(user.id);

    const tokens = await this.generateTokens(user?.id, user.email);
    return { ...tokens, user };
  }

  async refresh(userId: string, refreshToken: string) {
    this.logger.log(`Refreshing tokens for user: ${userId}`);

    // Get all valid refresh tokens for this user
    const token =
      await this.refreshTokenRepository.findValidTokensByUserId(userId);

    // Find matching token (bcrypt comparison)
    let matchingToken: any = null;
    for (const t of token) {
      const isValid = await bcrypt.compare(refreshToken, t.token);
      if (isValid) {
        matchingToken = t;
        break;
      }
    }

    if (!matchingToken) {
      this.logger.warn(
        `Invalid or expired refresh token used for user: ${userId}`,
      );
      // Security measure: Invalidate all sessions for this user if an invalid/reused token is detected
      await this.refreshTokenRepository.deleteAllForUser(userId);
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Invalidate the used token (Rotation)
    await this.refreshTokenRepository.delete(matchingToken.id);

    // Generate new pair
    const user = await this.usersService.getUserById(userId);
    if (!user) throw new UnauthorizedException();

    const tokens = await this.generateTokens(user?.id, user.email);
    return { ...tokens, user };
  }

  async logout(userId: string, refreshToken: string) {
    this.logger.log(`Logging out user: ${userId}`);

    const tokens =
      await this.refreshTokenRepository.findValidTokensByUserId(userId);

    for (const t of tokens) {
      const isValid = await bcrypt.compare(refreshToken, t.token);
      if (isValid) {
        await this.refreshTokenRepository.delete(t?.id);
        break;
      }
    }
  }

  async generateTokens(userId: string, email: string) {
    const payload = { sub: userId, email };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_ACCESS_SECRET'),
      expiresIn: '15m',
    });

    // Use a JWT for the refresh token to easily identify the user,
    // but still store the hash in DB for revocation and rotation checks.
    const refreshToken = this.jwtService.sign(
      { sub: userId },
      {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
        expiresIn: '7d',
      },
    );

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    const expiresInDays = parseInt(
      this.configService.get('JWT_REFRESH_EXPIRES_IN') || '7',
      10,
    );

    await this.refreshTokenRepository.create({
      token: hashedRefreshToken,
      userId,
      expiresAt: new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000),
    });

    return { accessToken, refreshToken };
  }
}
