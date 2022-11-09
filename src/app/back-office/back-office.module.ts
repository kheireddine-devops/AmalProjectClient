import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddDonsComponent } from './add-dons/add-dons.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RapportComponent } from './rapport/rapport.component';
import { ConsulterRapportComponent } from './consulter-rapport/consulter-rapport.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';





@NgModule({
  declarations: [
    BackOfficeComponent,
    GestionDonsComponent,
    SideBarComponent,
    AddDonsComponent,
    RapportComponent,
    ConsulterRapportComponent,
    AjouterRapportComponent
    

  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BackOfficeModule { }
