import { CommentHelp } from '../../core/entities/CommentHelp';
import { CommentHelpService } from '../../core/services/comment-help.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-help',
  templateUrl: './comments-help.component.html',
  styleUrls: ['./comments-help.component.css']
})
export class CommentsHelpComponent implements OnInit {
  commenthelp !: CommentHelp;
  ListComment :CommentHelp[]=[];
  alert:boolean=false;

  constructor(private commentservice:CommentHelpService, private activaterouter :ActivatedRoute) { }

  ngOnInit(): void {
    this.commenthelp = new CommentHelp();
    this.commentservice.getCommentHelps().subscribe((data:CommentHelp[])=>this.ListComment=data);
  }
  save(){
    this.commenthelp.dateComment = new Date();
    this.commenthelp.like = 0;
    this.commenthelp.helpId = "2";
    this.commenthelp.idUser="3";
    this.commentservice.PostCommentHelp(this.commenthelp).subscribe();
    this.alert=true;
    this.commenthelp = new CommentHelp();


  }
  delete(comment:CommentHelp):void{
    this.commentservice.DeleteCommentHelp(comment.id).subscribe((data)=>{
      this.ListComment= this.ListComment.filter((c:any)=>c !== this.commenthelp);
    });
  }

}
