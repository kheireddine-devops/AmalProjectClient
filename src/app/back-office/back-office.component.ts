import { Component, OnInit } from '@angular/core';
import {AccountService} from "../core/services/account.service";
import {Router} from "@angular/router";
import {CurrentUser, RoleEnum} from "../core/entities/users";

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {

  isOpenSideBar: boolean = false;
  currentUser: CurrentUser | undefined;
  constructor(private _accountService: AccountService,private _router:Router) { }

  ngOnInit(): void {
  }

  onToggleSideBar() {
    this.isOpenSideBar = !this.isOpenSideBar;
  }

  onLogOut() {
    this._accountService.logOut();
    this._router.navigateByUrl("/FrontOffice/login");
  }

  onGetCurrentUserEvent($event: CurrentUser) {
    this.currentUser = $event;
  }
}
