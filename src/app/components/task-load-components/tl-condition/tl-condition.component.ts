import {Component, Input, OnInit} from '@angular/core';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-tl-condition',
  templateUrl: './tl-condition.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/tl-condition.component.less']
})
export class TlConditionComponent implements OnInit {

  @Input() currentTask: Task;
  @Input() currentUserTaskAttempts: UserTask[];
  Date(dateString: string) {
    const date: Date = new Date(dateString.substring(0, dateString.length - 11));
    return date.toLocaleString('en-US', {hour12: false});
  }
  constructor() {
  }

  ngOnInit() {
  }

}
