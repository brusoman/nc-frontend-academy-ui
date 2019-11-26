import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  getUserTask(taskId: number, userId: number): Observable<UserTask>  {
    return this.http.get(this.url + '/tasks/task?taskId=' + taskId +
    '&userId=' + userId).pipe(map((task: any) => {
      return {attemptNumber: task.attempt_number, code: task.code, log: task.log, progress: task.progress,
        taskDto: {attemptsMax: task['taskDto'].attempts_max, description: task['taskDto'].description,
          id: task['taskDto'].id, number: task['taskDto'].number, section: task['taskDto'].section, taskName: task['taskDto'].task_name},
        time: task.time, userTaskPK: {taskId: task['userTaskPK'].taskId, userId: task['userTaskPK'].userId}};
    }));
  }

  getTask(taskId: number): Observable<Task>  {
    return this.http.get(this.url + '/tasks/' + taskId).pipe(map((task: any) => {
      return {number: task.number, section: task.number, description: task.description,
        attemptsMax: task.attempts_max, taskName: task.task_name};
    }));
  }
}


