import { TestBed } from '@angular/core/testing';

import { LogosMarketingConfigService } from './logos-marketing-config.service';

describe('LogosMarketingConfigService', () => {
  let service: LogosMarketingConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogosMarketingConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
