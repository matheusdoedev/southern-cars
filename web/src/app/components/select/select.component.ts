import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { SelectData } from './select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  select: SelectData = {
    name: '',
    label: '',
    options: [{ label: '', value: '' }],
  };

  @Input('name') name = '';
  @Input('label') label = '';
  @Input('options') options = [{ label: '', value: '' }];

  ngOnInit(): void {
    this.select = {
      name: this.name,
      label: this.label,
      options: this.options,
    };
  }
}
