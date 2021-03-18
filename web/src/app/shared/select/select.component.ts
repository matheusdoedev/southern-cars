import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input('name') name: string = '';
  @Input('label') label: string = '';
  @Input('options') options: { label: string; value: string }[] = [
    { label: '', value: '' },
  ];

  value: string = '';
  @Output() valueChanged: EventEmitter<{
    data: string;
    value: string;
  }> = new EventEmitter();

  onChange(): void {
    this.valueChanged.emit({ data: this.name, value: this.value });
  }
}
