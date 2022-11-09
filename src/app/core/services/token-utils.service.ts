import {Injectable} from '@angular/core';
import {JWTResponse, RoleEnum} from "../entities/users";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenUtilsService {
  private TOKEN_NAME = "token";
  constructor() { }

  saveTokenToLocalStorage(token: string): boolean {
    localStorage.setItem(this.TOKEN_NAME ,token);
    return true;
  }

  getTokenByLocalStorage(): string | undefined {
    if (this.existTokenInLocalStorage(this.TOKEN_NAME)) {
      // @ts-ignore
      return localStorage.getItem(this.TOKEN_NAME);
    }
    return undefined;
  }

  existTokenInLocalStorage(token: string): boolean {
    if(localStorage.getItem(this.TOKEN_NAME) === null) {
      return false;
    }
    return true;
  }

  getRoleByToken(): RoleEnum | undefined {
    const token = this.getTokenByLocalStorage();
    if(token !== undefined) {
      return this.decodeToken(token).role
    }
    return undefined;
  }

  getUserIdByToken(): number {
    return 0;
  }

  isValidToken(token: string): boolean {

    return true;
  }

  deleteTokenInLocalStorage(): boolean {
    localStorage.removeItem(this.TOKEN_NAME);
    return true;
  }

  decodeToken(token: string): JWTResponse {
    let jwt: JWTResponse = jwtDecode(token);
    return jwt;
  }
}
