import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../core/services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor(private _accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn() {
    this._accountService.login({login: this.username, password: this.password})
      .subscribe(value => {
        console.log(value);
        // this.router.navigate([""]);
      },error => {
        console.log(error);
      })
  }
}
