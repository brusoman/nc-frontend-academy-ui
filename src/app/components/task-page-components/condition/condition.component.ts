import { Component, OnInit, Input } from '@angular/core';
import {UserTask, TaskDescription} from '../../../models/userTask.model';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/condition.component.less']
})
export class ConditionComponent implements OnInit {

  @Input() currentTask: UserTask;

  constructor() { }

  ngOnInit() {
  }

}
