import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrentUser, RoleEnum} from "../../core/entities/users";
import {AccountService} from "../../core/services/account.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input("isOpenSideBar") isOpenSideBar: boolean = false;
  @Input("mode") mode:RoleEnum | undefined;

  menus: Array<MenuItem> = [];
  currentUser: CurrentUser | undefined;

  @Output("CurrentUserEvent") CurrentUserEvent: EventEmitter<CurrentUser> = new EventEmitter<CurrentUser>();

  constructor(private _accountService: AccountService,private _router: Router, private _activatedRoute: ActivatedRoute) {
    // this.mode = (this._router.getCurrentNavigation()?.extras?.state?.['role']);
  }

  ngOnInit(): void {

    this.mode = this._accountService.getRole();
    if (this.mode !== undefined) {
      this._accountService.getCurrentUserByMode(this.mode).subscribe((currentUser: CurrentUser) => {
        this.currentUser = currentUser;
        this.CurrentUserEvent.emit(this.currentUser);
        switch (this.currentUser.role) {
          case RoleEnum.ADMIN: this.menus = ADMIN_MENU; break;
          case RoleEnum.BENEFICIER: this.menus = BENEFICIER_MENU; break;
          case RoleEnum.BENEVOLE: this.menus = BENEFICIER_MENU; break;
          case RoleEnum.DOCTOR: this.menus = DOCTOR_MENU; break;
          case RoleEnum.ORGANIZATION: this.menus = ORGANIZATION_MENU; break;
          default: console.error("unknown user")
        }
      },error => {
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
  {path: '/BackOffice/admin/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/admin/my-profile/edit', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/admin/users', text: 'Users', icon: 'fa fa-th'},
  {
    path: '',
    text: "Offres d'emplois",
    icon: 'fa fa-keyboard',
    subMenu: [
      {path: "/BackOffice/admin/emplois", text: "Liste des offres d'emplois"},
      {path: "/BackOffice/admin/ajouteremploi", text: "Ajouter une offre"},
      {path: "/BackOffice/admin/link-1", text: "Statéstique"},
      {path: "/BackOffice/admin/linl-2", text: "Mes candidatures"}
    ]
  },
  // {path: '/BackOffice/admin/ADMIN-MENU-01', text: 'ADMIN Item #01', icon: 'fa fa-table'},
  // {path: '/BackOffice/admin/ADMIN-MENU-02', text: 'ADMIN Item #02', icon: 'fa fa-chart-bar'},
  // {path: '/BackOffice/admin/ADMIN-MENU-03', text: 'ADMIN Item #03', icon: 'fa fa-chart-bar'}
];

const DOCTOR_MENU: Array<MenuItem> = [
  {path: '/BackOffice/doctor/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/doctor/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/doctor/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/doctor/DOCTOR-MENU-01', text: 'DOCTOR Item #01', icon: 'fa fa-table'},
  {path: '/BackOffice/doctor/DOCTOR-MENU-02', text: 'DOCTOR Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/doctor/DOCTOR-MENU-03', text: 'DOCTOR Item #03', icon: 'fa fa-chart-bar'}
];

const BENEFICIER_MENU: Array<MenuItem> = [
  {path: '/BackOffice/beneficier/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/beneficier/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/beneficier/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {
    path: '/BackOffice/beneficier/BENEFICIER-MENU-01',
    text: 'BENEFICIER Item #01',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/beneficier/SUB_MENU_01", text: "Sub MENU #01"},
      {path: "/BackOffice/beneficier/SUB_MENU_02", text: "Sub MENU #02"},
      {path: "/BackOffice/beneficier/SUB_MENU_03", text: "Sub MENU #03"},
      {path: "/BackOffice/beneficier/SUB_MENU_04", text: "Sub MENU #04"}
    ]
  },
  {path: '/BackOffice/beneficier/BENEFICIER-MENU-02', text: 'BENEFICIER Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/beneficier/BENEFICIER-MENU-03', text: 'BENEFICIER Item #03', icon: 'fa fa-chart-bar'}
];

const BENEVOLE_MENU: Array<MenuItem> = [
  {path: '/BackOffice/benevole/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/benevole/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/benevole/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/benevole/BENEVOLE-MENU-01', text: 'BENEVOLE Item #01', icon: 'fa fa-table'},
  {path: '/BackOffice/benevole/BENEVOLE-MENU-02', text: 'BENEVOLE Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/benevole/BENEVOLE-MENU-03', text: 'BENEVOLE Item #03', icon: 'fa fa-chart-bar'}
];

const ORGANIZATION_MENU: Array<MenuItem> = [
  {path: '/BackOffice/organization/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/organization/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/organization/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {
    path: '',
    text: "Offres d'emplois",
    icon: 'fa fa-keyboard',
    subMenu: [
      {path: "/BackOffice/organization/emplois", text: "Liste des offres d'emplois"},
      {path: "/BackOffice/organization/ajouteremploi", text: "Ajouter une offre"},
      {path: "/BackOffice/organization/link-1", text: "Statéstique"},
      {path: "/BackOffice/organization/linl-2", text: "Mes candidatures"}
    ]
  },
  // {path: '/BackOffice/organization/ORGANIZATION-MENU-01', text: 'Org Menu Item #01', icon: 'fa fa-table'},
  // {path: '/BackOffice/organization/ORGANIZATION-MENU-02', text: 'Org Menu Item #02', icon: 'fa fa-chart-bar'},
  // {path: '/BackOffice/organization/ORGANIZATION-MENU-03', text: 'Org Menu Item #03', icon: 'fa fa-chart-bar'}
];
