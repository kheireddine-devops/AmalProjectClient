import { PostulerComponent } from './postuler/postuler.component';
import { PlaylisteComponent } from './playliste/playliste.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import { DonsComponent } from './dons/dons.component';
import {GuestLoginComponent} from "./guest-login/guest-login.component";
import {NotFoundComponent} from "../shared/not-found/not-found.component";
import {GuestChooseInscriptionComponent} from "./guest-choose-inscription/guest-choose-inscription.component";
import {GuestInscriptionComponent} from "./guest-inscription/guest-inscription.component";
import {GuestContactComponent} from "./guest-contact/guest-contact.component";
import {GuestResetPasswordComponent} from "./guest-reset-password/guest-reset-password.component";
import {GuestHomeComponent} from "./guest-home/guest-home.component";
import {TousEmploisComponent} from "./tous-emplois/tous-emplois.component";
import {StoreComponent} from "./store/store.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {HelpShowComponent} from "./help-show/help-show.component";
import {HelpDetailsComponent} from "./help-details/help-details.component";


const routes: Routes = [
  { path: '',
    component: FrontOfficeComponent ,
    children: [
      { path: "home", component: GuestHomeComponent },
      { path: "login", component: GuestLoginComponent },
      { path: "choose-inscription", component: GuestChooseInscriptionComponent },
      { path: "inscription/:type", component: GuestInscriptionComponent },
      { path: "reset-password", component: GuestResetPasswordComponent },
      { path: "contact", component: GuestContactComponent },
      // Start Sabrine Routes
      // Start Sabrine Routes
      {path: 'tousemplois',component:TousEmploisComponent},
      {path: 'postuler',component:PostulerComponent},
      // End Sabrine Routes
      // End Sabrine Routes
      // Start Asma Routes
      {path: 'ListetousFormation',component:CartComponent},
      {path: 'ListetousTutoriels',component:PlaylisteComponent},
      // End Asma Routes
      // Start Ameni Routes
      {path:'demandeaide',component:HelpShowComponent},
      {path:'helpdetails/:id', component:HelpDetailsComponent},
      // End Ameni Routes
      // Start Haithem Routes
      {path:'dons',component:DonsComponent},
      // End Haithem Routes
      // Start Masouda Routes
      {path: 'storeP',component:StoreComponent },
      {path:'search/:searchItem',component:StoreComponent},
      {path:'categorie/:categorie',component:StoreComponent},
      {path:'boutique/:id',component:ArticlePageComponent},
      // End Massouda Routes
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: '**', component: NotFoundComponent }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
