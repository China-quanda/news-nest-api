import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleNest } from '@nestjs/config';
import configuration from './';
@Module({
  imports: [
    ConfigModuleNest.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development', '.env.production'],
      load: [configuration],
    }),
  ],
})
export class ConfigModule {}
