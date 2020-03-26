import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { StatusRadioButtonComponent } from './components/status-radio-button/status-radio-button.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskDetailComponent,
    StatusRadioButtonComponent,
    TaskListComponent,
    AddTaskFormComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
