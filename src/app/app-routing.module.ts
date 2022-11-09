import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [

  { path: 'FrontOffice', loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule) },
  { path: 'BackOffice',loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) /*, canActivateChild: [AuthGuard] */},
  { path: '', redirectTo:'/FrontOffice/home',pathMatch:'full' },
  { path: '**',component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
