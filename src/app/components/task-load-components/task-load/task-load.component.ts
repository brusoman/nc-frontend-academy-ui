import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../services/http.service';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-task-load',
  templateUrl: './task-load.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/task-load.component.less'],
  providers: [HttpService]
})
export class TaskLoadComponent implements OnInit {

  currentTaskJSON: string = null;
  currentUserTaskAttemptsJSON: string = null;
  currentTask: Task;
  currentUserTaskAttempts: UserTask[];
  error: any = null;
  private taskId: number;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.routeSubscription = route.params.subscribe(params => this.taskId = params.taskId);
    this.querySubscription = route.queryParams.subscribe(
    (queryParam: any) => {
       this.currentTaskJSON = queryParam.currentTask;
       this.currentUserTaskAttemptsJSON = queryParam.currentUserTaskAttempts;
       try {
         this.currentTask = JSON.parse(this.currentTaskJSON);
       } catch (e) {
         this.error = e;
         this.getTask(this.taskId);
       }
       try {
        this.currentUserTaskAttempts = JSON.parse(this.currentUserTaskAttemptsJSON);
      } catch (e) {
        this.error = e;
        this.getUserTaskAttempts(this.taskId);
      }
    });
  }

  getUserTaskAttempts(taskId: number) {
    this.http.getUserTaskAttempts(taskId).subscribe(
      (data) => {this.currentUserTaskAttempts = data;
                 this.currentUserTaskAttemptsJSON = JSON.stringify(this.currentUserTaskAttempts);
      });
  }
  getTask(taskId: number) {
    this.http.getTask(taskId).subscribe(
      (data) => {this.currentTask = data;
                 this.currentTaskJSON = JSON.stringify(this.currentTask);
      });
  }

  ngOnInit() {

  }
}
