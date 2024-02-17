import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(userId: number, createTaskDto: CreateTaskDto) {
    if (!userId) {
      throw new NotFoundException('Missing userId');
    }
    createTaskDto.userId = userId;

    const checkUser = await this.findOne(createTaskDto.userId);
    if (checkUser) {
      throw new NotFoundException('Unauthorized');
    }

    return this.prismaService.tasks.create({ data: createTaskDto });
  }
  async findAll(): Promise<CreateTaskDto[]> {
    return this.prismaService.tasks.findMany();
  }

  async findOne(id: number): Promise<CreateTaskDto> {
    return this.prismaService.tasks.findUnique({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prismaService.tasks.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async delete(id: number) {
    const task = await this.prismaService.tasks.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return this.prismaService.tasks.delete({ where: { id } });
  }
}
