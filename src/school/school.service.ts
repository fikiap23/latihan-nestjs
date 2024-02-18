import {
  HttpStatus,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../prisma/prisma.service';
import { sendResponseApi } from '../utils/sendResponseApi';

@Injectable()
export class SchoolService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    const newSchool = await this.prismaService.schools.create({
      data: createSchoolDto,
    });
    if (!newSchool) {
      throw new BadRequestException('School not created');
    }
    return sendResponseApi(HttpStatus.CREATED, 'School created', newSchool);
  }

  async findAll() {
    const schools = await this.prismaService.schools.findMany();
    // console.log(schools);
    if (!schools || schools.length === 0) {
      throw new NotFoundException('School not found');
    }
    return sendResponseApi(
      HttpStatus.OK,
      'Success retrieve all schools',
      schools,
    );
  }

  async findOne(id: number) {
    const school = await this.prismaService.schools.findUnique({
      where: { id },
    });
    if (!school) {
      throw new NotFoundException('School not found');
    }
    return sendResponseApi(HttpStatus.OK, 'Success retrieve school', school);
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const updatedSchool = await this.prismaService.schools.update({
      where: { id },
      data: updateSchoolDto,
    });
    if (!updatedSchool) {
      throw new BadRequestException('School not updated');
    }
    return sendResponseApi(
      HttpStatus.OK,
      'Success update school',
      updatedSchool,
    );
  }

  async remove(id: number) {
    const deletedSchool = await this.prismaService.schools.delete({
      where: { id },
    });
    if (!deletedSchool) {
      throw new BadRequestException('School not deleted');
    }
    return sendResponseApi(
      HttpStatus.OK,
      'Success delete school',
      deletedSchool,
    );
  }
}
