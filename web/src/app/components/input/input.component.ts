import { Component, Input, OnInit } from '@angular/core';

import { InputData } from './input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  input: InputData = {
    name: '',
    label: '',
    placeholder: '',
  };

  @Input('label') label = '';
  @Input('name') name = '';
  @Input('placeholder') placeholder = '';

  ngOnInit(): void {
    this.input = {
      name: this.name,
      label: this.label,
      placeholder: this.placeholder,
    };
  }
}
