import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {Task} from '../../../models/task.model';
import {HttpService} from '../../../services/http.service';
import {UserTask} from '../../../models/userTask.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [HttpService]
})
export class ListComponent implements OnInit {

  @Output() public outToTaskPage = new EventEmitter();
  @Output() public outToLoadPage = new EventEmitter();
  currentTask: UserTask;
  taskList: Task[];
  isPressed = true;
  basicTasks: Task[] = [];
  levelUpTasks: Task[] = [];
  advancedTasks: Task[] = [];
  currentTaskJson: string = null;

  private createTaskArrays() {
    let i = 0;
    while (i < this.taskList.length) {
      switch (this.taskList[i].section) {
        case 'basic': {
          this.basicTasks.push(this.taskList[i]);
          i++;
          break;
        }
        case 'levelUp': {
          this.levelUpTasks.push(this.taskList[i]);
          i++;
          break;
        }
        case 'advanced': {
          this.advancedTasks.push(this.taskList[i]);
          i++;
          break;
        }
      }
    }


  }
  sendToTaskPage(idList: number): void {
    this.getUserTask(idList);
    this.isPressed = true;
  }
  getTaskList() {
    this.http.getTask().subscribe(
      (data) => {this.taskList = data;
                 this.createTaskArrays(); }
    );
  }
  getUserTask(taskId: number) {
    this.http.getUserTask(taskId, 1).subscribe(
      (data) => {this.currentTask = data;
                 this.outToTaskPage.emit(this.currentTask);
                 this.currentTaskJson = JSON.stringify(this.currentTask);
        });
  }

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getTaskList();
  }

}
