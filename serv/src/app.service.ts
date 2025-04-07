import { Injectable, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';

@Injectable()
@UseGuards(JwtAuthGuard)
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
