import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {ListComponent} from './components/list/list.component';
import {RouterModule, Routes} from '@angular/router';


/*routing*/

const appRoutes: Routes = [
  {path: '', component: RegistrationComponent, pathMatch: 'full'},
  {path: 'tasks', component: ListComponent},
  {path: '**', redirectTo: '/tasks'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    TasksComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
