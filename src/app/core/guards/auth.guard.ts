import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../services/account.service";
import {RoleEnum} from "../entities/users";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private _accountService:AccountService,private _router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._accountService.isAuthenticated()) {
      return true;
    }
    this._router.navigateByUrl("/FrontOffice/login");
    return false;
  }

}
