import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { playlist } from 'src/app/core/entities/playlist';
import { GestionPlaylistsService } from 'src/app/core/services/gestion-playlists.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit {

  listePlaylist : playlist [] = [] ;
  playliste : playlist = new playlist();
  id: Number | undefined = undefined;
  constructor(public dialog: MatDialog,private GestionPlaylistsService :GestionPlaylistsService,
    private router: Router,private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.GestionPlaylistsService.getAllPlaylists().subscribe((playlists) => {
      this.listePlaylist=playlists;
    }, (error) => {

    });
  }
 

  showPlaylist(id: Number,p: playlist):void{
    this.router.navigateByUrl('/FrontOffice/formationEnLigne/PlaylistFormation')
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'] as Number;

    this.GestionPlaylistsService.getPlaylistsByID(id).subscribe((value) => {
      this.playliste=value;
    }, (error) => {

    });

      
  
});
  }
}
