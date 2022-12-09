import { HelpService } from '../../core/services/help.service';
import { Component, OnInit } from '@angular/core';
import { demandeaide } from 'src/app/core/entities/Help';

@Component({
  selector: 'app-show-help',
  templateUrl: './show-help.component.html',
  styleUrls: ['./show-help.component.css']
})
export class ShowHelpComponent implements OnInit {
  listHelps :any=[];
  title : string="Liste des Demandes d'aides";


  constructor(private helpservice:HelpService) {

   }

  ngOnInit(): void {
    this.helpservice.getHelps().subscribe((data:demandeaide[])=>this.listHelps=data);
  }
  Delete(id:any){

    this.helpservice.DeleteHelp(id).subscribe(response=>
      this.ngOnInit()
    , error => {
      console.log(error);
      });

  }


}
