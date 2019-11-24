import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('user.json');
  }

  postData(url: string, user: User) {
    const body = {username: user.username, password: user.password};
    return this.http.post(url, body);
  }
}
