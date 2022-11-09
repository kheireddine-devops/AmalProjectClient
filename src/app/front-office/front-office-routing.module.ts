import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import { DonsComponent } from './dons/dons.component';

const routes: Routes = [{ path: '', component: FrontOfficeComponent,
children:[ {path:'dons',component:DonsComponent}]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
