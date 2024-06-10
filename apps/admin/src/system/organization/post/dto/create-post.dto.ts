import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePostDto
  implements Prisma.SystemOrganizationPostUncheckedCreateInput
{
  @ApiProperty({ description: '岗位名称', example: '综合部长' })
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: '岗位编码', example: 'G1' })
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  sort?: number;

  @ApiProperty({ description: ' 备注', required: false })
  @IsString()
  @Type(() => String)
  @IsOptional()
  remark?: string;

  @ApiProperty({ description: '状态', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @ApiProperty({ description: '机构id' })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  orgId: number;

  @ApiProperty({ description: '部门id' })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  deptId: number;
}
