import { Injectable } from '@angular/core';
import {TaskModel} from "../tasks/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: TaskModel[] = [{
    name = 'task1',
    ddl = 'e'
  }];

  public getTasks(): TaskModel[]{
    /*get url*/
    return this.tasks;
  }
  constructor() { }
}


