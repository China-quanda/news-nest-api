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
import { RegionModule } from './system/dm/region/region.module';
import { NoticeModule } from './system/message/notice/notice.module';
import { PushModule } from './system/message/push/push.module';
import { LoginLogModule } from './system/log/login-log/login-log.module';
import { ServerModule } from './system/monitor/server/server.module';
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
    RegionModule,
    NoticeModule,
    PushModule,
    LoginLogModule,
    ServerModule,
  ], //CommonModule
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
