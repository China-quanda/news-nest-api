import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
export class CreateUserArticleLikeDto
  implements Prisma.UserArticleLikeUncheckedCreateInput
{
  @IsInt()
  @ApiProperty({ default: 1 })
  userId: number;
  @IsInt()
  @ApiProperty({ default: 1 })
  articleId: number;
}
