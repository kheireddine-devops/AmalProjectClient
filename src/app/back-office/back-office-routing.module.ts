import { AddDialogComponentComponent } from './add-dialog-component/add-dialog-component.component';
import { KPIformationComponent } from './kpiformation/kpiformation.component';
import { ListeTutorielsComponent } from './liste-tutoriels/liste-tutoriels.component';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';


const routes: Routes = [{ path: '', component: BackOfficeComponent , 
children:[
  {path: 'gestiondons',component:GestionDonsComponent},
  {path: 'gestionFormation',component:GestionFormationsComponent},
  {path: 'reserverFormation',component:ListeFormationComponent},
  {path: 'gestionTutoriels',component:ListeTutorielsComponent},
  {path: 'KPIformation',component:KPIformationComponent},
  {path: 'addFormation',component:AddDialogComponentComponent},
  
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
