
import { PlaylisteComponent } from './playliste/playliste.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';

const routes: Routes = [{ path: '', component: FrontOfficeComponent ,

children:[
 
  {path: 'ListetousFormation',component:CartComponent},
  {path: 'ListetousTutoriels',component:PlaylisteComponent},
 

]},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
