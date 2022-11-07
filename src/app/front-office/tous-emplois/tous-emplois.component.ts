import { EmploiService } from './../../services/emploi.service';
import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/app/core/Emlpoi';

@Component({
  selector: 'app-tous-emplois',
  templateUrl: './tous-emplois.component.html',
  styleUrls: ['./tous-emplois.component.css']
})
export class TousEmploisComponent implements OnInit {
  tousEmplois: Emploi[]=[];
  constructor(private emploiService: EmploiService) { }
  ngOnInit(): void {
    this.emploiService.getEmploi().subscribe(()=> this.emploiService.getEmploi().subscribe((data)=>this.tousEmplois=data))
  }
}
