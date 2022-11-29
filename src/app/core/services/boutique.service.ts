import { boutique } from 'src/app/core/entities/boutique';
import { Injectable } from '@angular/core';
import { categorie } from 'src/app/core/entities/categorie';
import { sample } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor() { }
  getAllboutiqueByCategorie(categorie:string) : boutique[]{
    return categorie =="All"?
    this.getAll() :this.getAll().filter(boutique =>boutique.categorie?.includes(categorie));
  }
  getboutiqueById(id:number):boutique{
    return this.getAll().find(boutique => boutique.id ==id)!;
  }
/*
second method
 getAllboutiqueByCategorie(categorie:string) : boutique[]{
    if(categorie=='all')
    return this.getAll();
    else
    return this.getAll().filter(boutique =>boutique.categorie.includes(categorie));
  }
*/
getAllCategorie():categorie [] {
return[
  {name: 'All', count:5  },
  {name: 'Deco', count:2  },
  {name: 'food', count:2  },
  {name: 'artiste', count:1  },

];}
  getAll():boutique[]{
    return[
{
    id: 1,
    nomP: 'decor',
    prixP: 10,
    numVend: 20202020,
    descriptionP: 'made with love',
    picture: '/assets/img/boutique/Pr1.jpg',
    like:0,
    categorie:'Decoration' ,
  },
  {
    id:2,
    nomP: 'Capecake',
    prixP: 2,
    numVend: 10902020,
    descriptionP: 'made with love',
    picture: '/assets/img/boutique/Pr2.jpg',
    like:5,
    categorie:'food',
  },
  {
    id:3,
    nomP: 'setaccessoir',
    prixP: 2,
    numVend: 10902020,
    descriptionP: 'made with love',
    picture: '/assets/img/boutique/Pr3.jpg',
    like:0,
    categorie:'Decoration',
  },
  {
    id:4,
    nomP: 'tajine',
    prixP: 2,
    numVend: 10902020,
    descriptionP: 'made with love',
    picture: '/assets/img/boutique/Pr4.jpg',
    like:0,
    categorie:'food',
  },
  {
    id:5,
    nomP: 'Tableau',
    prixP: 15,
    numVend: 25413020,
    descriptionP: 'made with love & accessoire',
    picture: '/assets/img/boutique/Pr5.jpg',
    like:0,
    categorie:'artiste',
  }
  ];
  }
}

