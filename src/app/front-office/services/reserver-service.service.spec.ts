import { TestBed } from '@angular/core/testing';

import { ReserverServiceService } from './reserver-service.service';

describe('ReserverServiceService', () => {
  let service: ReserverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
