import { formation } from './../../core/formation';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionFormationService {

  formationsUrl:string= 'http://localhost:3000/formations';
  
  dataChange: BehaviorSubject<formation[]> = new BehaviorSubject<formation[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

  constructor(private httpClient: HttpClient) { }
  get data(): formation[] {
    return this.dataChange.value;
  }

 


  
  /** CRUD METHODS */
  getAllFormation(): void {
    this.httpClient.get<formation[]>(this.formationsUrl).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  
// ***************************************
  getformation():Observable<formation[]>{
    return this.httpClient.get<formation[]>(this.formationsUrl);
  }



  addformation(Formation:formation): Observable<formation> {

    return this.httpClient.post<formation>(this.formationsUrl, formation, this.httpOptions);
  
  }


}
