
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelpShowComponent } from './help-show/help-show.component';
import { SliderComponent } from './slider/slider.component';
import { HelpDetailsComponent } from './help-details/help-details.component';



@NgModule({
  declarations: [
    FrontOfficeComponent,
    NavbarComponent,
    HelpShowComponent,
    SliderComponent,
    HelpDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FrontOfficeModule { }
