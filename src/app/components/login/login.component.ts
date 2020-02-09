import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {UserToken} from '../../models/userToken.model';
import {UserData} from '../../models/userData.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [HttpService]
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  userToken: UserToken;
  userTokenJSON: string = null;
  done = false;
  userData: UserData;
  error: any = null;
  constructor(private fb: FormBuilder, private http: HttpService) {

  }
  Login() {
    this.http.postLogPass(this.user.value)
      .subscribe(
       (data: UserToken) => {this.userToken = data; this.done = true;
                             this.userTokenJSON = JSON.stringify(this.userToken); },
        error => {this.error = error; console.log(error); }
     );
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
