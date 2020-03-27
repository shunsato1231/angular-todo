import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.styl']
})
export class EditFormComponent implements OnInit {

  statusList = ['new', 'wip', 'done', 'pending']

  @Input() task: Task
  @Input() disabled: string
  @Output() update: EventEmitter<null> = new EventEmitter()
  @Output() delete: EventEmitter<null> = new EventEmitter()
  @Output() changeStatus: EventEmitter<string> = new EventEmitter<string>()
  @Output() changeComment: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleUpdate() {
    this.update.emit()
  }

  handleDelete() {
    this.delete.emit()
  }

  handleChangeStatus(name: string) {
    this.changeStatus.emit(name)
  }

  handleChangeComment(comment: string) {
    this.changeComment.emit(comment)
  }

}
