

import { GestionFormationService } from '../../core/services/gestion-formation.service';
import { formation } from '../../core/entities/formation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from  '@angular/material/dialog' ;



@Component({
  selector: 'app-gestion-formations',
  templateUrl: './gestion-formations.component.html',
  styleUrls: ['./gestion-formations.component.css']
})


export class GestionFormationsComponent implements OnInit {
  listeFormations : formation [] = [] ;
  compare:Boolean=false;

  Formation : formation = new formation();

  constructor(private formationService: GestionFormationService,private router: Router,boîte : MatDialog) { }

  ngOnInit(): void {

    this.listeFormations=[
     {id_formation: 1, theme: "Informatique", descriptif: "Formation pour renforcer les compethence en html",   date_debut:new Date('2017-05-03'), dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
     {id_formation: 2, theme: "Accompagniment", descriptif: "Formation pour renforcer les compethence ",    date_debut:new Date('2017-05-03'),dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},
     {id_formation: 3, theme: "Devellepement perso", descriptif: "Formation pour renforcer les compethence en soft skils",    date_debut:new Date('2017-05-03') ,dateFin: new Date('2017-05-03'),Nbr_jours:4,Nbr_personnes:5},]


  }


  addformation() {


  }

  removeformation() {

  }

  modifierformation() {

  }


}
