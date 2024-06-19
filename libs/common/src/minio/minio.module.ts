// src/minio/minio.module.ts
import { Global, Module } from '@nestjs/common';
import { MinioService } from './minio.service';
// import * as Minio from 'minio';
// import { ConfigService } from '@nestjs/config';
// import { MinioConfig } from '@app/common/config';

@Global()
@Module({
  providers: [
    MinioService,
    // {
    //   provide: 'MINIO_CLIENT',
    //   useFactory: async (configService: ConfigService) => {
    //     const minioConfig = configService.get<MinioConfig>('minio');
    //     console.log('minioConfig', minioConfig);
    //     const minioClient = new Minio.Client(minioConfig);

    //     return minioClient;
    //   },
    //   inject: [ConfigService],
    // },
  ],
  exports: [MinioService],
})
export class MinioModule {}
