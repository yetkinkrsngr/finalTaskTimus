import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  async registerUser(@Body() userData: any): Promise<any> {
    // Elasticsearch'a veriyi gönder
    const result = await this.elasticsearchService.index({
      index: 'users',
      body: userData,
    });

    return result;
  }
}
