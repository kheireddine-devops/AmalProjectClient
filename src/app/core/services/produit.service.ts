import { produit } from 'src/app/core/entities/produit';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
url :string="http://localhost:3000/api/produits";
private myAppUrl: string;
private myApiUrl:string;
private myApiDUrl:string;
private myApiPUrl:string;
private myApiEUrl:string;
private myApiOUrl:string;

  constructor(private http:HttpClient) {
      this.myAppUrl = environment.endpoint;
      this.myApiUrl = '/produits';
      this.myApiDUrl = 'produit/delete/';
      this.myApiPUrl = 'createproduit/';
      this.myApiOUrl ='/produit/';
      this.myApiEUrl = 'produit/update';
  }
  getproduit():Observable<produit[]>{
    return this.http.get<produit[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
 
  saveProduct(Prod: produit, photo: File): Observable<void> {
    const formData: FormData = new FormData();
    formData.append("photo",photo,"photo");
    formData.append("produit",JSON.stringify(Prod))
    return this.http.post<void>(`/api/createproduit/`,formData );
  }
  deleteProduct(id: number): Observable<{message: string}> {
    return this.http.delete<{message: string}>(`${this.myAppUrl}${this.myApiDUrl}${id}`)
  }
 
  getOneProduit(id :number):Observable<produit>{
    return this.http.get<produit>(`/api/produit/${id}`)

  }
  updateproduct(Prod : produit): Observable<void>{
    let id = Prod.id_produit;
    return this.http.put<void>(`${this.myAppUrl}${this.myApiEUrl}/ ${id}`,Prod)

  }
}