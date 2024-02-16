import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { dummyData } from './_mock/taskDummy';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createTaskDto: CreateTaskDto) {
    return this.prismaService.tasks.create({ data: createTaskDto });
  }

  async findAll(): Promise<CreateTaskDto[]> {
    return dummyData;
  }

  async findOne(id: number): Promise<CreateTaskDto> {
    return dummyData.find((task) => task.id === id);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return updateTaskDto;
  }

  async delete(id: number) {
    console.log(id);
    const task = dummyData.find((task) => task.id === id);
    console.log(task);
    if (!task) {
      throw new Error('Task not found');
    }
    dummyData.splice(dummyData.indexOf(task), 1);
    return task;
  }
}
