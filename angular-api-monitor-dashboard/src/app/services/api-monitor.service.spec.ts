import { TestBed } from '@angular/core/testing';

import { ApiMonitorService } from './api-monitor.service';

describe('ApiMonitorService', () => {
  let service: ApiMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
