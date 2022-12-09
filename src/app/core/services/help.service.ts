import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , map} from 'rxjs';
import { demandeaide } from '../entities/Help';

@Injectable({
  providedIn: 'root'
})
export class HelpService {


  constructor(private http:HttpClient) { }
  getHelps():Observable<demandeaide[]>{
    return this.http.get<demandeaide[]>('/api/demandeaides');

  };
  getpublicHelps():Observable<any[]>{
    return this.http.get<any[]>('/api/demandebenif');

  }
 PostHelp(h:demandeaide,photo:File){
    const formData :FormData=new FormData();
    formData.append('photo',photo,'photo');
    formData.append('demandeaide', JSON.stringify(h))

    console.log(photo);
    console.log(h);

    return this.http.post('/api/demande/add',formData);
   }
   PostHelpbenif(h:demandeaide,photo:File){
    const formData :FormData=new FormData();
    formData.append('photo',photo,'photo');
    formData.append('demandeaide', JSON.stringify(h))

    console.log(photo);
    console.log(h);


    return this.http.post('/api/demande/addbenif/',formData);
   }
  DeleteHelp(id:any):Observable<{message :string}>{
    return this.http.delete<{message :string}>('/api/demande/delete/'+id);
  }
  getHelpById(id:any):Observable<demandeaide>{
    return this.http.get<demandeaide[]>('/api/demande/get/'+id)
    .pipe( map(value => ({...value[0]}) ) ) ;
  }
  SearchHelpById(id:any):Observable<demandeaide>{
    return this.http.get<demandeaide>('/api/demande/search/'+id);
  }
  getHelpByBenif(id:any):Observable<demandeaide[]>{
    return this.http.get<demandeaide[]>('/api/demandebenif/'+id);
  }
  searchHelp(type:any):Observable<demandeaide[]>{
    return this.http.get<demandeaide[]>('/api/demande/search/'+type);
  }
  updateHelp(id:any,help:demandeaide ): Observable<any>{
    return this.http.put('/api/demande/edit/'+id,help);
  }
  updateHelpBenif(id:any,help:demandeaide ): Observable<any>{
    return this.http.put('/api/demande/editbenif/'+id,help);
  }
}
