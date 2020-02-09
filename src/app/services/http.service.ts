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

  getUserTaskAttempts(taskId: number, userId: number, token: string): Observable<UserTask[]>  {
    return this.http.get(this.url + '/user-tasks/task?taskId=' + taskId + '&userId=' + userId,
      {headers: {Authorization: 'Bearer_' + token}})
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
  getTask(taskId: number, token: string): Observable<Task>  {
    return this.http.get(this.url + '/tasks/' + taskId, {headers: {Authorization: 'Bearer_' + token}}).pipe(map((task: any) => {
      return {attemptsMax: task.attempts_max,
        deadline: task.deadline,
        description: task.description,
        urlSample: task.urlSample,
        name: task.name,
        id: task.id,
        section: task.section};
    }));
  }

  getTaskList(token: string): Observable<Task[]>  {
    return this.http.get(this.url + '/tasks/all', {headers: {Authorization: 'Bearer_' + token}})
      .pipe(map(data  => {
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
}


