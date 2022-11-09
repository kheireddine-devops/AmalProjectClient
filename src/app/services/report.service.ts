import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { report } from '../core/report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reportUrl:string='http://localhost:3000/report/'
  httpOption = {
    headers : new HttpHeaders ({
      'Content-type':'aaplication/json'
    })
  }

  constructor(private HttpClient : HttpClient) { }

  getReport():Observable<report[]>{
    return this.HttpClient.get<report[]>(this.reportUrl)
  }

  addReport (rep: report): Observable<report> {
    return this.HttpClient.post<report>(this.reportUrl, report, this.httpOption);}

  deleteReport (id_rapport:any): Observable<any>{
    return this.HttpClient.delete<any>(this.reportUrl+'/'+id_rapport);
  }

  updateDons (rep: report): Observable<any>{
    return this.HttpClient.put(this.reportUrl+rep.id_rapport,report);
  }

  getReportById(id_rapport:any):Observable<report>{
    return this.HttpClient.get<report>(this.reportUrl+'/'+id_rapport);
  }

  }
