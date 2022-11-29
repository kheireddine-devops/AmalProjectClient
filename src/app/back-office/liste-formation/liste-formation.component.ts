import { ReserverServiceService } from '../../core/services/reserver-service.service';
import { ReserverService } from '../../core/services/reserver.service';
import { formation } from '../../core/entities/formation';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css'],


})
export class ListeFormationComponent implements OnInit {
  listeFormations : formation [] = [] ;


  title :String ="LISTE DE FORMATIONS";
  THEME :String='';
  constructor(private ReserverServiceService :ReserverServiceService ) {

  }


  ngOnInit(): void {
    this.listeFormations=[
      {id_formation: 1, theme: "Informatique", descriptif: "Formation pour renforcer les compethence en html",   date_debut:new Date('2017-05-03'), dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},

      {id_formation: 2, theme: "Accompagniment", descriptif: "Formation pour renforcer les compethence ",    date_debut:new Date('2017-05-03'),dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 3, theme: "Devellepement perso", descriptif: "Formation pour renforcer les compethence en soft skils",    date_debut:new Date('2017-05-03') ,dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},]

  }
  reserver(i :number): void{
    this.listeFormations[i].Nbr_personnes= this.listeFormations[i].Nbr_personnes -1;


  }

}
