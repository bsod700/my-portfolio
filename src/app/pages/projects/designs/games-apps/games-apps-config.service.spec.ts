import { TestBed } from '@angular/core/testing';

import { GamesAppsConfigService } from './games-apps-config.service';

describe('GamesAppsConfigService', () => {
  let service: GamesAppsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesAppsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
