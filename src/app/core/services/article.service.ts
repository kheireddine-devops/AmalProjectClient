import { articleItem } from '../../../Core/articleItem';
import { boutique } from 'src/Core/boutique';
import { article } from '../../../Core/article';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private Article:article = new article();

  addToarticle(boutique:boutique) :void {
    let articleItem = this.Article.items.find(item => item.boutique.id === boutique.id)
  if(articleItem){
    this.changeQuantity(boutique.id, articleItem.quantity +1)
    return;
  }
  this.Article.items.push(new articleItem(boutique));
  }
  deleteFromarticle(boutiqueId:number):void{
    this.Article.items = this.Article.items.filter(item =>item.boutique.id !=boutiqueId)
  }
  changeQuantity(quantity:number, boutiqueId : number){
    let articleItem = this.Article.items.find(item => item.boutique.id === boutiqueId);
    if(!articleItem) return ;
    articleItem.quantity = quantity;
  }
  getArticle():article{
    return  this.Article;
}
}
