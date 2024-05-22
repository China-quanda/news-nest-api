import { PartialType } from '@nestjs/swagger';
import { CreateUserArticleViewDto } from './create-user-article-view.dto';

export class UpdateUserArticleViewDto extends PartialType(CreateUserArticleViewDto) {}
