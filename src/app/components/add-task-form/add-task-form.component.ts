import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.styl']
})
export class AddTaskFormComponent implements OnInit {
  text: string = ''

  @Input() disabled: string
  @Output() add: EventEmitter<string> = new EventEmitter<string>()
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleAddButton(): void {
    this.add.emit(this.text)
    this.text = ''
    this.handleChangeInput(this.text)
  } 

  handleChangeInput(comment: string):void {
    this.onChange.emit(comment)
  }

  trigger(event: any):void {
    if (event.keyCode !== 13) return
    this.handleAddButton()
  }
}
