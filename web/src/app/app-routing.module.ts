import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsModule } from './modules/cars/cars.module';

import { CarsComponent } from './modules/cars/cars.component';

const routes: Routes = [
  { path: '', component: CarsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CarsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
