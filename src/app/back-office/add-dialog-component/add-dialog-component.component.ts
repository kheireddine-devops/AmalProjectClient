import { Component, OnInit } from '@angular/core';
import { GestionFormationService } from '../../core/services/gestion-formation.service';
import { formation } from '../../core/entities/formation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dialog-component',
  templateUrl: './add-dialog-component.component.html',
  styleUrls: ['./add-dialog-component.component.css']
})
export class AddDialogComponentComponent implements OnInit {


  isPeriodValid = false;

  listeFormations : formation [] = [] ;
  compare:Boolean=false;

  Formation : formation = new formation();
  constructor(private formationService: GestionFormationService,private router: Router) { }
  ngOnInit(): void {
  }



sauvgarder(){
  console.log(this.Formation);
  this.formationService.addformation(this.Formation).subscribe((data)=>this.router.navigateByUrl('/Backoffice/ajouterFormation'));


}

compareDatesD() {
  console.log('compareDateD...');
  this.isPeriodValid = this.Formation.dateFin > this.Formation.date_debut;


  }


}

