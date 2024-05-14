import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule, ConfigModule } from '@app/common'; //CommonModule
@Module({
  imports: [AuthModule, ConfigModule], //CommonModule
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
