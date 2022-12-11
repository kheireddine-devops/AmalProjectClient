import { AvisService } from './../../core/services/avis.service';
import { Component, OnInit } from '@angular/core';
import { avis } from 'src/app/core/entities/avis';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestionavis',
  templateUrl: './gestionavis.component.html',
  styleUrls: ['./gestionavis.component.css']
})
export class GestionavisComponent implements OnInit {
  listavis:avis[]=[];
  avis! : avis;
  constructor(private avisService:AvisService,private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.avisService.getAllAvis().subscribe((data:avis[])=>this.listavis=data);
    console.log(this.listavis)
  }
  

  delete(id_avis:number){

    this.avisService.deleteavis(id_avis).subscribe((data)=>{
      this.ngOnInit();
      console.log(id_avis);
    });
}
}
