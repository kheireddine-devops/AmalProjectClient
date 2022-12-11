import { DeletePlaylistComponent } from './../delete-playlist/delete-playlist.component';
import { Router, ActivatedRoute } from '@angular/router';
import { GestionPlaylistsService } from './../../core/services/gestion-playlists.service';
import { UpdatePlaylistComponent } from './../update-playlist/update-playlist.component';
import { AddPlaylisteComponent } from './../add-playliste/add-playliste.component';
import { Component, OnInit } from '@angular/core';
import { playlist } from 'src/app/core/entities/playlist';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-gestion-playlist',
  templateUrl: './gestion-playlist.component.html',
  styleUrls: ['./gestion-playlist.component.css']
})
export class GestionPlaylistComponent implements OnInit {
  listePlaylist : playlist [] = [] ;
  playliste : playlist = new playlist();
  id: Number | undefined = undefined;
  constructor(public dialog: MatDialog,private GestionPlaylistsService :GestionPlaylistsService, private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.GestionPlaylistsService.getAllPlaylists().subscribe((playlists) => {
      this.listePlaylist=playlists;
    }, (error) => {

    });

  }
  onAddPlaylist( ){
    
    const dialogRef = this.dialog.open(AddPlaylisteComponent, {
      width: '800px',
 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });

  }
  
  onUpdatePlaylist(id: Number,p: playlist):void {

    console.log(p)
    
    const dialogRef = this.dialog.open(UpdatePlaylistComponent, {
      width: '800px',
      
      data: {
          id :id ,
           playlist :p
           }
      
 
    });

    console.log(playlist);
    dialogRef.afterClosed().subscribe(result => {
       this.ngOnInit();

    });
   
    

  }


  showPlaylist(id: Number,p: playlist):void{
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'] as Number;

     
 
    this.GestionPlaylistsService.getPlaylistsByID(id).subscribe((value) => {
      this.playliste=value;
    }, (error) => {

    });

      
  
});
  }


  removePlayliste(id: Number): void  {
   
    const dialogRef = this.dialog.open(DeletePlaylistComponent, {
      
      width: '800px',
      data: {
   
        
        id: id
      }
      
    });
  

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();

    });
 
  }


}
