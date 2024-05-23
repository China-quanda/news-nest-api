import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
// import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  HttpExceptionFilter,
  PrismaClientKnownRequestErrorFilter,
} from '@app/common/filter';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('/api/admin');

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(
    new PrismaClientKnownRequestErrorFilter(httpAdapter),
    new HttpExceptionFilter(),
  );

  app.useStaticAssets('public', { prefix: '/public' });

  app.setBaseViewsDir('views');

  app.setViewEngine('ejs');

  const config = new DocumentBuilder()
    .setTitle('管理端api文档')
    .setDescription('这是移管理的api文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('admin/document', app, document);

  await app.listen(3001);
  console.log('http://localhost:3001/admin/document');
}
bootstrap();
