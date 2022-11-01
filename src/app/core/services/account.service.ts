import {Injectable} from '@angular/core';
import {AuthRequest, AuthResponse, CurrentUser, RoleEnum} from "../entities/users";
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenUtilsService} from "./token-utils.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient,private _tokenUtilsService: TokenUtilsService) { }

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

  login(credentials : AuthRequest): Observable<AuthResponse> {
    return this._http.get<Array<any>>(`/api/auth/${credentials.login}/${credentials.password}`)
      .pipe(map(value => {
        if (value.length == 1) {
          return { token: value[0].token, valid: true}
        }
        return { token: "", valid: false}
      }));
    // return of({token: ""});
  }
}
