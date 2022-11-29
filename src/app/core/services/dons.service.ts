import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dons } from '../entities/dons';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonsService {
  donsUrl:string='http://localhost:3000/dons/'
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getDons():Observable<Dons[]>{
    return this.httpClient.get<Dons[]>(this.donsUrl);
  }

  addDons (don: Dons): Observable<Dons> {
    return this.httpClient.post<Dons>(this.donsUrl, don,
    this.httpOptions);}

  deleteDons(id_dons:any): Observable<any>{
    return this.httpClient.delete<any>(this.donsUrl+'/'+id_dons);
  }

  getDonsById(id_dons:any):Observable<Dons>{
    return this.httpClient.get<Dons>(this.donsUrl+'/'+id_dons);
  }
  updateDons(dons: Dons): Observable<any>{
    return this.httpClient.put(this.donsUrl+dons.id_dons,dons);
  }


}
