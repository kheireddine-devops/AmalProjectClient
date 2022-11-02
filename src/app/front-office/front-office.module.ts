import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GuestLoginComponent } from './guest-login/guest-login.component';
import {FormsModule} from "@angular/forms";
import { GuestContactComponent } from './guest-contact/guest-contact.component';
import { GuestChooseInscriptionComponent } from './guest-choose-inscription/guest-choose-inscription.component';
import { GuestInscriptionComponent } from './guest-inscription/guest-inscription.component';


@NgModule({
  declarations: [
    FrontOfficeComponent,
    NavbarComponent,
    GuestLoginComponent,
    GuestContactComponent,
    GuestChooseInscriptionComponent,
    GuestInscriptionComponent
  ],
    imports: [
        CommonModule,
        FrontOfficeRoutingModule,
        FormsModule
    ]
})
export class FrontOfficeModule { }
