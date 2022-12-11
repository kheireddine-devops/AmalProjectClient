import { produit } from './../../core/entities/produit';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/core/services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-produit',
  templateUrl: './store-produit.component.html',
  styleUrls: ['./store-produit.component.css']
})
export class StoreProduitComponent implements OnInit {
listproduits:produit[]=[];
title : string = "Mes produits";
  constructor(private produitService:ProduitService,private router: Router) {}

  ngOnInit(): void {
    this.produitService.getproduit().subscribe((data:produit[])=>this.listproduits=data);
  }

  delete(id_produit:number){
    this.produitService.deleteProduct(id_produit).subscribe((value) => {
      this.ngOnInit();
    })
    
  }
  // update(id : number){
  //  let currentProduct =  this.listproduits.find((p) => {return  p.id_produit === id });
  // console.log(currentProduct);


  //   }
  }
     
  
  
  
  
  

  