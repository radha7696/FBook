import { TestBed } from '@angular/core/testing';

import { PhotosByIdService } from './photos-by-id.service';

describe('PhotosByIdService', () => {
  let service: PhotosByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
