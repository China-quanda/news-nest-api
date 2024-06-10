import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserArticleFavorite } from '@prisma/client';

export class UserArticleFavoriteEntity
  extends BaseEntity
  implements UserArticleFavorite
{
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '创建时间' })
  createdTime: Date;
  @ApiProperty({ description: '更新时间' })
  updatedTime: Date;
  @ApiProperty({
    description: '用户id',
    example: '1',
  })
  userId: number;
  @ApiProperty({ description: '收藏夹名称', example: 'web前端' })
  name: string;
}
