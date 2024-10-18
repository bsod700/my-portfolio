import { TestBed } from '@angular/core/testing';

import { EmailsBannersConfigService } from './emails-banners-config.service';

describe('EmailsBannersConfigService', () => {
  let service: EmailsBannersConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsBannersConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
