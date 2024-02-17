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
  Req,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { sendResponseApi } from 'src/utils/sendResponseApi';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto, @Req() req: any) {
    const newTask = await this.taskService.create(createTaskDto);
    if (!newTask) {
      return sendResponseApi(HttpStatus.BAD_REQUEST, 'Task not created');
    }
    return sendResponseApi(HttpStatus.CREATED, 'Task created', newTask);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    const tasks = await this.taskService.findAll();
    return sendResponseApi(HttpStatus.OK, 'Success retrieve all tasks', tasks);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const task = await this.taskService.findOne(id);
    return sendResponseApi(HttpStatus.OK, 'Success retrieve task', task);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const updatedTask = await this.taskService.update(id, updateTaskDto);
    return sendResponseApi(HttpStatus.OK, 'Success update task', updatedTask);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deletedTask = await this.taskService.delete(id);
    return sendResponseApi(HttpStatus.OK, 'Success delete task', deletedTask);
  }
}
