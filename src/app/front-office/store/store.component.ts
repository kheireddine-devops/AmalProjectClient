import { BoutiqueService } from '../../core/services/boutique.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { produit } from 'src/app/core/entities/produit';
import { ProduitService } from 'src/app/core/services/produit.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  listproduits:produit[]=[];
 // boutique:boutique[]=[];

  constructor(private produitService:ProduitService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   // this.route.params.subscribe(params =>{
      // if(params['searchItem'])
     // .filter(produit => produit.libelleP.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()))
      //this.listproduits = this.produitService.getproduit();
    //else if(params['categorie'])
    //this.boutique = this.btq.getAllboutiqueByCategorie(params['categorie'])
   // else
   // this.listproduits = this.produitService.getproduit();
  //  } )
  this.produitService.getproduit().subscribe((data:produit[])=>this.listproduits=data)
  
  }

  //  public Like(i:number): void {
  //   this.boutique[i].like= this.boutique[i].like +1 ;
  // }
  // public dislike(i:number): void {
  //   this.boutique[i].dislike= this.boutique[i].dislike +1 ;
  // }
//   selectprod(id:number){
// this.router.navigate(['/boutique/33']).then();
//}


}


