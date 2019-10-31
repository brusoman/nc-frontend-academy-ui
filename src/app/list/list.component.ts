import { Component, OnInit } from '@angular/core';
import {TaskModel} from "../tasks/task.model";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../styles/list.component.less']
})
export class ListComponent implements OnInit {

  public tasks: TaskModel[];

  constructor(private tasksService: TaskService) { }

  ngOnInit() {
    /*this.tasks = this.tasksService.getTasks();*/
  }

}
