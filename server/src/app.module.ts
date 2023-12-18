// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './auth/elastic/register.controller';
import { ElasticsearchModule } from './auth/elastic/elasticsearch.module';

@Module({
  imports: [ElasticsearchModule],
  controllers: [AppController, RegisterController],
  providers: [AppService],
})
export class AppModule {}
