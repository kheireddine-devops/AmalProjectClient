import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from "./back-office.component";
import { BackOfficeMaterialModule } from "../core/material/back-office-material.module";


import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {SideBarComponent} from "./side-bar/side-bar.component";


import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { AdminUserManagementComponent } from './components/admin-user-management/admin-user-management.component';
import { AdminGuestContactComponent } from './components/admin-guest-contact/admin-guest-contact.component';
import { AdminEditUsersDialogComponent } from './components/dialogs/admin-edit-users-dialog/admin-edit-users-dialog.component';
import { AdminDashboardUserStatisticsComponent } from './components/admin-dashboard-user-statistics/admin-dashboard-user-statistics.component';
import { AdminConfirmDeleteUserDialogComponent } from './components/dialogs/admin-confirm-delete-user-dialog/admin-confirm-delete-user-dialog.component';
import { AdminUserDetailsDialogComponent } from './components/dialogs/admin-user-details-dialog/admin-user-details-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {NgxChartsModule} from "@swimlane/ngx-charts";


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
    AdminUserDetailsDialogComponent
  ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        BackOfficeMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgxChartsModule,
        MatChipsModule
    ]
})
export class BackOfficeModule { }
