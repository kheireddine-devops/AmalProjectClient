import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import {NotFoundComponent} from "../shared/not-found/not-found.component";
import {AdminUserManagementComponent} from "./components/admin-user-management/admin-user-management.component";
import {AdminGuestContactComponent} from "./components/admin-guest-contact/admin-guest-contact.component";
import {AdminDashbordComponent} from "./components/admin-dashbord/admin-dashbord.component";
import {AdminGuard} from "../core/guards/admin.guard";
import {BenevoleGuard} from "../core/guards/benevole.guard";
import {DoctorGuard} from "../core/guards/doctor.guard";

const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent ,
    children:[
      {path: 'gestiondons',component:GestionDonsComponent},

      // Start Admin Routes Section
      {path: 'admin/dashboard',component:AdminDashbordComponent, canActivate: [/*AdminGuard*/]},
      {path: 'admin/users',component:AdminUserManagementComponent, canActivate: [/*AdminGuard*/]},
      {path: 'admin/contact',component:AdminGuestContactComponent, canActivate: [/*AdminGuard*/]},
      {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
      // End Admin Routes Section

      {path: '**', component: NotFoundComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
