import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input('label') label: string = '';
  @Input('name') name: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('value') value: string = '';
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  onChange(): void {
    this.valueChanged.emit(this.value);
  }
}
