import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { dummyData } from './_mock/taskDummy';

@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  async findAll(): Promise<CreateTaskDto[]> {
    return dummyData;
  }
}
