import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:8080/backend';
  token;

  constructor(private http: HttpClient, private router: Router) { }
  login(user: FormGroup) {
    this.http.post(this.uri + '/authentication', user.value)
      .subscribe((resp: any) => {

        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);

      })
  ;

}

}
