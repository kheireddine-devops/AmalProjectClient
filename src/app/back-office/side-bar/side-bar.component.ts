import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account, RoleEnum} from "../../core/entities/users";
import {AccountService} from "../../core/services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {
  AdminUserDetailsDialogComponent
} from "../components/dialogs/admin-user-details-dialog/admin-user-details-dialog.component";
import {UserEditPhotoComponent} from "../components/dialogs/user-edit-photo/user-edit-photo.component";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input("isOpenSideBar") isOpenSideBar: boolean = false;
  @Input("mode") mode: RoleEnum | undefined;

  menus: Array<MenuItem> = [];
  currentUser: Account | undefined;

  URL = `${environment.url}/images/users/`;

  @Output("CurrentUserEvent") CurrentUserEvent: EventEmitter<Account> = new EventEmitter<Account>();

  constructor(private _accountService: AccountService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
    // this.mode = (this._router.getCurrentNavigation()?.extras?.state?.['role']);
  }

  ngOnInit(): void {

    this.mode = this._accountService.getRole();
    if (this.mode !== undefined) {
      this._accountService.getCurrentUser().subscribe((currentUser: Account) => {
        this.currentUser = currentUser;
        this.CurrentUserEvent.emit(this.currentUser);
        switch (this.currentUser.role) {
          case RoleEnum.ADMIN:
            this.menus = ADMIN_MENU;
            break;
          case RoleEnum.BENEFICIER:
            this.menus = BENEFICIER_MENU;
            break;
          case RoleEnum.BENEVOLE:
            this.menus = BENEVOLE_MENU;
            break;
          case RoleEnum.DOCTOR:
            this.menus = DOCTOR_MENU;
            break;
          case RoleEnum.ORGANIZATION:
            this.menus = ORGANIZATION_MENU;
            break;
          default:
            console.error("unknown user")
        }
      }, error => {
        console.log(error);
      })
    }
    // this._activatedRoute.paramMap.subscribe(value => {
    //   if(value.has("role")) {
    //
    //     switch (value.get("role")) {
    //       case "admin": this.mode = RoleEnum.ADMIN; break;
    //       case "benefecier": this.mode = RoleEnum.BENEFICIER; break;
    //       case "benevole": this.mode = RoleEnum.BENEVOLE; break;
    //       case "doctor": this.mode = RoleEnum.DOCTOR; break;
    //       case "organization": this.mode = RoleEnum.ORGANIZATION; break;
    //       default: this.mode = undefined;
    //     }
    //     // Object.values(RoleEnum).includes(this.mode as RoleEnum)
    //
    //   }
    // })
  }
}

interface SubMenuItem {
  text: string,
  path: string
}

interface MenuItem {
  icon: string,
  text: string,
  path: string,
  subMenu?: Array<SubMenuItem>
}

const ADMIN_MENU: Array<MenuItem> = [
  {path: '/BackOffice/admin/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  // {path: '/BackOffice/admin/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  // {path: '/BackOffice/admin/my-profile/edit', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/admin/users', text: 'Users', icon: 'fa fa-users'},
  {
    path: "",
    text: "Boutique",
    icon: "fa fa-shopping-cart",
    subMenu: [
      {path: "/BackOffice/gestionboutique", text: "Ajouter Produit"},
      {path: "/BackOffice/store-produit", text: "Liste Produit"},
      {path: "/BackOffice/gestionavis", text: "Gestion Avis"}
    ]
  },
  {
    path: "",
    text: "Gestion de Formation",
    icon: "fa fa-laptop",
    subMenu: [
      {path: "/BackOffice/gestionFormation", text: "Gestion Formations"},
      {path: "/BackOffice/gestionPlaylist", text: "Gestion Playlists"}
    ]
  },
  {
    path: "",
    text: "Gestion D\'aides",
    icon: "fa fa-tachometer-alt",
    subMenu: [
      {path: "/BackOffice/gestionaides", text: "Gestion D\'aides "},
      {path: "/BackOffice/ajouteraide", text: "Ajoutez Aides"},

    ]
  },
  // {path: '/BackOffice/KPIformation', text: 'Users', icon: 'fa fa-th'},
  {path: "/BackOffice/gestionrapport", text: "Consulter Rapports", icon: 'fa fa-th'},
  {
    path: '',
    text: "Offres d'emplois",
    icon: 'fa fa-briefcase',
    subMenu: [
      {path: "/BackOffice/admin/emplois", text: "Liste des offres d'emplois"},
      {path: "/BackOffice/admin/ajouteremploi", text: "Ajouter une offre"},
      {path: "/BackOffice/admin/link-1", text: "Statéstique"},
      {path: "/BackOffice/admin/candidatures", text: "Mes candidatures"}
    ]
  },
  {
    path: '',
    text: 'Gestion Dons',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouterdons", text: "Ajouter Dons"},
      {path: "/BackOffice/mesdons", text: "Mes Dons"},
    ]
  },
  {
    path: '',
    text: 'Gestion Rapports',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouter_rapport", text: "Ajouter Rapports"},
      {path: "/BackOffice/rapport", text: "Modifier Rapports"},
    ]
  },
];

const DOCTOR_MENU: Array<MenuItem> = [
  {path: '/BackOffice/doctor/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/doctor/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  // {path: '/BackOffice/doctor/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {
    path: '',
    text: 'Gestion Dons',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouterdons", text: "Ajouter Dons"},
      {path: "/BackOffice/mesdons", text: "Mes Dons"},
    ]
  },
  {
    path: '',
    text: 'Gestion Rapports',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouter_rapport", text: "Ajouter Rapports"},
      {path: "/BackOffice/rapport", text: "Modifier Rapports"},
    ]
  }
];

const BENEFICIER_MENU: Array<MenuItem> = [
  {path: '/BackOffice/beneficier/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/beneficier/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  // {path: '/BackOffice/beneficier/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {
    path: "",
    text: "Gestion D\'aides",
    icon: "fa fa-tachometer-alt",
    subMenu: [
      {path: "/BackOffice/gestionaidesbenif", text: "Gestion Demandes D\'aides "},
      {path: "/BackOffice/addaidebenif", text: "Ajoutez Demnde D'ide"},
    ]
  },
  {path: "/BackOffice/reserverFormation", text: "Réserver Formations", icon: 'fa fa-laptop'},
  {
    path: '',
    text: 'Gestion Dons',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouterdons", text: "Ajouter Dons"},
      {path: "/BackOffice/mesdons", text: "Mes Dons"},
    ]
  },
  {
    path: '',
    text: 'Gestion Rapports',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouter_rapport", text: "Ajouter Rapports"},
      {path: "/BackOffice/rapport", text: "Modifier Rapports"},
    ]
  }
];

const BENEVOLE_MENU: Array<MenuItem> = [
  {path: '/BackOffice/benevole/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/benevole/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  // {path: '/BackOffice/benevole/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {
    path: "",
    text: "Gestion de Formation",
    icon: "fa fa-laptop",
    subMenu: [
      {path: "/BackOffice/gestionFormation", text: "Gestion Formation"},
      {path: "/BackOffice/gestionTutoriels", text: "Gestion Tutoriels"}
    ]
  },
  {
    path: '',
    text: 'Gestion Dons',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouterdons", text: "Ajouter Dons"},
      {path: "/BackOffice/mesdons", text: "Mes Dons"},
    ]
  },
  {
    path: '',
    text: 'Gestion Rapports',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouter_rapport", text: "Ajouter Rapports"},
      {path: "/BackOffice/rapport", text: "Modifier Rapports"},
    ]
  }
];

const ORGANIZATION_MENU: Array<MenuItem> = [
  {path: '/BackOffice/organization/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/organization/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  // {path: '/BackOffice/organization/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {
    path: '',
    text: "Offres d'emplois",
    icon: 'fa fa-briefcase',
    subMenu: [
      {path: "/BackOffice/organization/emplois", text: "Liste des offres d'emplois"},
      {path: "/BackOffice/organization/ajouteremploi", text: "Ajouter une offre"},
      {path: "/BackOffice/organization/link-1", text: "Statéstique"},
      {path: "/BackOffice/organization/candidatures", text: "Mes candidatures"}
    ]
  },
  {
    path: '',
    text: 'Gestion Dons',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouterdons", text: "Ajouter Dons"},
      {path: "/BackOffice/mesdons", text: "Mes Dons"},
    ]
  },
  {
    path: '',
    text: 'Gestion Rapports',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/ajouter_rapport", text: "Ajouter Rapports"},
      {path: "/BackOffice/rapport", text: "Modifier Rapports"},
    ]
  }
];
