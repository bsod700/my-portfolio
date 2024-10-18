import { TestBed } from '@angular/core/testing';

import { WebsiteLpsConfigService } from './website-lps-config.service';

describe('WebsiteLpsConfigService', () => {
  let service: WebsiteLpsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteLpsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
