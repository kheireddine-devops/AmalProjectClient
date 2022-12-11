import { map } from 'rxjs';
import { Emploi } from '../entities/Emlpoi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn:"root"})
export class EmploiService{
  
    //emploisUrl:string='/api/emplois'
    httpOptions = {
      headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
      })
    }
    constructor(private httpClient:HttpClient){
    }
    
    getEmploi():Observable<Emploi[]>{
        return this.httpClient.get<Emploi[]>("/api/emplois");
      }
    getEmploiByCompte():Observable<Emploi[]>{
        return this.httpClient.get<Emploi[]>("/api/emploisbc");
      }

    // getEmploiInformatique():Observable<Emploi[]>{
    //     return this.httpClient.get<Emploi[]>("/api/emplois?secteur=Informatique");
    //   }

      addEmploi (emploi: Emploi): Observable<Emploi> {
        return this.httpClient.post<Emploi>("/api/emploi/add", emploi);
      }

      deleteEmploi(id:any): Observable<any>{
        return this.httpClient.delete<any>("/api/emploi/delete/"+id,this.httpOptions).pipe(map(result => {
          if (result) {
            return result;
          }
        }));
      }

      getEmploiById(id:any):Observable<Emploi>{
        return this.httpClient.get<Emploi>("/api/emploi/get/"+id); 
      }

      updateEmploi(id:any,emploi: Emploi): Observable<any>{
        return this.httpClient.put("/api/emploi/edit/"+id,emploi,this.httpOptions);
      }
      getOrganisations():Observable<any> {
        return this.httpClient.get<any>('/api/organizations',this.httpOptions).pipe(); 
      }
      getAccountById(id:any):Observable<any>{
        return this.httpClient.get<any>("/api/accounts/"+id); 
      }

}
