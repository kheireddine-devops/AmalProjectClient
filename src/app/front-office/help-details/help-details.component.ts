import { HelpService } from '../../core/services/help.service';
import { CommentHelpService } from '../../core/services/comment-help.service';
import { Component, OnInit } from '@angular/core';
import { commentaireaide } from 'src/app/core/entities/CommentHelp';
import { demandeaide } from 'src/app/core/entities/Help';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {
  commenthelp !: commentaireaide;
  listComment :commentaireaide[]=[];
  help :demandeaide=new demandeaide();
  id:any;
  textButton:string="fa fa-thumbs-up";
  alert:boolean=false;

  constructor(private helpservice:HelpService ,private commentservice : CommentHelpService,private router: Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.commenthelp = new commentaireaide();
    this.id = this.ac.snapshot.params['id'];
    this.helpservice.getHelpById(this.id).subscribe(res=>{
      this.help=res;
    console.log(res)})
    this.commentservice.getCommentbyHelp(this.id).subscribe((data:commentaireaide[])=>this.listComment=data)
    console.log(this.listComment);

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
    this.commenthelp.idDemandeAide=this.id;
    this.commenthelp.status="Non publié"
    this.commentservice.PostCommentHelp(this.commenthelp).subscribe();
    this.alert=true;
    this.commenthelp = new commentaireaide();
}
}
