import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../../task';
import { TaskService } from '../../task.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.styl']
})
export class TaskDetailComponent implements OnInit {
  task: Task
  beforeChangeTask: Task

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTask()
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.taskService.getTask(id)
    .subscribe(task => {
      this.task = JSON.parse(JSON.stringify(task))
      this.beforeChangeTask = JSON.parse(JSON.stringify(task))
    })
  }

  update(): void {
    console.log(this.disabled)
    this.taskService.updateTask(this.task)
      .subscribe(() => {
        this.router.navigate(["/"])
      })
  }

  delete(): void {
    this.taskService.deleteTask(this.task)
      .subscribe(() => {
        this.router.navigate(["/"])
      })
  }

  get disabled(): string {
    if (!this.task?.comment) {
      return 'disabled'
    } else if(this.beforeChangeTask?.status === this.task?.status && 
        this.beforeChangeTask?.comment === this.task?.comment) {
      return 'disabled'
    } else return ''
  }
}
