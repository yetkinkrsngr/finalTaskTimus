// register.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Controller('register')
export class RegisterController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @Post()
  async registerUser(@Body() userData: any): Promise<any> {
    // Elasticsearch'a veriyi gönder
    const result = await this.elasticsearchService.index({
      index: 'users',
      body: userData,
    });

    return result;
  }
}
