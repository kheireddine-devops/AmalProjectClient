import { HelpDetailsComponent } from './help-details/help-details.component';
import { HelpShowComponent } from './help-show/help-show.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';

const routes: Routes = [{ path: '', component: FrontOfficeComponent,children:[
  {path:'demandeaide',component:HelpShowComponent},
  {path:'helpdetails', component:HelpDetailsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
