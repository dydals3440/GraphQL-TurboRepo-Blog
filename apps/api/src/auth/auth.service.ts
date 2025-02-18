import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { verify } from 'argon2';
import { SignInInput } from 'src/auth/dto/signin.input.dto';
import { AuthJwtPayload } from 'src/auth/types/auth-jwtPayload';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new UnauthorizedException('User Not Found');

    // TODO: password가 없을 경우 에러 처리
    const passwordMatched = await verify(user.password as string, password);

    if (!passwordMatched)
      throw new UnauthorizedException('Invalid Credentials');

    return user;
  }

  async generateToken(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }

  // prisma type
  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);

    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      accessToken,
    };
  }
}
