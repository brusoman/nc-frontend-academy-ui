import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tl-rating',
  templateUrl: './tl-rating.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/tl-rating.component.less']
})
export class TlRatingComponent implements OnInit {
  differenceOpacity = false;
  Opacity() {
    const difference = document.querySelector('.rating_pictures_difference') as HTMLElement;
    if (this.differenceOpacity === false) {
      difference.style.opacity = '0%';
      this.differenceOpacity = true;
    } else {
      difference.style.opacity = '100%';
      this.differenceOpacity = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
