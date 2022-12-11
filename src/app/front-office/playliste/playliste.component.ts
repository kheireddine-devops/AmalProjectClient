import { ActivatedRoute, Route, Router } from '@angular/router';
import { AddVideosComponent } from './../../back-office/add-videos/add-videos.component';
import { WatchVideoComponent } from '../../shared/watch-video/watch-video.component';
import { Component, OnInit } from '@angular/core';
import { video } from './../../core/entities/video';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { playlist } from 'src/app/core/entities/playlist';
import { GestionPlaylistsService } from 'src/app/core/services/gestion-playlists.service';
import { id } from '@swimlane/ngx-charts';
declare var $:any;

@Component({
  selector: 'app-playliste',
  templateUrl: './playliste.component.html',
  styleUrls: ['./playliste.component.css']
})
export class PlaylisteComponent implements OnInit {
  

  
  video : video= new video();
  playliste : playlist = new playlist();

  constructor(private gestionPlaylistsService: GestionPlaylistsService,public dialog: MatDialog) { }



  ngOnInit(): void {

    this.gestionPlaylistsService.getPlaylistsByID(2).subscribe(value => {
      this.playliste = value;
    })

  }
  watch()  {

    const dialogRef = this.dialog.open(WatchVideoComponent, {
      width: '800px',
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
  onAddVideo(){

    const dialogRef = this.dialog.open(AddVideosComponent, {
      width: '800px',
      data: { Playlist : video    },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  removeVideo(){


  }
  
}
