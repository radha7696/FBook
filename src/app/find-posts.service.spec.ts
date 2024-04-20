import { TestBed } from '@angular/core/testing';

import { FindPostsService } from './find-posts.service';

describe('FindPostsService', () => {
  let service: FindPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
