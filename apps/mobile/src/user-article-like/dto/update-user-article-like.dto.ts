import { PartialType } from '@nestjs/swagger';
import { CreateUserArticleLikeDto } from './create-user-article-like.dto';

export class UpdateUserArticleLikeDto extends PartialType(
  CreateUserArticleLikeDto,
) {}
