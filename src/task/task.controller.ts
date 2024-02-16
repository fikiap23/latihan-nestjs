import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { sendResponseApi } from 'src/utils/sendResponseApi';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.taskService.create(createTaskDto);
    if (!newTask) {
      return sendResponseApi(HttpStatus.BAD_REQUEST, 'Task not created');
    }
    return sendResponseApi(HttpStatus.CREATED, 'Task created', newTask);
  }

  @Get()
  async findAll() {
    const tasks = await this.taskService.findAll();
    return sendResponseApi(HttpStatus.OK, 'Success retrieve all tasks', tasks);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.delete(id);
  }
}
