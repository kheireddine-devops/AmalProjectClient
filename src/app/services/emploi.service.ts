import { Emploi } from './../core/Emlpoi';
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
        return this.httpClient.get<Emploi[]>(this.emploisUrl);
      }

    getEmploiInformatique():Observable<Emploi[]>{
        return this.httpClient.get<Emploi[]>(this.emploisUrl+"?secteur=Informatique");
      }  

      addEmploi (emploi: Emploi): Observable<Emploi> {
        return this.httpClient.post<Emploi>(this.emploisUrl, emploi,
        this.httpOptions);}
    
      deleteEmploi(id:any): Observable<any>{
        return this.httpClient.delete<any>(this.emploisUrl+'/'+id);
      }
    
      getEmploiById(id:any):Observable<Emploi>{
        return this.httpClient.get<Emploi>(this.emploisUrl+'/'+id);
      }
    
      updateEmploi(id:any,emploi: Emploi): Observable<any>{
        return this.httpClient.put(this.emploisUrl+'/'+id,emploi,this.httpOptions);
      }

}
 