import { Component, OnInit } from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  tasks: TaskModel[];
  basic: TaskModel[] = [];
  levelUp: TaskModel[] = [];
  advanc: TaskModel[] = [];

  isPressed: boolean = true;

  crArr(): void {
    let i: number = 0;
    let adv: number = 0;
    let bas: number = 0;
    let lev: number = 0;
    while (i < 6) {
      switch (this.tasks[i].level) {
        case 1 : {
          this.basic[bas] = this.tasks[i];
          bas++;
          break;
        }
        case 2 : {
          this.levelUp[lev] = this.tasks[i];
          lev++;
          break;
        }
        case 3 : {
          this.advanc[adv] = this.tasks[i];
          adv++;
          break;
        }
      }
      i++;
    }

  }

  swaper(id: number): number {
    this.isPressed = !this.isPressed;
    return id;
  }

  constructor(private taskService: TaskService) {}

  getTasks(): void {
    this.tasks = this.taskService.getTasks();

  }

  ngOnInit() {
    this.getTasks();
    this.crArr();
  }

}
