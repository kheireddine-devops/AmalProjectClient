import { Component, OnInit } from '@angular/core';
import { Dons } from '../../core/dons';
import { MesDonsService } from '../../core/services/mes-dons.service';

@Component({
  selector: 'app-gestion-dons',
  templateUrl: './gestion-dons.component.html',
  styleUrls: ['./gestion-dons.component.css']
})
export class GestionDonsComponent implements OnInit {

  listDon : Dons[]=[];
  title : string="Liste mes dons"

  constructor(private mesDonsService:MesDonsService) { }

  ngOnInit(): void {
    this.mesDonsService.getDons().subscribe((data)=>this.listDon=data);
  }

}
