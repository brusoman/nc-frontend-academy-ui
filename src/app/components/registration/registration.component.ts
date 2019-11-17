import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  user: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {

  }
  Login() {
    this.authService.login(this.user);
  }

  initForm() {
    this.user = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
    this.initForm();
  }
}
