import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ShowHelpComponent } from './show-help/show-help.component';
import { AddHelpComponent } from './add-help/add-help.component';



@NgModule({
  declarations: [
    BackOfficeComponent,
    GestionDonsComponent,
    SideBarComponent,
    ShowHelpComponent,
    AddHelpComponent,
    
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BackOfficeModule { }
