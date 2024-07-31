import { TestBed } from '@angular/core/testing';

import { PortfolioConfigService } from './portfolio-config.service';

describe('PortfolioConfigService', () => {
  let service: PortfolioConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
