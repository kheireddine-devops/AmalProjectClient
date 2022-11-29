import { articleItem } from "./articleItem";

export class article{
    items:articleItem[] = [];
    
    get totalPrixP(): number{
        let totalPrixP = 0;
        this.items.forEach(item =>  {
            totalPrixP =+ item.prixP ;
        });
        return totalPrixP;
    }



}