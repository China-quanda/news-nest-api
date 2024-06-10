import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class QueryPostDto extends BaseQueryDto {
  @Transform((value) => (value.value == 'true' ? true : false), {
    toClassOnly: true,
  })
  // @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: '岗位状态', default: true, required: false })
  status?: boolean;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '岗位名称',
    example: '综合部长',
    required: false,
  })
  name?: string;

  @ApiProperty({ description: '机构id', example: 1, required: false })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  orgId?: number;

  @ApiProperty({ description: '部门id', example: 1, required: false })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  deptId?: number;
}
