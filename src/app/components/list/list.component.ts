import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  tasks: TaskModel[];
  i: number;
  typeLevel: number[] = [1, 2, 3];


  constructor(private taskService: TaskService) {}

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {
    this.getTasks();
  }

}
