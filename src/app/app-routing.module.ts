import { FrontOfficeComponent } from './front-office/front-office.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'BackOffice', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) }, 
{ path: 'FrontOffice', loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule) },
{path: '', redirectTo:'/FrontOffice',pathMatch:'full'},
{path: '**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
