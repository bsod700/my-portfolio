import { TestBed } from '@angular/core/testing';

import { ManagementConfigService } from './management-config.service';

describe('ManagementConfigService', () => {
  let service: ManagementConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
