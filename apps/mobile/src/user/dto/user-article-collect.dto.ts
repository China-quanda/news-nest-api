import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class UserArticleCollectDto
  implements Prisma.UserArticleCollectUncheckedCreateInput
{
  @IsNotEmpty()
  @ApiProperty({
    description: '收藏夹id',
    example: '1',
  })
  favoriteId: number;

  @IsNotEmpty()
  @ApiProperty({
    description: '文章id',
    example: '1',
  })
  articleId: number;
}

export class UpdateUserArticleCollectDtoDto extends PartialType(
  UserArticleCollectDto,
) {}
