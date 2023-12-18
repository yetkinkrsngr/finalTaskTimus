// elasticsearch.module.ts
import { Module } from '@nestjs/common';
import { ElasticsearchModule as NestElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    NestElasticsearchModule.register({
      node: 'http://localhost:5432',
      auth: {
        username: 'elastic',
        password: 'tJgUAfd5YNW90Hhwyd2z4bta',
      },
    }),
  ],
  exports: [NestElasticsearchModule], // exports ifadesini ekleyin
})
export class ElasticsearchModule {}
