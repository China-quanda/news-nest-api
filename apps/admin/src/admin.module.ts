import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule, ConfigModule } from '@app/common'; //CommonModule
import { OrgModule } from './system/organization/org/org.module';
import { DeptModule } from './system/organization/dept/dept.module';
@Module({
  imports: [AuthModule, ConfigModule, OrgModule, DeptModule], //CommonModule
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
