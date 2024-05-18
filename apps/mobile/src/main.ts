import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MobileModule } from './mobile.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { join } from 'node:path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MobileModule);
  app.setGlobalPrefix('/api');
  app.useStaticAssets('public', { prefix: '/public' });
  // app.setBaseViewsDir(join(__dirname, '../', 'views'));
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  const config = new DocumentBuilder()
    .setTitle('移动端api文档')
    .setDescription('这是移动端的api文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  await app.listen(3002);
  console.log('http://localhost:3002/document');
}
bootstrap();
