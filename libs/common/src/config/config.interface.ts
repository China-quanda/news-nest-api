import { Prisma } from '@prisma/client';

export interface Config {
  jwt?: JwtConfig;
  nest?: NestConfig;
  cors?: CorsConfig;
  swagger?: SwaggerConfig;
  security?: SecurityConfig;
  prisma?: PrismaConfig;
  database?: DatabaseConfig;
  redis?: RedisConfig;
}

export interface JwtConfig {
  secret: string;
  signOptions: { expiresIn: string };
}

export interface NestConfig {
  admin: {
    port: number;
  };
  mobile: {
    port: number;
  };
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}

export interface DatabaseConfig {
  type?: string;
  host?: string;
  port?: number | string;
  username?: string;
  password?: string;
  database?: string;
  autoLoadModels: boolean; // 如果为true，模型将自动载入（默认:false)
  synchronize?: boolean; //如果为true，自动载入的模型将同步
  logging?: any;
}

export interface RedisConfig {
  host: string;
  port: number;
  password: string;
}

export type PrismaConfig = Prisma.PrismaClientOptions;
