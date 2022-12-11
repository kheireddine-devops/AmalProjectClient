

import { Component, OnInit, Inject } from '@angular/core';
import { GestionPlaylistsService } from './../../core/services/gestion-playlists.service';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-delete-playlist',
  templateUrl: './delete-playlist.component.html',
  styleUrls: ['./delete-playlist.component.css']
})
export class DeletePlaylistComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePlaylistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
   private GestionPlaylistsService : GestionPlaylistsService) { }


  ngOnInit(): void {
  }
  onDeletePlaylist() {
    this.GestionPlaylistsService.deletePlaylist(this.data.id).subscribe(value => {
      console.log(value)
    }, error => {
      console.log(error)
    });
  }

}
