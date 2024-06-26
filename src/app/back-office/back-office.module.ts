import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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

import { AddDonsComponent } from './add-dons/add-dons.component';
import { RapportComponent } from './rapport/rapport.component';
import { ConsulterRapportComponent } from './consulter-rapport/consulter-rapport.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import {GestionBoutiqueComponent} from "./gestion-boutique/gestion-boutique.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserEditPhotoComponent } from './components/dialogs/user-edit-photo/user-edit-photo.component';
import {UpdateaidebenifComponent} from "./updateaidebenif/updateaidebenif.component";
import {UpdatehelpComponent} from "./updatehelp/updatehelp.component";
import {AddHelpComponent} from "./add-help/add-help.component";
import {ShowhelpBenifComponent} from "./showhelp-benif/showhelp-benif.component";
import {AddaidebenifComponent} from "./addaidebenif/addaidebenif.component";
import {CommentsHelpComponent} from "./comments-help/comments-help.component";
import {ShowHelpComponent} from "./show-help/show-help.component";
import {AjouterCandidatureComponent} from "./ajouter-candidature/ajouter-candidature.component";
import {CandidaturesComponent} from "./candidatures/candidatures.component";
import {ShowPDFPopUpComponent} from "./show-pdf-pop-up/show-pdf-pop-up.component";
import {NgxPaginationModule} from "ngx-pagination";
import {AddDialogComponentComponent} from "./add-dialog-component/add-dialog-component.component";
import {AddPlaylisteComponent} from "./add-playliste/add-playliste.component";
import {AddVideosComponent} from "./add-videos/add-videos.component";
import {DeleteConfirmationComponent} from "./delete-confirmation/delete-confirmation.component";
import {DeletePlaylistComponent} from "./delete-playlist/delete-playlist.component";
import {DeleteVideoComponent} from "./delete-video/delete-video.component";
import {GestionFormationsComponent} from "./gestion-formations/gestion-formations.component";
import {GestionPlaylistComponent} from "./gestion-playlist/gestion-playlist.component";
import {GestionvideoComponent} from "./gestionvideo/gestionvideo.component";
import {KPIformationComponent} from "./kpiformation/kpiformation.component";
import {ReservationConfirmerComponent} from "./reservation-confirmer/reservation-confirmer.component";
import {UpdateFormationComponent} from "./update-formation/update-formation.component";
import {UpdatePlaylistComponent} from "./update-playlist/update-playlist.component";
import {SharedModule} from "../shared/shared.module";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {StoreProduitComponent} from "./store-produit/store-produit.component";
import {GestionavisComponent} from "./gestionavis/gestionavis.component";




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
    AddDonsComponent,
    RapportComponent,
    ConsulterRapportComponent,
    AjouterRapportComponent,
    UserProfileComponent,
    FooterComponent,
    NavbarComponent,
    UserEditPhotoComponent,
    // Ameni Start Imports
    AddHelpComponent,
    AddaidebenifComponent,
    CommentsHelpComponent,
    ShowHelpComponent,
    ShowhelpBenifComponent,
    UpdateaidebenifComponent,
    UpdatehelpComponent,
    // Ameni End Imports
    // Sabrine Start Imports
    AjouterCandidatureComponent,
    AjouterEmploisComponent,
    CandidaturesComponent,
    EmploisComponent,
    GestionEmploisComponent,
    ShowPDFPopUpComponent,
    // Sabrine End Imports
    // Asma Start Imports
    AddDialogComponentComponent,
    AddPlaylisteComponent,
    AddVideosComponent,
    DeleteConfirmationComponent,
    DeletePlaylistComponent,
    DeleteVideoComponent,
    GestionFormationsComponent,
    GestionPlaylistComponent,
    GestionvideoComponent,
    KPIformationComponent,
    ReservationConfirmerComponent,
    UpdateFormationComponent,
    UpdatePlaylistComponent,
    // Asma End Imports
    // Massouda Start Routes
    GestionBoutiqueComponent,
    StoreProduitComponent,
    GestionavisComponent,
    // Massouda End Routes
  ],
  imports: [
      CommonModule,
      BackOfficeRoutingModule,
      BackOfficeMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
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
      MatChipsModule,
      NgxPaginationModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
})
export class BackOfficeModule { }
