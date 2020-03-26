import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-checkbox',
  templateUrl: './sort-checkbox.component.html',
  styleUrls: ['./sort-checkbox.component.styl']
})
export class SortCheckboxComponent implements OnInit {

  @Input() statusList: []
  @Input() taskNumber: String
  @Output() changeStatus: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(name: string): void {
    this.changeStatus.emit(name)
  }

}