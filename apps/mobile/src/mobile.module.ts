import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { ConfigModule } from '@app/common';

@Module({
  imports: [ConfigModule],
  controllers: [MobileController],
  providers: [MobileService],
})
export class MobileModule {}
