import { HelpService } from '../../core/services/help.service';
import { Component, OnInit } from '@angular/core';
import { Help } from 'src/app/core/entities/Help';

@Component({
  selector: 'app-add-help',
  templateUrl: './add-help.component.html',
  styleUrls: ['./add-help.component.css']
})
export class AddHelpComponent implements OnInit {
  titre:string="Ajouter Demande Aide";
  help!:Help;
  alert:boolean=false;
  urlRegex!:RegExp;

  constructor(private helpService:HelpService) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.help = new Help();

  }
  Save(){
    this.help.dateHelp = new Date();
    this.help.idUser=3;
    this.helpService.PostHelp(this.help).subscribe();
    //console.warn(this.Save());
    this.alert=true;
    this.help=new Help();

 }

}
