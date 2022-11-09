import { PostulerComponent } from './postuler/postuler.component';

import { CandidaturesComponent } from './candidatures/candidatures.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import { TousEmploisComponent } from './tous-emplois/tous-emplois.component';


const routes: Routes = [{ path: '', component: FrontOfficeComponent ,
children:[{path: 'tousemplois',component:TousEmploisComponent},
          {path: 'candidatures',component:CandidaturesComponent},
          {path: 'postuler',component:PostulerComponent},

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
