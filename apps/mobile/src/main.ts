import { NestFactory } from '@nestjs/core';
import { MobileModule } from './mobile.module';

async function bootstrap() {
  const app = await NestFactory.create(MobileModule);
  await app.listen(3000);
}
bootstrap();
