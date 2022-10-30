import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
    GestionDonsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
