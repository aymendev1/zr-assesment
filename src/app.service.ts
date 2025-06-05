import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello There ! I hope you enjoy testing my assessment :)';
  }
}
