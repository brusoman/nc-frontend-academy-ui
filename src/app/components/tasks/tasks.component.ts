import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})


export class TasksComponent implements OnInit {

  tasks: TaskModel[];
  i: number;

  constructor(private taskService: TaskService) {}

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {
    this.getTasks();
  }
}
