import { commentaireaide } from '../../core/entities/CommentHelp';
import { CommentHelpService } from '../../core/services/comment-help.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-help',
  templateUrl: './comments-help.component.html',
  styleUrls: ['./comments-help.component.css']
})
export class CommentsHelpComponent implements OnInit {
  commenthelp !: commentaireaide;
  ListComment :commentaireaide[]=[];
  alert:boolean=false;
  id:any;

  constructor(private commentservice:CommentHelpService, private activaterouter :ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activaterouter.snapshot.params['id'];
    this.commenthelp = new commentaireaide();
    this.commentservice.getCommentbyHelp(this.id).subscribe((data:commentaireaide[])=>this.ListComment=data);
  }
  save(){
    this.commenthelp.idDemandeAide = this.id;
    this.commentservice.PostCommentHelp(this.commenthelp).subscribe();
    this.alert=true;
    this.commenthelp = new commentaireaide();
  }
  delete(id: any,i :any):void{
    this.commentservice.DeleteCommentHelp(id).subscribe(response=>
      this.ListComment.splice(i,1));
  }

}
