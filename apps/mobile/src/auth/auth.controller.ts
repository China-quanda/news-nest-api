import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singUp')
  async singUp(@Body() createAuthDto: CreateAuthDto): Promise<void> {
    this.authService.singUp(createAuthDto);
  }

  @Post('singIn')
  async singIn(
    @Body() createAuthDto: CreateAuthDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(createAuthDto);
  }
}
