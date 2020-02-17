import { Component, OnInit, Input } from '@angular/core';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';
import {Observable} from 'rxjs';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/condition.component.less']
})
export class ConditionComponent implements OnInit {

  @Input() currentTask: Task;
  @Input() currentUserTaskAttempts: UserTask[];
  Date(dateString: string) {
    const date: Date = new Date(dateString.split('[')[0]);
    return date.toLocaleString('en-US', {hour12: false});
  }

  constructor() { }

  ngOnInit() {
  }

}
