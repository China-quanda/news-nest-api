import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { Link } from '@prisma/client';

export class LinkEntity extends BaseEntity implements Link {
  @ApiProperty({ description: '友情链接地址' })
  url: string;
  @ApiProperty({ description: '友情链接名称' })
  name: string;
  @ApiProperty({ description: '站长EMAIL' })
  email: string;
  @ApiProperty({ description: '友情链接logo' })
  logo: string;
  @ApiProperty({ description: '显示状态 1显示 2不显示' })
  status: boolean;
}
