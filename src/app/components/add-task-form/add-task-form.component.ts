import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.styl']
})
export class AddTaskFormComponent implements OnInit {

  @Output() add: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  addTask(comment: string): void {
    this.add.emit(comment)
  } 

}
