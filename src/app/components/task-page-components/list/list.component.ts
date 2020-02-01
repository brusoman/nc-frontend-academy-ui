import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {Task} from '../../../models/task.model';
import {HttpService} from '../../../services/http.service';
import {UserTask, TryData, TaskDescription} from '../../../models/userTask.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [HttpService]
})
export class ListComponent implements OnInit {

  @Output() public outToTaskPage = new EventEmitter();
  @Output() public outToLoadPage = new EventEmitter();
  currentTask: UserTask;
  currentAtt: TryData[];
  currentDescr: TaskDescription;
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


  sendToTaskPage(taskId: number) {
    this.getUserTask(taskId);
    this.isPressed = true;
  }
  getTaskList() {
    this.http.getTask().subscribe(
      (data) => {this.taskList = data;
                 this.createTaskArrays(); }
    );
  }
  getUserTask(taskId: number) {
    this.http.getAttempts(1, taskId,13).subscribe(
      (data) => {
        this.currentAtt = data;
      });
    this.http.getDescription(taskId, 13).subscribe(
      (data) => {
        this.currentDescr = data;
      });
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
