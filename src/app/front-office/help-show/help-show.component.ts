import { HelpService } from '../../core/services/help.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { demandeaide } from 'src/app/core/entities/Help';

@Component({
  selector: 'app-help-show',
  templateUrl: './help-show.component.html',
  styleUrls: ['./help-show.component.css']
})
export class HelpShowComponent implements OnInit {
  listHelps :any[]=[];
  typeDemande !:any;
  help !:demandeaide;
  

  constructor(private helps:HelpService) { }

  ngOnInit(): void {
    this.helps.getpublicHelps().subscribe((data:any[])=>this.listHelps=data);
  }
  Search(){
    if(this.typeDemande==""){
      this.ngOnInit();
    }
    else{
      this.listHelps =this.listHelps.filter(res=>{
        return res.typeDemande.toLowerCase().match(this.typeDemande.toLowerCase());
      console.log(res)})
    }
  }


}
