import { Module } from '@nestjs/common';
import { UserSearchService } from './user-search.service';
import { UserSearchController } from './user-search.controller';
import { PrismaService } from '@app/common';

@Module({
  controllers: [UserSearchController],
  providers: [UserSearchService, PrismaService],
  exports: [UserSearchService],
})
export class UserSearchModule {}
