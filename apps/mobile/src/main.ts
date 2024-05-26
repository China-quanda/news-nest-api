import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MobileModule } from './mobile.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  HttpExceptionFilter,
  PrismaClientKnownRequestErrorFilter,
} from '@app/common/filter';
import { CorsConfig, NestConfig, SwaggerConfig } from '@app/common/config';
import { ConfigService } from '@nestjs/config';
// import { join } from 'node:path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MobileModule, {
    logger: ['error', 'warn'],
  });

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');
  const corsConfig = configService.get<CorsConfig>('swagger');
  app.setGlobalPrefix(nestConfig.mobile.prefix);

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(
    new PrismaClientKnownRequestErrorFilter(httpAdapter),
    new HttpExceptionFilter(),
  );

  app.useStaticAssets(nestConfig.static, { prefix: nestConfig.static });
  // app.setBaseViewsDir(join(__dirname, '../', 'views'));

  app.setBaseViewsDir(nestConfig.views);

  app.setViewEngine(nestConfig.template);

  if (swaggerConfig.mobile.enabled) {
    const config = new DocumentBuilder()
      .setTitle(swaggerConfig.mobile.title)
      .setDescription(swaggerConfig.mobile.description)
      .setVersion(swaggerConfig.mobile.version)
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(swaggerConfig.mobile.path, app, document);
  }

  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(nestConfig.mobile.port);

  console.log(
    `http://127.0.0.1:${nestConfig.mobile.port}/${swaggerConfig.mobile.enabled ? swaggerConfig.mobile.path : ''}`,
  );
}
bootstrap();
