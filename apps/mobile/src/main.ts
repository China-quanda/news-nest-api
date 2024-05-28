import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MobileModule } from './mobile.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
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

  // 速率限制
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
    }),
  );

  // 漏洞保护
  app.use(helmet());

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');
  const corsConfig = configService.get<CorsConfig>('swagger');

  // 设置 api 访问前缀
  app.setGlobalPrefix(nestConfig.mobile.prefix);

  const { httpAdapter } = app.get(HttpAdapterHost);

  // 配置过滤器
  app.useGlobalFilters(
    new PrismaClientKnownRequestErrorFilter(httpAdapter),
    new HttpExceptionFilter(),
  );
  //配置静态资源目录
  app.useStaticAssets(nestConfig.static, { prefix: nestConfig.static });
  // app.setBaseViewsDir(join(__dirname, '../', 'views'));

  // 配置mvc
  app.setBaseViewsDir(nestConfig.views);

  // 配置模版引擎
  app.setViewEngine(nestConfig.template);

  // swagger文档
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
    //允许跨域
    app.enableCors();
  }

  await app.listen(nestConfig.mobile.port);

  console.log(
    `http://127.0.0.1:${nestConfig.mobile.port}/${swaggerConfig.mobile.enabled ? swaggerConfig.mobile.path : ''}`,
  );
}
bootstrap();
