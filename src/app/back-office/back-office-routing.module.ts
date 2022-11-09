import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { AddDonsComponent } from './add-dons/add-dons.component';
import { RapportComponent } from './rapport/rapport.component';
import { ConsulterRapportComponent } from './consulter-rapport/consulter-rapport.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';

const routes: Routes = [{ path: '', component: BackOfficeComponent , 
children:[
  {path: 'mesdons',component:GestionDonsComponent},
  {path: 'ajouterdons',component:AddDonsComponent},
  {path: 'rapport', component:RapportComponent},
  {path: 'gestionrapport', component:ConsulterRapportComponent},
  {path: 'ajouter_rapport', component:AjouterRapportComponent}
  

]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
