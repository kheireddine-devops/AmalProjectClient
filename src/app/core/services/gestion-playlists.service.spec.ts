import { TestBed } from '@angular/core/testing';

import { GestionPlaylistsService } from './gestion-playlists.service';

describe('GestionPlaylistsService', () => {
  let service: GestionPlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPlaylistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
