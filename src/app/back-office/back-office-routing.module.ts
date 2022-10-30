import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [{ path: '', component: BackOfficeComponent , 
children:[{path: 'gestiondons',component:GestionDonsComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
