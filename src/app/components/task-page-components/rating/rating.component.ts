import { Component, OnInit, Input } from '@angular/core';
import {TaskModel} from '../../../models/task.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/rating.component.less']
})
export class RatingComponent implements OnInit {

  @Input() curTaskRait: TaskModel;

  constructor() { }
  i = 0;
  attempt: number[] = [];
  setAtt(): void {
    while (this.i < 10) {
      if (this.i < this.curTaskRait.attemt) {
        this.attempt[this.i] = 1;
      } else {
        this.attempt[this.i] = 0;
      }
      this.i++;
    }
  }

  ngOnInit() {
    this.setAtt();
  }

}
