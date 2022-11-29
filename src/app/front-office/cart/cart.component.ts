import { ReserverServiceService } from '../../core/services/reserver-service.service';
import { ReserverService } from '../../core/services/reserver.service';
import { formation } from '../../core/entities/formation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listeFormations : formation [] = [] ;
  constructor(private ReserverServiceService:ReserverServiceService) { }

  ngOnInit(): void {
    this.listeFormations=[
      {id_formation: 1, theme: "Bureautique", descriptif: "Formation pour renforcer les compethence en word",   date_debut:new Date('2017-05-03'), dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 2, theme: "Accompagniment", descriptif: "Formation pour améliorer  ",    date_debut:new Date('2017-05-03'),dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 3, theme: "Informatique", descriptif: "Formation pour renforcer les compethence en java",    date_debut:new Date('2017-05-03') ,dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 1, theme: "Informatique", descriptif: "Formation pour renforcer les compethence en html",   date_debut:new Date('2017-05-03'), dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 2, theme: "Accompagniment", descriptif: "Formation pour renforcer les compethence ",    date_debut:new Date('2017-05-03'),dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
      {id_formation: 3, theme: "Devellepement personelle", descriptif: "Formation pour renforcer les compethence en soft skils",    date_debut:new Date('2017-05-03') ,dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},]





  }


  }



