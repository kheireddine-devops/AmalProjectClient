import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {RoleEnum} from "../entities/users";
import {AccountService} from "../services/account.service";

@Injectable({
  providedIn: 'root'
})
export class BenefecierGuard implements CanActivate {
  constructor(private _accountService:AccountService,private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._accountService.hasRole(RoleEnum.BENEFICIER)) {
      return true;
    }
    this._accountService.logOut();
    this._router.navigateByUrl("/FrontOffice/login");
    return false;
  }

}
