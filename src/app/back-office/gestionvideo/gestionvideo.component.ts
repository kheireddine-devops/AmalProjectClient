import { DeleteVideoComponent } from './../delete-video/delete-video.component';

import { playlist } from './../../core/entities/playlist';
import { WatchVideoComponent } from '../../shared/watch-video/watch-video.component';
import { video } from './../../core/entities/video';
import { AddVideosComponent } from './../add-videos/add-videos.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { GestionPlaylistsService } from 'src/app/core/services/gestion-playlists.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gestionvideo',
  templateUrl: './gestionvideo.component.html',
  styleUrls: ['./gestionvideo.component.css']
})
export class GestionvideoComponent implements OnInit {
  video : video= new video();
  playliste : playlist = new playlist();
  id: Number = -1;

  constructor(private gestionPlaylistsService: GestionPlaylistsService,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'] as Number;

      this.gestionPlaylistsService.getPlaylistsByID(this.id).subscribe(value => {
        this.playliste = value;
        console.log(value)
      })

    });


  }


  removeVideo(id: Number)  {
    const dialogRef = this.dialog.open(DeleteVideoComponent, {
      width: '800px',
      data: {
        id: this.playliste.id_playlist
      }

    })

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }


  watch(id : Number, video: video)  {

    const dialogRef = this.dialog.open(WatchVideoComponent, {
      width: '800px',
      data: {
        id: id,
        video: video
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
  onAddVideo(){

    const dialogRef = this.dialog.open(AddVideosComponent, {
      width: '800px',
      data: {
        id : this.playliste.id_playlist
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


}
