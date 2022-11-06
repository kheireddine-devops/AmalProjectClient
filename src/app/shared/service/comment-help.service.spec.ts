import { TestBed } from '@angular/core/testing';

import { CommentHelpService } from './comment-help.service';

describe('CommentHelpService', () => {
  let service: CommentHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
