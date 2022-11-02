import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../core/services/account.service";
import {Router} from "@angular/router";
import {TokenUtilsService} from "../../core/services/token-utils.service";
import {JWTResponse, RoleEnum} from "../../core/entities/users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "admin";
  password: string = "admin";
  constructor(private _accountService: AccountService, private _tokenUtilsService: TokenUtilsService, private _router: Router) { }

  ngOnInit(): void {
  }

  onLogIn() {
    this._accountService.login({login: this.username, password: this.password})
      .subscribe(value => {
        console.log(value);
        if (value.valid) {
          let jwt: JWTResponse = this._tokenUtilsService.decodeToken(value.token as string);
          this._tokenUtilsService.saveTokenToLocalStorage(value.token as string);

          console.log(jwt);
          console.log(jwt.role);
          switch (jwt.role) {
            case RoleEnum.ADMIN:
              this._router.navigate(["BackOffice","admin","dashboard"], {state: {role: RoleEnum.ADMIN }});
                break;
            case RoleEnum.BENEFICIER:
              this._router.navigate(["BackOffice","benefecier","dashboard"], {state: {role: RoleEnum.BENEFICIER }});
              break;
            case RoleEnum.BENEVOLE:
              this._router.navigate(["BackOffice","benevole","dashboard"], {state: {role: RoleEnum.BENEVOLE }});
              break;
            case RoleEnum.DOCTOR:
              this._router.navigate(["BackOffice","doctor","dashboard"], {state: {role: RoleEnum.DOCTOR }});
              break;
            case RoleEnum.ORGANIZATION:
              this._router.navigate(["BackOffice","organization","dashboard"], {state: {role: RoleEnum.ORGANIZATION }});
              break;
            default:
              console.log("ERROR");
              break;
          }

          // this.router.navigate([""]);
        }
      },error => {
        console.log(error);
      })
  }
}
