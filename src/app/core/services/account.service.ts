import {Injectable} from '@angular/core';
import {CurrentUser, RoleEnum} from "../entities/users";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  // getCurrentUser(): Observable<CurrentUser> {
  //   return new Observable<CurrentUser>()
  //     .pipe(map(value => {
  //     return {role: RoleEnum.ADMIN, firstname: "kheireddine", lastname: "mechergui", photo: "", id: 1, fullName: "kheireddine mechergui"};
  //   }));
  // }

  getCurrentUser(): Observable<CurrentUser> {
    return of({role: RoleEnum.BENEFICIER, firstname: "kheireddine", lastname: "mechergui", photo: "assets/images/users/USER-000001.jpg", id: 1, fullName: "kheireddine mechergui"});
  }

  getCurrentUserByToken(token: string): Observable<CurrentUser> {
    return of({role: RoleEnum.BENEFICIER, firstname: "kheireddine", lastname: "mechergui", photo: "", id: 1, fullName: "kheireddine mechergui"});
  }
}
