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
  addTaskDisabled: string = 'disabled'
  statusList = [
    {name: 'all', status: true},
    {name: 'new', status: false},
    {name: 'wip', status: false},
    {name: 'done', status: false},
    {name: 'pending', status: false}
  ]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.taskService.get()
    .subscribe(tasks => {
      this.allTasks = tasks
    })
  }

  addTask(comment: string): void {
    comment = comment.trim()
    if(!comment) {
      return
    }

    this.taskService.post({comment, status: 'new'} as Task)
      .subscribe(id => {
        this.tasks.push({
          id,
          comment,
          status: 'new'
        })
      })

    this.changeStatus('all')
  }

  deleteTask(id: number): void {
    this.allTasks = this.allTasks.filter(v => v.id !== id)
    this.taskService.delete(id).subscribe()
  }

  changeStatus(name: string): void {
    const prevSelectedIndex = this.statusList.findIndex(item => item.name === this.statusName)
    const nextSelectIndex = this.statusList.findIndex(item => item.name === name )

     this.statusList[prevSelectedIndex].status = false
     this.statusList[nextSelectIndex].status = true

     this.statusName = name
  }

  validateInputText(comment) {
    if(!comment) {
      this.addTaskDisabled = 'disabled'
    } else {
      this.addTaskDisabled = ''
    }
  }

  resetTasks () {
    this.taskService.deleteDB().subscribe()
  }

  get tasks(): Task[] {
    if(this.statusName === 'all') {
      return this.allTasks
    } else {
      return this.allTasks.filter(task => { return task.status === this.statusName })
    }
  }

}
