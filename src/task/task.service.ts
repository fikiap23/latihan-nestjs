import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  async create() {
    return 'This action adds a new task';
  }
}
