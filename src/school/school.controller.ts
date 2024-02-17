import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  async findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.schoolService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSchoolDto: UpdateSchoolDto,
  ) {
    return this.schoolService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.schoolService.remove(+id);
  }
}
