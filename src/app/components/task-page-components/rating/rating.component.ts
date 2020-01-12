import { Component, OnInit, Input } from '@angular/core';
import {UserTask} from '../../../models/userTask.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/rating.component.less']
})
export class RatingComponent implements OnInit {

  @Input() currentTask: UserTask;

  constructor() { }
  attempt: number[] = [];
  setAtt(): void {
    let i = 0;
    while (i < 10) {
      if (i < this.currentTask.triesData.length) {
        this.attempt[i] = 1;
      } else {
        this.attempt[i] = 0;
      }
      i++;
    }
  }

  ngOnInit() {
    this.setAtt();
  }

}
