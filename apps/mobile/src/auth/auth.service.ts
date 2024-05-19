import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './auth.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInEntity } from './entities/auth.entity';
import { UserEntity } from '../user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async singUp(signInDto: SignInDto): Promise<UserEntity> {
    return await this.userService.create(signInDto);
  }

  async signIn(signInDto: SignInDto): Promise<SignInEntity> {
    const { username, password } = signInDto;
    const user = await this.userService.findOneUser({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
