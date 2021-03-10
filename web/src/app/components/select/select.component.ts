import { Component, Input } from '@angular/core';

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
  @Input('value') value: { label: string; value: string } = {
    label: '',
    value: '',
  };
}
