import { TestBed } from '@angular/core/testing';

import { GestionVideoService } from './gestion-video.service';

describe('GestionVideoService', () => {
  let service: GestionVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
