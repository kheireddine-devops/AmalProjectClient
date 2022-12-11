import { commentaireaide } from '../entities/CommentHelp';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentHelpService {
 

  constructor(private http : HttpClient) { }

  getCommentbyHelp(idHelp:any):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/api/commentaire/get/'+idHelp);

  }
  getCommentHelps():Observable<commentaireaide[]>{
    return this.http.get<commentaireaide[]>('this.url');
  }
  PostCommentHelp(c:commentaireaide){
    return this.http.post('http://localhost:3000/api/commentaire/add',c);
  }
  DeleteCommentHelp(id:any){
    return this.http.delete('http://localhost:3000/api/commentaire/delete/'+id);

  }

}
