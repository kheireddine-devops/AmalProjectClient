import { Component, OnInit } from '@angular/core';
import { formation } from './../../core/entities/formation';

@Component({
  selector: 'app-reservation-confirmer',
  templateUrl: './reservation-confirmer.component.html',
  styleUrls: ['./reservation-confirmer.component.css']
})
export class ReservationConfirmerComponent implements OnInit {
  listeFormations : formation [] = [] ;

  constructor() { }

  ngOnInit(): void {
    this.listeFormations=[
      {id_formation: 1, theme: "Informatique", descriptif: "Formation pour renforcer les compethence en html",   date_debut:new Date('2017-05-03'), dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},

      {id_formation: 2, theme: "Accompagniment", descriptif: "Formation pour renforcer les compethence ",    date_debut:new Date('2017-05-03'),dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 3, theme: "Devellepement perso", descriptif: "Formation pour renforcer les compethence en soft skils",    date_debut:new Date('2017-05-03') ,dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},]

  }


  reserverPlace(i :number): void{
    this.listeFormations[i].Nbr_personnes= this.listeFormations[i].Nbr_personnes -1;

    
  }

}
