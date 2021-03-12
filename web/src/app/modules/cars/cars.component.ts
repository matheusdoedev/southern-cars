import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'cars-root',
  templateUrl: './cars.component.html',
  providers: [CarService],
})
export class CarsComponent {}
