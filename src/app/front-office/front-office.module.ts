import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TousEmploisComponent } from './tous-emplois/tous-emplois.component';
import { PostulerComponent } from './postuler/postuler.component';



@NgModule({
  declarations: [
    FrontOfficeComponent,
    NavbarComponent,
    CandidaturesComponent,
    TousEmploisComponent,
    PostulerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontOfficeRoutingModule,
    HttpClientModule
  ]
})
export class FrontOfficeModule { }
