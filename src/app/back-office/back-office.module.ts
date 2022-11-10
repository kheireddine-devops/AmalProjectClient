import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from "./back-office.component";
import { BackOfficeMaterialModule } from "../core/material/back-office-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { AdminUserManagementComponent } from './components/admin-user-management/admin-user-management.component';
import { AdminGuestContactComponent } from './components/admin-guest-contact/admin-guest-contact.component';
import { AdminEditUsersDialogComponent } from './components/dialogs/admin-edit-users-dialog/admin-edit-users-dialog.component';
import { AdminDashboardUserStatisticsComponent } from './components/admin-dashboard-user-statistics/admin-dashboard-user-statistics.component';
import { AdminConfirmDeleteUserDialogComponent } from './components/dialogs/admin-confirm-delete-user-dialog/admin-confirm-delete-user-dialog.component';
import { AdminUserDetailsDialogComponent } from './components/dialogs/admin-user-details-dialog/admin-user-details-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatChipsModule} from "@angular/material/chips";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { GestionEmploisComponent } from './gestion-emplois/gestion-emplois.component';
import { AjouterEmploisComponent } from './ajouter-emplois/ajouter-emplois.component';
import { EmploisComponent } from './emplois/emplois.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GestionFormationsComponent } from './gestion-formations/gestion-formations.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { ListeTutorielsComponent } from './liste-tutoriels/liste-tutoriels.component';
import {A11yModule} from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDialogComponentComponent } from './add-dialog-component/add-dialog-component.component';
import { KPIformationComponent } from './kpiformation/kpiformation.component';
import { ShowHelpComponent } from './show-help/show-help.component';
import { AddHelpComponent } from './add-help/add-help.component';
import { CommentsHelpComponent } from './comments-help/comments-help.component';

import { AddDonsComponent } from './add-dons/add-dons.component';
import { RapportComponent } from './rapport/rapport.component';
import { ConsulterRapportComponent } from './consulter-rapport/consulter-rapport.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import {GestionBoutiqueComponent} from "./gestion-boutique/gestion-boutique.component";




@NgModule({
  declarations: [
    BackOfficeComponent,
    SideBarComponent,
    AdminDashbordComponent,
    AdminUserManagementComponent,
    AdminGuestContactComponent,
    AdminEditUsersDialogComponent,
    AdminDashboardUserStatisticsComponent,
    AdminConfirmDeleteUserDialogComponent,
    AdminUserDetailsDialogComponent,
    GestionEmploisComponent,
    AjouterEmploisComponent,
    EmploisComponent,
    GestionDonsComponent,
    SideBarComponent,
    GestionFormationsComponent,
    ListeFormationComponent,
    ListeTutorielsComponent,
    AddDialogComponentComponent,
    KPIformationComponent,
    KPIformationComponent,
    ShowHelpComponent,
    AddHelpComponent,
    CommentsHelpComponent,
    AddDonsComponent,
    RapportComponent,
    ConsulterRapportComponent,
    AjouterRapportComponent,
    GestionBoutiqueComponent
  ],
  imports: [
      CommonModule,
      BackOfficeRoutingModule,
      BackOfficeMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      NgxChartsModule,
      MatChipsModule,

      HttpClientModule,
      LayoutModule,
      RouterModule,
      MatFormFieldModule,
      MatSliderModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatTableModule,
      MatDatepickerModule,
      ObserversModule,
      A11yModule,
      MatChipsModule
  ]
})
export class BackOfficeModule { }
