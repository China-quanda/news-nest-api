import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateDeptDto
  implements Prisma.SystemOrganizationDeptUncheckedCreateInput
{
  @ApiProperty({ description: '上级部门', required: false, default: 0 })
  @IsNumber({}, { message: 'number' })
  @Type(() => Number)
  @IsOptional()
  parentId?: number;

  @ApiProperty({ description: '部门名称', example: '郴州总经办' })
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: '显示排序', required: false, default: 0 })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  sort?: number;

  @ApiProperty({ description: '负责人', required: false, example: '李世民' })
  @IsOptional()
  @IsString()
  @Type(() => String)
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
  @IsEmail({}, { message: '请输入正确的邮箱' })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ default: true, required: false })
  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @ApiProperty({ description: '机构id' })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  orgId: number;
}
