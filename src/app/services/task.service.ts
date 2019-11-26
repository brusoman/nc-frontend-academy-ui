import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TASKS} from '../task';

@Injectable({
  providedIn: 'root',
})

export class TaskService {

  public getTasks(): TaskModel[] {
    return TASKS;
  }
  constructor() { }
}
