import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Help } from '../model/Help';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  url :string="http://localhost:3000/helps";

  constructor(private http:HttpClient) { }
  getHelps():Observable<Help[]>{
    return this.http.get<Help[]>(this.url);

  }
  PostHelp(h:Help){
    return this.http.post(this.url,h);
  }
}
