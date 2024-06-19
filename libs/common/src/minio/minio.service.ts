import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';
// import { ConfigService } from '@nestjs/config';
// import { MinioConfig } from '@app/common/config';
// import { MulterFile } from '@webundsoehne/nest-fastify-file-upload';

@Injectable()
export class MinioService {
  private readonly minioClient: Minio.Client;
  // private readonly configService: ConfigService;
  constructor() {
    //   const minioConfig = this.configService.get<MinioConfig>('minio');
    // this.minioClient = new Minio.Client(minioConfig);
    this.minioClient = new Minio.Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'minio',
      secretKey: 'minio123',
    });
  }

  // 使用 MinIO 客户端的 listBuckets() 方法来获取所有的存储桶（buckets）。这是一个异步操作，返回一个包含所有存储桶信息的列表。
  async getBuckets() {
    return await this.minioClient.listBuckets();
  }

  // 将文件上传到指定的存储桶和文件名。这里 file.buffer 包含了文件的数据。
  async uploadFile(bucketName: string, fileName: string, file: any) {
    await this.minioClient.putObject(bucketName, fileName, file.buffer);

    const expiry = 24 * 60 * 60;

    const presignedUrl = await this.minioClient.presignedUrl(
      'GET',
      bucketName,
      fileName,
      expiry,
    );

    return {
      url: presignedUrl,
    };
  }

  // 生成一个预签名的 PUT URL，允许用户在指定的时间（默认 24 小时）内上传文件到指定的存储桶和文件名位置。
  async presignedPutUrl(
    bucketName: string,
    fileName: string,
    expiry: number = 24 * 60 * 60,
  ) {
    return await this.minioClient.presignedPutObject(
      bucketName,
      fileName,
      expiry,
    );
  }

  // 生成一个预签名的 GET URL，允许用户在指定的时间（默认 24 小时）内从指定的存储桶下载文件。
  async presignedGetUrl(
    bucketName: string,
    fileName: string,
    expiry: number = 24 * 60 * 60,
  ) {
    return await this.minioClient.presignedGetObject(
      bucketName,
      fileName,
      expiry,
    );
  }

  // 创建一个预签名的 POST 策略。这个策略定义了通过 HTTP POST 方法上传文件的规则。
  async presignedPostPolicy(
    bucketName: string,
    fileName: string,
    expiry: number = 24 * 60 * 60,
  ) {
    const policy = new Minio.PostPolicy();

    policy.setBucket(bucketName);
    policy.setKey(fileName);
    policy.setExpires(new Date(new Date().getTime() + expiry * 1000));

    return await this.minioClient.presignedPostPolicy(policy);
  }
}
