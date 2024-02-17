import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const userId = this.req.user.id;
    // console.log(this.req.user);

    if (!userId) {
      throw new NotFoundException('Missing userId');
    }

    createTaskDto.userId = userId;

    const checkUser = await this.findOne(createTaskDto.userId);
    if (!checkUser) {
      throw new NotFoundException('Unauthorized');
    }

    return this.prismaService.tasks.create({ data: createTaskDto });
  }
  async findAll(): Promise<{ user: any; tasks: CreateTaskDto[] }> {
    const userId = this.req.user.id;
    const user = await this.prismaService.users.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, avatar: true },
    });

    const tasks = await this.prismaService.tasks.findMany({
      where: { userId },
    });

    return {
      user,
      tasks,
    };
  }

  async findOne(id: number): Promise<CreateTaskDto> {
    const userId = this.req.user.id;
    return this.prismaService.tasks.findFirst({
      where: { id, userId },
      include: {
        users: { select: { id: true, name: true, email: true, avatar: true } },
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const userId = this.req.user.id;
    return this.prismaService.tasks.update({
      where: { id, userId },
      data: updateTaskDto,
    });
  }

  async delete(id: number) {
    const userId = this.req.user.id;
    const task = await this.prismaService.tasks.findUnique({
      where: { id, userId },
    });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return this.prismaService.tasks.delete({ where: { id } });
  }
}
