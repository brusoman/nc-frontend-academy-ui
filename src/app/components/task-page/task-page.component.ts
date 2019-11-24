import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['../../../assets/styles/components/task-page.component.less']
})
export class TaskPageComponent implements OnInit {

  isPassed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
