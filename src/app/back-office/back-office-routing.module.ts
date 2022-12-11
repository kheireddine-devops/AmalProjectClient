import { NgModule } from '@angular/core';
import { GestionEmploisComponent } from './gestion-emplois/gestion-emplois.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { AjouterEmploisComponent } from './ajouter-emplois/ajouter-emplois.component';
import { EmploisComponent } from './emplois/emplois.component';
import {NotFoundComponent} from "../shared/not-found/not-found.component";
import {AdminUserManagementComponent} from "./components/admin-user-management/admin-user-management.component";
import {AdminGuestContactComponent} from "./components/admin-guest-contact/admin-guest-contact.component";
import {AdminDashbordComponent} from "./components/admin-dashbord/admin-dashbord.component";
import { AddDonsComponent } from './add-dons/add-dons.component';
import { RapportComponent } from './rapport/rapport.component';
import { ConsulterRapportComponent } from './consulter-rapport/consulter-rapport.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import {AdminGuard} from "../core/guards/admin.guard";
import {BenevoleGuard} from "../core/guards/benevole.guard";
import {DoctorGuard} from "../core/guards/doctor.guard";
import {GestionBoutiqueComponent} from "./gestion-boutique/gestion-boutique.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {ShowHelpComponent} from "./show-help/show-help.component";
import {ShowhelpBenifComponent} from "./showhelp-benif/showhelp-benif.component";
import {AddaidebenifComponent} from "./addaidebenif/addaidebenif.component";
import {AddHelpComponent} from "./add-help/add-help.component";
import {UpdatehelpComponent} from "./updatehelp/updatehelp.component";
import {CommentsHelpComponent} from "./comments-help/comments-help.component";
import {UpdateaidebenifComponent} from "./updateaidebenif/updateaidebenif.component";
import {CandidaturesComponent} from "./candidatures/candidatures.component";
import {AjouterCandidatureComponent} from "./ajouter-candidature/ajouter-candidature.component";
import {GestionFormationsComponent} from "./gestion-formations/gestion-formations.component";
import {AddDialogComponentComponent} from "./add-dialog-component/add-dialog-component.component";
import {AddPlaylisteComponent} from "./add-playliste/add-playliste.component";
import {DeleteConfirmationComponent} from "./delete-confirmation/delete-confirmation.component";
import {UpdatePlaylistComponent} from "./update-playlist/update-playlist.component";
import {GestionvideoComponent} from "./gestionvideo/gestionvideo.component";
import {AddVideosComponent} from "./add-videos/add-videos.component";
import {UpdateFormationComponent} from "./update-formation/update-formation.component";
import {KPIformationComponent} from "./kpiformation/kpiformation.component";
import {GestionPlaylistComponent} from "./gestion-playlist/gestion-playlist.component";
import {WatchVideoComponent} from "../shared/watch-video/watch-video.component";
import {StoreProduitComponent} from "./store-produit/store-produit.component";
import {GestionavisComponent} from "./gestionavis/gestionavis.component";


const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      {path: 'gestiondons', component: GestionDonsComponent},

      // Start khairi Routes
      {path: 'admin/dashboard', component: AdminDashbordComponent /*, canActivate: [AdminGuard] */},
      {path: 'admin/users', component: AdminUserManagementComponent/*, canActivate: [AdminGuard] */},
      {path: 'admin/contact', component: AdminGuestContactComponent/*, canActivate: [AdminGuard] */},
      {path: 'users/profile', component: UserProfileComponent},
      {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
      // End khairi Routes
      // Start Sabrine Routes
      {path: 'admin/emplois', component: EmploisComponent},
      {path: 'admin/gestionemplois', component: GestionEmploisComponent},
      {path: 'admin/ajouteremploi', component: AjouterEmploisComponent},
      {path: 'admin/modifieremploi/:id', component: AjouterEmploisComponent},
      {path: 'admin/candidatures', component: CandidaturesComponent},
      {path: 'admin/modifiercandidature/:id', component: AjouterCandidatureComponent},
      {path: 'organization/emplois', component: EmploisComponent},
      {path: 'organization/gestionemplois', component: GestionEmploisComponent},
      {path: 'organization/ajouteremploi', component: AjouterEmploisComponent},
      {path: 'organization/modifieremploi/:id', component: AjouterEmploisComponent},
      {path: 'organization/candidatures', component: CandidaturesComponent},
      {path: 'beneficiers/candidatures', component: CandidaturesComponent},
      // End Sabrine Routes
      // Start Asma Routes
          // benevole
          {path: 'gestionFormation',component:GestionFormationsComponent},
          {path: 'gestionFormation/addFormation',component:AddDialogComponentComponent},
          {path: 'gestionFormation/updateFormation/:id',component:UpdateFormationComponent},
          {path: 'gestionFormation/deleteFormation',component:GestionFormationsComponent},
          //benevole gestion des playlistes
          {path: 'gestionPlaylist',component:GestionPlaylistComponent},
          {path: 'gestionPlaylist/addPlaylist',component:AddPlaylisteComponent},
          {path: 'gestionPlaylist/updatePlaylist',component:UpdatePlaylistComponent},
          {path: 'gestionPlaylist/deletePlaylist',component:DeleteConfirmationComponent},
          //benevole gestion des videos dans un playliste
          {path: 'gestionPlaylist/Playlist/gestionvideo/:id',component:GestionvideoComponent},
          {path: 'Playlist/gestionvideo/addvideo',component:AddVideosComponent},
          {path: 'Playlist/gestionvideo/deletevideo',component:DeleteConfirmationComponent},
          {path: 'Playlist/gestionvideo/watch-video',component:WatchVideoComponent},
          //kpi formation
          {path: 'KPIformation',component:KPIformationComponent},
      // End Asma Routes
      // Start Ameni Routes
      {path: 'gestionaides',component:ShowHelpComponent},
      {path: 'gestionaidesbenif',component:ShowhelpBenifComponent},
      {path: 'addaidebenif',component:AddaidebenifComponent},
      {path: 'ajouteraide',component:AddHelpComponent},
      {path: 'modifieraide/:id',component:UpdatehelpComponent},
      {path: 'modifieraidebenif/:id',component:UpdateaidebenifComponent},
      {path: 'gestioncommentaires/:id',component:CommentsHelpComponent},
      // End Ameni Routes
      // Strat Heithem Routes
      {path: 'gestiondons', component: GestionDonsComponent},
      {path: 'mesdons',component:GestionDonsComponent},
      {path: 'ajouterdons',component:AddDonsComponent},
      {path: 'rapport', component:RapportComponent},
      {path: 'gestionrapport', component:ConsulterRapportComponent},
      {path: 'ajouter_rapport', component:AjouterRapportComponent},
      // Start Massouda Routes
      {path: 'gestionboutique',component:GestionBoutiqueComponent },
      {path: 'editproduit/:id',component:GestionBoutiqueComponent },
      {path: 'store-produit',component:StoreProduitComponent },
      {path: 'gestionavis',component: GestionavisComponent },
      // End Massouda Routes
      // End Haithem Routes
      {path: '**', component: NotFoundComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
