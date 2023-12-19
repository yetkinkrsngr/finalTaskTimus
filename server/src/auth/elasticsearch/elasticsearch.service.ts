// src/modules/elasticsearch/elasticsearch.service.ts
import { Injectable } from '@nestjs/common';
import { ElasticsearchService as NestElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(
    private readonly elasticsearchService: NestElasticsearchService,
  ) {}
  async registerUser(
    userName: string,
    password: string,
    email: string,
    role: string,
  ): Promise<any> {
    const result = await this.elasticsearchService.index({
      index: 'users',
      body: { userName, password, email, role },
    });
    return result;
  }

  // Add other Elasticsearch-related methods as needed
}
