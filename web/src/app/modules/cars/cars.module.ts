import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';

import { CarsComponent } from './cars.component';
import { CarsHeadComponent } from 'src/app/modules/cars/cars-head/cars-head.component';
import { CarsFiltersComponent } from './cars-filters/cars-filters.component';
import { CarsResultsComponent } from 'src/app/modules/cars/cars-results/cars-results.component';
import { CarsResultComponent } from 'src/app/modules/cars/cars-result/cars-result.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarsHeadComponent,
    CarsFiltersComponent,
    CarsResultsComponent,
    CarsResultComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, SharedModule],
  bootstrap: [CarsComponent],
  exports: [CarsComponent],
})
export class CarsModule {}
