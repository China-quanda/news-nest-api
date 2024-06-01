import { BaseQueryDto } from '@app/common/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryDataDictDto extends BaseQueryDto {
  @Transform((value) => (value.value == 'true' ? true : false), {
    toClassOnly: true,
  })
  // @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: '状态', default: true, required: false })
  status?: boolean;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({ description: '字典名称', example: '性别', required: false })
  name?: string;

  @IsString()
  @Type(() => String)
  @IsOptional()
  @ApiProperty({
    description: '字典名称',
    example: 'sys_user_sex',
    required: false,
  })
  type?: string;
}
