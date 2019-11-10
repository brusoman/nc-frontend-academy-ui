import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService) {

  }
  Login() {
    console.log('you are logging in');
    this.authService.login(this.username, this.password);

  }

  ngOnInit() { }
}
