import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import {GuestLoginComponent} from "./guest-login/guest-login.component";
import {NotFoundComponent} from "../shared/not-found/not-found.component";

const routes: Routes = [
  { path: '',
    component: FrontOfficeComponent ,
    children: [
      {path: "login", component: GuestLoginComponent},
      {path: '**', component: NotFoundComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
