import { ApiProperty } from '@nestjs/swagger';
export class CheckForUpdateRes {
  @ApiProperty({ description: 'app版本' })
  version: string;
  @ApiProperty({ description: 'app下载地址' })
  url: string;
  @ApiProperty({ description: 'app是否更新' })
  update: boolean;
}
export class CheckForUpdateDto {
  @ApiProperty({ description: '消息' })
  msg: string;
  @ApiProperty({ description: '状态码' })
  code: number;
  @ApiProperty({ description: '数据', type: CheckForUpdateRes })
  data: CheckForUpdateRes | null;
}
