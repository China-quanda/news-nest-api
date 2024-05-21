import { BaseEntity } from '@app/common/entity';
import { UserArticleLike } from '@prisma/client';

export class UserArticleLikeEntity
  extends BaseEntity
  implements UserArticleLike
{
  userId: number;
  articleId: number;
}
