import { PartialType } from '@nestjs/swagger';
import { CreateUserArticleReportDto } from './create-user-article-report.dto';

export class UpdateUserArticleReportDto extends PartialType(CreateUserArticleReportDto) {}
