import { Component, OnInit, Input } from '@angular/core';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['../../../assets/styles/components/condition.component.less']
})
export class ConditionComponent implements OnInit {

  @Input() curTaskCond: TaskModel;

  constructor() { }

  ngOnInit() {
  }

}
