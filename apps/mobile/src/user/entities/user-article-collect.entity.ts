import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserArticleCollect } from '@prisma/client';

export class UserArticleCollectEntity
  extends BaseEntity
  implements UserArticleCollect
{
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '创建时间' })
  createdTime: Date;
  @ApiProperty({ description: '更新时间' })
  updatedTime: Date;
  @ApiProperty({
    description: '文章id',
    example: '1',
  })
  articleId: number;
  @ApiProperty({
    description: '收藏夹id',
    example: '1',
  })
  favoriteId: number;
}
