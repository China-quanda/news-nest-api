import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSysDataDictDto
  implements Prisma.SystemDmDictUncheckedCreateInput
{
  @IsNotEmpty()
  @ApiProperty({ example: '用户性别' })
  @IsString()
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'sys_user_sex' })
  @IsString()
  type: string;

  @ApiProperty({ example: '用户性别列表', required: false })
  @IsOptional()
  @IsString()
  remark?: string;

  @ApiProperty({ default: true, required: false })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
