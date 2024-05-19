import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, PrismaService } from '@app/common';
import appConfig from '@app/common/config';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
const { jwt } = appConfig();
@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
  imports: [
    UserModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwt.secret,
      signOptions: jwt.signOptions,
    }),
  ],
})
export class AuthModule {}
