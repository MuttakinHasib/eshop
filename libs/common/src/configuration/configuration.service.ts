import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService) {}

  get DATABASE_URL() {
    return this.configService.get<string>('DATABASE_URL');
  }
}
