import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from './dto/sign.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInEntity } from './entities/auth.entity';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from '@app/common/config';
import { User } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async singUp(signInDto: SignInDto): Promise<SignInEntity> {
    const user = await this.userService.create(signInDto);
    return this.generateTokens({ userId: user.id });
  }

  async signIn(signInDto: SignInDto): Promise<SignInEntity> {
    const { username, password } = signInDto;
    // Step 1: Fetch a user with the given username
    const user = await this.userService.findOneUser({ username });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for username: ${username}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return this.generateTokens({ userId: user.id });
  }

  async refreshToken(token: string): Promise<SignInEntity> {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    try {
      const { userId } = this.jwtService.verify(token, {
        secret: securityConfig.refreshSecret,
      });

      return this.generateTokens({ userId });
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return await this.userService.findOne(id);
  }

  private generateTokens(payload: { userId: string | number }): SignInEntity {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { userId: string | number }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string | number }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: securityConfig.refreshSecret,
      expiresIn: securityConfig.refreshIn,
    });
  }
}
