import { Component, Input } from '@angular/core';

import { Car } from 'src/app/classes/Car/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'cars-result',
  templateUrl: './cars-result.component.html',
  styleUrls: ['./cars-result.component.scss'],
})
export class CarsResultComponent {
  car: Car = new Car(0, '', '', '', 0, 0);

  deleteIcon: string = 'assets/trash.svg';
  editIcon: string = 'assets/pencil.svg';

  @Input('id') id: number = 0;
  @Input('name') name: string = '';
  @Input('manufacturer') manufacturer: string = '';
  @Input('color') color: string = '';
  @Input('qty') qty: number = 0;
  @Input('price') price: number = 0.0;

  constructor(private _carService: CarService) {}

  deleteCar(): void {
    this._carService.deleteCar(this.id).subscribe({
      next: (r) => console.log(r),
      error: (err) => console.log(err),
    });
  }
}
