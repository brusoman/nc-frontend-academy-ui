import { Component, OnInit } from '@angular/core';
import {UserTask, TaskDescription} from '../../../models/userTask.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/task-page.component.less']
})
export class TaskPageComponent implements OnInit {

  currentTask: UserTask;
  ident: string;
  showInfo = true;

  constructor() { }

  receiveFromList(event) {
    this.currentTask = event;
    if (event === null) {
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
    if (event === undefined) {
      this.ident = 'lol';
    }
  }


  ngOnInit() {
  }


}
