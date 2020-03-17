import { Component, OnInit } from '@angular/core';
import { Task, status } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  allTasks: Task[] = []
  status: status | 'all' = 'all'

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.get()
  }

  get(): void {
    this.taskService.getTasks()
    .subscribe(tasks => {
      this.allTasks = tasks
    })
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

    this.status = 'all'
  }

  delete(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => { this.get() })
  }

  get tasks(): Task[] {
    if(this.status === 'all') {
      return this.allTasks
    } else {
      return this.allTasks.filter(task => { return task.status === this.status })
    }
  }

}
