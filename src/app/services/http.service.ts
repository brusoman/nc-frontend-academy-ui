import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {UserData} from '../models/userData.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserTask} from '../models/userTask.model';
import {Attempt, Task, TaskDescription} from '../models/task.model';

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

  getTasksList(): Observable<Task[]>  {
    return this.http.get( 'assets/taskList.json').pipe(map(data => {
      let tasksList = data["Task_list"];
      return tasksList.map(function (task: any) {
        return {
          id: task.id,
          taskName: task.name,
          section: task.section
        };
      });
    }));
  }

  getAttempts(userId: number, taskId: number, autToken: number): Observable<Attempt[]> {
    return this.http.get('assets/att.json').pipe(map(data => {
      let attArr = data["attempts"];
      return attArr.map(function (attempt: any) {
        return {
          time: attempt.time,
          progress: attempt.progress,
          urlUserPicture: attempt.urlUserPicture,
          urlSamplePicture: attempt.urlSamplePicture
        };
        });
    }));
  }

  getDescription(taskId: number, autToken: number): Observable<TaskDescription> {
    return this.http.get( 'assets/descr.json').pipe(map( (descr: any) => {
        return {
          description: descr.description,
          deadLine: descr.deadLine,
          name: descr.name,
          urlSample: descr.urlSample
        };
      }));
  }

  getData() {
    return this.http.get('assets/taskList.json')
  }
}


