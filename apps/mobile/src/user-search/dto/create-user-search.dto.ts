import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Max, Min } from 'class-validator';
export class CreateUserSearchDto
  implements Prisma.UserSearchUncheckedCreateInput
{
  @ApiProperty({ default: 1 })
  searchCount?: number;
  @ApiProperty({ example: 'web前端' })
  keywords: string;
  @Min(1)
  @Max(5)
  @ApiProperty({ example: 1 })
  type: number;
  @ApiProperty({ example: 2 })
  userId: number;
}
