import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers: [HttpService]
})
export class RegistrationComponent implements OnInit {
  user: FormGroup;
  receivedUser: User = new User();
  done = false;
  url = 'http://localhost:8080/backend/auth'
  constructor(private fb: FormBuilder, private http: HttpService) {

  }
  Login() {
    this.http.postData(this.url, this.user.value)
      .subscribe(
       (data: User) => {this.receivedUser = data; this.done = true; },
        error => console.log(error)
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
