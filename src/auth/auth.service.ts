import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { sendResponseApi } from 'src/utils/sendResponseApi';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(registerDto: RegisterDto) {
    // check users exist
    const userExist = await this.prismaService.users.findUnique({
      where: {
        email: registerDto.email,
      },
    });
    if (userExist) {
      throw new HttpException('User already exist', HttpStatus.FOUND);
    }

    // encrypt password
    registerDto.password = await bcrypt.hash(registerDto.password, 10);

    const newUser = await this.prismaService.users.create({
      data: registerDto,
    });

    if (!newUser) {
      throw new HttpException('User not created', HttpStatus.BAD_REQUEST);
    }
    return sendResponseApi(HttpStatus.CREATED, 'User created', newUser);
  }
}
