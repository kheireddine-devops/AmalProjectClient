import { FormControl } from '@angular/forms';
import { GestionPlaylistsService } from './../../core/services/gestion-playlists.service';
import { Component, OnInit ,Inject,Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { playlist } from 'src/app/core/entities/playlist';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {
  id: Number  | undefined = undefined;
  listePlaylist : playlist [] = [] ;
  playlist : playlist = new playlist();
  isPeriodValid = false;


  constructor(public dialogRef: MatDialogRef<UpdatePlaylistComponent>,
    @Inject(MAT_DIALOG_DATA) public  data : {playlist :playlist , id: Number  } ,
    private playlistsService :GestionPlaylistsService,private router: Router
    ,private activatedRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.playlist = this.data.playlist;
  
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'] as Number;
 
      this.playlistsService.getPlaylistsByID(this.data.id).subscribe(value => {
     
        this.data.playlist = value;
      
        
      }, error => {

      })

      
  
});
 
  }
 
  updatePlayliste(){

  
      if(this.id !== undefined) {
 
        this.playlistsService.editplaylist(this.data.playlist,this.data.id).subscribe((data)=>{
          this.router.navigateByUrl('/BackOffice/gestionPlaylist ')
        });
      }
    

    
  }

  compareDates() {

    console.log('compareDate...');
    this.isPeriodValid = this.playlist.date_create !=  new Date(); 
    
  
    }
}
