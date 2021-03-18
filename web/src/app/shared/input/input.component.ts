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

  value: string = '';

  @Output() valueChanged: EventEmitter<{
    data: string;
    value: string;
  }> = new EventEmitter();

  onChange(): void {
    this.valueChanged.emit({ data: this.name, value: this.value });
  }
}
