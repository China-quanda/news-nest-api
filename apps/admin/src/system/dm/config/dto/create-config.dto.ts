import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateConfigDto
  implements Prisma.SystemDmConfigUncheckedCreateInput
{
  @IsString()
  @Type(() => String)
  @ApiProperty({ description: '参数名称' })
  name: string;

  @IsString()
  @Type(() => String)
  @ApiProperty({ description: '参数键名' })
  key: string;

  @IsString()
  @Type(() => String)
  @ApiProperty({ description: '参数键值' })
  value: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: '系统内置？',
    default: false,
    required: false,
  })
  type?: boolean;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '备注',
    required: false,
  })
  remark?: string;
}
