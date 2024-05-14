import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule, ConfigModule, PrismaService } from '@app/common'; //CommonModule
@Module({
  imports: [AuthModule, ConfigModule], //CommonModule
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
})
export class AdminModule {}
