import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Candidature } from '../entities/Candidature';

@Injectable({providedIn: 'root'})
export class CandidatureService {

  //candidaturesUrl:string='/api/candidatures'
  httpOptions = {
    headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCandidature():Observable<Candidature[]>{
    return this.httpClient.get<Candidature[]>("/api/candidatures");
  }
  getCandidatureByCompte():Observable<Candidature[]>{
    return this.httpClient.get<Candidature[]>("/api/candidaturesbc");
  }
  getCandidatureByOrganisation():Observable<Candidature[]>{
    return this.httpClient.get<Candidature[]>("/api/candidaturesbo");
  }
  // addCandidature (candidature: Candidature,pdf:File): Observable<Candidature> {
  //   //upload file 
  //   const formData:FormData=new FormData();
  //   formData.append("pdf",pdf);
    
  //   return this.httpClient.post<Candidature>("/api/candidature/add", candidature,
  //   this.httpOptions);}

    addCandidature (candidature: Candidature,cv: File): Observable<Candidature> {
      const formData: FormData = new FormData();

      formData.append("cv",cv,"cv");
      formData.append("candidature",JSON.stringify(candidature));
      
      return this.httpClient.post<Candidature>("/api/candidature/add", formData);
    }

  deleteCandidature(ide:any,idc:any): Observable<any>{
    return this.httpClient.delete<any>("/api/candidature/delete/"+ide+"/"+idc,this.httpOptions).pipe(map(result => {
      if (result) {
        return result;
      }
    }));
  }

  getCandidatureById(ide:any,idc:any):Observable<Candidature>{
    return this.httpClient.get<Candidature>("/api/candidature/get/"+ide+"/"+idc); 
  }

  updateCandidature(ide:any,idc:any,candidature: Candidature): Observable<any>{
    return this.httpClient.put("/api/candidature/edit/"+ide+"/"+idc,candidature,this.httpOptions);
  }
}
