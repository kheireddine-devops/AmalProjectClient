import {Injectable} from '@angular/core';
import {Account, AuthRequest, AuthResponse, RoleEnum} from "../entities/users";
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenUtilsService} from "./token-utils.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient,private _tokenUtilsService: TokenUtilsService) { }

  getCurrentUser(): Observable<Account> {
    let _id: number | undefined = this._tokenUtilsService.getUserIdByToken();
    if (_id === undefined) _id = -1;
    console.log(this._tokenUtilsService.getTokenByLocalStorage())
    console.log(this._tokenUtilsService.decodeToken(this._tokenUtilsService.getTokenByLocalStorage() as string))
    return this._http.get<Account>(`/api/accounts/${_id}`);
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

  resetPassword(email: string): Observable<any> {
    return this._http.post('/api/reset-password',email);
  }

  getToken(): string | undefined {
    return this._tokenUtilsService.getTokenByLocalStorage();
  }
}
