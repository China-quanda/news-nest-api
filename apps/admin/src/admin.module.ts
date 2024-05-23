import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule, ConfigModule } from '@app/common'; //CommonModule
import { OrgModule } from './system/organization/org/org.module';
@Module({
  imports: [AuthModule, ConfigModule, OrgModule], //CommonModule
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
