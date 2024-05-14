import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule } from '@app/common';
@Module({
  imports: [AuthModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
