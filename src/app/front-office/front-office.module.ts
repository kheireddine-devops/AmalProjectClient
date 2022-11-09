import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import {FormGroup, FormControl} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PlaylisteComponent } from './playliste/playliste.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    FrontOfficeComponent,
     CartComponent,
    PlaylisteComponent,
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,  
     FormsModule,
     RouterModule,
     HttpClientModule,
     MatIconModule,
     MatListModule,
   
  ]
})
export class FrontOfficeModule { }
