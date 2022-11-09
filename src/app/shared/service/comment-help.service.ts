import { CommentHelp } from './../model/CommentHelp';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentHelpService {
  url :string="http://localhost:3000/commentHelp";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

  constructor(private http : HttpClient) { }

  getCommentbyHelp(idHelp:any){
    return this.http.get(this.url+'/'+idHelp);

  }
  getCommentHelps():Observable<CommentHelp[]>{
    return this.http.get<CommentHelp[]>(this.url);
  }
  PostCommentHelp(c:CommentHelp){
    return this.http.post(this.url,c,this.httpOptions);
  }
  DeleteCommentHelp(id:any){
    return this.http.delete<any>(this.url+'/'+id);

  }

}
