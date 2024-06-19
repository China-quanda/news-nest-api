import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinioModule } from '@app/common';

@Module({
  imports: [MinioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
