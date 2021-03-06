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
  differenceOpacity = false;
  Date(dateString: string) {
    const date: Date = new Date(dateString.split('[')[0]);
    return date.toLocaleString('en-US', {hour12: false});
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
  constructor() { }

  ngOnInit() {
  }

}
