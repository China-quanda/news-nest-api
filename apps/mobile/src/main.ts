import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MobileModule } from './mobile.module';
// import { join } from 'node:path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MobileModule);
  app.setGlobalPrefix('/api');
  app.useStaticAssets('public', { prefix: '/public' });
  // app.setBaseViewsDir(join(__dirname, '../', 'views'));
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  await app.listen(3002);
}
bootstrap();
