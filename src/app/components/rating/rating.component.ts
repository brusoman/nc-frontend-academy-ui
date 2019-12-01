import { Component, OnInit, Input } from '@angular/core';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['../../../assets/styles/components/rating.component.less']
})
export class RatingComponent implements OnInit {

  @Input() curTaskRait: TaskModel;

  constructor() { }
  i: number = 0;
  attemt: number[] = [];
  setAtt(): void {
    while (this.i < 10) {
      if (this.i < this.curTaskRait.attemt) {
        this.attemt[this.i] = 1;
      } else {
        this.attemt[this.i] = 0;
      }
      this.i++;
    }
  }

  ngOnInit() {
    this.setAtt();
  }

}
