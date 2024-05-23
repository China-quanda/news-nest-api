import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthModule, ConfigModule } from '@app/common'; //CommonModule
import { OrgModule } from './system/organization/org/org.module';
import { DeptModule } from './system/organization/dept/dept.module';
import { PostModule } from './system/organization/post/post.module';
import { MobileDeviceModule } from './system/permission/mobile-device/mobile-device.module';
import { SystemDmDictModule } from './system/dm/dict/dict.module';
import { DictDataModule } from './system/dm/dict-data/dict-data.module';
import { CategoryModule } from './system/dm/category/category.module';
import { ConfigModule as SystemDmConfigModule } from './system/dm/config/config.module';
@Module({
  imports: [
    AuthModule,
    ConfigModule,
    OrgModule,
    DeptModule,
    PostModule,
    MobileDeviceModule,
    SystemDmDictModule,
    DictDataModule,
    CategoryModule,
    SystemDmConfigModule,
  ], //CommonModule
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
