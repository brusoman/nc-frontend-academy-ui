import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {HttpService} from './http.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let httpService = this.injector.get(HttpService);
    if (!!httpService.loggedIn()) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer_${httpService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}
