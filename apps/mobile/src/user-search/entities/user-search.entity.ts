import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserSearch } from '@prisma/client';

export class UserSearchEntity extends BaseEntity implements UserSearch {
  @ApiProperty()
  searchCount: number;
  @ApiProperty()
  keywords: string;
  @ApiProperty()
  type: number;
  @ApiProperty()
  userId: number;
}
