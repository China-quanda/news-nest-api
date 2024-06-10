import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  // MinLength,
} from 'class-validator';
export class CreateOrgDto
  implements Prisma.SystemOrganizationOrgUncheckedCreateInput
{
  @ApiProperty({ description: '上级机构', required: false, default: 0 })
  @IsNumber({}, { message: 'number' })
  @Type(() => Number)
  @IsOptional()
  parentId?: number;

  @ApiProperty({ description: '机构名称', example: '总公司' })
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  sort?: number;

  @ApiProperty({ description: '负责人', required: false, example: '李世民' })
  leader?: string;

  @ApiProperty({
    description: '联系电话',
    required: false,
    example: '13888888888',
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  @MaxLength(11, { message: '请输入正确的手机号' })
  // @MinLength(11, { message: '请输入正确的手机号' })
  phone?: string;

  @ApiProperty({
    description: '负责人邮箱',
    required: false,
    example: '12345@qq.com',
  })
  @Type(() => String)
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ default: true, required: false })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
