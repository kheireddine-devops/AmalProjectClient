import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';
import { NavbarComponent } from './navbar/navbar.component';

import { GuestLoginComponent } from './guest-login/guest-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GuestContactComponent } from './guest-contact/guest-contact.component';
import { GuestChooseInscriptionComponent } from './guest-choose-inscription/guest-choose-inscription.component';
import { GuestInscriptionComponent } from './guest-inscription/guest-inscription.component';
import { GuestResetPasswordComponent } from './guest-reset-password/guest-reset-password.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import {FrontOfficeMaterialModule} from "../core/material/front-office-material.module";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import { GuestFooterComponent } from './guest-footer/guest-footer.component';
import { GuestToolbarComponent } from './guest-toolbar/guest-toolbar.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TousEmploisComponent } from './tous-emplois/tous-emplois.component';
import { PostulerComponent } from './postuler/postuler.component';


@NgModule({
    declarations: [
        FrontOfficeComponent,
        NavbarComponent,
        GuestLoginComponent,
        GuestContactComponent,
        GuestChooseInscriptionComponent,
        GuestInscriptionComponent,
        GuestResetPasswordComponent,
        GuestHomeComponent,
        GuestFooterComponent,
        GuestToolbarComponent,
        NavbarComponent,
        CandidaturesComponent,
        TousEmploisComponent,
        PostulerComponent
    ],
    imports: [
        CommonModule,
        FrontOfficeMaterialModule,
        FrontOfficeRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    ],
    exports: [
        GuestInscriptionComponent
    ]})
export class FrontOfficeModule { }
