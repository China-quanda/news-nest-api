import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserArticleFavoriteDto
  implements Prisma.UserArticleFavoriteCreateInput
{
  @IsString()
  @IsNotEmpty({ message: '收藏夹名称不为空' })
  @ApiProperty({
    description: '收藏夹名称',
    example: 'web前端',
  })
  name: string;

  @ApiProperty({
    description: '用户id',
    example: '1',
  })
  userId: number;

  @ApiProperty({
    description: '收藏',
    required: false,
  })
  collects?: Prisma.UserArticleCollectCreateNestedManyWithoutFavoriteInput;
}
export class UpdateUserArticleFavoriteDto extends PartialType(
  CreateUserArticleFavoriteDto,
) {}
