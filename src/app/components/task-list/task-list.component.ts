import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.styl']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[]
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  listItemClass(status): string {
    if (status === 'done' ||status === 'pending') return 'gray'
    else if (status === 'wip') return 'red'
  }

  handleDeleteButton(id: number): void {
    this.delete.emit(id)
  }
}
