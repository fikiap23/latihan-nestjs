import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesModule } from './tes/tes.module';

@Module({
  imports: [TesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
