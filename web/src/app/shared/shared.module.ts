import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    InputComponent,
    SidebarComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    HeaderComponent,
    SelectComponent,
    InputComponent,
    SidebarComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
