import { video } from './../entities/video';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionVideoService {

  constructor(private http: HttpClient) {}

  getAllVideos(): Observable<video[]> {

    return this.http.get<video[]>(`/api/playlists/`);

  }

  getVideoByID(id: Number): Observable<video> {
    return this.http.get<video>(`/api/playlists/get/${id}`);
  }

  deleteVideo(id: Number) {
    return this.http.delete(`/api/playlists/video/delete/:${id}`);
  }

  addVideo(video : video, file: File): Observable<video> {

    const formData: FormData = new FormData();
    formData.append("v",file,"v");
    formData.append("video",JSON.stringify(video));

  

    return this.http.post<video>(`/api/playlists/uploadvideo`, formData);
  }

  editplaylist(video:video,id: Number): Observable<video> {

    return this.http.put<video>(`/api/playlists/edit/${id}`, video);

  }


}
