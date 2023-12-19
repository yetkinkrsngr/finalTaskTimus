import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from './elasticsearch/elasticsearch.service';
@Injectable()
export class AuthService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}
  async registerUser(
    userName: string,
    password: string,
    email: string,
    role: string,
  ): Promise<any> {
    await this.elasticsearchService.registerUser(
      userName,
      password,
      email,
      role,
    );
    return { message: 'User registered successfully' };
  }
}
