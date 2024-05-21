import { PartialType } from '@nestjs/swagger';
import { CreateUserArticleCommentDto } from './create-user-article-comment.dto';

export class UpdateUserArticleCommentDto extends PartialType(
  CreateUserArticleCommentDto,
) {}
