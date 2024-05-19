import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
    // Step 1: Fetch a user with the given username
    const user = await this.userService.findOneUser({ username });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for username: ${username}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return { accessToken: this.jwtService.sign({ userId: user.id }) };
  }
}
