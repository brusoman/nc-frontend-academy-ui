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
  differenceOpacity = false;
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
  big = false;
  num = 0;
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
