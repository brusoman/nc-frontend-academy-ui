import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['../../../assets/styles/components/task-page.component.less']
})
export class TaskPageComponent implements OnInit {

  showInfo: boolean = true;
  tasksP: TaskModel[] = [];
  idPage: number;
  currentTask: TaskModel;

  constructor(private taskService: TaskService) { }

  getTasks(): void {
    this.tasksP = this.taskService.getTasks();
  }

  ngOnInit() {
    this.getTasks();
  }
  recieveFromList(evnt) {
    this.idPage = evnt;
    if (evnt === 0) {
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
    let i: number = 0;
    while (i < 6) {
      if (this.tasksP[i].id === this.idPage) {
        this.currentTask = this.tasksP[i];
      }
      i++;
    }
  }

}
