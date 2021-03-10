import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/classes/Car/Car';

@Component({
  selector: 'cars-results',
  templateUrl: './cars-results.component.html',
  styleUrls: ['./cars-results.component.scss'],
})
export class CarsResultsComponent implements OnInit {
  cars: Car[] = [
    {
      id: 1,
      name: 'Mustang',
      manufacturer: 'Ford',
      color: 'Blue',
      price: 42000,
      qty: 1,
    },
  ];
  plusIcon = 'assets/plus.svg';

  constructor() {}

  ngOnInit(): void {}
}
