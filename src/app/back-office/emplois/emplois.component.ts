import { Router } from '@angular/router';
import { Emploi } from './../../core/Emlpoi';
import { EmploiService } from './../../services/emploi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css']
})
export class EmploisComponent implements OnInit {
  [x: string]: any;
  listEmplois: Emploi[]=[];
  constructor(private emploiService :EmploiService, private router :Router) { }

  ngOnInit(): void {
    this.emploiService.getEmploi().subscribe((data)=>this.listEmplois=data);
  }

  delete(e:Emploi) :void{
  this.emploiService.deleteEmploi(e.id).subscribe(()=> this.emploiService.getEmploi().subscribe((data)=>this.listEmplois=data));
  }

}
