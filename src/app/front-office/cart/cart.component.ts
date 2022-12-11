import { ReserverServiceService } from './../../core/services/reserver-service.service';
import { formation } from './../../core/entities/formation';
import { Component, OnInit } from '@angular/core';
import { GestionFormationService } from 'src/app/core/services/gestion-formation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listeFormations : formation [] = [] ;
  constructor(private formationService: GestionFormationService , private ReserverServiceService:ReserverServiceService) { }

  ngOnInit(): void {
 this.formationService.getAllFormations().subscribe((formations) => {
      this.listeFormations=formations;
    }, (error) => {

    });
  
     
    
    
    
  }
  
  
  }
 


