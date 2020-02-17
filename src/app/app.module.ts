import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {ListComponent} from './components/task-page-components/list/list.component';
import {RouterModule, Routes} from '@angular/router';
import { TaskPageComponent } from './components/task-page-components/task-page/task-page.component';
import { ConditionComponent } from './components/task-page-components/condition/condition.component';
import { RatingComponent } from './components/task-page-components/rating/rating.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SettingsComponent } from './components/settings/settings.component';
import {TaskLoadComponent} from './components/task-load-components/task-load/task-load.component';
import { TlConditionComponent } from './components/task-load-components/tl-condition/tl-condition.component';
import { SendFieldComponent } from './components/task-load-components/send-field/send-field.component';
import { TlRatingComponent } from './components/task-load-components/tl-rating/tl-rating.component';
import {AuthGuard} from './auth.guard';
import {HttpService} from './services/http.service';
import {TokenInterceptorService} from './services/token-interceptor.service';

/*routing*/

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'task-load/:taskId', component: TaskLoadComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component: TaskPageComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/login'}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListComponent,
    TaskPageComponent,
    ConditionComponent,
    RatingComponent,
    SettingsComponent,
    TaskLoadComponent,
    TlConditionComponent,
    SendFieldComponent,
    TlRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, AuthGuard, HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
