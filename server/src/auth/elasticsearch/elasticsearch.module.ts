// src/modules/elasticsearch/elasticsearch.module.ts
import { Module } from '@nestjs/common';
import { ElasticsearchService } from './elasticsearch.service';
import { ElasticsearchModule as NestElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    NestElasticsearchModule.register({
      node: 'https://powerapp.es.us-central1.gcp.cloud.es.io', // Adjust the port to the correct Elasticsearch port
      auth: {
        username: 'elastic',
        password: 'tJgUAfd5YNW90Hhwyd2z4bta',
      },
    }),
  ],
  providers: [ElasticsearchService],
  exports: [NestElasticsearchModule, ElasticsearchService],
})
export class ElasticsearchModule {}
