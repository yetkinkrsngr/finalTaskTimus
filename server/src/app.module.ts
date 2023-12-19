import { ElasticsearchModule } from '@nestjs/elasticsearch';
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ElasticsearchModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
