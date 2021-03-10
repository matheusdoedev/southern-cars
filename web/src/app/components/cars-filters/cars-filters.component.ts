import { Component } from '@angular/core';

@Component({
  selector: 'cars-filters',
  templateUrl: './cars-filters.component.html',
  styleUrls: ['./cars-filters.component.scss'],
})
export class CarsFiltersComponent {
  nameFilter: string = '';
  manufacturerFilter: string = '';
  colorFilter: string = '';
  priceFilter: string = '';

  onValueChange(value: string): void {
    this.nameFilter = value;
  }
}
