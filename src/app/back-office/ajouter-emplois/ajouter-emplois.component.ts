import { Emploi } from './../../core/Emlpoi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-emplois',
  templateUrl: './ajouter-emplois.component.html',
  styleUrls: ['./ajouter-emplois.component.css']
})
export class AjouterEmploisComponent implements OnInit {
  currentDate:any =new Date(); //curent date
  emploi! : Emploi;
  constructor() { }

  ngOnInit(): void {
    this.emploi=new Emploi();
  }
  onSubmit(){
  }
}
