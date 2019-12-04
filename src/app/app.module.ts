import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {ListComponent} from './components/list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {TaskModel} from './models/task.model';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { ConditionComponent } from './components/condition/condition.component';
import { RatingComponent } from './components/rating/rating.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './components/settings/settings.component';

/*routing*/

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TaskPageComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: '/tasks'}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TasksComponent,
    ListComponent,
    TaskPageComponent,
    ConditionComponent,
    RatingComponent,
    SettingsComponent,
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
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
