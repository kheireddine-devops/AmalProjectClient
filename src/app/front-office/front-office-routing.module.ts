import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import {GuestLoginComponent} from "./guest-login/guest-login.component";
import {NotFoundComponent} from "../shared/not-found/not-found.component";
import {GuestChooseInscriptionComponent} from "./guest-choose-inscription/guest-choose-inscription.component";
import {GuestInscriptionComponent} from "./guest-inscription/guest-inscription.component";
import {GuestContactComponent} from "./guest-contact/guest-contact.component";
import {GuestResetPasswordComponent} from "./guest-reset-password/guest-reset-password.component";
import {GuestHomeComponent} from "./guest-home/guest-home.component";

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
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: '**', component: NotFoundComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
