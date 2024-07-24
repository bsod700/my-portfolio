import { TestBed } from '@angular/core/testing';

import { BrushAlongConfigService } from './brushalong-config.service';

describe('BrushalongConfigService', () => {
  let service: BrushAlongConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrushAlongConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
