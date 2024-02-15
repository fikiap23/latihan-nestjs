import { Injectable } from '@nestjs/common';

@Injectable()
export class TesService {
  getHello(): { message: string } {
    return {
      message: 'Hello World from NestJS! from tes service',
    };
  }
}
