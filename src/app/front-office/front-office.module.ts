import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    FrontOfficeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule
  ]
})
export class FrontOfficeModule { }
