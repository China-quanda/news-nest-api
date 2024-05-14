import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './auth.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async singUp(createAuthDto: CreateAuthDto): Promise<void> {
    console.log('createAuthDto', createAuthDto);
    this.userService.create(createAuthDto);
  }

  async signIn(createAuthDto: CreateAuthDto): Promise<{ accessToken: string }> {
    const { username, password } = createAuthDto;
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
