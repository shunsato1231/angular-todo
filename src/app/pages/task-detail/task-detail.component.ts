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
      this.task = task
    })
  }

  update(): void {
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

}
