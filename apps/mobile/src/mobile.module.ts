import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { ConfigModule } from '@app/common';
import { AppModule } from './app/app.module';

@Module({
  imports: [ConfigModule, AppModule],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
