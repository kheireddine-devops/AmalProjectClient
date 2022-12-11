import { AvisService } from './../../core/services/avis.service';
import { avis } from './../../core/entities/avis';
import { produit } from './../../core/entities/produit';
import { ProduitService } from './../../core/services/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  Prod! : produit;
  avis! : avis;
  ListAvisProduit : avis[]=[];

  constructor(private  prd:ProduitService,private activatedRoute:ActivatedRoute, private avisService:AvisService){
      
    }


  ngOnInit(): void {

    const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");
     
    if(id !== null) {

      this.prd.getOneProduit(Number.parseInt(id + "")).subscribe(value => {
        this.Prod = value;
        console.log(value)
      });
    }
    this.avis = new avis();
    // this.avisService.getavisByidProduit().subscribe((data: avis[])=> this.ListAvisProduit=data
    // );
    

  
  }
  ajouter(){}
like(i:number){

}


}
