import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';
import {Task} from '../../../models/task.model';
import {HttpService} from '../../../services/http.service';
import {UserTask} from '../../../models/userTask.model';
import {UserToken} from '../../../models/userToken.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [HttpService]
})
export class ListComponent implements OnInit {

  @Input() userToken: UserToken;
  @Output() public outAttemptsToTaskPage = new EventEmitter();
  @Output() public outTaskToTaskPage = new EventEmitter();
  currentUserTaskAttempts: UserTask[];
  currentTask: Task;
  taskList: Task[];
  isPressed = true;
  basicTasks: Task[] = [];
  levelUpTasks: Task[] = [];
  advancedTasks: Task[] = [];
  currentUserTaskAttemptsJSON: string = null;
  currentTaskJSON: string = null;
  createTaskArrays() {
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
  sendToTaskPage(idList: number) {
    this.getUserTaskAttempts(idList);
    this.getTask(idList);
    this.isPressed = true;
  }
  getTaskList() {
    this.http.getTaskList(this.userToken.token).subscribe(
      (data) => {this.taskList = data;
                 this.createTaskArrays(); }
    );
  }
  getUserTaskAttempts(taskId: number) {
    this.http.getUserTaskAttempts(taskId, 16, this.userToken.token).subscribe(
      (data) => {this.currentUserTaskAttempts = data;
                 this.outAttemptsToTaskPage.emit(this.currentUserTaskAttempts);
                 this.currentUserTaskAttemptsJSON = JSON.stringify(this.currentUserTaskAttempts);
        });
  }
  getTask(taskId: number) {
    this.http.getTask(taskId, this.userToken.token).subscribe(
      (data) => {this.currentTask = data;
                 this.outTaskToTaskPage.emit(this.currentTask);
                 this.currentTaskJSON = JSON.stringify(this.currentTask);
      });
  }

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getTaskList();
  }

}
