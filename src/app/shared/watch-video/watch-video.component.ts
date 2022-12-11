import {Component, Inject, OnInit} from '@angular/core';
import { playlist } from 'src/app/core/entities/playlist';
import { video } from 'src/app/core/entities/video';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {
  video : video= new video();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: Number, video: video}) { }

  ngOnInit(): void {
    this.video = this.data.video;
  }


}
