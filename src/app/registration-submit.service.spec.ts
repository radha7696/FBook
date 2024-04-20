import { TestBed } from '@angular/core/testing';

import { RegistrationSubmitService } from './registration-submit.service';

describe('RegistrationSubmitService', () => {
  let service: RegistrationSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
