import { Component, OnInit } from '@angular/core';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserToken} from '../../../models/userToken.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/task-page.component.less']
})
export class TaskPageComponent implements OnInit {

  userToken: UserToken;
  userTokenJSON: string = null;
  currentUserTaskAttempts: UserTask[];
  error: string;
  currentTask: Task;
  showInfo = true;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.userTokenJSON = queryParam.userToken;
        try {
          this.userToken = JSON.parse(this.userTokenJSON);
        } catch (e) {
          this.error = e;
        }
      });
  }

  receiveAttemptsFromList(event) {
    this.currentUserTaskAttempts = event;
    if (event === null) {
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
  }
  receiveTaskFromList(event) {
    this.currentTask = event;
  }


  ngOnInit() {
  }


}
