import { playlist } from 'src/app/core/entities/playlist';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionPlaylistsService {

  constructor(private http: HttpClient) {}

  getAllPlaylists(): Observable<playlist[]> {

    return this.http.get<playlist[]>(`/api/playlists/`);

  }

  getPlaylistsByID(id: Number): Observable<playlist> {
    return this.http.get<playlist>(`/api/playlist/get/${id}`);
  }

  deletePlaylist(id: Number) {
    return this.http.delete(`/api/playlists/delete/${id}`);
  }

  addPlaylist(playlist : playlist): Observable<playlist> {

    console.log(playlist)

    return this.http.post<playlist>(`/api/playlists/add`, playlist);
  }

  editplaylist(playlist:playlist,id: Number): Observable<playlist> {

    return this.http.put<playlist>(`/api/playlists/edit/${id}`, playlist);

  }
}
