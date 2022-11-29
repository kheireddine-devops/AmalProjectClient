import { HelpService } from '../../core/services/help.service';
import { CommentHelpService } from '../../core/services/comment-help.service';
import { Component, OnInit } from '@angular/core';
import { CommentHelp } from 'src/app/core/entities/CommentHelp';
import { Help } from 'src/app/core/entities/Help';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {
  commenthelp !: CommentHelp;
  listComment :CommentHelp[]=[];
  help :Help =new Help();
  id:any;
  textButton:string="fa fa-thumbs-up";
  alert:boolean=false;

  constructor(private helpservice:HelpService ,private commentservice : CommentHelpService,private router: Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.commenthelp = new CommentHelp();
    this.id = this.ac.snapshot.params['id'];
    this.helpservice.getHelpById(this.id).subscribe(res=>{
      this.help=res;})
    this.commentservice.getCommentHelps().subscribe((data:CommentHelp[])=>this.listComment=data)

  }
  addlike(i:number){
    if(this.textButton ==="fa fa-thumbs-up"){
      this.listComment[i].like=this.listComment[i].like+1;
      this.textButton="fa fa-thumbs-down";
    }else{
      this.listComment[i].like=this.listComment[i].like-1;
      this.textButton="fa fa-thumbs-up"

    }
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
}
