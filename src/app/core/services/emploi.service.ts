import { Emploi } from '../entities/Emlpoi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class EmploiService{

    emploisUrl:string='/api/emplois'
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
    }
    constructor(private httpClient:HttpClient){
    }


    getEmploi():Observable<Emploi[]>{
        return this.httpClient.get<Emploi[]>("http://localhost:3000/emplois");
      }

    getEmploiInformatique():Observable<Emploi[]>{
        return this.httpClient.get<Emploi[]>("http://localhost:3000/emplois?secteur=Informatique");
      }

      addEmploi (emploi: Emploi): Observable<Emploi> {
        return this.httpClient.post<Emploi>("http://localhost:3000/emplois", emploi,
        this.httpOptions);}

      deleteEmploi(id:any): Observable<any>{
        return this.httpClient.delete<any>("http://localhost:3000/emplois"+'/'+id);
      }

      getEmploiById(id:any):Observable<Emploi>{
        return this.httpClient.get<Emploi>("http://localhost:3000/emplois"+'/'+id);
      }

      updateEmploi(id:any,emploi: Emploi): Observable<any>{
        return this.httpClient.put("http://localhost:3000/emplois"+'/'+id,emploi,this.httpOptions);
      }

}
