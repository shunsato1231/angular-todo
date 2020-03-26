import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { TaskDetailComponent }   from './pages/task-detail/task-detail.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
