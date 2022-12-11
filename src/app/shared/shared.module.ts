import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    WatchVideoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotFoundComponent,
    WatchVideoComponent,
  ]
})
export class SharedModule { }
