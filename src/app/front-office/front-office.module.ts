
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { FrontOfficeComponent } from './front-office.component';

import { CartComponent } from './cart/cart.component';
import { PlaylisteComponent } from './playliste/playliste.component';
import {MatListModule} from '@angular/material/list';
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
import { TousEmploisComponent } from './tous-emplois/tous-emplois.component';
import { PostulerComponent } from './postuler/postuler.component';
import {HelpShowComponent} from "./help-show/help-show.component";
import {HelpDetailsComponent} from "./help-details/help-details.component";
import { DonsComponent } from './dons/dons.component';
import {StoreComponent} from "./store/store.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {SearchComponent} from "./search/search.component";
import {NgxPaginationModule} from "ngx-pagination";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        FrontOfficeComponent,
        GuestLoginComponent,
        GuestContactComponent,
        GuestChooseInscriptionComponent,
        GuestInscriptionComponent,
        GuestResetPasswordComponent,
        GuestHomeComponent,
        GuestFooterComponent,
        GuestToolbarComponent,
        TousEmploisComponent,
        PostulerComponent,
        FrontOfficeComponent,
        CartComponent,
        PlaylisteComponent,
        HelpShowComponent,
        HelpDetailsComponent,
        DonsComponent,
        StoreComponent,
        SearchComponent,
        CategoriesComponent,
        ArticlePageComponent
    ],
    imports: [
        CommonModule,
        FrontOfficeMaterialModule,
        FrontOfficeRoutingModule,
        FormsModule,
        ReactiveFormsModule,

        RouterModule,
        HttpClientModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        NgxPaginationModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    ],
    exports: [
        GuestInscriptionComponent
    ]})
export class FrontOfficeModule { }
