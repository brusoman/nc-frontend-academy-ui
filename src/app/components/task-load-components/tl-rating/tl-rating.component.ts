import {Component, Input, OnInit} from '@angular/core';
import {UserTask} from '../../../models/userTask.model';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-tl-rating',
  templateUrl: './tl-rating.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/tl-rating.component.less']
})
export class TlRatingComponent implements OnInit {

  attemptNumber = 0;
  @Input() currentTask: Task;
  @Input() currentUserTaskAttempts: UserTask[];
  urlBackend = 'http://localhost:8080/backend/files/';
  urlAssets = 'http://localhost:4200/assets/images/';
  big = false;
  num = 0;
  differenceOpacitySmall = false;
  differenceOpacityBig = false;
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
  OpacitySmall() {
    const differenceSmall = document.querySelector('.rating__pictures__difference') as HTMLElement;
    if (this.differenceOpacitySmall === false) {
      differenceSmall.style.opacity = '0%';
      this.differenceOpacitySmall = true;
    } else {
      differenceSmall.style.opacity = '100%';
      this.differenceOpacitySmall = false;
    }
  }
  OpacityBig() {
    const differenceBig = document.querySelector('.display__pictures__diff_big') as HTMLElement;
    if (this.differenceOpacityBig === false) {
      differenceBig.style.opacity = '0%';
      this.differenceOpacityBig = true;
    } else {
      differenceBig.style.opacity = '100%';
      this.differenceOpacityBig = false;
    }
  }

  KingSize(pickId: number) {
    this.num = pickId;
  }
  setAttemptNumber(attemptNumber: number) {
    this.attemptNumber = attemptNumber;
  }
  constructor() { }

  ngOnInit() {
  }

}
