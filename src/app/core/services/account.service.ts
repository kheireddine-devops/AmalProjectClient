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
    return of({role: RoleEnum.DOCTOR, firstname: "kheireddine", lastname: "mechergui", photo: "assets/images/users/USER-000001.jpg", id: 1, fullName: "kheireddine mechergui"});
  }

  getCurrentUserByToken(token: string): Observable<CurrentUser> {
    return of({role: RoleEnum.BENEFICIER, firstname: "kheireddine", lastname: "mechergui", photo: "", id: 1, fullName: "kheireddine mechergui"});
  }

  login(credentials : AuthRequest): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(`/api/auth`, {
      username: credentials.login,
      password: credentials.password
    });
  }

  logOut() {
    this._tokenUtilsService.deleteTokenInLocalStorage();
  }

  isAuthenticated(): boolean {
    const token = this._tokenUtilsService.getTokenByLocalStorage();
    return token === undefined? false : true;
  }

  getRole(): RoleEnum | undefined {
    return this._tokenUtilsService.getRoleByToken();
  }

  hasRole(role: RoleEnum): boolean {
    const token = this._tokenUtilsService.getTokenByLocalStorage();
    if (token !== undefined) {
      return this._tokenUtilsService.decodeToken(token).role === role;
    }
    return false;
  }

  getCurrentUserByMode(mode: RoleEnum.ADMIN | RoleEnum.DOCTOR | RoleEnum.BENEFICIER | RoleEnum.BENEVOLE | RoleEnum.ORGANIZATION) {
    switch (mode) {
      case RoleEnum.ADMIN:
        return of({role: RoleEnum.ADMIN, firstname: "Kheireddine", lastname: "Mechergui", photo: "assets/images/users/USER-000001.jpg", id: 1, fullName: "Kheireddine Mechergui"});
      case RoleEnum.DOCTOR:
        return of({role: RoleEnum.DOCTOR, firstname: "Ahmed", lastname: "Marzouki", photo: "assets/images/users/USER-000002.jpg", id: 1, fullName: "Ahmed Marzouki"});
      case RoleEnum.BENEVOLE:
        return of({role: RoleEnum.BENEVOLE, firstname: "Rami", lastname: "Wnifi", photo: "assets/images/users/USER-000001.jpg", id: 1, fullName: "Rami Wnifi"});
      case RoleEnum.BENEFICIER:
        return of({role: RoleEnum.BENEFICIER, firstname: "Akrem", lastname: "Mejri", photo: "assets/images/users/USER-000001.jpg", id: 1, fullName: "Akrem Mejri"});
      case RoleEnum.ORGANIZATION:
        return of({role: RoleEnum.ORGANIZATION, firstname: "", lastname: "", photo: "assets/images/users/USER-000001.jpg", id: 1, fullName: "I-WATCH"});
      default:
        throw new Error("PROBLEM");
    }
  }

  resetPassword(email: string): Observable<any> {
    return this._http.post('/api/reset-password',email);
  }

  getAllAccounts(): Observable<Array<any>> {
    return this._http.get<Array<any>>('/api/accounts');
  }

  getToken(): string | undefined {
    return this._tokenUtilsService.getTokenByLocalStorage();
  }
}
