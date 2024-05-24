import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreatePushDto
  implements Prisma.SystemMessagePushUncheckedCreateInput
{
  @ApiProperty({ description: '推送标题' })
  title: string;
  @ApiProperty({ description: '推送内容' })
  content: string;
  @ApiProperty({ description: '推送类型 流程审批 通知公告， 等等' })
  pushType: number;
  @ApiProperty({ description: '接收人' })
  receiveUser?: number[] | Prisma.SystemMessagePushCreatereceiveUserInput;
  @ApiProperty({ description: '发送人id' })
  sendUserId: number;
  @ApiProperty({ description: '推送客户端id', required: false })
  pushClientId?: string;
  @ApiProperty({ description: '推送渠道 app端 pc端 全端', required: false })
  pushChannel?: number;
  @ApiProperty({ description: ' pc通知地址', required: false })
  pcNotifyUrl?: string;
  @ApiProperty({ description: ' app通知地址', required: false })
  appNotifyUrl?: string;
  @ApiProperty({ description: '阅读次数', required: false })
  readNum?: number;
  @ApiProperty({ description: '阅读时间', required: false })
  readTime?: string | Date;
}
