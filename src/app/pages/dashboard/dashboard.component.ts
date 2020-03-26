import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  allTasks: Task[] = []
  statusName: string = 'all'
  statusList = [
    {name: 'all', status: true},
    {name: 'new', status: false},
    {name: 'wip', status: false},
    {name: 'done', status: false},
    {name: 'pending', status: false}
  ]

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

    this.statusName = 'all'
  }

  delete(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => { this.get() })
  }

  changeStatus(name: string): void {
    const prevSelectedIndex = this.statusList.findIndex(item => item.name === this.statusName)
    const nextSelectIndex = this.statusList.findIndex(item => item.name === name )

     this.statusList[prevSelectedIndex].status = false
     this.statusList[nextSelectIndex].status = true

     this.statusName = name
  }

  get tasks(): Task[] {
    if(this.statusName === 'all') {
      return this.allTasks
    } else {
      return this.allTasks.filter(task => { return task.status === this.statusName })
    }
  }

}
