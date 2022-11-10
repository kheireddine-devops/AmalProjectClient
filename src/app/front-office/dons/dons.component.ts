import { Component, OnInit } from '@angular/core';
import { Dons } from '../../core/dons';
import { DonsService } from '../../core/services/dons.service';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.css']
})
export class DonsComponent implements OnInit {
  listDons : Dons[]=[];

  title :string = "Liste des dons";

  constructor(private donsService:DonsService) { }

  ngOnInit(): void {
    this.donsService.getDons().subscribe((data)=>this.listDons=data);
  }



}
