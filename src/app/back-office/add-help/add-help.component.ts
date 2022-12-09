import { Router } from '@angular/router';
import { HelpService } from '../../core/services/help.service';
import { Component, OnInit } from '@angular/core';
import { demandeaide } from 'src/app/core/entities/Help';

@Component({
  selector: 'app-add-help',
  templateUrl: './add-help.component.html',
  styleUrls: ['./add-help.component.css']
})
export class AddHelpComponent implements OnInit {
  titre:string="Ajouter Demande Aide";
  help!:demandeaide;
  alert:boolean=false;
  urlRegex!:RegExp;

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
    if(this.photo !== undefined) {

      this.helpService.PostHelp(this.help,this.photo).subscribe(value => {
        this.alert=true;
        this.help=new demandeaide();
        this.route.navigate(['/BackOffice/gestionaides'])
      }, (error) => {
        console.log(error)
      });

    }
    
    //console.warn(this.Save());
   

 }

}
