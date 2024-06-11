import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ConfigModule, PrismaModule, RedisModule } from '@app/common'; //CommonModule
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
import { UserModule } from './system/permission/user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { PreviewGuard } from '@app/common/guards/preview.guard';
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
    UserModule,
    RedisModule,
    PrismaModule,
  ], //CommonModule
  controllers: [AdminController],
  providers: [
    AdminService,
    // jwt守卫
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // 是否演示环境守卫
    {
      provide: APP_GUARD,
      useClass: PreviewGuard,
    },
  ],
})
export class AdminModule {}
