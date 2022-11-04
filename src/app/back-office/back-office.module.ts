import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GestionEmploisComponent } from './gestion-emplois/gestion-emplois.component';
import { AjouterEmploisComponent } from './ajouter-emplois/ajouter-emplois.component';
import { FormsModule } from '@angular/forms';
import { EmploisComponent } from './emplois/emplois.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
    GestionDonsComponent,
    SideBarComponent,
    GestionEmploisComponent,
    AjouterEmploisComponent,
    EmploisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BackOfficeRoutingModule,
    HttpClientModule
  ]
})
export class BackOfficeModule { }
