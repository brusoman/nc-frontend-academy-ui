import { Component, OnInit } from '@angular/core';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/task-page.component.less']
})
export class TaskPageComponent implements OnInit {
  currentUserTaskAttempts: UserTask[];
  error: string;
  currentTask: Task;

  ident: string = 'ok';
  showInfo = true;

  constructor() {}

  receiveAttemptsFromList(event) {
    this.currentUserTaskAttempts = event;
    if (event === null) {
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
    if (event === undefined) {
      this.ident = 'undifined';
    }
  }
  receiveTaskFromList(event) {
    this.currentTask = event;
  }


  ngOnInit() {
  }


}
