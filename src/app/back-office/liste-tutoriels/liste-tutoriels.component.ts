import { video } from './../../core/video';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ViewChild } from '@angular/core';



declare var $:any;

@Component({
  selector: 'app-liste-tutoriels',
  templateUrl: './liste-tutoriels.component.html',
  styleUrls: ['./liste-tutoriels.component.css']
})
export class ListeTutorielsComponent implements OnInit {
  liste_tutoriels : video [ ]  = [ ] ;
  

  title = 'angular-videoplayer-app';
  playlist = [
    {
      title: 'Agent 327!',
      src: 'https://media.vimejs.com/720p.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Messi Goal',
      src: 'http://static.videogular.com/assets/videos/goal-2.mp4',
      type: 'video/mp4'
    }
  ];
 

  constructor(private http: HttpClient){}
  ngOnInit(): void {

    
  }

  @ViewChild('fileInput')
  fileInput : any;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    var files: { [key: string]: File } = this.fileInput.nativeElement.files;
      i :Number
   
    this.file = files[0];
   
    
  }



}
  
 


