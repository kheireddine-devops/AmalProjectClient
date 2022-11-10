import { BoutiqueService } from './../../services/boutique.service';
import { categorie } from './../../../Core/categorie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:categorie[] =[];
  constructor(private btq:BoutiqueService) { }

  ngOnInit(): void {
    this.categories = this.btq.getAllCategorie();
  }

}
