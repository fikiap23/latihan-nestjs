import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { sendResponseApi } from 'src/utils/sendResponseApi';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwt.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * A description of the entire function.
   *
   * @param {RegisterDto} registerDto - the data for user registration
   * @return  the result of the registration process
   */
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

  /**
   * A description of the entire function.
   *
   * @param {LoginDto} loginDto - parameter for login
   * @return  description of return value
   */
  async login(loginDto: LoginDto) {
    const user = await this.prismaService.users.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new HttpException('Wrong password', HttpStatus.UNAUTHORIZED);
    }

    const accessToken = this.generateJWT({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return sendResponseApi(HttpStatus.OK, 'Login success', { accessToken });
  }

  /**
   * Generates a JWT token with the given payload.
   *
   * @param {any} payload - the payload to be signed into the JWT token
   * @returns the signed JWT token
   */
  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: jwtConstants.expiresIn,
    });
  }
}
