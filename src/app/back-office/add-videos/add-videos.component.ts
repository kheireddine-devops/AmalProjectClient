import { GestionVideoService } from './../../core/services/gestion-video.service';
import { HttpClient } from '@angular/common/http';
import { video } from './../../core/entities/video';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatProgressBarModule }from '@angular/material/progress-bar'
import { Subscription, finalize } from 'rxjs';


@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.css']
})

export class   AddVideosComponent implements OnInit {

  Playlist : video [] = [] ;
  video : video = new video();


  format:any;
  url:any;

  @Input()
  requiredFileType:string='';

  fileName = '';
  uploadProgress:number=0;
  _video: File | undefined;
  // uploadSub:Subscription ;



  constructor(private gestionVideoService: GestionVideoService,private http: HttpClient ,public dialogRef: MatDialogRef<AddVideosComponent>,
     @Inject(MAT_DIALOG_DATA) public data: { id: Number } ) { }

     selectFile(event: any): void {
      this._video = event.target.files.item(0);
      console.log(this._video);
     }

    onFileSelected(event: any) {
      const file:File = event.target.files[0];

      if (file) {
          this.fileName = file.name;
          const formData = new FormData();
          formData.append("thumbnail", file);

          const upload$ = this.http.post("/api/thumbnail-upload", formData, {
              reportProgress: true,
              observe: 'events'
          })

          .pipe(
              finalize(() => this.reset())
          );

          // this.uploadSub = upload$.subscribe(event => {
          //   if (event.type == HttpEventType.UploadProgress) {
          //     this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          //   }
          // })
      }
  }

cancelUpload() {
  // this.uploadSub.unsubscribe();
  this.reset();
}

reset() {
  this.uploadProgress = 0;
  // this.uploadSub  ;

}
  ngOnInit(): void {

  }

  AddVideo(){

    if(this._video !== undefined) {

      console.log(this.video);

      this.video.id_playlist = this.data.id;

      this.gestionVideoService.addVideo(this.video,this._video).subscribe(success => {

      });

    }

  }

}
