import { produit } from './../entities/produit';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { avis } from '../entities/avis';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  url :string="http://localhost:3000/api/avis";
  private myAppUrl: string;
private myApiDUrl:string;
  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiDUrl = 'produit/delete/';
  }
  getAllAvis ():Observable<avis[]>{
    return this.http.get<avis[]>(this.url);
  }
  // postavis(a:avis){
  //   return this.http.post(this.url,a,this.httpOptions);
  // }
 
  saveavis(Avis: avis): Observable<void> {
    const formData: FormData = new FormData();
    return this.http.post<void>(`/api/createavis/`,formData );
  }
  deleteavis(id: number): Observable<{message: string}> {
    return this.http.delete<{message: string}>(`${this.myAppUrl}${this.myApiDUrl}${id}`)
  }
  // getavisByidProduit(id_produit:Number): avis[]{
  //    return avis.id_avis == id_produit this.getAllAvis():this.getAllAvis().filter(avis => avis.id_produit?.includes(id_produit));
  // }
  // getAllboutiqueByCategorie(categorie:string) : boutique[]{
  //   return categorie =="All"? this.getAll() :this.getAll().filter(boutique =>boutique.categorie?.includes(categorie));
  // }
}

