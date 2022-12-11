
import { playlist } from './../../core/entities/playlist';
import { GestionPlaylistsService } from './../../core/services/gestion-playlists.service';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';


import {formatDate} from '@angular/common';

@Component({
  selector: 'app-add-playliste',
  templateUrl: './add-playliste.component.html',
  styleUrls: ['./add-playliste.component.css']
})
export class AddPlaylisteComponent implements OnInit {
  listePlaylist : playlist [] = [] ;
  playlist : playlist = new playlist();
  isPeriodValid = false;
  
  date_create= new Date();
  
  constructor(public dialogRef: MatDialogRef<AddPlaylisteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {  },
    private playlistsService: GestionPlaylistsService,private router: Router) { 
  
    
    }



  ngOnInit(): void {

  }


  Addplayliste(){

    

  this.playlistsService.addPlaylist(this.playlist).subscribe(value => {
    this.router.navigateByUrl('/BackOffice/gestionPlaylist')
  }, error => {
    console.log(error)
  });

  }

  compareDates() {

    console.log('compareDate...');
    this.isPeriodValid = this.playlist.date_create !=  new Date(); 
    
  
    }
}
