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

  getTasks() {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks)
  }

  add(comment: string): void {
    comment = comment.trim()
    if(!comment) {
      return
    }

    this.taskService.addTask({comment} as Task)
      .subscribe(task => {
        task.status = 'new'
        this.tasks.push(task)
      })
  }

}
