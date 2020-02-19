import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';
import {Task} from '../../../models/task.model';
import {HttpService} from '../../../services/http.service';
import {UserTask} from '../../../models/userTask.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [HttpService]
})
export class ListComponent implements OnInit {
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
    this.http.getTaskList().subscribe(
      (data) => {this.taskList = data;
                 this.createTaskArrays(); }
    );
  }
  getUserTaskAttempts(taskId: number) {
    this.http.getUserTaskAttempts(taskId).subscribe(
      (data) => {
        if (data.length === 0) {
          this.currentUserTaskAttempts = this.createTemplate();
        } else {
          this.currentUserTaskAttempts = data;
        }
        this.outAttemptsToTaskPage.emit(this.currentUserTaskAttempts);
        this.currentUserTaskAttemptsJSON = JSON.stringify(this.currentUserTaskAttempts);
        });
  }
  createTemplate(): UserTask[] {
    return [{progress: 0,
      time: 'Попыток нет',
      urlUserPicture: 'template.png',
      urlSamplePicture: 'template.png'}];
  }
  getTask(taskId: number) {
    this.http.getTask(taskId).subscribe(
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
