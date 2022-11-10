import { boutique } from 'src/Core/boutique';
import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  boutique!:boutique;
  constructor(private  btq:BoutiqueService,private activatedRoute:ActivatedRoute,
    private BService: BoutiqueService){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.boutique = BService.getboutiqueById(params['id']);
      })
    }
   

  ngOnInit(): void {
    
  }
like(i:number){

}
}
