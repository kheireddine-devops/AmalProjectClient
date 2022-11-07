
import { GestionEmploisComponent } from './gestion-emplois/gestion-emplois.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { AjouterEmploisComponent } from './ajouter-emplois/ajouter-emplois.component';
import { EmploisComponent } from './emplois/emplois.component';

const routes: Routes = [{ path: '', component: BackOfficeComponent , 
children:[{path: 'gestiondons',component:GestionDonsComponent},
          {path: 'emplois',component:EmploisComponent},
          {path: 'gestionemplois',component:GestionEmploisComponent},
          {path: 'ajouteremploi',component:AjouterEmploisComponent},
          {path:'modifieremploi/:id',component: AjouterEmploisComponent},
          
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
