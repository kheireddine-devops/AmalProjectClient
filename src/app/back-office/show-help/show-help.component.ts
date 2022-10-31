import { HelpService } from './../../shared/service/help.service';
import { Component, OnInit } from '@angular/core';
import { Help } from 'src/app/shared/model/Help';

@Component({
  selector: 'app-show-help',
  templateUrl: './show-help.component.html',
  styleUrls: ['./show-help.component.css']
})
export class ShowHelpComponent implements OnInit {
  listHelps :Help[]=[];
  title : string="Liste des Demandes d'aides";

  constructor(private helpservice:HelpService) { }

  ngOnInit(): void {
    this.helpservice.getHelps().subscribe((data:Help[])=>this.listHelps=data);
  }

}
