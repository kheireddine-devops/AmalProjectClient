
import { boutique } from './boutique';

export class articleItem{
    constructor(boutique:boutique){
        this.boutique =boutique;
        this.prixP;
    }
   boutique:boutique;
    quantity:number =1;
    get prixP():Number{
       return this.boutique.prixP = this.quantity;
    }
    
}