import { Component, Input } from '@angular/core';

import { Car } from 'src/app/classes/Car/Car';

@Component({
  selector: 'cars-result',
  templateUrl: './cars-result.component.html',
  styleUrls: ['./cars-result.component.scss'],
})
export class CarsResultComponent {
  car: Car = new Car(0, '', '', '', 0, 0);

  deleteIcon = 'assets/trash.svg';
  editIcon = 'assets/pencil.svg';

  @Input('id') id = 0;
  @Input('name') name = '';
  @Input('manufacturer') manufacturer = '';
  @Input('color') color = '';
  @Input('qty') qty = 0;
  @Input('price') price = 0.0;
}
