import { GestionEmploisComponent } from './gestion-emplois/gestion-emplois.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { AjouterEmploisComponent } from './ajouter-emplois/ajouter-emplois.component';
import { EmploisComponent } from './emplois/emplois.component';
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
      // Haithem
      {path: 'gestiondons',component:GestionDonsComponent},
      // Start Sabrine Routes
      {path: 'admin/emplois',component:EmploisComponent},
      {path: 'admin/gestionemplois',component:GestionEmploisComponent},
      {path: 'admin/ajouteremploi',component:AjouterEmploisComponent},
      {path: 'admin/modifieremploi/:id',component: AjouterEmploisComponent},

      {path: 'organization/emplois',component:EmploisComponent},
      {path: 'organization/gestionemplois',component:GestionEmploisComponent},
      {path: 'organization/ajouteremploi',component:AjouterEmploisComponent},
      {path: 'organization/modifieremploi/:id',component: AjouterEmploisComponent},
      // End Sabrine Routes
      {path: '**', component: NotFoundComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
