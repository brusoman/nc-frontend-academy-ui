import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {User} from '../models/user.model';
import {UserData} from '../models/userData.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserTask} from '../models/userTask.model';
import {Task} from '../models/task.model';

@Injectable()
export class HttpService {
  url = 'http://localhost:8080/backend';
  constructor(private http: HttpClient) { }


  getUserDataById(userId: number): Observable<UserData>  {
    return this.http.get(this.url + '/users/' + userId).pipe(map((userData: any) => {
      return {admin: userData.admin, email: userData.email,
        login: userData.login, name: userData.name, password: userData.password,
        surname: userData.surname, userId: userData.user_id};
    }));
  }
  getUserDataByEmail(email: string): Observable<UserData>  {
    return this.http.get(this.url + '/email/' + email).pipe(map((userData: any) => {
      return {admin: userData.admin, email: userData.email,
        login: userData.login, name: userData.name, password: userData.password,
        surname: userData.surname, userId: userData.user_id};
    }));
  }
  getUserDataByLogin(login: string): Observable<UserData>  {
    return this.http.get(this.url + '/users/user/' + login).pipe(map((userData: any) => {
      return {admin: userData.admin, email: userData.email,
        login: userData.login, name: userData.name, password: userData.password,
        surname: userData.surname, userId: userData.user_id};
    }));
  }

  postLogPass(user: User) {
    const body = {username: user.username, password: user.password};
    return this.http.post(this.url + '/auth', body);
  }

  getUserTaskAttempts(taskId: number): Observable<UserTask[]>  {
    return this.http.get(this.url + '/user-tasks/task?taskId=' + taskId
      + '&userId=' + localStorage.getItem('userId'))
      .pipe(map(data => {
        const attemptsList = data['attempts'];
        return attemptsList.map((task: any) => {
          return {progress: task.progress,
            time: task.time,
            urlUserPicture: task.urlUserPicture,
            urlSamplePicture: task.urlSamplePicture};
    });
      }));
  }
  getTask(taskId: number): Observable<Task>  {
    return this.http.get(this.url + '/tasks/' + taskId).pipe(map((task: any) => {
      return {attemptsMax: task.attempts_max,
        deadline: task.deadline,
        description: task.description,
        urlSample: task.urlSample,
        name: task.name,
        id: task.id,
        section: task.section};
    }));
  }

  getTaskList(): Observable<Task[]>  {
    return this.http.get(this.url + '/tasks/all')
      .pipe(map(data  => {
      const taskList = data['taskList'];
      return taskList.map((task: any) => {
        return {id: task.id, name: task.name, section: task.section};
      });
    }));
  }
  postFile(fileToUpload: File, taskId: number) {
    const endpoint = this.url + '/user-tasks/upload?taskId=' + taskId + '&userId=' + localStorage.getItem('userId');
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}


