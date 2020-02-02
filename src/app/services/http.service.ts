import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {UserData} from '../models/userData.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserTask, TryData, TaskDescription} from '../models/userTask.model';
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
    return this.http.get('/assets/userTask.json').pipe(map((task: any) => {
      return {name: task.name, deadLine: task.deadline, condition: task.condition, bestScreen: task.bestScreen,
        tries: task.tries, bestTry: task.bestTry, triesData: task['triesData']};
    }));
  }

  getTask(): Observable<Task[]>  {
    return this.http.get('/assets/tasks.json').pipe(map(data => {
      const taskList = data['taskList'];
      return taskList.map((task: any) => {
        return {id: task.id, name: task.name, section: task.section};
      });
    }));
  }
  postFile(fileToUpload: File) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }

  getAttempts(userId: number, taskId: number, autToken: number): Observable<TryData[]> {
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
        name: descr.name,
        deadLine: descr.deadLine,
        urlSample: descr.urlSample
      };
    }));
  }


}


