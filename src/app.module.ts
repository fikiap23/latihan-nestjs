import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesModule } from './tes/tes.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TesModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
