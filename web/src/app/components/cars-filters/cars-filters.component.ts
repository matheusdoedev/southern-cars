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

  onValueChange(event: { data: string; value: string }): void {
    switch (event.data) {
      case 'nameFilter':
        this.nameFilter = event.value;
        break;
      case 'manufacturerFilter':
        this.manufacturerFilter = event.value;
        break;
      case 'colorFilter':
        this.colorFilter = event.value;
        break;
      case 'priceFilter':
        this.priceFilter = event.value;
        break;
      default:
        throw new Error();
    }
  }
}
