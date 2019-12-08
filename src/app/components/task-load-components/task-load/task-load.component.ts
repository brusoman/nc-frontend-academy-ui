import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../services/http.service';
import {UserTask} from '../../../models/userTask.model';

@Component({
  selector: 'app-task-load',
  templateUrl: './task-load.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/task-load.component.less'],
  providers: [HttpService]
})
export class TaskLoadComponent implements OnInit {

  currentTaskJSON: string = null;
  currentTask: UserTask;
  error: any = null;
  private taskId: number;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpService) {

    this.routeSubscription = route.params.subscribe(params => this.taskId = params.taskId);
    this.querySubscription = route.queryParams.subscribe(
    (queryParam: any) => {
       this.currentTaskJSON = queryParam.currentTask;
       try {
         this.currentTask = JSON.parse(this.currentTaskJSON);
       } catch (e) {
         this.error = e;
         this.getUserTask(this.taskId);
       }
    });
  }

  getUserTask(taskId: number) {
    this.http.getUserTask(taskId, 1).subscribe(
      (data) => {this.currentTask = data; });
  }

  ngOnInit() {

  }
}
