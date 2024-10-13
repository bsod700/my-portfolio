import { TestBed } from '@angular/core/testing';

import { MoreProjectsConfigService } from './more-projects-config.service';

describe('MoreProjectsConfigService', () => {
  let service: MoreProjectsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreProjectsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
