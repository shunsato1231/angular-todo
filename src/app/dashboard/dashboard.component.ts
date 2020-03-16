import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  private getTasks() {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks)
  }

}
