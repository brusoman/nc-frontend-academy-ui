import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:   `<div>
      <h1>nain</h1>
      <nav>
          <a routerLink="">back to registration</a>
          <a routerLink="/tasks"><button type="submit" class="btn btn-primary">NEXT</button></a>
      </nav>
      <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'nfa';
}
