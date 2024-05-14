/* eslint-disable @typescript-eslint/no-var-requires */
// 配置文件接口
export interface IConfig {
  /**
   * 后台管理jwt token密钥
   */
  jwt?: {
    secret: string;
  };
  /**
   * 文件上传路径， 绝对路径  例如： E:/upload/test
   */
  uploadPath?: string;

  /**
   * 数据库配置
   */
  database?: {
    type?: string;
    host?: string;
    port?: number | string;
    username?: string;
    password?: string;
    database?: string;
    autoLoadModels: boolean; // 如果为true，模型将自动载入（默认:false)
    synchronize?: boolean; //如果为true，自动载入的模型将同步
    logging?: any;
  };

  /**
   * redis 配置
   */
  redis?: {
    config: {
      url: string;
    };
  };

  /* 队列配置 */
  bullRedis?: {
    host: string;
    port: string;
    password: string;
  };
  /* 是否演示环境 */
  isDemoEnvironment?: boolean;
}

/* 用于智能提示 */
export const defineConfig = (config: IConfig): IConfig => config;
// 根据环境变量判断使用配置
export default (): IConfig => {
  let config: IConfig = {};
  let defaultConfig = {};
  let envConfig = {};

  try {
    defaultConfig = require('./config.default').default;
    envConfig = require(`./config.${process.env.NODE_ENV}`).default;
    config = Object.assign(defaultConfig, envConfig);
  } catch (e) {
    console.error(`config Error ${e}`);
  }
  // 返回环境配置
  return config as IConfig;
};
