import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserArticleLike } from '@prisma/client';

export class UserArticleLikeEntity
  extends BaseEntity
  implements UserArticleLike
{
  @ApiProperty()
  userId: number;
  @ApiProperty()
  articleId: number;
}
