import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import {TaskModel} from '../../../models/task.model';
import {TaskService} from '../../../services/task.service';
import {UserTask} from '../../../models/userTask.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/task-page.component.less']
})
export class TaskPageComponent implements OnInit {

  currentTask: UserTask;
  showInfo = true;

  constructor(private taskService: TaskService) { }

  receiveFromList(event) {
    this.currentTask = event;
    if (event === null) {
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
  }


  ngOnInit() {
  }


}
