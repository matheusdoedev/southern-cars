import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarsModule } from './modules/cars/cars.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardLayoutComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
