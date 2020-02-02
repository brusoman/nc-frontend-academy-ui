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

  @Output() public outToTaskPage = new EventEmitter<UserTask>();
  @Output() public outToLoadPage = new EventEmitter();
  currentTask: UserTask = null;
  currentAtt: TryData[] = [];
  currentDescr: TaskDescription = null;
  taskList: Task[] = [];
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

  setUserTask() {
    this.currentTask.name       = this.currentDescr.name;
    this.currentTask.condition  = this.currentDescr.description;
    this.currentTask.deadLine   = this.currentDescr.deadLine;
    this.currentTask.bestTry    = this.currentDescr.urlSample;
    this.currentTask.triesData  = this.currentAtt;
  }
  getUserTask(taskId: number) {
    this.http.getAttempts(1, taskId,13).subscribe(
      (data) => {
        this.currentAtt             = data;
      });
    this.http.getDescription(taskId, 13).subscribe(
      (data) => {
        this.currentDescr           = data;
      });
    this.setUserTask();
    if (this.currentTask !== null) {
      this.outToTaskPage.emit(this.currentTask);
    } else {
      this.setUserTask();
    }
    this.currentTaskJson = JSON.stringify(this.currentTask);
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

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getTaskList();
  }

}
