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

  constructor(private _carService: CarService) {}

  ngOnInit(): void {
    this.cars = this._carService.getCars();
  }
}
