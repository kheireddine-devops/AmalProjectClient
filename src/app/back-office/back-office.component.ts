import { Component, OnInit } from '@angular/core';

import {Account} from "../core/entities/users";

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {
  isOpenSideBar: boolean = false;
  constructor() { }

  currentUser: Account | undefined;

  ngOnInit(): void {
  }

  onToggleSideBar() {
    this.isOpenSideBar = !this.isOpenSideBar;
  }

  onGetCurrentUserEvent(account: Account) {
    this.currentUser = account;
  }
}
