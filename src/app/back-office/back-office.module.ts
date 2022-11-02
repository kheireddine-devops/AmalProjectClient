import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GestionEmploisComponent } from './gestion-emplois/gestion-emplois.component';
import { AjouterEmploisComponent } from './ajouter-emplois/ajouter-emplois.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BackOfficeComponent,
    GestionDonsComponent,
    SideBarComponent,
    GestionEmploisComponent,
    AjouterEmploisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
