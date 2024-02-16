import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwt.config';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
      property: 'user',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: jwtConstants.expiresIn,
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
