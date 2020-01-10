import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {Task, TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';
import { HttpService} from '../../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [HttpService]
})
export class ListComponent implements OnInit {

  @Output() public outToTaskPage = new EventEmitter();

  tasks: Task[] = [];
  basic: Task[] = [];
  levelUp: Task[] = [];
  advanc: Task[] = [];

  isPressed: boolean = true;

  crArr(): void {
    let i = 0;
    let adv = 0;
    let bas = 0;
    let lev = 0;
    while (i < 4) {
      if (this.tasks[i].id === 101) {
          this.basic[bas] = this.tasks[i];
          bas++;
          i++;
        } else {
        i++;
      }
    }
  }

  sendToTaskPage(idList: number) {
    this.isPressed = !this.isPressed;
    this.outToTaskPage.emit(idList);
  }

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getTasksList().subscribe(data => this.tasks = data['Task_list']);
    this.crArr();
  }

}
