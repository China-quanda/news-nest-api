import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNoticeDto
  implements Prisma.SystemMessageNoticeUncheckedCreateInput
{
  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  @ApiProperty({ description: '公告标题' })
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @ApiProperty({ description: '公告类型' })
  type: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: '状态' })
  status?: boolean;

  @IsNotEmpty()
  @Type(() => String)
  @IsString()
  @ApiProperty({ description: '内容' })
  content: string;
}
