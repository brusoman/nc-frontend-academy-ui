import {Component, Input, OnInit} from '@angular/core';
import {UserTask} from '../../../models/userTask.model';

@Component({
  selector: 'app-tl-condition',
  templateUrl: './tl-condition.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/tl-condition.component.less']
})
export class TlConditionComponent implements OnInit {

  @Input() public currentTask: UserTask;
  constructor() { }

  ngOnInit() {
  }

}
