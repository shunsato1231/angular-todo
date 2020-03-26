import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-radio-button',
  templateUrl: './status-radio-button.component.html',
  styleUrls: ['./status-radio-button.component.styl']
})
export class StatusRadioButtonComponent implements OnInit {

  @Input() items: []
  @Input() taskLength: string
  @Output() checked: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(name: string): void {
    this.checked.emit(name)
  }

}
