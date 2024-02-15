import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  async findAll() {
    return [];
  }
}
