import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    TaskModule,
    PrismaModule,
    AuthModule,
    ServeStaticModule.forRoot({ rootPath: 'public' }),
    SchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
