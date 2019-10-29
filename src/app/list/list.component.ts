import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../styles/list.component.less']
})
export class ListComponent implements OnInit {
  items = ["task1", "task2", "task3"];
  input = "input";

  constructor() { }

  ngOnInit() {
  }

}
