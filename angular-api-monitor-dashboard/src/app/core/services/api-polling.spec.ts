import { TestBed } from '@angular/core/testing';

import { ApiPolling } from './api-polling';

describe('ApiPolling', () => {
  let service: ApiPolling;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPolling);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
