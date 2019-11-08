import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TASKS} from '../task';

@Injectable({
  providedIn: 'root',
})

export class TaskService {

  tasks: TaskModel[] = [{
    num: 1,
    name: 'task1',
    mrk: 10,
    ddl: 'e',
    level: 1
  }];

  public getTasks(): TaskModel[] {
    return TASKS;
  }
  constructor() { }
}
