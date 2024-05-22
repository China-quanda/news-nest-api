import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserArticleView } from '@prisma/client';

export class UserArticleViewEntity
  extends BaseEntity
  implements UserArticleView
{
  @ApiProperty()
  viewCount: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  articleId: number;
}
