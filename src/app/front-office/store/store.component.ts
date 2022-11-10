import { BoutiqueService } from '../../core/services/boutique.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { boutique } from 'src/Core/boutique';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  boutique:boutique[]=[];
  constructor(private  btq:BoutiqueService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.boutique = this.btq.getAll().filter(boutique => boutique.nomP.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
    else if(params['categorie'])
    this.boutique = this.btq.getAllboutiqueByCategorie(params['categorie'])
    else
    this.boutique = this.btq.getAll();
    } )

  }

   public Like(i:number): void {
    this.boutique[i].like= this.boutique[i].like +1 ;
  }
  // public dislike(i:number): void {
  //   this.boutique[i].dislike= this.boutique[i].dislike +1 ;
  // }
}
