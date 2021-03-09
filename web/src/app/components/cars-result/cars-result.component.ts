import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/classes/Car/Car';

@Component({
  selector: 'app-cars-result',
  templateUrl: './cars-result.component.html',
  styleUrls: ['./cars-result.component.scss'],
})
export class CarsResultComponent implements OnInit {
  car: Car = new Car(0, '', '', '', 0, 0);

  @Input('id') id = 0;
  @Input('name') name = '';
  @Input('manufacturer') manufacturer = '';
  @Input('color') color = '';
  @Input('qty') qty = 0;
  @Input('price') price = 0.0;

  constructor() {}

  ngOnInit(): void {
    this.car = {
      id: this.id,
      name: this.name,
      manufacturer: this.manufacturer,
      color: this.color,
      qty: this.qty,
      price: this.price,
    };
  }
}
