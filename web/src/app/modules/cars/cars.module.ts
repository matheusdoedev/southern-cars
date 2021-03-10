import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsComponent } from './cars.component';
import { CarsHeadComponent } from 'src/app/components/cars-head/cars-head.component';
import { CarsFiltersComponent } from '../../components/cars-filters/cars-filters.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { CarsResultsComponent } from 'src/app/components/cars-results/cars-results.component';
import { CarsResultComponent } from 'src/app/components/cars-result/cars-result.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarsHeadComponent,
    CarsFiltersComponent,
    InputComponent,
    SelectComponent,
    CarsResultsComponent,
    CarsResultComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, FormsModule],
  bootstrap: [CarsComponent],
  exports: [CarsComponent],
})
export class CarsModule {}
