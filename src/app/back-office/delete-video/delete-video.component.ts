import { GestionVideoService } from './../../core/services/gestion-video.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-delete-video',
  templateUrl: './delete-video.component.html',
  styleUrls: ['./delete-video.component.css']
})
export class DeleteVideoComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DeleteVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
   private GestionVideoService : GestionVideoService) { }

  ngOnInit(): void {
  }
  onDeletePlaylist() {
    this.GestionVideoService.deleteVideo(this.data.id).subscribe(value => {
      console.log(value)
    }, error => {
      console.log(error)
    });
  }
}
