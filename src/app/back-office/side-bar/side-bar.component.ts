import {Component, Input, OnInit} from '@angular/core';
import {CurrentUser, RoleEnum} from "../../core/entities/users";
import {AccountService} from "../../core/services/account.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input("isOpenSideBar") isOpenSideBar: boolean = false;
  @Input("mode") mode:RoleEnum = RoleEnum.ADMIN;

  menus: Array<MenuItem> = [];
  currentUser: CurrentUser | undefined;

  constructor(private _accountService: AccountService) { }

  ngOnInit(): void {
    console.log("-----------------------")
    this._accountService.getCurrentUser().subscribe((currentUser: CurrentUser) => {
      this.currentUser = currentUser;
      console.log("-----------------------",currentUser)
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
  {path: '/BackOffice/admin/MENU_01', text: 'Menu Item #01', icon: 'fa fa-table'},
  {path: '/BackOffice/admin/MENU_02', text: 'Menu Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/admin/MENU_03', text: 'Menu Item #03', icon: 'fa fa-chart-bar'}
];

const DOCTOR_MENU: Array<MenuItem> = [
  {path: '/BackOffice/doctor/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/doctor/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/doctor/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/doctor/MENU_01', text: 'Menu Item #01', icon: 'fa fa-table'},
  {path: '/BackOffice/doctor/MENU_02', text: 'Menu Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/doctor/MENU_03', text: 'Menu Item #03', icon: 'fa fa-chart-bar'}
];

const BENEFICIER_MENU: Array<MenuItem> = [
  {path: '/BackOffice/beneficier/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/beneficier/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/beneficier/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  { path: '/BackOffice/beneficier/MENU_01',
    text: 'Menu Item #01',
    icon: 'fa fa-table',
    subMenu: [
      {path: "/BackOffice/beneficier/SUB_MENU_01", text: "Sub MENU #01"},
      {path: "/BackOffice/beneficier/SUB_MENU_02", text: "Sub MENU #02"},
      {path: "/BackOffice/beneficier/SUB_MENU_03", text: "Sub MENU #03"},
      {path: "/BackOffice/beneficier/SUB_MENU_04", text: "Sub MENU #04"}
    ]
  },
  {path: '/BackOffice/beneficier/MENU_02', text: 'Menu Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/beneficier/MENU_03', text: 'Menu Item #03', icon: 'fa fa-chart-bar'}
];

const BENEVOLE_MENU: Array<MenuItem> = [
  {path: '/BackOffice/benevole/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/benevole/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/benevole/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/benevole/MENU_01', text: 'Menu Item #01', icon: 'fa fa-table'},
  {path: '/BackOffice/benevole/MENU_02', text: 'Menu Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/benevole/MENU_03', text: 'Menu Item #03', icon: 'fa fa-chart-bar'}
];

const ORGANIZATION_MENU: Array<MenuItem> = [
  {path: '/BackOffice/organization/dashboard', text: 'Dashboard', icon: 'fa fa-tachometer-alt'},
  {path: '/BackOffice/organization/my-profile', text: 'My Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/organization/my-profile/edit', text: 'Edit Profile', icon: 'fa fa-keyboard'},
  {path: '/BackOffice/organization/MENU_01', text: 'Menu Item #01', icon: 'fa fa-table'},
  {path: '/BackOffice/organization/MENU_02', text: 'Menu Item #02', icon: 'fa fa-chart-bar'},
  {path: '/BackOffice/organization/MENU_03', text: 'Menu Item #03', icon: 'fa fa-chart-bar'}
];



