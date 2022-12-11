import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../core/services/help.service';
import { demandeaide } from 'src/app/core/entities/Help';

@Component({
  selector: 'app-showhelp-benif',
  templateUrl: './showhelp-benif.component.html',
  styleUrls: ['./showhelp-benif.component.css']
})
export class ShowhelpBenifComponent implements OnInit {
  listHelps :any=[];
  title : string="Liste des Demandes d'aides";
  id=3;

  constructor(private helpservice:HelpService) {
    this.helpservice.getHelpByBenif(this.id).subscribe((data:demandeaide[])=>this.listHelps=data);
   }

  ngOnInit(): void {
  }
  Delete(id:any,i:any){

    this.helpservice.DeleteHelp(id).subscribe(response=>
      this.listHelps.splice(i,1)
    );

}
}
