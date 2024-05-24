import { BaseEntity } from '@app/common/entity';
import { ApiProperty } from '@nestjs/swagger';
import { SystemMessagePush } from '@prisma/client';

export class PushEntity extends BaseEntity implements SystemMessagePush {
  @ApiProperty({ description: '推送标题' })
  title: string;
  @ApiProperty({ description: '推送内容' })
  content: string;
  @ApiProperty({ description: '推送类型 流程审批 通知公告， 等等' })
  pushType: number;
  @ApiProperty({ description: '接收人' })
  receiveUser: number[];
  @ApiProperty({ description: '发送人id' })
  sendUserId: number;
  @ApiProperty({ description: '推送客户端id' })
  pushClientId: string;
  @ApiProperty({ description: '推送渠道 app端 pc端 全端' })
  pushChannel: number;
  @ApiProperty({ description: ' pc通知地址' })
  pcNotifyUrl: string;
  @ApiProperty({ description: ' app通知地址' })
  appNotifyUrl: string;
  @ApiProperty({ description: '阅读次数' })
  readNum: number;
  @ApiProperty({ description: '阅读时间' })
  readTime: Date;
}
