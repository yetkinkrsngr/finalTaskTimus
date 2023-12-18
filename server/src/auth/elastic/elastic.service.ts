import { Injectable } from "@nestjs/common";

@Injectable(){
    constructor(private readonly elasticsearchService: ElasticsearchService) {
        async registerUser(): Promise<any> {
            // Elasticsearch'a veriyi gönder
            const result = await this.elasticsearchService.index({
              index: 'users',
              body: userData,
            });
          
            return result;
          }
    }
}