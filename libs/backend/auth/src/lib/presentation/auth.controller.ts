import { Controller, Post, Body, Res, Req, UseGuards, UnauthorizedException, Get } from '@nestjs/common';
import { Response, Request } from 'express';
import { User } from '@devpulse/backend-users';
import { AuthService } from '../application/auth.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtAuthGuard } from '../infrastructure/jwt-auth.guard';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '@devpulse/backend-users';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, user } = await this.authService.register(
      dto.email,
      dto.password,
      dto.confirmPassword,
      dto.githubUsername
    );
    this.setRefreshTokenCookie(res, refreshToken);
    return { access_token: accessToken, user: this.sanitizeUser(user) };
  }

  @Post('login')
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, user } = await this.authService.login(dto.email, dto.password);
    this.setRefreshTokenCookie(res, refreshToken);
    return { access_token: accessToken, user: this.sanitizeUser(user) };
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies['refresh_token'];
    if (!refreshToken) throw new UnauthorizedException('No refresh token provided');

    try {
      const decoded: any = JSON.parse(Buffer.from(refreshToken.split('.')[1], 'base64').toString());
      const userId = decoded.sub;

      const { accessToken, refreshToken: newRefreshToken, user } = await this.authService.refresh(userId, refreshToken);
      this.setRefreshTokenCookie(res, newRefreshToken);
      return { access_token: accessToken, user: this.sanitizeUser(user) };
    } catch (error) {
      this.clearRefreshTokenCookie(res);
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies['refresh_token'];
    const userId = req.user.sub;
    
    if (refreshToken) {
      await this.authService.logout(userId, refreshToken);
    }
    
    this.clearRefreshTokenCookie(res);
    return { message: 'Logged out successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: { user: { sub: string } }) {
    const user = await this.usersService.getUserById(req.user.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.sanitizeUser(user);
  }

  private sanitizeUser(user: User): Omit<User, 'password'> {
    const { password: _password, ...safeUser } = user;
    return safeUser;
  }

  private setRefreshTokenCookie(res: Response, token: string) {
    const expiresInDays = parseInt(this.configService.get('JWT_REFRESH_EXPIRES_IN') || '7', 10);
    
    res.cookie('refresh_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: expiresInDays * 24 * 60 * 60 * 1000,
      path: '/auth/refresh',
    });
  }

  private clearRefreshTokenCookie(res: Response) {
    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/auth/refresh',
    });
  }
}
