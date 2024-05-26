import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign.dto';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { SignInEntity } from './entities/auth.entity';
import { UserEntity } from '../user/entities/user.entity';
import { RefreshTokenInput } from './dto/refresh-token.input';

@ApiTags('auth授权')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '注册' })
  @ApiCreatedResponse({ type: UserEntity })
  @Post('singUp')
  async singUp(@Body() signInDto: SignInDto): Promise<SignInEntity> {
    return await this.authService.singUp(signInDto);
  }

  @ApiOperation({ summary: '登录' })
  @ApiCreatedResponse({ type: SignInEntity })
  @Post('singIn')
  async singIn(@Body() signInDto: SignInDto): Promise<SignInEntity> {
    return await this.authService.signIn(signInDto);
  }

  @ApiOperation({ summary: '刷新token' })
  @ApiCreatedResponse({ type: SignInEntity })
  @Post('refreshToken')
  async refreshToken(
    @Body() { token }: RefreshTokenInput,
  ): Promise<SignInEntity> {
    return await this.authService.refreshToken(token);
  }
}
