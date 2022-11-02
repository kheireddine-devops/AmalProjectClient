import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmploisComponent } from './emplois/emplois.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrontOfficeComponent,
    NavbarComponent,
    EmploisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontOfficeRoutingModule
  ]
})
export class FrontOfficeModule { }
