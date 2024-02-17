import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { sendResponseApi } from 'src/utils/sendResponseApi';

@Injectable()
export class SchoolService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    const newSchool = await this.prismaService.schools.create({
      data: createSchoolDto,
    });
    if (newSchool) {
      return sendResponseApi(HttpStatus.CREATED, 'School created', newSchool);
    }
  }

  async findAll() {
    return `This action returns all school`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  async remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
