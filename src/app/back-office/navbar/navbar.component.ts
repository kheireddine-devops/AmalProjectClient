import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from "../../core/services/account.service";
import {Router} from "@angular/router";
import {Account} from "../../core/entities/users";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: Account | undefined;

  @Output() OnToggleSidebarEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpenSideBar: boolean = false;
  constructor(private _accountService: AccountService,private _router:Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this._accountService.logOut();
    this._router.navigateByUrl("/FrontOffice/login");
  }

  onToggleSideBar() {
    this.isOpenSideBar = !this.isOpenSideBar;
    this.OnToggleSidebarEvent.emit(this.isOpenSideBar);
  }
}
