import { Component, OnInit, Input } from '@angular/core';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['../../../../assets/styles/components/task-page-components/rating.component.less']
})
export class RatingComponent implements OnInit {

  attemptNumber = 0;
  @Input() currentTask: Task;
  @Input() currentUserTaskAttempts: UserTask[];
  urlBackend = 'http://localhost:8080/backend/files/';
  urlAssets = 'http://localhost:4200/assets/images/';
  differenceOpacity = false;
  token: string = localStorage.getItem('token');
  constructor() { }
  attempt: number[] = [];
  setAtt(): void {
    let i = 0;
    while (i < 10) {
      if (i < this.currentUserTaskAttempts.length) {
        this.attempt[i] = 1;
      } else {
        this.attempt[i] = 0;
      }
      i++;
    }
  }
  Date(dateString: string) {
    if (dateString === 'Попыток нет') {
      return dateString;
    } else {
      const date: Date = new Date(dateString.split('[')[0]);
      return date.toLocaleString('en-US', {hour12: false});
    }
  }
  dynamicUrl() {
    if (this.currentUserTaskAttempts[0].urlUserPicture === 'template.png') {
      return this.urlAssets;
    } else {
      return this.urlBackend;
    }
  }
  Opacity() {
    const difference = document.querySelector('.rating__pictures__difference') as HTMLElement;
    if (this.differenceOpacity === false) {
      difference.style.opacity = '0%';
      this.differenceOpacity = true;
    } else {
      difference.style.opacity = '100%';
      this.differenceOpacity = false;
    }
  }
  setAttemptNumber(attemptNumber: number) {
    this.attemptNumber = attemptNumber;
  }

  ngOnInit() {
    this.setAtt();
  }

}
