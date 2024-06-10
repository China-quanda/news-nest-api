// import { Result } from '@app/common/utils/result';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    if (status === 400) {
      const e: any = exception.getResponse();
      response.status(status).json({
        code: status,
        message: e.message[0] || exception.message,
        data: null,
      });
    } else {
      response.status(status).json({
        code: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        describe: exception.message,
      });
    }
  }
}
