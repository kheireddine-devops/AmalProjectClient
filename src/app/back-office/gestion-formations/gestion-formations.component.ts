import { DeleteConfirmationComponent } from './../delete-confirmation/delete-confirmation.component';


import { GestionFormationService } from './../../core/services/gestion-formation.service';
import { formation } from './../../core/entities/formation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-gestion-formations',
  templateUrl: './gestion-formations.component.html',
  styleUrls: ['./gestion-formations.component.css']
})


export class GestionFormationsComponent implements OnInit {

  listeFormations : formation [] = [] ;
  compare:Boolean=false;

  Formation : formation = new formation();

  constructor(private formationService: GestionFormationService,
    private router: Router,boîte : MatDialog ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formationService.getAllFormations().subscribe((formations) => {
      this.listeFormations=formations;
    }, (error) => {

    });
  


  }


  addformation() {
    this.router.navigateByUrl(`/BackOffice/gestionFormation/addFormation`)

  }

   
  removeformation(id: Number): void  {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '800px',
      data: {
        id: id
      }
 
    })

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  modifierformation(id: Number) {

    this.router.navigateByUrl(`/BackOffice/gestionFormation/updateFormation/${id}`)

  }


}
