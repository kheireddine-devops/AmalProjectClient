import { GestionFormationService } from './../../core/services/gestion-formation.service';
import { formation } from './../../core/entities/formation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog} from  '@angular/material/dialog' ;

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  isPeriodValid = false;

  listeFormations : formation [] = [] ;
  compare:Boolean=false;
  _id: Number | undefined = undefined;
  Formation : formation = new formation();
  constructor(private formationService: GestionFormationService,private router: Router,private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this._id = params['id'] as Number;

      this.formationService.getFormationByID(this._id).subscribe(value => {
        this.Formation = value;
      }, error => {

      })

      
  
});
 
  }
 


sauvgarder(){
  if(this._id !== undefined) {
    this.formationService.editFormation(this.Formation,this._id).subscribe((data)=>{
      this.router.navigateByUrl('/BackOffice/gestionFormation')
    });
  }
}

compareDatesD() {
  console.log('compareDateD...');
  this.isPeriodValid = this.Formation.dateFin > this.Formation.date_debut;
  

  }


}
