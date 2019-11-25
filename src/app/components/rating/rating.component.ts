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

  ngOnInit(){
  }

}
