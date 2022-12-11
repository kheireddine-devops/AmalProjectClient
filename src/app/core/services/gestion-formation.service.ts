import { of } from 'rxjs';
import { formation } from '../entities/formation';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionFormationService {
  constructor(private http: HttpClient) {}

  getAllFormations(): Observable<formation[]> {

    return this.http.get<formation[]>(`/api/formations/`);

  }

  getFormationByID(id: Number): Observable<formation> {
    return this.http.get<formation>(`/api/formations/get/${id}`);
  }

  deleteFormation(id: number) {
    return this.http.delete(`/api/formations/delete/${id}`);
  }

  addformation(formation : formation): Observable<formation> {

    console.log(formation)

    return this.http.post<formation>(`/api/formations/add`, formation);
  }

  editFormation(formation:formation,id: Number): Observable<formation> {

    return this.http.put<formation>(`/api/formations/edit/${id}`, formation);

  }
}
