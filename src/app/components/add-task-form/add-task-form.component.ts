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

  handleAddButton(comment: string): void {
    console.log(comment)
    this.add.emit(comment)
    this.text = ''
    this.handleChangeInput(this.text)
  } 

  handleChangeInput(comment: string):void {
    this.onChange.emit(comment)
  }

}
