import { HelpService } from './../../shared/service/help.service';
import { Component, OnInit } from '@angular/core';
import { Help } from 'src/app/shared/model/Help';

@Component({
  selector: 'app-add-help',
  templateUrl: './add-help.component.html',
  styleUrls: ['./add-help.component.css']
})
export class AddHelpComponent implements OnInit {
  titre:string="Ajouter Demande Aide";
  help!:Help;

  constructor(private helpService:HelpService) { }

  ngOnInit(): void {
    this.help = new Help();
    
  }
  Save(){
    this.helpService.PostHelp(this.help).subscribe();
 }

}
