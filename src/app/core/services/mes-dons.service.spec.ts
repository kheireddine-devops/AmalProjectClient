import { TestBed } from '@angular/core/testing';

import { MesDonsService } from './mes-dons.service';

describe('MesDonsService', () => {
  let service: MesDonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesDonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
