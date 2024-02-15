import { Controller, Get } from '@nestjs/common';
import { TesService } from './tes.service';

@Controller('tes')
export class TesController {
  constructor(private readonly tesService: TesService) {}

  @Get('hello')
  getHello(): { message: string } {
    return this.tesService.getHello();
  }
}
