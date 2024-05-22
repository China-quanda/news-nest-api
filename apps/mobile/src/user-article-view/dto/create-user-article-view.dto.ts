import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
export class CreateUserArticleViewDto
  implements Prisma.UserArticleViewUncheckedCreateInput
{
  @ApiProperty({ default: 1 })
  viewCount?: number;
  @ApiProperty({ example: 2 })
  userId: number;
  @ApiProperty({ example: 1 })
  articleId: number;
}
