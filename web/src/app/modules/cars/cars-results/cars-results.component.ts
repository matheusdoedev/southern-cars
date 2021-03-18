import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/classes/Car/Car';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'cars-results',
  templateUrl: './cars-results.component.html',
  styleUrls: ['./cars-results.component.scss'],
})
export class CarsResultsComponent implements OnInit {
  plusIcon = 'assets/plus.svg';

  cars: Car[] = [];
  errorMessage: string = '';

  constructor(private _carService: CarService) {}

  ngOnInit(): void {
    this._carService.getCars().subscribe({
      next: (cars) => (this.cars = cars),
      error: (err) => (this.errorMessage = err),
    });
  }
}
