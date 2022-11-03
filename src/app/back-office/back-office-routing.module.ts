import { CommentsHelpComponent } from './comments-help/comments-help.component';
import { AddHelpComponent } from './add-help/add-help.component';
import { ShowHelpComponent } from './show-help/show-help.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [{ path: '', component: BackOfficeComponent , 
children:[{path: 'gestiondons',component:GestionDonsComponent},
{path: 'gestionaides',component:ShowHelpComponent},
{path: 'ajouteraide',component:AddHelpComponent},
{path: 'gestioncommentaires',component:CommentsHelpComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
