import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [HttpService]
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  done = false;
  error: any = null;
  errorMessage = 'Wrong username or password! Please try again';
  constructor(private fb: FormBuilder, private http: HttpService,
              private router: Router) {
  }
  login() {
    this.http.postLogPass(this.user.value)
      .subscribe(
       data => {this.done = true;
                localStorage.setItem('token', data['token']);
                localStorage.setItem('username', data['username']);
                this.getUserId(data['username']);
                this.router.navigate(['/tasks']);
         },
        error => {this.error = error;
                  console.log(error); }
     );
  }
  getUserId(username: string) {
    this.http.getUserDataByLogin(username).subscribe(
      data => {localStorage.setItem('userId', String(data['userId'])); });
  }
  darkModeSwitch() {
    const back = document.querySelector('.login-wrapper') as HTMLElement;
  }

  initForm() {
    this.user = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
    this.initForm();
    localStorage.clear();
  }
}
