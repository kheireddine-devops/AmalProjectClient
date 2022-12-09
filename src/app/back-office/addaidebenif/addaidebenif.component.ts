import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { demandeaide } from 'src/app/core/entities/Help';
import { HelpService } from '../../core/services/help.service';

@Component({
  selector: 'app-addaidebenif',
  templateUrl: './addaidebenif.component.html',
  styleUrls: ['./addaidebenif.component.css']
})
export class AddaidebenifComponent implements OnInit {
  title:string="Ajouter une demande Aide";
  help!:demandeaide;
  

  constructor(private helpService:HelpService, private route :Router) { }

  ngOnInit(): void {
    this.help = new demandeaide();
  }
  photo ?: File;
  selectFile(event: any) {

    this.photo = event.target.files.item(0);
    console.log(event);
    console.log(this.photo)

  }
  Save(){
    //this.helpService.PostHelpbenif(this.help).subscribe();
    //console.warn(this.Save());
    //this.help=new demandeaide();
    //this.route.navigate(['/BackOffice/gestionaidesbenif'])
    if(this.photo !== undefined) {

      this.helpService.PostHelpbenif(this.help,this.photo).subscribe(value => {
        
        this.help=new demandeaide();
        this.route.navigate(['/BackOffice/gestionaidesbenif'])
      }, (error) => {
        console.log(error)
      });

    }

 }

}
