import { GestionPlaylistsService } from './../../core/services/gestion-playlists.service';
import { GestionPlaylistComponent } from './../gestion-playlist/gestion-playlist.component';
import { GestionFormationService } from './../../core/services/gestion-formation.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    private gestionFormationService: GestionFormationService) { }

  ngOnInit(): void {
  }

  onDeleteFormation() {
    this.gestionFormationService.deleteFormation(this.data.id).subscribe(value => {
      console.log(value)
    }, error => {
      console.log(error)
    });
  }



}
